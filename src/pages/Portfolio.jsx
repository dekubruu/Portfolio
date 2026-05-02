import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Activity, Code2, Shield, Cloud, Brain, Layout, Network, Users } from 'lucide-react'
import { themes, syntheseGlobale } from '../data/portfolio'
import { colorMap, totalHeures, totalActivites } from '../lib/utils'
import Section, { SectionHeader } from '../components/ui/Section'

const iconComponents = { Code2, Shield, Cloud, Brain, Layout, Network, Users }

// Map colour name → actual hex for the glow line
const accentHex = {
  cyan: '#00e5ff', red: '#ff4d6d', blue: '#60a5fa',
  purple: '#c084fc', green: '#05ffa1', orange: '#fb923c', yellow: '#fbbf24',
}

export default function Portfolio() {
  const total = totalHeures(themes)
  const nbActivites = totalActivites(themes)

  return (
    <div className="pt-14">
      <Section>
        <SectionHeader
          label="Activités d'Acquisition de Compétences"
          title="Portfolio"
          index={3}
          subtitle="7 thèmes, 13 activités, 50 heures documentées selon les exigences EPHEC — analyses réflexives incluses."
        />

        {/* Stats — terminal style */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-12 border font-mono"
          style={{ borderColor: 'rgba(0,229,255,0.12)', borderRadius: '4px', overflow: 'hidden' }}
        >
          {[
            { val: themes.length, label: 'thèmes', note: 'min. 6 requis' },
            { val: nbActivites, label: 'activités', note: 'min. 6 requises' },
            { val: total + 'h', label: 'apprentissage', note: '~8h/thème' },
            { val: '≤10h', label: 'max/thème', note: 'conforme EPHEC' },
          ].map((s, i) => (
            <div
              key={s.label}
              className="px-5 py-6 text-center"
              style={{
                background: 'rgba(10,22,40,0.8)',
                borderRight: i < 3 ? '1px solid rgba(0,229,255,0.08)' : 'none',
                borderBottom: '1px solid rgba(0,229,255,0.04)',
              }}
            >
              <p className="text-3xl font-bold text-gradient mb-1">{s.val}</p>
              <p className="text-xs text-accent-cyan opacity-70 tracking-widest uppercase">{s.label}</p>
              <p className="text-xs text-text-muted mt-1 opacity-60">{s.note}</p>
            </div>
          ))}
        </div>

        {/* Synthesis */}
        <div
          className="p-6 mb-14 relative overflow-hidden"
          style={{
            background: 'rgba(10,22,40,0.6)',
            border: '1px solid rgba(0,229,255,0.1)',
            borderRadius: '4px',
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(0,229,255,0.3),transparent)' }} />
          <p className="font-mono text-xs text-accent-cyan tracking-widest mb-4 opacity-70">
            // synthèse globale
          </p>
          {syntheseGlobale.split('\n\n').map((p, i) => (
            <p key={i} className="text-text-secondary leading-relaxed mb-3 last:mb-0 text-sm">
              {p}
            </p>
          ))}
        </div>

        {/* Themes list */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs text-accent-cyan opacity-50">▶</span>
          <h2 className="font-mono text-xs tracking-widest uppercase text-text-muted">Les 7 Thèmes</h2>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(0,229,255,0.15), transparent)' }} />
        </div>

        <div className="space-y-3">
          {themes.map((theme, i) => {
            const Icon = iconComponents[theme.icone] ?? Code2
            const c = colorMap[theme.couleur]
            const hex = accentHex[theme.couleur]
            return (
              <Link
                key={theme.id}
                to={`/portfolio/${theme.id}`}
                className="group t-card flex flex-col md:flex-row md:items-center gap-5 p-5 block"
              >
                {/* Line number */}
                <span className="t-number hidden md:block">{String(i + 1).padStart(2, '0')}</span>

                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded flex items-center justify-center flex-shrink-0 ${c.bg}`}
                  style={{ borderRadius: '3px', border: `1px solid ${hex}22` }}
                >
                  <Icon className={`w-5 h-5 ${c.text}`} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                    <h3 className="font-semibold text-text-primary text-sm group-hover:text-accent-cyan transition-colors">
                      {theme.titre}
                    </h3>
                    <span
                      className="font-mono text-xs px-2 py-0.5"
                      style={{
                        borderRadius: '2px',
                        background: `${hex}15`,
                        color: hex,
                        border: `1px solid ${hex}30`,
                      }}
                    >
                      {theme.couleur === 'red' ? 'faiblesse' : 'force'}
                    </span>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed line-clamp-1">
                    {theme.resume}
                  </p>
                </div>

                {/* Meta */}
                <div className="flex md:flex-col items-center md:items-end gap-4 md:gap-1.5 flex-shrink-0">
                  <span className="font-mono text-sm font-bold text-accent-cyan">{theme.heuresTotal}h</span>
                  <span className="font-mono text-xs text-text-muted">{theme.activites.length} act.</span>
                  <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-accent-cyan transition-colors hidden md:block" />
                </div>
              </Link>
            )
          })}
        </div>

        {/* EPHEC Compliance */}
        <div
          className="mt-12 p-5 font-mono text-xs"
          style={{
            background: 'rgba(0,229,255,0.03)',
            border: '1px solid rgba(0,229,255,0.12)',
            borderRadius: '4px',
          }}
        >
          <p className="text-accent-cyan opacity-70 tracking-widest mb-3">// conformité EPHEC</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-text-muted">
            {[
              '✓  7 thèmes (minimum 6 requis)',
              '✓  13 activités distinctes (minimum 6)',
              '✓  Aucun thème ne dépasse 10h',
              '✓  1 hackathon sur 3 autorisés',
              '✓  2 formations distanciel (max. 2)',
              '✓  1 formation présentiel (max. 3)',
              '✓  Analyse réflexive 1ère personne',
              '✓  Preuve nominative pour chaque activité',
            ].map((line) => (
              <span key={line} className="opacity-80">{line}</span>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
