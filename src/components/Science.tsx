import type { ReactNode } from 'react'
import Reveal from './Reveal.tsx'
import SectionHeading from './SectionHeading.tsx'

function DatasetArt() {
  const bars = [38, 62, 48, 80, 56, 92, 70, 44]
  return (
    <div className="flex h-full items-end justify-center gap-2.5 px-10 pb-8">
      {bars.map((h, i) => (
        <div
          key={i}
          className={`w-full rounded-t-lg ${i === 5 ? 'bg-primary' : 'bg-white/70'}`}
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  )
}

function ManchesterArt() {
  const levels = [
    { c: '#d64545', l: 'Emergência' },
    { c: '#e8833a', l: 'Muito urgente' },
    { c: '#e9c33f', l: 'Urgente' },
    { c: '#4f9a5b', l: 'Pouco urgente' },
    { c: '#4a7fc1', l: 'Não urgente' },
  ]
  return (
    <div className="flex h-full flex-col justify-center gap-2 px-10">
      {levels.map((x, i) => (
        <div key={x.l} className="flex items-center gap-3 rounded-full bg-white/80 py-1.5 pr-4 pl-1.5" style={{ marginLeft: `${i * 6}%` }}>
          <span className="h-5 w-5 rounded-full" style={{ background: x.c }} />
          <span className="text-xs font-medium text-ink">{x.l}</span>
        </div>
      ))}
    </div>
  )
}

function TreeArt() {
  return (
    <svg viewBox="0 0 300 180" className="h-full w-full p-6" aria-hidden="true">
      <g stroke="#283c2c" strokeOpacity="0.45" strokeWidth="2" fill="none">
        <path d="M150 38 L85 92 M150 38 L215 92 M85 92 L50 146 M85 92 L120 146 M215 92 L180 146 M215 92 L250 146" />
      </g>
      {[
        [150, 38, 'Tela > 2h?', true],
        [85, 92, 'Cafeína', false],
        [215, 92, 'Estudo', false],
      ].map(([x, y, t, main]) => (
        <g key={String(t)}>
          <rect
            x={Number(x) - 40}
            y={Number(y) - 14}
            width="80"
            height="28"
            rx="14"
            fill={main ? '#283c2c' : '#ffffff'}
          />
          <text x={Number(x)} y={Number(y) + 4} textAnchor="middle" fontSize="11" fontWeight="600" fill={main ? '#fff' : '#283c2c'}>
            {String(t)}
          </text>
        </g>
      ))}
      {[50, 120, 180, 250].map((x, i) => (
        <circle key={x} cx={x} cy={146} r="11" fill={i === 0 ? '#c98a2b' : '#ffffff'} />
      ))}
    </svg>
  )
}

const cards: { tag: string; title: string; text: string; art: ReactNode; bg: string }[] = [
  {
    tag: 'Dataset · Kaggle',
    title: 'Dados de sono e estilo de vida',
    text: 'Os modelos de sono são treinados com o Sleep Health and Lifestyle Dataset, uma base sintética que relaciona sono, estresse, atividade física e rotina.',
    art: <DatasetArt />,
    bg: 'bg-gradient-to-br from-[#dfeae1] to-[#b5c9b8]',
  },
  {
    tag: 'Triagem',
    title: 'Inspirado no Protocolo de Manchester',
    text: 'A classificação de risco por cores, usada em serviços de urgência, inspira como a triagem organiza a urgência dos sintomas e indica o serviço adequado.',
    art: <ManchesterArt />,
    bg: 'bg-gradient-to-br from-[#eef2ed] to-[#d5e0d4]',
  },
  {
    tag: 'Machine learning',
    title: 'IA que explica o porquê',
    text: 'Árvores de decisão e regressão mostram quais hábitos pesaram mais em cada conclusão. Você entende o resultado, em vez de só receber uma nota.',
    art: <TreeArt />,
    bg: 'bg-gradient-to-br from-[#e3f0e5] to-[#c4dcc8]',
  },
]

export default function Science() {
  return (
    <section id="ciencia" className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading eyebrow="Ciência" title="A inteligência por trás" accent="do Burnless" />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} as="article" delay={i * 100} className="group">
              <div className={`h-56 overflow-hidden rounded-3xl ${c.bg} transition duration-500 group-hover:-translate-y-1`}>
                {c.art}
              </div>
              <div className="px-1 pt-6">
                <span className="text-xs font-semibold tracking-wide text-secondary uppercase">{c.tag}</span>
                <h3 className="mt-2 text-xl font-medium text-ink">{c.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
