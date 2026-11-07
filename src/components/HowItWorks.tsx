import Icon, { type IconName } from './Icon.tsx'
import Reveal from './Reveal.tsx'

const steps: { n: string; icon: IconName; title: string; text: string }[] = [
  {
    n: '01',
    icon: 'pencil',
    title: 'Registre seu dia',
    text: 'Em poucos toques: horário que dormiu, cafeína, tempo de tela, exercício, horas de estudo e uma nota sobre como você está.',
  },
  {
    n: '02',
    icon: 'sparkles',
    title: 'A IA encontra os padrões',
    text: 'Modelos de machine learning cruzam seus registros e identificam o que mais afeta seu sono e seu nível de estresse.',
  },
  {
    n: '03',
    icon: 'heart',
    title: 'Receba sugestões e alertas',
    text: 'Você recebe alertas de sobrecarga, sugestões práticas para a rotina e, se precisar, a indicação do serviço de saúde certo.',
  },
]

const tech = [
  {
    title: 'Importância dos hábitos',
    text: 'Árvores de decisão e regressão mostram quais hábitos pesam mais no seu sono. Os modelos são treinados com o Sleep Health and Lifestyle Dataset.',
  },
  {
    title: 'Classificação de sobrecarga',
    text: 'Um modelo de classificação, treinado com dados de estresse estudantil, transforma check-ins e hábitos em níveis de risco.',
  },
  {
    title: 'LLM com regras de segurança',
    text: 'O conselheiro e a triagem usam um modelo de linguagem com limites claros, urgência baseada no Protocolo de Manchester e nenhum diagnóstico.',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative overflow-hidden bg-primary py-20 text-white sm:py-28">
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full bg-secondary/40 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-secondary-light">Como funciona</span>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Três passos. Menos de dois minutos por dia.</h2>
        </Reveal>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 120} className="rounded-3xl bg-white/[0.06] p-7 ring-1 ring-white/10">
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-primary">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <span className="font-display text-4xl font-semibold text-white/15">{s.n}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-white/70">{s.text}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-16 rounded-3xl bg-white p-8 text-ink sm:p-10">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-sage-100 text-secondary">
              <Icon name="sparkles" />
            </span>
            <h3 className="text-2xl font-semibold text-primary">A inteligência por trás</h3>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {tech.map((t) => (
              <div key={t.title} className="border-l-2 border-secondary pl-5">
                <h4 className="font-semibold text-primary">{t.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
