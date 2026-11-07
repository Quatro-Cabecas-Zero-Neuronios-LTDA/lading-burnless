import { useId, useState, type FormEvent } from 'react'
import Icon from './Icon.tsx'

type Props = { dark?: boolean; className?: string }

/**
 * Captura de e-mail para a lista de espera.
 * TODO: conectar a um serviço (Formspree, Google Forms, Supabase...).
 * Por enquanto só mostra a confirmação na tela e não envia nada.
 */
export default function WaitlistForm({ dark, className = '' }: Props) {
  const [sent, setSent] = useState(false)
  const id = useId()

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
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
    <form
      onSubmit={onSubmit}
      className={`flex w-full max-w-md items-center gap-2 rounded-full p-1.5 ${
        dark ? 'bg-white/10 ring-1 ring-white/20' : 'card-shadow bg-white ring-1 ring-sage-200'
      } ${className}`}
    >
      <label htmlFor={id} className="sr-only">
        Seu e-mail
      </label>
      <input
        id={id}
        type="email"
        required
        placeholder="Digite seu melhor e-mail"
        className={`min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm outline-none ${
          dark ? 'text-white placeholder:text-white/50' : 'text-ink placeholder:text-muted/70'
        }`}
      />
      <button
        type="submit"
        className={`btn shrink-0 px-5 py-2.5 ${
          dark ? 'bg-white text-primary hover:bg-sage-100' : 'bg-primary text-white hover:bg-secondary'
        }`}
      >
        Quero testar
      </button>
    </form>
  )
}
