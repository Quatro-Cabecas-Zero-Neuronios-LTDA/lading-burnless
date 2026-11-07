import Icon from './Icon.tsx'
import PhoneFrame from './PhoneFrame.tsx'
import SproutIcon from './SproutIcon.tsx'
import WaitlistForm from './WaitlistForm.tsx'
import { Dot, Glow, Sparkle } from './Decor.tsx'

function HomeScreen() {
  return (
    <div className="flex h-full flex-col bg-sage-50">
      {/* Topo escuro */}
      <div className="bg-primary px-5 pt-12 pb-9 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 text-xs font-semibold">AN</span>
            <div>
              <p className="text-[13px] font-semibold">Olá, Ana</p>
              <p className="text-[10px] text-white/60">Como você está hoje?</p>
            </div>
          </div>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10">
            <Icon name="bell" className="h-4 w-4" />
          </span>
        </div>

        <p className="mt-6 text-center text-[10px] tracking-wide text-white/60 uppercase">Nível de sobrecarga</p>
        <p className="mt-1 text-center font-display text-[30px] leading-none font-semibold">Moderado</p>
        <div className="mx-auto mt-4 flex w-44 gap-1" aria-hidden="true">
          {Array.from({ length: 10 }, (_, i) => (
            <span
              key={i}
              className={`h-1.5 flex-1 rounded-full ${i < 4 ? 'bg-secondary-light' : i < 6 ? 'bg-alert' : 'bg-white/15'}`}
            />
          ))}
        </div>
        <p className="mt-3 text-center text-[10px] text-white/60">↓ 12% em relação à semana passada</p>
      </div>

      {/* Conteúdo */}
      <div className="-mt-5 flex-1 space-y-2.5 rounded-t-[1.6rem] bg-sage-50 px-4 pt-4">
        <div className="grid grid-cols-2 gap-2.5">
          <div className="rounded-2xl bg-white p-3 shadow-sm">
            <div className="flex items-center gap-1.5 text-[10px] text-muted">
              <Icon name="moon" className="h-3 w-3" /> Sono
            </div>
            <p className="mt-1 font-display text-lg font-semibold text-primary">6h37</p>
            <p className="text-[9px] text-muted">Meta: 7h</p>
          </div>
          <div className="rounded-2xl bg-white p-3 shadow-sm">
            <div className="flex items-center gap-1.5 text-[10px] text-muted">
              <Icon name="activity" className="h-3 w-3" /> Estresse
            </div>
            <p className="mt-1 font-display text-lg font-semibold text-primary">5/10</p>
            <p className="text-[9px] text-muted">Estável</p>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-3 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-white">
              <SproutIcon className="h-3 w-auto" />
            </span>
            <p className="text-[11px] font-semibold text-primary">Conselheiro</p>
          </div>
          <p className="mt-2 text-[10.5px] leading-snug text-muted">
            Que tal estudar em blocos de 50 min com 10 min de pausa hoje?
          </p>
        </div>

        <div className="rounded-2xl bg-white p-3 shadow-sm">
          <div className="flex items-center justify-between text-[11px]">
            <p className="font-semibold text-primary">Check-in de hoje</p>
            <p className="text-muted">3 de 4</p>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-sage-100">
            <div className="h-full w-3/4 rounded-full bg-secondary" />
          </div>
        </div>
      </div>

      {/* Barra de navegação */}
      <div className="flex items-center justify-around border-t border-sage-200 bg-white px-6 pt-3 pb-6 text-muted">
        <Icon name="home" className="h-5 w-5 text-primary" />
        <Icon name="chart" className="h-5 w-5" />
        <Icon name="pencil" className="h-5 w-5" />
        <Icon name="user" className="h-5 w-5" />
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-32 pb-44 sm:pt-40 lg:pb-52">
      <Glow className="top-0 right-[-10%] h-[620px] w-[720px] bg-[radial-gradient(closest-side,#cfe6d3,transparent)] opacity-90" />
      <Glow className="top-[30%] right-[20%] h-[420px] w-[420px] bg-[radial-gradient(closest-side,#efe9cf,transparent)] opacity-70" />
      <Glow className="top-[10%] -left-40 h-[400px] w-[500px] bg-[radial-gradient(closest-side,#e7efe4,transparent)]" />

      <div className="container-page relative grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3.5 py-1.5 text-xs font-medium text-muted ring-1 ring-sage-200 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            HackBrasil 2026 · Saúde &amp; Bem-estar
          </span>

          <h1 className="mt-6 text-[2.9rem] leading-[1.02] font-medium text-ink sm:text-6xl lg:text-[4.6rem]">
            Cuide da sua mente <span className="text-gradient">antes do burnout</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            O Burnless acompanha seu sono, seus hábitos e sua rotina de estudos. A IA avisa quando você está entrando em
            sobrecarga e mostra o que mudar.
          </p>

          <WaitlistForm className="mt-9" />

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {['Feito para estudantes', 'Check-in em 1 minuto', 'Não substitui um profissional'].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-secondary" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Mockup */}
        <div className="relative mx-auto flex justify-center text-primary lg:justify-end">
          <Sparkle className="top-6 -left-4 h-4 w-4 sm:left-4" />
          <Sparkle className="right-2 bottom-24 h-3 w-3" />
          <Sparkle className="-top-6 right-10 h-2.5 w-2.5" />
          <Dot className="top-24 right-0 h-1.5 w-1.5" />
          <Dot className="bottom-10 left-6 h-2 w-2" />
          <Dot className="top-1/2 -left-8 h-1 w-1" />

          <div className="relative animate-float-slow">
            <PhoneFrame darkTop className="rotate-[3deg]">
              <HomeScreen />
            </PhoneFrame>

            <div className="card-shadow absolute top-[300px] -left-44 hidden animate-float items-center gap-3 rounded-2xl bg-white px-4 py-3 sm:flex">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-mint text-primary">
                <Icon name="moon" className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[11px] text-muted">Sono esta semana</p>
                <p className="text-sm font-semibold text-ink">+42 min por noite</p>
              </div>
            </div>

            <div className="card-shadow absolute -right-36 top-24 hidden animate-float items-center gap-3 rounded-2xl bg-white px-4 py-3 [animation-delay:1.5s] sm:flex">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-white">
                <Icon name="check" className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[11px] text-muted">Pausas feitas</p>
                <p className="text-sm font-semibold text-ink">5 dias seguidos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
