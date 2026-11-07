import type { ReactNode } from 'react'
import Reveal from './Reveal.tsx'

type Props = {
  eyebrow: string
  title: ReactNode
  accent?: ReactNode
  align?: 'center' | 'left'
  dark?: boolean
  className?: string
  children?: ReactNode
}

export default function SectionHeading({ eyebrow, title, accent, align = 'center', dark, className = '', children }: Props) {
  return (
    <Reveal className={`${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-xl'} ${className}`}>
      <span
        className={`inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase ${
          dark ? 'text-white/60' : 'text-muted'
        }`}
      >
        <span className={`h-1.5 w-1.5 rounded-full ${dark ? 'bg-secondary-light' : 'bg-primary'}`} />
        {eyebrow}
      </span>
      <h2
        className={`mt-4 text-[2.4rem] leading-[1.06] font-medium sm:text-5xl ${dark ? 'text-white' : 'text-ink'}`}
      >
        {title}
        {accent && (
          <>
            {' '}
            <span className={dark ? 'text-gradient-light' : 'text-gradient'}>{accent}</span>
          </>
        )}
      </h2>
      {children && (
        <p className={`mt-5 text-lg leading-relaxed ${dark ? 'text-white/65' : 'text-muted'}`}>{children}</p>
      )}
    </Reveal>
  )
}
