import { useEffect, useState, type ReactNode } from 'react'
import Icon, { type IconName } from './Icon.tsx'
import PhoneFrame from './PhoneFrame.tsx'
import Reveal from './Reveal.tsx'
import SectionHeading from './SectionHeading.tsx'
import SproutIcon from './SproutIcon.tsx'
import { Dot, Glow, Sparkle } from './Decor.tsx'

function ScreenHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="px-5 pt-12">
      <p className="text-[10px] text-muted">{subtitle}</p>
      <p className="font-display text-lg font-semibold text-ink">{title}</p>
    </div>
  )
}

function ProfileScreen() {
  const fields = [
    { label: 'Curso', value: 'Engenharia Civil' },
    { label: 'Período', value: '3º semestre' },
    { label: 'Meta de sono', value: '7h por noite' },
    { label: 'Horas de estudo/dia', value: 'Cerca de 6h' },
  ]
  return (
    <div className="h-full bg-white">
      <ScreenHeader subtitle="Passo 1 de 3" title="Crie seu perfil" />
      <div className="mt-5 space-y-2.5 px-5">
        {fields.map((f) => (
          <div key={f.label} className="rounded-xl border border-sage-200 px-3 py-2.5">
            <p className="text-[9.5px] text-muted">{f.label}</p>
            <p className="text-[12px] font-medium text-ink">{f.value}</p>
          </div>
        ))}
        <button type="button" tabIndex={-1} className="mt-2 w-full rounded-full bg-primary py-2.5 text-xs font-semibold text-white">
          Continuar
        </button>
        <div className="mt-4 flex gap-2.5 rounded-xl bg-mint p-3">
          <Icon name="lock" className="h-4 w-4 shrink-0 text-primary" />
          <p className="text-[10.5px] leading-snug text-ink">
            Seus registros são seus. Você escolhe o que anotar e pode apagar tudo quando quiser.
          </p>
        </div>
      </div>
    </div>
  )
}

function LogScreen() {
  const rows: { icon: IconName; label: string; value: string }[] = [
    { icon: 'moon', label: 'Sono', value: '6h10' },
    { icon: 'coffee', label: 'Cafeína', value: '2 xícaras' },
    { icon: 'phone', label: 'Tela à noite', value: '2h30' },
    { icon: 'activity', label: 'Exercício', value: '20 min' },
    { icon: 'book', label: 'Estudo', value: '7h' },
  ]
  return (
    <div className="h-full bg-white">
      <ScreenHeader subtitle="Hoje · Terça" title="Registre seu dia" />
      <div className="mt-4 space-y-2 px-5">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center gap-3 rounded-xl bg-sage-50 px-3 py-2.5">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-white text-secondary">
              <Icon name={r.icon} className="h-3.5 w-3.5" />
            </span>
            <span className="flex-1 text-[11.5px] text-ink">{r.label}</span>
            <span className="text-[11.5px] font-semibold text-primary">{r.value}</span>
          </div>
        ))}
        <div className="rounded-xl border border-dashed border-sage-200 px-3 py-2.5 text-[11px] text-muted">
          + Adicionar nota no diário
        </div>
      </div>
    </div>
  )
}

function AnalysisScreen() {
  const bars = [
    { label: 'Tela à noite', v: 34 },
    { label: 'Cafeína', v: 27 },
    { label: 'Estudo', v: 21 },
    { label: 'Horário', v: 11 },
    { label: 'Exercício', v: 7 },
  ]
  return (
    <div className="h-full bg-white">
      <ScreenHeader subtitle="Últimos 14 dias" title="Sua análise" />
      <div className="mx-5 mt-4 rounded-2xl bg-primary p-4 text-white">
        <p className="text-[10px] text-white/60">Nível de sobrecarga</p>
        <p className="font-display text-xl font-semibold">Moderado · 64</p>
      </div>
      <p className="mt-4 px-5 text-[10.5px] font-semibold text-ink">O que mais pesa no seu sono</p>
      <div className="mt-2 space-y-2.5 px-5">
        {bars.map((b, i) => (
          <div key={b.label}>
            <div className="flex justify-between text-[10px]">
              <span className="text-muted">{b.label}</span>
              <span className="font-semibold text-ink">{b.v}%</span>
            </div>
            <div className="mt-1 h-1.5 rounded-full bg-sage-100">
              <div className={`h-full rounded-full ${i === 0 ? 'bg-primary' : 'bg-secondary-light'}`} style={{ width: `${b.v * 2.6}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TipsScreen() {
  const tips = [
    { t: 'Celular fora do quarto às 23h', done: true },
    { t: 'Último café até as 16h', done: true },
    { t: 'Blocos de 50 min + 10 de pausa', done: false },
    { t: 'Caminhada de 20 min', done: false },
  ]
  return (
    <div className="h-full bg-white">
      <ScreenHeader subtitle="Plano da semana" title="Suas sugestões" />
      <div className="mx-5 mt-4 flex gap-2 rounded-2xl bg-mint p-3">
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary text-white">
          <SproutIcon className="h-3.5 w-auto" />
        </span>
        <p className="text-[10.5px] leading-snug text-ink">
          Pequenas mudanças, todo dia. Você já cumpriu 2 de 4 metas!
        </p>
      </div>
      <div className="mt-3 space-y-2 px-5">
        {tips.map((x) => (
          <div key={x.t} className="flex items-center gap-3 rounded-xl border border-sage-200 px-3 py-2.5">
            <span
              className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                x.done ? 'bg-primary text-white' : 'ring-1 ring-sage-200'
              }`}
            >
              {x.done && <Icon name="check" className="h-3 w-3" />}
            </span>
            <span className={`text-[11px] ${x.done ? 'text-muted line-through' : 'text-ink'}`}>{x.t}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const steps: { title: string; text: string; screen: ReactNode }[] = [
  {
    title: 'Crie seu perfil',
    text: 'Conte um pouco da sua rotina: curso, horas de estudo e sua meta de sono.',
    screen: <ProfileScreen />,
  },
  {
    title: 'Registre seu dia',
    text: 'Sono, cafeína, telas, exercício e estudo em menos de um minuto. Se quiser, escreva no diário.',
    screen: <LogScreen />,
  },
  {
    title: 'Receba sua análise',
    text: 'A IA cruza seus registros e mostra seu nível de sobrecarga e os hábitos que mais pesam.',
    screen: <AnalysisScreen />,
  },
  {
    title: 'Siga as sugestões',
    text: 'Metas pequenas e possíveis para a semana. E, se precisar, o caminho certo para buscar ajuda.',
    screen: <TipsScreen />,
  },
]

const DURATION = 5000

export default function HowItWorks() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    if (paused || reduced) return
    const t = setTimeout(() => setActive((a) => (a + 1) % steps.length), DURATION)
    return () => clearTimeout(t)
  }, [active, paused, reduced])

  return (
    <section id="como-funciona" className="relative overflow-hidden bg-gradient-to-b from-white via-sage-50 to-white py-24 sm:py-32">
      <Glow className="top-0 -left-40 h-[420px] w-[680px] bg-[radial-gradient(closest-side,#d6e8d9,transparent)]" />

      <div className="container-page relative">
        <SectionHeading eyebrow="Como funciona" title="Simples de usar," accent="feito para durar" />

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="relative mx-auto text-primary">
            <Sparkle className="top-10 -left-10 h-3.5 w-3.5" />
            <Sparkle className="-right-8 bottom-20 h-3 w-3" />
            <Dot className="top-1/3 -right-12 h-1.5 w-1.5" />
            <Dot className="bottom-8 -left-6 h-1 w-1" />
            <PhoneFrame>
              {steps.map((s, i) => (
                <div
                  key={s.title}
                  className={`absolute inset-0 transition-all duration-500 ${
                    i === active ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
                  }`}
                  aria-hidden={i !== active}
                >
                  {s.screen}
                </div>
              ))}
            </PhoneFrame>
          </Reveal>

          <ol
            className="space-y-3"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            {steps.map((s, i) => {
              const isActive = i === active
              return (
                <li key={s.title}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-current={isActive ? 'step' : undefined}
                    className={`relative grid w-full grid-cols-[auto_1fr] gap-5 overflow-hidden rounded-3xl p-5 text-left transition sm:grid-cols-[3.5rem_auto_1fr] sm:p-6 ${
                      isActive ? 'card-shadow bg-white ring-1 ring-sage-200' : 'hover:bg-white/60'
                    }`}
                  >
                    <span className="hidden pt-2.5 text-xs text-muted sm:block">Etapa</span>
                    <span
                      className={`grid h-10 w-10 place-items-center rounded-full text-sm font-semibold transition ${
                        isActive ? 'bg-primary text-white' : 'text-muted ring-1 ring-sage-200'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>
                      <span
                        className={`block font-display text-xl font-medium transition ${isActive ? 'text-ink' : 'text-muted'}`}
                      >
                        {s.title}
                      </span>
                      <span className={`mt-1.5 block leading-relaxed ${isActive ? 'text-muted' : 'text-muted/70'}`}>
                        {s.text}
                      </span>
                    </span>
                    {isActive && !reduced && (
                      <span
                        key={`${active}-${paused}`}
                        className={`absolute inset-x-6 bottom-0 h-[2px] origin-left bg-primary/70 ${
                          paused ? 'scale-x-0' : 'animate-progress'
                        }`}
                        aria-hidden="true"
                      />
                    )}
                  </button>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
