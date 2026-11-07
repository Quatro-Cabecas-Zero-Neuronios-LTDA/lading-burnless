type Props = { className?: string }

/** Estrela de quatro pontas usada como detalhe decorativo. */
export function Sparkle({ className = '' }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={`pointer-events-none absolute ${className}`} fill="currentColor" aria-hidden="true">
      <path d="M12 0C12.6 6.6 17.4 11.4 24 12 17.4 12.6 12.6 17.4 12 24 11.4 17.4 6.6 12.6 0 12 6.6 11.4 11.4 6.6 12 0Z" />
    </svg>
  )
}

export function Dot({ className = '' }: Props) {
  return <span className={`pointer-events-none absolute rounded-full bg-current ${className}`} aria-hidden="true" />
}

/** Brilho difuso de fundo. */
export function Glow({ className = '' }: Props) {
  return <div className={`pointer-events-none absolute rounded-full blur-3xl ${className}`} aria-hidden="true" />
}
