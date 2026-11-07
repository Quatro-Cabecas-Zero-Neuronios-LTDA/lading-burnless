import Icon, { type IconName } from './Icon.tsx'
import Reveal from './Reveal.tsx'

type Feature = {
  icon: IconName
  tag: string
  title: string
  text: string
  points: string[]
}

const features: Feature[] = [
  {
    icon: 'flame',
    tag: 'Prevenção',
    title: 'Detector de burnout',
    text: 'Um questionário rápido e periódico, somado aos seus hábitos de estudo e sono, gera um alerta de sobrecarga antes do esgotamento.',
    points: ['Check-ins de 1 minuto', 'Alerta de sobrecarga em tempo real', 'Sugestões de pausas e organização'],
  },
  {
    icon: 'moon',
    tag: 'Sono',
    title: 'Coach de sono',
    text: 'Registre horários, cafeína, tempo de tela e exercício. O Burnless mostra quais hábitos mais afetam o seu sono, não o de uma pessoa média.',
    points: ['Ranking dos hábitos que mais pesam', 'Metas simples e possíveis', 'Evolução semana a semana'],
  },
  {
    icon: 'pencil',
    tag: 'Diário',
    title: 'Notas + Conselheiro',
    text: 'Escreva como foi o seu dia. O conselheiro lê suas notas e sugere ajustes na rotina e, quando for o caso, caminhos para buscar ajuda.',
    points: ['Diário livre, no seu tempo', 'Sugestões práticas e acolhedoras', 'Indica quando procurar apoio'],
  },
  {
    icon: 'compass',
    tag: 'Encaminhamento',
    title: 'Triagem de encaminhamento',
    text: 'Um chat conversa sobre seus sintomas e indica o serviço adequado: UBS, UPA, emergência ou teleconsulta. Não faz diagnóstico.',
    points: ['Inspirado no Protocolo de Manchester', 'Regras de segurança em cada resposta', 'Sempre lembra: não substitui um profissional'],
  },
]

export default function Features() {
  return (
    <section id="funcionalidades" className="bg-sage-50 py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Funcionalidades</span>
          <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
            Quatro ferramentas, um só objetivo: você bem.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Tudo conectado num mesmo app. O que você registra no diário ajuda o coach de sono, e o coach de sono ajuda o
            detector de burnout.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              as="article"
              delay={(i % 2) * 100}
              className="group flex flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-sage-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-white transition group-hover:bg-secondary">
                  <Icon name={f.icon} className="h-7 w-7" />
                </span>
                <span className="rounded-full bg-sage-100 px-3 py-1 text-xs font-semibold text-secondary">{f.tag}</span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-primary">{f.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{f.text}</p>
              <ul className="mt-6 space-y-2.5 border-t border-sage-200 pt-6">
                {f.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-ink">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
