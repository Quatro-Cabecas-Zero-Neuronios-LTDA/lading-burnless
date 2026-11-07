import Reveal from './Reveal.tsx'
import SectionHeading from './SectionHeading.tsx'

type Story = { name: string; role: string; initials: string; color: string; text: string; tag: string }

const stories: Story[] = [
  {
    name: 'Ana, 22',
    role: 'Medicina · 4º ano',
    initials: 'AN',
    color: 'bg-primary text-white',
    text: 'Entre plantões e provas, Ana dormia menos de 6h sem perceber. O detector juntou três noites curtas e nove horas de estudo por dia e emitiu um alerta antes da semana de provas.',
    tag: 'Detector de burnout',
  },
  {
    name: 'Pedro, 19',
    role: 'Engenharia · 1º período',
    initials: 'PE',
    color: 'bg-mint text-primary',
    text: 'Pedro achava que o café não atrapalhava. O coach de sono mostrou que a cafeína depois das 16h era o hábito que mais pesava nas noites dele. Hoje o último café é às 15h.',
    tag: 'Coach de sono',
  },
  {
    name: 'Júlia, 17',
    role: 'Vestibulanda',
    initials: 'JU',
    color: 'bg-alert-soft text-alert',
    text: 'Júlia escreve no diário quase toda noite. Quando as notas ficaram mais pesadas, o conselheiro sugeriu pausas, uma rotina de sono mais regular e conversar com alguém de confiança.',
    tag: 'Notas + Conselheiro',
  },
  {
    name: 'Rafael, 24',
    role: 'Mestrado em Biologia',
    initials: 'RA',
    color: 'bg-secondary text-white',
    text: 'Com febre alta e dor de cabeça forte, Rafael não sabia para onde ir. A triagem fez perguntas, sugeriu procurar uma UPA e deixou claro que não substitui um médico.',
    tag: 'Triagem',
  },
  {
    name: 'Camila, 21',
    role: 'Direito + estágio',
    initials: 'CA',
    color: 'bg-sage-200 text-primary',
    text: 'Estágio de manhã, aula à noite. O dashboard mostrou que as semanas com exercício tinham menos estresse, e Camila voltou a caminhar duas vezes por semana.',
    tag: 'Dashboard',
  },
  {
    name: 'Bruno, 26',
    role: 'Concurseiro',
    initials: 'BR',
    color: 'bg-primary-deep text-white',
    text: 'Dez horas de estudo todos os dias, sem folga. O Burnless sugeriu blocos de 50 minutos e um dia de descanso por semana, e o nível de sobrecarga dele caiu ao longo do mês.',
    tag: 'Detector de burnout',
  },
]

export default function Stories() {
  return (
    <section id="para-quem" className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading eyebrow="Para quem é" title="Feito para a rotina real" accent="de quem estuda">
          Universitários, vestibulandos, concurseiros e pós-graduandos. Veja como o Burnless entra no dia a dia de cada um.
        </SectionHeading>

        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {stories.map((s, i) => (
            <Reveal
              key={s.name}
              delay={(i % 3) * 90}
              as="article"
              className="card-shadow mb-5 break-inside-avoid rounded-3xl bg-white p-6 ring-1 ring-sage-200/70"
            >
              <div className="flex items-center gap-3">
                <span className={`grid h-11 w-11 place-items-center rounded-full text-sm font-semibold ${s.color}`}>
                  {s.initials}
                </span>
                <div>
                  <p className="font-semibold text-ink">{s.name}</p>
                  <p className="text-xs text-muted">{s.role}</p>
                </div>
              </div>
              <p className="mt-4 leading-relaxed text-muted">{s.text}</p>
              <span className="mt-5 inline-flex rounded-full bg-sage-50 px-3 py-1 text-xs font-semibold text-secondary ring-1 ring-sage-200">
                {s.tag}
              </span>
            </Reveal>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-muted">
          Personas ilustrativas: mostram como o Burnless funciona no dia a dia.
        </p>
      </div>
    </section>
  )
}
