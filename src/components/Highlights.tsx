import Icon, { type IconName } from './Icon.tsx'
import Reveal from './Reveal.tsx'

const items: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'clock',
    title: 'Check-in em 1 minuto',
    text: 'Responda poucas perguntas sobre sono, energia e estudos. Sem formulários longos.',
  },
  {
    icon: 'bell',
    title: 'Alerta antes do esgotamento',
    text: 'A IA percebe padrões de sobrecarga e avisa enquanto ainda dá tempo de ajustar a rotina.',
  },
  {
    icon: 'target',
    title: 'Sugestões que cabem na rotina',
    text: 'Pausas, horários e hábitos pensados para a sua semana, não conselhos genéricos.',
  },
]

export default function Highlights() {
  return (
    <section className="relative z-10 -mt-28 pb-8">
      <div className="container-page">
        <Reveal className="card-shadow rounded-[2rem] bg-white p-8 ring-1 ring-sage-200/70 sm:p-12">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] text-muted uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Por que Burnless
              </span>
              <h2 className="mt-4 text-3xl leading-[1.1] font-medium text-ink sm:text-[2.6rem]">
                Bem-estar essencial <span className="text-gradient">para quem estuda</span>
              </h2>
            </div>
            <p className="max-w-md leading-relaxed text-muted lg:justify-self-end">
              Entenda como seu sono, seus hábitos e sua carga de estudos se conectam, e receba ajuda antes que o cansaço
              vire esgotamento.
            </p>
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {items.map((it, i) => (
              <Reveal key={it.title} delay={i * 100}>
                <span className="grid h-12 w-12 place-items-center rounded-2xl text-primary ring-[1.5px] ring-primary/80">
                  <Icon name={it.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">{it.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{it.text}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
