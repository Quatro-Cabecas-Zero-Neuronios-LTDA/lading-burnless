import Icon from './Icon.tsx'
import SproutIcon from './SproutIcon.tsx'

const week = [
  { d: 'S', v: 38 },
  { d: 'T', v: 46 },
  { d: 'Q', v: 52 },
  { d: 'Q', v: 64 },
  { d: 'S', v: 71 },
  { d: 'S', v: 58 },
  { d: 'D', v: 44 },
]

function HeroMock() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* Cartão principal: nível de sobrecarga */}
      <div className="rounded-3xl bg-white p-6 text-ink shadow-2xl shadow-black/30">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-muted">Seu nível de sobrecarga</p>
            <p className="mt-1 font-display text-3xl font-semibold text-primary">
              Moderado <span className="text-base font-medium text-alert">↑ 12%</span>
            </p>
          </div>
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-sage-100 text-primary">
            <Icon name="activity" />
          </span>
        </div>

        <div className="mt-6 flex h-32 items-end justify-between gap-2" aria-hidden="true">
          {week.map((w, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-2">
              <div
                className={`w-full rounded-lg ${w.v > 60 ? 'bg-alert' : 'bg-secondary'}`}
                style={{ height: `${w.v * 1.5}px` }}
              />
              <span className="text-[11px] font-medium text-muted">{w.d}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-2xl bg-alert-soft p-4">
          <Icon name="alert" className="mt-0.5 h-5 w-5 shrink-0 text-alert" />
          <p className="text-sm leading-relaxed text-ink">
            <strong className="font-semibold">Quinta e sexta passaram do limite.</strong> Você dormiu menos de 6h e
            estudou mais de 9h nesses dias.
          </p>
        </div>
      </div>

      {/* Bolha do conselheiro */}
      <div className="relative -mt-6 ml-6 rounded-3xl bg-sage-100 p-5 text-ink shadow-xl shadow-black/20 sm:ml-16 lg:-mr-6">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-white">
            <SproutIcon className="h-4 w-auto" />
          </span>
          <p className="text-sm font-semibold text-primary">Conselheiro Burnless</p>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Que tal blocos de 50 min com 10 min de pausa amanhã? E deixar o celular fora do quarto depois das 23h. Isso
          deve ajudar no seu sono.
        </p>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-primary pt-28 pb-20 text-white sm:pt-36 lg:pb-28">
      {/* Brilho de fundo */}
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-secondary/40 blur-3xl"
        aria-hidden="true"
      />
      <SproutIcon className="pointer-events-none absolute -bottom-24 -left-16 h-96 w-auto text-white/[0.04]" />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 ring-1 ring-white/15">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary-light" />
            HackBrasil 2026 · Trilha Saúde &amp; Bem-estar
          </span>

          <h1 className="mt-6 text-4xl leading-[1.05] font-semibold sm:text-5xl lg:text-6xl">
            Cuide da sua mente antes que o burnout chegue.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            O <strong className="font-semibold text-white">Burnless</strong> acompanha seu sono, seus hábitos e sua rotina
            de estudos. A IA percebe quando você está entrando em sobrecarga e sugere o que mudar, antes que vire um
            problema.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#comecar" className="btn-light">
              Quero testar o Burnless
              <Icon name="arrow" className="h-4 w-4" />
            </a>
            <a href="#funcionalidades" className="btn-ghost-light">
              Ver funcionalidades
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
            {['Feito para estudantes', 'Sugestões personalizadas', 'Não substitui um profissional'].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-secondary-light" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <HeroMock />
      </div>
    </section>
  )
}
