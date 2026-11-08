import Icon from './Icon.tsx'
import Reveal from './Reveal.tsx'
import SectionHeading from './SectionHeading.tsx'
import { Glow } from './Decor.tsx'

type Col = {
  kicker: string
  title: string
  big: string
  items: string[]
  cta: { label: string; href: string }
  highlight?: boolean
  negative?: boolean
}

const cols: Col[] = [
  {
    kicker: 'Sempre',
    title: 'O que o Burnless faz',
    big: 'Orienta',
    items: [
      'Identifica sinais de sobrecarga',
      'Mostra os hábitos que afetam seu sono',
      'Sugere ajustes simples na rotina',
      'Indica o tipo de serviço de saúde adequado',
      'Guarda seu histórico para você acompanhar',
    ],
    cta: { label: 'Ver funcionalidades', href: '#funcionalidades' },
  },
  {
    kicker: 'Nunca',
    title: 'O que o Burnless não faz',
    big: 'Não diagnostica',
    items: [
      'Não faz diagnóstico',
      'Não prescreve medicamentos',
      'Não substitui psicólogo nem médico',
      'Não decide por você',
      'Não esconde os limites da IA',
    ],
    cta: { label: 'Perguntas frequentes', href: '#faq' },
    highlight: true,
    negative: true,
  },
  {
    kicker: 'Agora',
    title: 'Precisa de ajuda imediata?',
    big: 'Ligue 188',
    items: [
      'CVV: 188, gratuito e 24h',
      'SAMU: 192 em emergências',
      'Bombeiros: 193',
      'Procure a UPA mais próxima',
      'Fale com alguém de confiança',
    ],
    cta: { label: 'Ligar para o CVV', href: 'tel:188' },
  },
]

export default function Safety() {
  return (
    <section id="seguranca" className="relative overflow-hidden bg-primary-deep py-24 sm:py-32">
      <Glow className="-top-40 -right-40 h-[480px] w-[800px] bg-[radial-gradient(closest-side,rgba(147,168,149,0.28),transparent)]" />

      <div className="container-page relative">
        <SectionHeading dark eyebrow="Segurança" title="Orientação responsável" accent="do começo ao fim">
          A IA ajuda você a se entender melhor. Quem cuida da sua saúde é um profissional.
        </SectionHeading>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {cols.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 100}
              className={`flex flex-col overflow-hidden rounded-3xl bg-[#223326] ring-1 ${
                c.highlight ? 'ring-secondary-light/50 lg:-translate-y-3' : 'ring-white/10'
              }`}
            >
              <div className="bg-gradient-to-br from-[#d5e3d6] via-[#b9cdbb] to-[#93a895] px-6 pt-5 pb-6 text-primary-deep">
                <p className="text-[11px] font-medium tracking-wide uppercase opacity-70">{c.kicker}</p>
                <p className="mt-1 font-semibold">{c.title}</p>
                <p className="mt-4 font-display text-3xl font-semibold tracking-tight">{c.big}</p>
              </div>
              <ul className="flex-1 space-y-3.5 px-6 py-7">
                {c.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm text-white/80">
                    <Icon
                      name={c.negative ? 'x' : 'check'}
                      className={`mt-0.5 h-4 w-4 shrink-0 ${c.negative ? 'text-alert' : 'text-secondary-light'}`}
                    />
                    {it}
                  </li>
                ))}
              </ul>
              <div className="px-6 pb-7">
                <a
                  href={c.cta.href}
                  className={`btn w-full py-2.5 sm:w-auto ${
                    c.highlight ? 'bg-white text-primary hover:bg-sage-100' : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {c.cta.label}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
