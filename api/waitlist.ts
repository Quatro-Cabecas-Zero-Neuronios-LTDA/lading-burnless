import { Redis } from '@upstash/redis'
import { Ratelimit } from '@upstash/ratelimit'

// Lê KV_REST_API_URL / KV_REST_API_TOKEN (criadas pela integração na Vercel)
const redis = Redis.fromEnv()
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, '10 m'), // 5 tentativas a cada 10 min por IP
  prefix: 'rl:waitlist',
})
// Teto global: segura ataque espalhado em muitos IPs (protege a lista e a cota do Upstash)
const globalLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(300, '1 h'),
  prefix: 'rl:waitlist-global',
})

// Só caracteres seguros: bloqueia <script>, aspas e fórmulas de planilha (=, +, -, @ no início)
const EMAIL = /^[a-z0-9][a-z0-9._%+-]*@[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,}$/
const json = (status: number, body: object) => Response.json(body, { status })

export async function POST(request: Request) {
  // Só aceita chamadas vindas do próprio site (antes do Redis, para não gastar comandos)
  const origin = request.headers.get('origin')?.replace(/^https?:\/\//, '')
  if (!origin || origin !== request.headers.get('host')) return json(403, { error: 'forbidden' })

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown'
  if (!(await ratelimit.limit(ip)).success) return json(429, { error: 'too_many_requests' })
  if (!(await globalLimit.limit('all')).success) return json(429, { error: 'too_many_requests' })

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return json(400, { error: 'invalid_body' })
  }
  const { email, website } = (body ?? {}) as { email?: unknown; website?: unknown }

  // Honeypot: humano não vê esse campo; bot preenche e recebe um "ok" falso
  if (website) return json(200, { ok: true })

  if (typeof email !== 'string') return json(400, { error: 'invalid_email' })
  const clean = email.trim().toLowerCase()
  if (clean.length > 254 || !EMAIL.test(clean)) return json(400, { error: 'invalid_email' })

  // Sorted set: guarda a data do cadastro (score) e ignora duplicados
  await redis.zadd('waitlist', { nx: true }, { score: Date.now(), member: clean })
  // Mesma resposta para e-mail novo ou repetido: não revela quem já está na lista
  return json(200, { ok: true })
}
