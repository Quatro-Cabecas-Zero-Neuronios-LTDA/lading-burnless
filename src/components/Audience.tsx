import Icon, { type IconName } from './Icon.tsx'
import Reveal from './Reveal.tsx'

const groups: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'cap',
    title: 'Universitários',
    text: 'Semestres puxados, estágio e TCC. O Burnless ajuda a equilibrar entregas e descanso sem abrir mão da saúde.',
  },
  {
    icon: 'book',
    title: 'Vestibulandos e concurseiros',
    text: 'Meses de estudo intenso pedem constância. Aprenda a estudar muito sem se esgotar no meio do caminho.',
  },
  {
    icon: 'chart',
    title: 'Pós-graduandos',
    text: 'Pesquisa, prazos e pressão por resultados. Acompanhe os sinais de sobrecarga antes que virem crise.',
  },
  {
    icon: 'users',
    title: 'Quem cuida de estudantes',
    text: 'Escolas, universidades e coletivos que querem oferecer uma ferramenta de bem-estar acessível aos alunos.',
  },
]

export default function Audience() {
  return (
    <section id="para-quem" className="bg-sage-50 py-20 sm:py-28">
      <div className="container-page grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <span className="eyebrow">Para quem é</span>
          <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
            Feito para quem estuda e quer continuar bem até o fim.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            O Burnless foi pensado para a realidade do estudante brasileiro: rotina corrida, pouco tempo e, muitas vezes,
            dúvida sobre onde buscar atendimento no SUS ou na rede privada.
          </p>
          <a href="#comecar" className="btn-primary mt-8">
            Quero testar
            <Icon name="arrow" className="h-4 w-4" />
          </a>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 80} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-sage-200">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary text-white">
                <Icon name={g.icon} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-primary">{g.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{g.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
