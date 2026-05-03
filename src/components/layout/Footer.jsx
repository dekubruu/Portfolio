import { Github, Linkedin, Mail, Terminal } from 'lucide-react'
import { Link } from 'react-router-dom'
import { profile } from '../../data/profile'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/cv', label: 'CV' },
  { to: '/projet-professionnel', label: 'Career Plan' },
  { to: '/portfolio', label: 'Portfolio' },
]

export default function Footer() {
  return (
    <footer
      className="border-t border-border mt-24"
      style={{ borderColor: 'rgba(0,229,255,0.1)' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-4 h-4 text-accent-cyan opacity-60" />
              <span className="font-mono text-sm font-bold text-text-primary">
                <span className="text-accent-cyan opacity-50">~/</span>
                {profile.prenom.toLowerCase()}
              </span>
            </div>
            <p className="font-mono text-xs text-text-muted leading-relaxed">
              {profile.titre}<br />
              <span className="text-accent-cyan opacity-50">{profile.ecole}</span>
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-xs text-text-muted uppercase tracking-widest mb-4">
              <span className="text-accent-cyan opacity-60">▶ </span>Navigation
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-mono text-xs text-text-secondary hover:text-accent-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-xs text-text-muted uppercase tracking-widest mb-4">
              <span className="text-accent-cyan opacity-60">▶ </span>Contact
            </p>
            <div className="space-y-2.5">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-accent-cyan transition-colors"
              >
                <Mail className="w-3.5 h-3.5" /> {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-accent-cyan transition-colors"
              >
                <Github className="w-3.5 h-3.5" /> github
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-accent-cyan transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" /> linkedin
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderTop: '1px solid rgba(0,229,255,0.07)' }}
        >
          <p className="font-mono text-xs text-text-muted">
            © 2025–2026 {profile.prenom} {profile.nom} · EPHEC BAC 3 TI
          </p>
          <p className="font-mono text-xs text-text-muted opacity-60">
            deadline: 12/05/2026 · 11:00
          </p>
        </div>
      </div>
    </footer>
  )
}
