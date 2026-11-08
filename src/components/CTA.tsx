import Reveal from './Reveal.tsx'
import SproutIcon from './SproutIcon.tsx'
import WaitlistForm from './WaitlistForm.tsx'
import { Dot, Glow, Sparkle } from './Decor.tsx'

export default function CTA() {
  return (
    <section id="comecar" className="py-24 sm:py-32">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 pt-16 pb-36 text-center sm:px-12 sm:pt-20 sm:pb-44">
          <Glow className="-top-32 left-1/2 h-[400px] w-[700px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(147,168,149,0.45),transparent)]" />
          <Sparkle className="top-14 left-[12%] h-4 w-4 text-white/60" />
          <Sparkle className="top-28 right-[14%] h-3 w-3 text-white/50" />
          <Dot className="top-40 left-[22%] h-1.5 w-1.5 text-white/40" />
          <Dot className="top-16 right-[26%] h-1 w-1 text-white/50" />

          <div className="relative mx-auto max-w-4xl">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-white ring-1 ring-white/15">
              <SproutIcon className="h-7 w-auto" />
            </span>
            <h2 className="mt-6 text-4xl leading-[1.05] font-medium text-white sm:text-6xl">
              Comece a cuidar <span className="text-gradient-light">de você hoje</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Entre na lista de espera e seja um dos primeiros a testar o Burnless.
            </p>
            <div className="mt-10 flex justify-center">
              <WaitlistForm dark />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
