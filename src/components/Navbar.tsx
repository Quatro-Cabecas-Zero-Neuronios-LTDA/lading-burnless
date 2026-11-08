import { useEffect, useState } from 'react'
import Logo from './Logo.tsx'
import Icon from './Icon.tsx'

const links = [
  { href: '#funcionalidades', label: 'Funcionalidades' },
  { href: '#dashboard', label: 'Dashboard' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#seguranca', label: 'Segurança' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-sage-200/70 bg-white/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav className="container-page flex h-[72px] items-center justify-between" aria-label="Principal">
        <a href="#topo" aria-label="Burnless — início">
          <Logo light={false} />
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-ink/70 transition hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#comecar" className="btn-outline hidden py-2.5 lg:inline-flex">
          Quero testar grátis
        </a>

        <button
          type="button"
          className="rounded-lg p-2 text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} className="h-6 w-6" />
        </button>
      </nav>

      {open && (
        <div id="menu-mobile" className="border-t border-sage-200 bg-white lg:hidden">
          <ul className="container-page flex flex-col gap-1 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 font-medium text-ink hover:bg-sage-50"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href="#comecar" onClick={() => setOpen(false)} className="btn-primary w-full">
                Quero testar grátis
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
