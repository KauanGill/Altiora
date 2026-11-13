import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import { Arrow } from './Icons.jsx'

export const links = [
  { to: '/', label: 'Início' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/processo', label: 'Processo' },
  { to: '/portfolio', label: 'Portfólio' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/contato', label: 'Contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <header className={`nav ${scrolled || open ? 'nav--scrolled' : ''}`}>
        <div className="container nav__inner">
          <Logo />
          <nav className="nav__links" aria-label="Principal">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className="nav__link">
                {l.label}
              </NavLink>
            ))}
          </nav>
          <Link to="/contato" className="btn btn--gold btn--sm nav__cta">
            Criar meu site <Arrow />
          </Link>
          <button
            className={`nav__toggle ${open ? 'open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
        {links.map((l, i) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            style={{ transitionDelay: open ? `${0.05 + i * 0.05}s` : '0s' }}
            tabIndex={open ? 0 : -1}
          >
            <span>0{i + 1}</span>
            {l.label}
          </NavLink>
        ))}
      </div>
    </>
  )
}
