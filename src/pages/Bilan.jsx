import { TrendingUp, AlertCircle, CheckCircle, Target } from 'lucide-react'
import { bilan } from '../data/bilan'
import Section, { SectionHeader } from '../components/ui/Section'
import { DeltaBar } from '../components/ui/ProgressBar'

export default function Bilan() {
  const { synthese, apprentissagesCles, progressionCompetences, lacunesRestantes, planAmelioration, reflexionFinale } = bilan

  return (
    <div className="pt-14">
      <Section>
        <SectionHeader label="Self-Assessment" title="Year-End Review" index={4}
          subtitle="An honest assessment of my progress, identification of gaps, and a concrete improvement plan."
        />

        {/* Synthesis */}
        <div
          className="relative p-6 mb-14 overflow-hidden"
          style={{ background: 'rgba(10,22,40,0.8)', border: '1px solid rgba(0,229,255,0.12)', borderRadius: '4px' }}
        >
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(0,229,255,0.3),transparent)' }} />
          <p className="font-mono text-xs text-accent-cyan opacity-60 tracking-widest mb-4">// general_synthesis</p>
          {synthese.split('\n\n').map((p, i) => (
            <p key={i} className="text-text-secondary leading-relaxed mb-3 last:mb-0">{p}</p>
          ))}
        </div>

        {/* Key learnings */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle className="w-4 h-4 text-accent-green" />
            <h2 className="text-xl font-bold text-text-bright">Key Learnings</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {apprentissagesCles.map((item, i) => (
              <div
                key={i}
                className="t-card p-5"
              >
                <div className="flex items-start gap-2 mb-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                    style={{ background: '#05ffa1', boxShadow: '0 0 4px #05ffa1' }}
                  />
                  <h3 className="font-semibold text-text-primary text-sm">{item.titre}</h3>
                </div>
                <p className="text-xs text-text-muted leading-relaxed pl-3.5">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skill progression */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-4 h-4 text-accent-cyan" />
            <h2 className="text-xl font-bold text-text-bright">Skill Progression</h2>
          </div>
          <div
            className="p-7 relative overflow-hidden"
            style={{ background: 'rgba(10,22,40,0.7)', border: '1px solid rgba(0,229,255,0.1)', borderRadius: '4px' }}
          >
            <p className="font-mono text-xs text-text-muted mb-6">
              // before vs. after — self-assessment (0–100%)
            </p>
            <div className="space-y-6">
              {progressionCompetences.map((item) => (
                <DeltaBar key={item.competence} {...item} />
              ))}
            </div>
          </div>
        </div>

        {/* Remaining gaps */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <AlertCircle className="w-4 h-4 text-amber-400" />
            <h2 className="text-xl font-bold text-text-bright">Remaining Gaps</h2>
          </div>
          <div className="space-y-2.5">
            {lacunesRestantes.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 px-4 py-3"
                style={{ background: 'rgba(245,158,11,0.04)', border: '1px solid rgba(245,158,11,0.15)', borderRadius: '3px' }}
              >
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: '#f59e0b' }} />
                <p className="text-sm text-text-secondary leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Plan */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Target className="w-4 h-4 text-accent-cyan" />
            <h2 className="text-xl font-bold text-text-bright">Improvement Plan</h2>
          </div>
          <div
            className="relative p-6 overflow-hidden"
            style={{ background: 'rgba(0,229,255,0.03)', border: '1px solid rgba(0,229,255,0.12)', borderRadius: '4px' }}
          >
            {planAmelioration.split('\n\n').map((block, i) => {
              if (block.startsWith('**')) {
                const parts = block.split('**').filter(Boolean)
                return (
                  <div key={i} className="mb-4 last:mb-0">
                    <p className="font-semibold text-text-primary text-sm mb-1">{parts[0]}</p>
                    {parts[1] && (
                      <p className="text-xs text-text-secondary leading-relaxed">
                        {parts[1].replace(/^:\s*/, '')}
                      </p>
                    )}
                  </div>
                )
              }
              return (
                <p key={i} className="text-text-secondary leading-relaxed mb-3 last:mb-0 text-sm">{block}</p>
              )
            })}
          </div>
        </div>

        {/* Final reflection */}
        <div
          className="relative p-8 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(10,22,40,0.95) 0%, rgba(6,12,24,0.98) 100%)',
            border: '1px solid rgba(0,229,255,0.2)',
            borderRadius: '6px',
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(0,229,255,0.5),transparent)' }} />
          <p className="font-mono text-xs text-accent-cyan opacity-60 tracking-widest mb-5">
            // final_reflection — first person
          </p>
          {reflexionFinale.split('\n\n').map((p, i) => (
            <p key={i} className="text-text-secondary leading-relaxed mb-4 last:mb-0">{p}</p>
          ))}
        </div>
      </Section>
    </div>
  )
}
