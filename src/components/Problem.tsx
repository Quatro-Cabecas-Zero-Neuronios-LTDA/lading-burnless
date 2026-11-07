import Icon, { type IconName } from './Icon.tsx'
import Reveal from './Reveal.tsx'

const pains: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'book',
    title: 'Rotina que não para',
    text: 'Provas, trabalhos, estágio e prazos se acumulam. O cansaço vira normal e ninguém percebe quando passou do ponto.',
  },
  {
    icon: 'moon',
    title: 'Sono que não descansa',
    text: 'Café à noite, tela até tarde e horários irregulares. Você sabe que dorme mal, mas não sabe o que está atrapalhando.',
  },
  {
    icon: 'compass',
    title: 'Sem saber onde buscar ajuda',
    text: 'Quando os sintomas aparecem, surge a dúvida: é caso de UBS, UPA, teleconsulta ou emergência?',
  },
]

export default function Problem() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">O problema</span>
          <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
            O burnout não chega de uma vez. Ele vai se acumulando aos poucos.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Os sinais aparecem no seu sono, nos seus hábitos e no seu humor muito antes do esgotamento. O difícil é
            enxergar esses sinais no meio da correria.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pains.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} className="rounded-3xl border border-sage-200 bg-sage-50 p-7">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-secondary shadow-sm">
                <Icon name={p.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-primary">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
