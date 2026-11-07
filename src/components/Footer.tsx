import Logo from './Logo.tsx'

const groups = [
  {
    title: 'Produto',
    links: [
      { label: 'Funcionalidades', href: '#funcionalidades' },
      { label: 'Dashboard', href: '#dashboard' },
      { label: 'Como funciona', href: '#como-funciona' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Ajuda imediata',
    links: [
      { label: 'CVV · 188', href: 'tel:188' },
      { label: 'SAMU · 192', href: 'tel:192' },
      { label: 'Bombeiros · 193', href: 'tel:193' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-sage-200 bg-white pt-16 pb-10">
      <div className="container-page">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo light={false} />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Prevenção de burnout, coach de sono e encaminhamento seguro para estudantes.
            </p>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <p className="text-sm font-semibold text-ink">{g.title}</p>
              <ul className="mt-4 space-y-3">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-muted transition hover:text-primary">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-sm font-semibold text-ink">HackBrasil 2026</p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>Trilha Saúde &amp; Bem-estar</li>
              <li>Equipe Quatro Cabeças Zero Neurônios</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-sage-200 pt-8 text-xs leading-relaxed text-muted md:flex-row md:justify-between">
          <p className="max-w-2xl">
            O Burnless não substitui avaliação, diagnóstico ou tratamento por profissionais de saúde. Em emergências, ligue
            192 (SAMU). Para apoio emocional, ligue 188 (CVV).
          </p>
          <p className="shrink-0">© 2026 Burnless</p>
        </div>
      </div>
    </footer>
  )
}
