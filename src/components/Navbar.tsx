import { useEffect, useState } from 'react'
import Logo from './Logo.tsx'
import Icon from './Icon.tsx'

const links = [
  { href: '#funcionalidades', label: 'Funcionalidades' },
  { href: '#dashboard', label: 'Dashboard' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#para-quem', label: 'Para quem' },
  { href: '#faq', label: 'FAQ' },
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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-primary/95 shadow-lg shadow-black/10 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Principal">
        <a href="#topo" aria-label="Burnless — início">
          <Logo />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-white/80 transition hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#comecar" className="btn-light hidden py-2.5 lg:inline-flex">
          Quero testar
        </a>

        <button
          type="button"
          className="rounded-lg p-2 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} className="h-6 w-6" />
        </button>
      </nav>

      {open && (
        <div id="menu-mobile" className="border-t border-white/10 lg:hidden">
          <ul className="container-page flex flex-col gap-1 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 font-medium text-white/90 hover:bg-white/10"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href="#comecar" onClick={() => setOpen(false)} className="btn-light w-full">
                Quero testar
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
