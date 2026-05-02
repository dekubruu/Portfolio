import { Target, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react'
import { projetProfessionnel } from '../data/projet'
import Section, { SectionHeader } from '../components/ui/Section'

function ForceCard({ titre, description }) {
  return (
    <div
      className="p-4 relative overflow-hidden"
      style={{
        background: 'rgba(5,255,161,0.04)',
        border: '1px solid rgba(5,255,161,0.15)',
        borderRadius: '4px',
      }}
    >
      <div className="absolute top-0 left-0 w-0.5 h-full" style={{ background: 'linear-gradient(to bottom, #05ffa1, #05ffa120)' }} />
      <div className="pl-3">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle className="w-3.5 h-3.5 text-accent-green flex-shrink-0" />
          <h4 className="font-semibold text-text-primary text-sm">{titre}</h4>
        </div>
        <p className="text-xs text-text-muted leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

function FaiblesseCard({ titre, description, plan }) {
  return (
    <div
      className="p-4 relative overflow-hidden"
      style={{
        background: 'rgba(245,158,11,0.04)',
        border: '1px solid rgba(245,158,11,0.15)',
        borderRadius: '4px',
      }}
    >
      <div className="absolute top-0 left-0 w-0.5 h-full" style={{ background: 'linear-gradient(to bottom, #f59e0b, #f59e0b20)' }} />
      <div className="pl-3">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
          <h4 className="font-semibold text-text-primary text-sm">{titre}</h4>
        </div>
        <p className="text-xs text-text-muted leading-relaxed mb-3">{description}</p>
        <div className="pl-2" style={{ borderLeft: '1px solid rgba(245,158,11,0.2)' }}>
          <p className="font-mono text-xs text-amber-400 opacity-70 mb-0.5">// plan d'action</p>
          <p className="text-xs text-text-muted leading-relaxed">{plan}</p>
        </div>
      </div>
    </div>
  )
}

const horizonData = [
  { hex: '#00e5ff', horizon: 'COURT_TERME', periode: '0–2 ans' },
  { hex: '#60a5fa', horizon: 'MOYEN_TERME', periode: '2–5 ans' },
  { hex: '#c084fc', horizon: 'LONG_TERME', periode: '5+ ans' },
]

export default function ProjetProfessionnel() {
  const { objectif, metiers, forces, faiblesses, planAction, synthese } = projetProfessionnel

  return (
    <div className="pt-14">
      <Section>
        <SectionHeader label="Projet Professionnel" title="Mon Objectif de Carrière" index={2} />

        {/* Objective terminal block */}
        <div
          className="relative p-8 mb-14 overflow-hidden"
          style={{
            background: 'rgba(10,22,40,0.9)',
            border: '1px solid rgba(0,229,255,0.2)',
            borderRadius: '6px',
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(0,229,255,0.5),transparent)' }} />
          <div className="flex items-center gap-3 mb-5">
            <div style={{ width: 36, height: 36, background: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.2)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Target className="w-4 h-4 text-accent-cyan" />
            </div>
            <span className="font-mono text-xs text-accent-cyan opacity-60 tracking-widest">// objectif_professionnel</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-text-bright mb-5">{objectif.titre}</h2>
          {objectif.description.split('\n\n').map((p, i) => (
            <p key={i} className="text-text-secondary leading-relaxed mb-3 last:mb-0 text-sm">{p}</p>
          ))}
        </div>

        {/* Motivation */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <TrendingUp className="w-5 h-5 text-accent-cyan" />
            <h2 className="text-xl font-bold text-text-bright">Motivation</h2>
          </div>
          {objectif.motivation.split('\n\n').map((p, i) => (
            <p key={i} className="text-text-secondary leading-relaxed mb-3 last:mb-0">{p}</p>
          ))}
        </div>

        {/* Forces & Faiblesses */}
        <div className="mb-14">
          <h2 className="text-xl font-bold text-text-bright mb-8">Forces & Faiblesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-mono text-xs text-accent-green tracking-widest opacity-70 mb-4">
                ▶ FORCES IDENTIFIÉES
              </p>
              <div className="space-y-3">
                {forces.map((f) => <ForceCard key={f.titre} {...f} />)}
              </div>
            </div>
            <div>
              <p className="font-mono text-xs text-amber-400 tracking-widest opacity-70 mb-4">
                △ FAIBLESSES & PLANS D'ACTION
              </p>
              <div className="space-y-3">
                {faiblesses.map((f) => <FaiblesseCard key={f.titre} {...f} />)}
              </div>
            </div>
          </div>
        </div>

        {/* Career timeline */}
        <div className="mb-14">
          <h2 className="text-xl font-bold text-text-bright mb-8">Plan de Carrière</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {metiers.map((m, i) => {
              const { hex } = horizonData[i]
              return (
                <div
                  key={m.horizon}
                  className="relative p-5 overflow-hidden"
                  style={{ background: `${hex}06`, border: `1px solid ${hex}20`, borderRadius: '4px' }}
                >
                  <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg,transparent,${hex}50,transparent)` }} />
                  <span
                    className="font-mono text-xs px-2 py-0.5 mb-4 inline-block"
                    style={{ background: `${hex}12`, color: hex, border: `1px solid ${hex}25`, borderRadius: '2px' }}
                  >
                    {horizonData[i].horizon} · {m.periode}
                  </span>
                  <h3 className="font-bold text-text-primary mb-2 text-sm">{m.poste}</h3>
                  <p className="text-xs text-text-muted leading-relaxed mb-4">{m.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {m.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-xs px-1.5 py-0.5"
                        style={{ background: 'rgba(22,37,64,0.8)', border: `1px solid ${hex}15`, borderRadius: '2px', color: '#5f8fb4' }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Action plan */}
        <div className="mb-14">
          <h2 className="text-xl font-bold text-text-bright mb-8">Plan d'Action Concret</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'COURT_TERME', items: planAction.courtTerme, hex: '#00e5ff' },
              { label: 'MOYEN_TERME', items: planAction.moyenTerme, hex: '#60a5fa' },
              { label: 'LONG_TERME', items: planAction.longTerme, hex: '#c084fc' },
            ].map((col) => (
              <div key={col.label}>
                <p className="font-mono text-xs tracking-widest mb-4 opacity-70" style={{ color: col.hex }}>
                  ▶ {col.label}
                </p>
                <ul className="space-y-2.5">
                  {col.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                        style={{ background: col.hex, boxShadow: `0 0 4px ${col.hex}` }}
                      />
                      <span className="text-xs text-text-secondary leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Synthesis */}
        <div
          className="relative p-7 overflow-hidden"
          style={{ background: 'rgba(10,22,40,0.8)', border: '1px solid rgba(0,229,255,0.12)', borderRadius: '6px' }}
        >
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(0,229,255,0.3),transparent)' }} />
          <p className="font-mono text-xs text-accent-cyan opacity-60 tracking-widest mb-4">// synthèse</p>
          {synthese.split('\n\n').map((p, i) => (
            <p key={i} className="text-text-secondary leading-relaxed mb-3 last:mb-0 text-sm">{p}</p>
          ))}
        </div>
      </Section>
    </div>
  )
}
