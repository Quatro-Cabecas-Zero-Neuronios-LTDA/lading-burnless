import { useState } from 'react'
import Icon from './Icon.tsx'
import Reveal from './Reveal.tsx'

const faqs = [
  {
    q: 'O Burnless faz diagnóstico de burnout?',
    a: 'Não. O Burnless identifica sinais de sobrecarga nos seus registros e sugere mudanças de rotina. Para diagnóstico e tratamento, procure um profissional de saúde. A triagem do app só indica qual tipo de serviço procurar.',
  },
  {
    q: 'Como a IA sabe quais hábitos afetam o meu sono?',
    a: 'Usamos modelos como árvores de decisão e regressão, treinados com um dataset público de sono e estilo de vida. Com os seus registros, o modelo calcula quanto cada hábito (telas, cafeína, exercício, horários) pesa no seu caso.',
  },
  {
    q: 'O que o Conselheiro faz com as minhas notas?',
    a: 'Ele lê o que você escreveu no diário e responde com sugestões práticas, como pausas, organização da semana e higiene do sono. Se perceber sinais de alerta, indica caminhos para buscar ajuda.',
  },
  {
    q: 'Quanto tempo leva por dia?',
    a: 'Menos de dois minutos. O check-in é rápido e o diário é opcional: escreva quando tiver vontade.',
  },
  {
    q: 'E se eu estiver em crise agora?',
    a: 'Não espere pelo app. Ligue 188 (CVV) para apoio emocional gratuito 24h ou 192 (SAMU) em caso de emergência.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-sage-50 py-20 sm:py-28">
      <div className="container-page max-w-3xl">
        <Reveal className="text-center">
          <span className="eyebrow">Perguntas frequentes</span>
          <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">Ficou alguma dúvida?</h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <Reveal key={f.q} delay={i * 60} className="rounded-2xl bg-white ring-1 ring-sage-200">
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-lg font-semibold text-primary"
                  >
                    {f.q}
                    <Icon
                      name="chevron"
                      className={`h-5 w-5 shrink-0 text-secondary transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-relaxed text-muted">{f.a}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
