import Icon from './Icon.tsx'
import Reveal from './Reveal.tsx'

const routes = [
  { name: 'UBS', text: 'Sintomas leves e acompanhamento' },
  { name: 'Teleconsulta', text: 'Orientação rápida sem sair de casa' },
  { name: 'UPA', text: 'Urgências que não podem esperar' },
  { name: 'Emergência', text: 'Risco imediato: ligue 192' },
]

export default function Safety() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="eyebrow">Segurança em primeiro lugar</span>
          <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
            O Burnless orienta. Quem cuida de você é um profissional.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            O Burnless não faz diagnóstico. A triagem indica o tipo de serviço mais adequado, sempre com regras de
            segurança e sempre lembrando que nada substitui uma avaliação profissional.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex gap-3">
              <Icon name="shield" className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
              <span className="text-ink">Nenhuma resposta da IA se apresenta como diagnóstico ou prescrição.</span>
            </li>
            <li className="flex gap-3">
              <Icon name="lock" className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
              <span className="text-ink">Seus registros são seus. Você decide o que anota e pode apagar quando quiser.</span>
            </li>
            <li className="flex gap-3">
              <Icon name="message" className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
              <span className="text-ink">Sinais de risco levam direto para canais de ajuda imediata.</span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120} className="rounded-[2rem] bg-sage-50 p-6 ring-1 ring-sage-200 sm:p-8">
          <p className="text-sm font-semibold text-primary">Para onde a triagem pode te encaminhar</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {routes.map((r) => (
              <div key={r.name} className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="font-display text-lg font-semibold text-primary">{r.name}</p>
                <p className="mt-1 text-sm text-muted">{r.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl bg-primary p-5 text-white">
            <p className="text-sm font-semibold">Precisa de ajuda agora?</p>
            <p className="mt-1 text-sm leading-relaxed text-white/80">
              Ligue <strong className="text-white">188</strong> (CVV, 24h e gratuito) para apoio emocional ou{' '}
              <strong className="text-white">192</strong> (SAMU) em caso de emergência.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
