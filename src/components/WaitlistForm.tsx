import { useId, useState, type FormEvent } from 'react'
import Icon from './Icon.tsx'

type Props = { dark?: boolean; className?: string }

/** Captura de e-mail para a lista de espera. Envia para /api/waitlist (Upstash Redis). */
export default function WaitlistForm({ dark, className = '' }: Props) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle')
  const id = useId()

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    setStatus('loading')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: data.get('email'), website: data.get('website') }),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <p
        className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium ${
          dark ? 'bg-white/10 text-white ring-1 ring-white/20' : 'bg-mint text-primary'
        } ${className}`}
        role="status"
      >
        <Icon name="check" className="h-4 w-4" />
        Pronto! Você está na lista de espera do Burnless.
      </p>
    )
  }

  return (
    <div className={`w-full max-w-md ${className}`}>
    <form
      onSubmit={onSubmit}
      className={`relative flex w-full items-center gap-2 rounded-full p-1.5 ${
        dark ? 'bg-white/10 ring-1 ring-white/20' : 'card-shadow bg-white ring-1 ring-sage-200'
      }`}
    >
      <label htmlFor={id} className="sr-only">
        Seu e-mail
      </label>
      {/* Honeypot: invisível para pessoas, bots costumam preencher */}
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-px w-px opacity-0"
      />
      <input
        id={id}
        name="email"
        type="email"
        required
        maxLength={254}
        placeholder="Digite seu melhor e-mail"
        className={`min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm outline-none ${
          dark ? 'text-white placeholder:text-white/50' : 'text-ink placeholder:text-muted/70'
        }`}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className={`btn shrink-0 px-5 py-2.5 disabled:opacity-60 ${
          dark ? 'bg-white text-primary hover:bg-sage-100' : 'bg-primary text-white hover:bg-secondary'
        }`}
      >
        {status === 'loading' ? 'Enviando…' : 'Quero testar'}
      </button>
    </form>
    {status === 'error' && (
      <p role="alert" className={`mt-3 px-4 text-sm ${dark ? 'text-white/80' : 'text-red-600'}`}>
        Não foi possível entrar na lista. Tente de novo em instantes.
      </p>
    )}
    <p className={`mt-3 px-4 text-xs leading-relaxed ${dark ? 'text-white/60' : 'text-muted'}`}>
      Usamos seu e-mail só para avisar sobre o lançamento do Burnless. Sem spam, e você pode pedir
      para sair da lista quando quiser.
    </p>
    </div>
  )
}
