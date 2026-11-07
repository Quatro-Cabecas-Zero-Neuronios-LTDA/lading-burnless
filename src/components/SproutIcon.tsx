type Props = { className?: string; title?: string }

/** Broto da marca Burnless, redesenhado em SVG a partir da logo. */
export default function SproutIcon({ className, title }: Props) {
  return (
    <svg
      viewBox="-3 -2 72 96"
      className={className}
      fill="currentColor"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <path d="M33 35 C31 15 43 -1 64 1 C66 23 53 35 33 35 Z" />
      <path d="M37 37 C30 21 18 12 2.5 16.5 C-1 34 9 43 27 45 Z" />
      <circle cx="32" cy="38" r="7" />
      <path
        d="M31 40 C25 57 22.5 72 24 89"
        fill="none"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
      />
    </svg>
  )
}
