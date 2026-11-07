import type { CSSProperties } from 'react'
import Icon from './Icon.tsx'
import SproutIcon from './SproutIcon.tsx'
import WaitlistForm from './WaitlistForm.tsx'
import { Glow } from './Decor.tsx'

/*
 * Foto: Pexels (licença gratuita para uso comercial), recortada com a tela transparente.
 * A tela do app fica atrás da foto, posicionada no recorte da tela (valores em % da imagem).
 */
const SCREEN = { left: '13.3%', top: '4.1%', width: '39.5%', height: '59.2%' }
const SCREEN_W = 252
const SCREEN_H = 534

const fadeMask: CSSProperties = {
  maskImage: 'linear-gradient(to bottom, #000 70%, transparent 96%), linear-gradient(to right, #000 76%, transparent 99%)',
  WebkitMaskImage:
    'linear-gradient(to bottom, #000 70%, transparent 96%), linear-gradient(to right, #000 76%, transparent 99%)',
  maskComposite: 'intersect',
  WebkitMaskComposite: 'source-in',
}

function HomeScreen() {
  return (
    <div className="flex h-full flex-col bg-sage-50">
      {/* Topo escuro */}
      <div className="bg-primary px-5 pt-3 pb-9 text-white">
        <div className="flex items-center justify-between px-2 text-[11px] font-semibold" aria-hidden="true">
          <span>9:41</span>
          <span className="flex items-center gap-1">
            <span className="flex items-end gap-[2px]">
              <span className="h-1.5 w-[3px] rounded-sm bg-current" />
              <span className="h-2 w-[3px] rounded-sm bg-current" />
              <span className="h-2.5 w-[3px] rounded-sm bg-current" />
            </span>
            <span className="ml-1 h-[10px] w-5 rounded-[3px] border border-current p-[1px]">
              <span className="block h-full w-3/4 rounded-[1px] bg-current" />
            </span>
          </span>
        </div>
        <div className="mt-6 flex items-center justify-between">
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
      <Glow className="top-0 right-[-8%] h-[640px] w-[760px] bg-[radial-gradient(closest-side,#d7eadb,transparent)]" />

      <div className="container-page relative grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <h1 className="text-[2.9rem] leading-[1.02] font-medium text-ink sm:text-6xl lg:text-[4.6rem] xl:text-[5.4rem]">
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
        <div className="relative -mb-40 flex min-w-0 justify-center lg:-mb-72 lg:justify-end">
          <div
            className="relative w-[380px] shrink-0 translate-x-[16.9%] [--s:0.596] sm:w-[460px] sm:[--s:0.721] lg:w-[520px] lg:translate-x-0 lg:[--s:0.815] xl:w-[600px] xl:[--s:0.94]"
            style={fadeMask}
          >
            <div className="absolute overflow-hidden bg-primary" style={SCREEN}>
              <div
                className="origin-top-left"
                style={{ width: SCREEN_W, height: SCREEN_H, transform: 'scale(var(--s))' }}
              >
                <HomeScreen />
              </div>
            </div>
            <img
              src="/hand-phone.webp"
              alt="Mão segurando um celular com o app Burnless aberto"
              width={1100}
              height={1555}
              draggable={false}
              className="relative z-10 block h-auto w-full select-none"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
