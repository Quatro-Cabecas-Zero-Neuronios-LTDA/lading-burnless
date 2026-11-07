import { useState, type FormEvent } from 'react'
import Icon from './Icon.tsx'
import SproutIcon from './SproutIcon.tsx'
import Reveal from './Reveal.tsx'

export default function CTA() {
  const [sent, setSent] = useState(false)

  // TODO: conectar a um serviço de lista de espera (Formspree, Google Forms, Supabase...).
  // Por enquanto o formulário só mostra a confirmação na tela e não envia nada.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="comecar" className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-16 text-center text-white sm:px-12 sm:py-20">
          <SproutIcon className="pointer-events-none absolute -top-10 -right-10 h-72 w-auto text-white/[0.05]" />
          <div
            className="pointer-events-none absolute -bottom-32 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-secondary/50 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-semibold sm:text-5xl">Comece a cuidar de você hoje.</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75">
              Entre na lista de espera e seja um dos primeiros a testar o Burnless.
            </p>

            {sent ? (
              <p className="mx-auto mt-10 inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 font-medium ring-1 ring-white/20">
                <Icon name="check" className="h-5 w-5 text-secondary-light" />
                Pronto! Avisaremos você assim que o Burnless estiver disponível.
              </p>
            ) : (
              <form onSubmit={onSubmit} className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
                <label htmlFor="email" className="sr-only">
                  Seu e-mail
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="seu@email.com"
                  className="min-w-0 flex-1 rounded-full bg-white px-5 py-3 text-ink placeholder:text-muted/70 focus:outline-2 focus:outline-offset-2 focus:outline-secondary-light"
                />
                <button type="submit" className="btn bg-secondary text-white hover:bg-secondary-light">
                  Quero testar
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
