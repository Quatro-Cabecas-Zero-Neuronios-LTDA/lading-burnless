import { useState } from 'react'
import Icon, { type IconName } from './Icon.tsx'
import Reveal from './Reveal.tsx'

const days = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']

type LineTab = {
  kind: 'line'
  label: string
  unit: string
  values: number[]
  min: number
  max: number
  ref: number
  refLabel: string
  /** true = acima da referência é ruim (estresse); false = abaixo é ruim (sono) */
  highIsBad: boolean
  summary: { label: string; value: string }[]
}

type BarTab = {
  kind: 'bars'
  label: string
  bars: { label: string; value: number; icon: IconName }[]
  summary: { label: string; value: string }[]
}

const tabs: Record<'sono' | 'estresse' | 'habitos', LineTab | BarTab> = {
  sono: {
    kind: 'line',
    label: 'Sono',
    unit: 'h',
    values: [7.2, 6.8, 6.1, 5.4, 5.1, 8.3, 7.6],
    min: 4,
    max: 9,
    ref: 7,
    refLabel: 'Meta 7h',
    highIsBad: false,
    summary: [
      { label: 'Média da semana', value: '6h37' },
      { label: 'Noites abaixo da meta', value: '3 de 7' },
    ],
  },
  estresse: {
    kind: 'line',
    label: 'Estresse',
    unit: '',
    values: [4, 5, 6, 7.5, 8, 5, 3.5],
    min: 0,
    max: 10,
    ref: 7,
    refLabel: 'Limite de alerta',
    highIsBad: true,
    summary: [
      { label: 'Pico da semana', value: '8 / 10' },
      { label: 'Dias em alerta', value: '2' },
    ],
  },
  habitos: {
    kind: 'bars',
    label: 'Hábitos',
    bars: [
      { label: 'Tela depois das 23h', value: 34, icon: 'phone' },
      { label: 'Cafeína depois das 16h', value: 27, icon: 'coffee' },
      { label: 'Horas seguidas de estudo', value: 21, icon: 'book' },
      { label: 'Horário de dormir irregular', value: 11, icon: 'clock' },
      { label: 'Pouco exercício', value: 7, icon: 'activity' },
    ],
    summary: [
      { label: 'Maior vilão do seu sono', value: 'Telas' },
      { label: 'Registros analisados', value: '42' },
    ],
  },
}

type TabKey = keyof typeof tabs

const W = 600
const H = 230
const PAD = { top: 20, right: 16, bottom: 34, left: 16 }

function LineChart({ tab }: { tab: LineTab }) {
  const innerW = W - PAD.left - PAD.right
  const innerH = H - PAD.top - PAD.bottom
  const x = (i: number) => PAD.left + (i / (tab.values.length - 1)) * innerW
  const y = (v: number) => PAD.top + (1 - (v - tab.min) / (tab.max - tab.min)) * innerH

  const pts = tab.values.map((v, i) => [x(i), y(v)] as const)
  const line = pts
    .map(([px, py], i) => {
      if (i === 0) return `M${px},${py}`
      const [qx, qy] = pts[i - 1]
      const cx = (qx + px) / 2
      return `C${cx},${qy} ${cx},${py} ${px},${py}`
    })
    .join(' ')
  const area = `${line} L${x(tab.values.length - 1)},${PAD.top + innerH} L${x(0)},${PAD.top + innerH} Z`
  const isBad = (v: number) => (tab.highIsBad ? v > tab.ref : v < tab.ref)

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={`Gráfico de ${tab.label} da semana`}>
      <defs>
        <linearGradient id={`fill-${tab.label}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#566a59" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#566a59" stopOpacity="0" />
        </linearGradient>
      </defs>

      <line
        x1={PAD.left}
        x2={W - PAD.right}
        y1={y(tab.ref)}
        y2={y(tab.ref)}
        stroke="#c98a2b"
        strokeWidth="1.5"
        strokeDasharray="6 6"
      />
      <text x={W - PAD.right} y={y(tab.ref) + 18} textAnchor="end" fontSize="12" fill="#c98a2b" fontWeight="600">
        {tab.refLabel}
      </text>

      <path d={area} fill={`url(#fill-${tab.label})`} />
      <path d={line} fill="none" stroke="#283c2c" strokeWidth="3" strokeLinecap="round" />

      {pts.map(([px, py], i) => (
        <g key={i}>
          <circle
            cx={px}
            cy={py}
            r="6"
            fill={isBad(tab.values[i]) ? '#c98a2b' : '#283c2c'}
            stroke="#fff"
            strokeWidth="2.5"
          >
            <title>{`${days[i]}: ${tab.values[i]}${tab.unit}`}</title>
          </circle>
          <text x={px} y={H - 10} textAnchor="middle" fontSize="12" fill="#4d5c50">
            {days[i]}
          </text>
        </g>
      ))}
    </svg>
  )
}

function Bars({ tab }: { tab: BarTab }) {
  const max = Math.max(...tab.bars.map((b) => b.value))
  return (
    <div className="space-y-4 py-2">
      <p className="text-sm text-muted">Quanto cada hábito pesa na qualidade do seu sono</p>
      {tab.bars.map((b, i) => (
        <div key={b.label} className="flex items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-sage-100 text-secondary">
            <Icon name={b.icon} className="h-4 w-4" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex justify-between gap-2 text-sm">
              <span className="truncate font-medium text-ink">{b.label}</span>
              <span className="font-semibold text-primary">{b.value}%</span>
            </div>
            <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-sage-100">
              <div
                className={`h-full rounded-full ${i === 0 ? 'bg-primary' : 'bg-secondary'}`}
                style={{ width: `${(b.value / max) * 100}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const history = [
  { day: 'Hoje', text: 'Check-in feito · humor 3/5', icon: 'check' as IconName },
  { day: 'Ontem', text: 'Nota no diário · "semana de provas"', icon: 'pencil' as IconName },
  { day: 'Sex', text: 'Alerta de sobrecarga emitido', icon: 'alert' as IconName },
  { day: 'Qui', text: 'Meta de sono cumprida', icon: 'moon' as IconName },
]

export default function DashboardPreview() {
  const [active, setActive] = useState<TabKey>('sono')
  const tab = tabs[active]

  return (
    <section id="dashboard" className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Dashboard interativo</span>
          <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">Veja sua evolução, dia após dia.</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Todo registro vira histórico. Acompanhe sono, estresse e hábitos em gráficos claros e entenda o que está
            funcionando. Experimente as abas abaixo.
          </p>
        </Reveal>

        <Reveal className="mt-14 overflow-hidden rounded-[2rem] bg-primary p-2 shadow-2xl shadow-primary/25 sm:p-3">
          <div className="grid gap-2 sm:gap-3 lg:grid-cols-[1fr_300px]">
            {/* Painel principal */}
            <div className="rounded-3xl bg-white p-5 sm:p-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-medium tracking-wide text-muted uppercase">Últimos 7 dias</p>
                  <p className="mt-1 font-display text-2xl font-semibold text-primary">{tab.label}</p>
                </div>
                <div role="tablist" aria-label="Métricas" className="inline-flex rounded-full bg-sage-100 p-1">
                  {(Object.keys(tabs) as TabKey[]).map((key) => (
                    <button
                      key={key}
                      role="tab"
                      type="button"
                      aria-selected={active === key}
                      onClick={() => setActive(key)}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                        active === key ? 'bg-primary text-white shadow' : 'text-secondary hover:text-primary'
                      }`}
                    >
                      {tabs[key].label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6" role="tabpanel">
                {tab.kind === 'line' ? <LineChart tab={tab} /> : <Bars tab={tab} />}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {tab.summary.map((s) => (
                  <div key={s.label} className="rounded-2xl bg-sage-50 p-4">
                    <p className="text-xs text-muted">{s.label}</p>
                    <p className="mt-1 font-display text-xl font-semibold text-primary">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Lateral */}
            <div className="flex flex-col gap-2 sm:gap-3">
              <div className="rounded-3xl bg-alert-soft p-6">
                <div className="flex items-center gap-2 text-alert">
                  <Icon name="alert" />
                  <p className="text-sm font-semibold">Alerta de sobrecarga</p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink">
                  Seu estresse ficou acima de 7 por dois dias seguidos. Sugestão: reduza o estudo noturno e faça uma
                  pausa de 15 min a cada hora.
                </p>
              </div>

              <div className="flex-1 rounded-3xl bg-white p-6">
                <p className="text-sm font-semibold text-primary">Histórico</p>
                <ul className="mt-4 space-y-4">
                  {history.map((h) => (
                    <li key={h.day + h.text} className="flex gap-3">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sage-100 text-secondary">
                        <Icon name={h.icon} className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-secondary">{h.day}</p>
                        <p className="text-sm text-ink">{h.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
        <p className="mt-4 text-center text-xs text-muted">Dados ilustrativos.</p>
      </div>
    </section>
  )
}
