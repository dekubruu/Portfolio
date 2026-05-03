import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Terminal } from 'lucide-react'
import { profile } from '../../data/profile'

const navLinks = [
  { to: '/', label: 'Home', short: '~' },
  { to: '/cv', label: 'CV', short: 'cv' },
  { to: '/projet-professionnel', label: 'Career Plan', short: 'career' },
  { to: '/portfolio', label: 'Portfolio', short: 'port' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-bg/85 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      }`}
      style={scrolled ? { boxShadow: '0 1px 0 rgba(0,229,255,0.08)' } : {}}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo — terminal prompt style */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <Terminal className="w-4 h-4 text-accent-cyan opacity-70 group-hover:opacity-100 transition-opacity" />
          <span className="font-mono text-sm font-bold text-text-primary tracking-tight">
            <span className="text-accent-cyan opacity-60">~/</span>
            {profile.prenom.toLowerCase()}
            <span className="text-accent-cyan animate-blink">_</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const active =
              link.to === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(link.to)
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 font-mono text-xs tracking-wider uppercase transition-all duration-200 ${
                  active
                    ? 'text-accent-cyan'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {active && (
                  <span className="text-accent-cyan mr-1 opacity-80">▶</span>
                )}
                {link.label}
                {active && (
                  <span
                    className="absolute bottom-0 left-2 right-2 h-px"
                    style={{ background: 'linear-gradient(90deg,transparent,rgba(0,229,255,0.6),transparent)' }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-text-secondary hover:text-accent-cyan transition-colors"
          aria-label="Menu"
        >
          {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="md:hidden border-b border-border px-6 py-4 flex flex-col gap-0.5"
          style={{ background: 'rgba(6,12,24,0.97)', backdropFilter: 'blur(20px)' }}
        >
          {navLinks.map((link) => {
            const active =
              link.to === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(link.to)
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-2 px-3 py-2.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                  active
                    ? 'text-accent-cyan'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                <span className={active ? 'text-accent-cyan' : 'text-text-muted'}>
                  {active ? '▶' : '○'}
                </span>
                {link.label}
              </Link>
            )
          })}
        </div>
      )}
    </header>
  )
}
