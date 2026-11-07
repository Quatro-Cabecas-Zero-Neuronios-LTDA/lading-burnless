import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  /** Deixa a barra de status branca (para telas com topo escuro). */
  darkTop?: boolean
}

/** Moldura de celular em CSS, usada nos mockups do app. */
export default function PhoneFrame({ children, className = '', darkTop }: Props) {
  return (
    <div
      className={`relative w-[270px] shrink-0 rounded-[2.9rem] bg-[#121813] p-[9px] shadow-[0_50px_90px_-30px_rgba(26,39,29,0.55)] ring-1 ring-black/10 ${className}`}
    >
      <div className="relative h-[560px] overflow-hidden rounded-[2.35rem] bg-white">
        <div className="absolute top-2.5 left-1/2 z-30 h-[26px] w-[92px] -translate-x-1/2 rounded-full bg-[#121813]" />
        <div
          className={`absolute inset-x-0 top-0 z-20 flex items-center justify-between px-7 pt-[13px] text-[11px] font-semibold ${
            darkTop ? 'text-white' : 'text-ink'
          }`}
          aria-hidden="true"
        >
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
        {children}
      </div>
    </div>
  )
}
