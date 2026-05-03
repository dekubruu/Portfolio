import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, FileText, BookOpen, Lightbulb, Link2, ImageIcon, Code2, Shield, Cloud, Brain, Layout, Network, Users } from 'lucide-react'
import { themes } from '../data/portfolio'
import { colorMap } from '../lib/utils'
import Badge from '../components/ui/Badge'
import Section from '../components/ui/Section'

const iconComponents = { Code2, Shield, Cloud, Brain, Layout, Network, Users }

const accentHex = {
  cyan: '#00e5ff', red: '#ff4d6d', blue: '#60a5fa',
  purple: '#c084fc', green: '#05ffa1', orange: '#fb923c', yellow: '#fbbf24',
}

function ReflexiveBlock({ icon: Icon, label, children, hex }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-3 font-mono text-xs tracking-widest">
        <Icon className="w-3.5 h-3.5" style={{ color: hex }} />
        <span style={{ color: hex, opacity: 0.7 }}>{label}</span>
      </div>
      <div className="pl-5 border-l space-y-2" style={{ borderColor: `${hex}25` }}>
        {children}
      </div>
    </div>
  )
}

function ActivityCard({ activite, hex, c }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: 'rgba(10,22,40,0.8)',
        border: `1px solid rgba(22,37,64,0.9)`,
        borderRadius: '6px',
      }}
    >
      {/* Accent top line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${hex}50, transparent)` }} />

      {/* Header */}
      <div
        className="px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        style={{ borderBottom: '1px solid rgba(22,37,64,0.8)' }}
      >
        <div className="flex-1">
          <h3 className="font-bold text-text-bright text-base mb-2 leading-tight">
            {activite.titre}
          </h3>
          <div className="flex flex-wrap items-center gap-2">
            <Badge type={activite.typeBadge} />
            <span className="font-mono text-xs text-text-muted">{activite.date}</span>
          </div>
        </div>
        {/* Hours badge */}
        <div
          className="flex items-center gap-2 px-4 py-2.5 flex-shrink-0 font-mono"
          style={{
            background: `${hex}10`,
            border: `1px solid ${hex}25`,
            borderRadius: '3px',
          }}
        >
          <Clock className="w-3.5 h-3.5" style={{ color: hex }} />
          <span className="text-xl font-bold" style={{ color: hex }}>{activite.heuresComptees}</span>
          <span className="text-xs text-text-muted">hours</span>
        </div>
      </div>

      {/* Body */}
      <div className="px-6 py-6">
        <ReflexiveBlock icon={FileText} label="// context & framework" hex={hex}>
          {activite.contexte.split('\n\n').map((p, i) => (
            <p key={i} className="text-sm text-text-secondary leading-relaxed">{p}</p>
          ))}
        </ReflexiveBlock>

        <ReflexiveBlock icon={BookOpen} label="// facts & learnings" hex="#60a5fa">
          {activite.apprentissages.split('\n\n').map((p, i) => (
            <p key={i} className="text-sm text-text-secondary leading-relaxed">{p}</p>
          ))}
        </ReflexiveBlock>

        {/* Reflective analysis — highlighted */}
        <div
          className="rounded p-5 mb-6 relative overflow-hidden"
          style={{
            background: `${hex}06`,
            border: `1px solid ${hex}20`,
            borderRadius: '4px',
          }}
        >
          <div className="absolute top-0 left-0 w-0.5 h-full" style={{ background: `linear-gradient(to bottom, ${hex}, ${hex}20)` }} />
          <div className="flex items-center gap-2 font-mono text-xs mb-4 pl-3" style={{ color: hex, opacity: 0.8 }}>
            <Lightbulb className="w-3.5 h-3.5" />
            <span className="tracking-widest">// reflective analysis — first person (I)</span>
          </div>
          <div className="pl-3 space-y-3">
            {activite.analyse.split('\n\n').map((p, i) => (
              <p key={i} className="text-sm text-text-secondary leading-relaxed">{p}</p>
            ))}
          </div>
        </div>

        <ReflexiveBlock icon={Link2} label="// link with professional project" hex="#f59e0b">
          <p className="text-sm text-text-secondary leading-relaxed">{activite.lienObjectif}</p>
        </ReflexiveBlock>

        {/* Proof */}
        <div
          className="flex items-start gap-3 px-4 py-3 font-mono text-xs"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(22,37,64,0.8)',
            borderRadius: '3px',
          }}
        >
          <ImageIcon className="w-3.5 h-3.5 text-text-muted flex-shrink-0 mt-0.5" />
          <div>
            <span className="text-text-muted tracking-widest block mb-1">proof_of_participation:</span>
            <span className="text-text-secondary leading-relaxed">{activite.preuve}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ThemeDetail() {
  const { slug } = useParams()
  const theme = themes.find((t) => t.id === slug)

  if (!theme) {
    return (
      <div className="pt-32 text-center font-mono">
        <p className="text-text-muted mb-4 text-sm">404 — theme not found.</p>
        <Link to="/portfolio" className="text-accent-cyan hover:underline text-xs">
          ← cd ../portfolio
        </Link>
      </div>
    )
  }

  const Icon = iconComponents[theme.icone] ?? Code2
  const c = colorMap[theme.couleur]
  const hex = accentHex[theme.couleur]

  return (
    <div className="pt-14">
      <Section>
        {/* Back */}
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 font-mono text-xs text-text-muted hover:text-accent-cyan transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> cd ../portfolio
        </Link>

        {/* Theme header */}
        <div
          className="relative p-7 mb-10 overflow-hidden"
          style={{
            background: `linear-gradient(135deg, rgba(10,22,40,0.95) 0%, rgba(6,12,24,0.98) 100%)`,
            border: `1px solid ${hex}20`,
            borderRadius: '6px',
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${hex}50, transparent)` }} />
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div
              className={`w-14 h-14 flex items-center justify-center flex-shrink-0 ${c.bg}`}
              style={{ borderRadius: '6px', border: `1px solid ${hex}25` }}
            >
              <Icon className={`w-7 h-7 ${c.text}`} />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-extrabold text-text-bright mb-2">{theme.titre}</h1>
              <p className="text-sm text-text-muted mb-3 leading-relaxed">{theme.resume}</p>
              <div className="flex flex-wrap gap-5 font-mono text-sm">
                <span className="flex items-center gap-1.5 text-text-secondary">
                  <Clock className="w-3.5 h-3.5" />
                  <strong style={{ color: hex }}>{theme.heuresTotal}h</strong>
                  <span className="text-text-muted text-xs">total</span>
                </span>
                <span className="flex items-center gap-1.5 text-text-secondary">
                  <FileText className="w-3.5 h-3.5" />
                  <strong>{theme.activites.length}</strong>
                  <span className="text-text-muted text-xs">activit{theme.activites.length > 1 ? 'ies' : 'y'}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-5" style={{ borderTop: `1px solid ${hex}10` }}>
            <p className="font-mono text-xs text-text-muted mb-1">// link with professional project</p>
            <p className="text-sm text-text-secondary italic">{theme.lienForce}</p>
          </div>
        </div>

        {/* Activities */}
        <div className="space-y-6">
          {theme.activites.map((activite, i) => (
            <div key={activite.id}>
              <div className="flex items-center gap-3 mb-4 font-mono text-xs text-text-muted">
                <span style={{ color: hex, opacity: 0.6 }}>▶</span>
                <span>activity_{String(i + 1).padStart(2, '0')}.md</span>
                <div className="flex-1 h-px opacity-20" style={{ background: hex }} />
              </div>
              <ActivityCard activite={activite} hex={hex} c={c} />
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
