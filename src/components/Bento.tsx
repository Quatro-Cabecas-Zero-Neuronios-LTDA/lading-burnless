import Icon, { type IconName } from './Icon.tsx'
import PhoneFrame from './PhoneFrame.tsx'
import Reveal from './Reveal.tsx'
import SectionHeading from './SectionHeading.tsx'
import SproutIcon from './SproutIcon.tsx'
import { Sparkle } from './Decor.tsx'

function CardTitle({ title, text, tag }: { title: string; text: string; tag: string }) {
  return (
    <div>
      <span className="inline-flex rounded-full bg-white/70 px-3 py-1 text-[11px] font-semibold text-secondary ring-1 ring-black/5">
        {tag}
      </span>
      <h3 className="mt-4 text-2xl font-medium text-ink">{title}</h3>
      <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-muted">{text}</p>
    </div>
  )
}

/* ---------- Card 1: comece agora ---------- */
function StartCard() {
  return (
    <Reveal className="relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#e4ede5] via-[#cfdfd2] to-[#a9c0ad] p-8 lg:col-span-5">
      <span
        className="pointer-events-none absolute top-6 -left-2 font-display text-[6.5rem] leading-none font-semibold tracking-tighter text-white/55 select-none sm:text-[8rem] lg:text-[7.2rem]"
        aria-hidden="true"
      >
        burnless
      </span>
      <SproutIcon className="pointer-events-none absolute top-32 right-8 hidden h-28 w-auto text-primary/10 sm:block" />
      <div className="relative">
        <h3 className="text-[1.75rem] leading-tight font-medium text-ink">Comece a cuidar de você hoje</h3>
        <p className="mt-2 max-w-xs text-[15px] text-ink/70">Entre na lista de espera e teste antes de todo mundo.</p>
        <a href="#comecar" className="btn-primary mt-6 py-2.5">
          Quero testar
          <Icon name="arrow" className="h-4 w-4" />
        </a>
      </div>
    </Reveal>
  )
}

/* ---------- Card 2: detector de burnout ---------- */
function CheckinScreen() {
  return (
    <div className="h-full bg-white px-5 pt-12">
      <div className="flex items-center justify-between text-[11px] text-muted">
        <span>‹</span>
        <span>2 de 4</span>
      </div>
      <p className="mt-4 text-center font-display text-[15px] font-semibold text-ink">Check-in diário</p>
      <p className="mt-5 text-[11px] text-muted">Como está sua energia hoje?</p>
      <div className="mt-2 flex justify-between gap-1.5">
        {[1, 2, 3, 4, 5].map((n) => (
          <span
            key={n}
            className={`grid h-9 flex-1 place-items-center rounded-xl text-xs font-semibold ${
              n === 2 ? 'bg-primary text-white' : 'bg-sage-100 text-muted'
            }`}
          >
            {n}
          </span>
        ))}
      </div>
      <div className="mt-4 rounded-xl bg-sage-50 p-3">
        <div className="flex justify-between text-[11px]">
          <span className="text-muted">Horas de estudo hoje</span>
          <span className="font-semibold text-ink">9h</span>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-sage-200">
          <div className="h-full w-[85%] rounded-full bg-alert" />
        </div>
      </div>
      <div className="mt-3 rounded-xl bg-sage-50 p-3">
        <div className="flex justify-between text-[11px]">
          <span className="text-muted">Horas de sono</span>
          <span className="font-semibold text-ink">5h40</span>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-sage-200">
          <div className="h-full w-[55%] rounded-full bg-secondary" />
        </div>
      </div>
      <button type="button" tabIndex={-1} className="mt-5 w-full rounded-full bg-primary py-2.5 text-xs font-semibold text-white">
        Continuar
      </button>
    </div>
  )
}

function DetectorCard() {
  return (
    <Reveal
      delay={100}
      className="relative grid min-h-[380px] overflow-hidden rounded-[2rem] bg-mist p-8 sm:grid-cols-[1fr_auto] lg:col-span-7"
    >
      <CardTitle
        tag="Prevenção"
        title="Detector de burnout"
        text="Check-ins rápidos e seus hábitos de estudo e sono viram um alerta de sobrecarga, com sugestões de pausas e organização."
      />
      <div className="relative mt-8 h-[260px] sm:mt-0 sm:h-auto sm:w-[290px]">
        <PhoneFrame className="absolute top-0 left-1/2 -translate-x-1/2 scale-[0.92] sm:top-4">
          <CheckinScreen />
        </PhoneFrame>
        <div className="card-shadow absolute bottom-10 -left-16 hidden w-[190px] rounded-2xl bg-white p-4 sm:block">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-alert-soft text-alert">
              <Icon name="alert" className="h-3.5 w-3.5" />
            </span>
            <p className="text-[11px] font-semibold text-ink">Alerta de sobrecarga</p>
          </div>
          <p className="mt-2 font-display text-2xl font-semibold text-primary">
            64<span className="text-sm text-muted">/100</span>
          </p>
          <p className="text-[10.5px] leading-snug text-muted">3 noites curtas e 9h de estudo por dia</p>
        </div>
      </div>
    </Reveal>
  )
}

/* ---------- Card 3: coach de sono ---------- */
function SleepCard() {
  return (
    <Reveal className="relative overflow-hidden rounded-[2rem] bg-sage-100 p-8 lg:col-span-6">
      <CardTitle
        tag="Sono"
        title="Coach de sono"
        text="Registre horários, cafeína, telas e exercício. Descubra quais hábitos mais afetam o seu sono."
      />
      <div className="relative mt-10 pb-2">
        <div className="absolute inset-x-6 -bottom-1 h-16 rounded-2xl bg-white/60" aria-hidden="true" />
        <div className="card-shadow relative rounded-2xl bg-white p-5">
          <p className="text-[11px] font-medium text-muted">Maior impacto no seu sono</p>
          <div className="mt-3 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-mint text-primary">
              <Icon name="phone" className="h-5 w-5" />
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-ink">Tela depois das 23h</p>
              <p className="text-xs text-muted">Presente em 5 das 7 noites</p>
            </div>
            <p className="font-display text-xl font-semibold text-primary">34%</p>
          </div>
          <div className="mt-4 flex items-center gap-3 border-t border-sage-200 pt-4">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-sage-100 text-secondary">
              <Icon name="coffee" className="h-5 w-5" />
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-ink">Cafeína depois das 16h</p>
              <p className="text-xs text-muted">Média de 2 xícaras</p>
            </div>
            <p className="font-display text-xl font-semibold text-secondary">27%</p>
          </div>
          <p className="mt-4 flex items-center gap-2 rounded-xl bg-sage-50 px-3 py-2.5 text-xs text-ink">
            <Icon name="sparkles" className="h-4 w-4 shrink-0 text-secondary" />
            Hoje: celular fora do quarto às 23h.
          </p>
        </div>
      </div>
    </Reveal>
  )
}

/* ---------- Card 4: triagem ---------- */
const orbit: { icon: IconName; label?: string; angle: number }[] = [
  { icon: 'building', label: 'UBS', angle: -90 },
  { icon: 'video', label: 'Teleconsulta', angle: -25 },
  { icon: 'message', angle: 30 },
  { icon: 'plus', label: 'UPA', angle: 90 },
  { icon: 'shield', angle: 150 },
  { icon: 'alert', label: 'Emergência', angle: 205 },
]

function TriageCard() {
  return (
    <Reveal delay={100} className="relative overflow-hidden rounded-[2rem] bg-mint p-8 lg:col-span-6">
      <CardTitle
        tag="Encaminhamento"
        title="Triagem de encaminhamento"
        text="Um chat conversa sobre seus sintomas e indica UBS, UPA, emergência ou teleconsulta. Não faz diagnóstico."
      />
      {/* Mobile: cartão + grade de serviços */}
      <div className="mt-8 sm:hidden">
        <div className="rounded-2xl bg-primary p-4 text-white shadow-xl shadow-primary/30">
          <div className="flex items-center justify-between">
            <p className="text-[11px] text-white/60">Triagem Burnless</p>
            <SproutIcon className="h-4 w-auto text-white/80" />
          </div>
          <p className="mt-3 text-[10px] tracking-wide text-white/60 uppercase">Encaminhamento sugerido</p>
          <p className="font-display text-xl font-semibold">Teleconsulta</p>
          <p className="mt-2 text-[11px] text-white/60">Urgência baixa · Não é diagnóstico</p>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {orbit
            .filter((o) => o.label)
            .map((o) => (
              <div key={o.icon} className="flex items-center gap-2 rounded-xl bg-white/80 px-3 py-2.5">
                <Icon name={o.icon} className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold text-primary">{o.label}</span>
              </div>
            ))}
        </div>
      </div>

      <div className="relative mx-auto mt-6 hidden h-[300px] max-w-[440px] sm:block">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 440 300" preserveAspectRatio="none" aria-hidden="true">
          <ellipse cx="220" cy="150" rx="185" ry="120" fill="none" stroke="#566a59" strokeOpacity="0.35" strokeDasharray="4 6" />
        </svg>
        {orbit.map((o) => {
          const rad = (o.angle * Math.PI) / 180
          return (
            <div
              key={o.icon}
              className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
              style={{ left: `${50 + Math.cos(rad) * 42}%`, top: `${50 + Math.sin(rad) * 40}%` }}
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-primary shadow-md ring-1 ring-black/5">
                <Icon name={o.icon} className="h-[18px] w-[18px]" />
              </span>
              {o.label && (
                <span className="rounded-full bg-white/80 px-2 py-0.5 text-[10px] font-semibold text-primary">
                  {o.label}
                </span>
              )}
            </div>
          )
        })}
        <div className="absolute top-1/2 left-1/2 w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-primary p-4 text-white shadow-2xl shadow-primary/40 sm:w-[220px]">
          <div className="flex items-center justify-between">
            <p className="text-[11px] text-white/60">Triagem Burnless</p>
            <SproutIcon className="h-4 w-auto text-white/80" />
          </div>
          <p className="mt-4 text-[10px] tracking-wide text-white/60 uppercase">Encaminhamento sugerido</p>
          <p className="font-display text-xl font-semibold">Teleconsulta</p>
          <div className="mt-3 flex items-center justify-between text-[10px]">
            <span className="rounded-full bg-white/10 px-2 py-0.5">Urgência baixa</span>
            <span className="text-white/60">Não é diagnóstico</span>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

/* ---------- Card 5: diário + conselheiro ---------- */
function JournalCard() {
  return (
    <Reveal className="relative grid gap-10 overflow-hidden rounded-[2rem] bg-sage-50 p-8 ring-1 ring-sage-200 sm:p-10 lg:col-span-12 lg:grid-cols-2 lg:items-center">
      <Sparkle className="top-10 right-[46%] hidden h-3 w-3 text-primary lg:block" />
      <div>
        <CardTitle
          tag="Diário"
          title="Notas + Conselheiro"
          text="Escreva como foi o seu dia. O conselheiro lê suas notas e sugere mudanças na rotina e, quando for o caso, formas de buscar ajuda."
        />
        <ul className="mt-6 space-y-2.5">
          {['Diário livre, no seu tempo', 'Respostas acolhedoras e práticas', 'Indica quando procurar apoio profissional'].map(
            (p) => (
              <li key={p} className="flex items-center gap-3 text-[15px] text-ink">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-primary text-white">
                  <Icon name="check" className="h-3 w-3" />
                </span>
                {p}
              </li>
            ),
          )}
        </ul>
      </div>

      <div className="relative space-y-4">
        <div className="card-shadow rounded-2xl bg-white p-5 lg:mr-14">
          <div className="flex items-center justify-between text-xs text-muted">
            <span className="flex items-center gap-2">
              <Icon name="pencil" className="h-3.5 w-3.5" /> Diário
            </span>
            <span>Terça · 22:14</span>
          </div>
          <p className="mt-3 leading-relaxed text-ink">
            “Semana de provas. Dormi mal de novo, tomei três cafés e ainda assim não consegui focar em nada…”
          </p>
        </div>
        <div className="rounded-2xl bg-primary p-5 text-white shadow-xl shadow-primary/25 lg:ml-14">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-white/15">
              <SproutIcon className="h-3.5 w-auto" />
            </span>
            <p className="text-sm font-semibold">Conselheiro Burnless</p>
          </div>
          <p className="mt-3 text-[15px] leading-relaxed text-white/85">
            Parece uma semana pesada. Que tal trocar o café da tarde por água e fazer pausas curtas entre as matérias?
            Hoje, tente dormir antes da meia-noite.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {['Pausa de 10 min', 'Dormir às 23h30', 'Revisar plano da semana'].map((c) => (
              <span key={c} className="rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/15">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default function Bento() {
  return (
    <section id="funcionalidades" className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading eyebrow="Funcionalidades" title="Tudo o que você precisa" accent="para não chegar ao limite" />

        <div className="mt-16 grid gap-5 lg:grid-cols-12">
          <StartCard />
          <DetectorCard />
          <SleepCard />
          <TriageCard />
          <JournalCard />
        </div>
      </div>
    </section>
  )
}
