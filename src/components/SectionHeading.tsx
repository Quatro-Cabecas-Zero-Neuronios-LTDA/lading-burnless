import type { ReactNode } from 'react'
import Reveal from './Reveal.tsx'

type Props = {
  eyebrow: string
  title: ReactNode
  accent?: ReactNode
  align?: 'split' | 'left'
  dark?: boolean
  className?: string
  children?: ReactNode
}

export default function SectionHeading({ eyebrow, title, accent, align = 'split', dark, className = '', children }: Props) {
  const split = align === 'split'
  return (
    <Reveal className={`${split ? 'grid gap-6 lg:grid-cols-2 lg:items-end' : 'max-w-xl'} ${className}`}>
      <div className={split ? 'max-w-2xl' : ''}>
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
      </div>
      {children && (
        <p
          className={`text-lg leading-relaxed ${split ? 'max-w-md lg:justify-self-end' : 'mt-5'} ${
            dark ? 'text-white/65' : 'text-muted'
          }`}
        >
          {children}
        </p>
      )}
    </Reveal>
  )
}
