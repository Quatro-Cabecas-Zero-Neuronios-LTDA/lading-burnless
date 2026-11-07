import SproutIcon from './SproutIcon.tsx'

type Props = { className?: string; light?: boolean }

export default function Logo({ className = '', light = true }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 font-display text-2xl font-semibold tracking-tight ${
        light ? 'text-white' : 'text-primary'
      } ${className}`}
    >
      <SproutIcon className="h-7 w-auto" />
      burnless
    </span>
  )
}
