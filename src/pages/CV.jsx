import { Download, Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react'
import { profile } from '../data/profile'
import Section, { SectionHeader } from '../components/ui/Section'
import ProgressBar from '../components/ui/ProgressBar'

function Tag({ children }) {
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 font-mono text-xs text-text-secondary"
      style={{ background: 'rgba(22,37,64,0.8)', border: '1px solid rgba(0,229,255,0.1)', borderRadius: '2px' }}
    >
      {children}
    </span>
  )
}

function CVBlock({ title, children }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <span className="font-mono text-xs text-accent-cyan opacity-50">▶</span>
        <h3 className="font-mono text-xs tracking-widest uppercase text-text-muted">{title}</h3>
        <div className="flex-1 h-px opacity-20" style={{ background: 'rgba(0,229,255,1)' }} />
      </div>
      {children}
    </div>
  )
}

function TimelineItem({ title, subtitle, period, badge, description }) {
  return (
    <div className="relative pl-5 pb-6 last:pb-0" style={{ borderLeft: '1px solid rgba(0,229,255,0.12)' }}>
      <div
        className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full"
        style={{ background: '#00e5ff', boxShadow: '0 0 6px rgba(0,229,255,0.6)' }}
      />
      <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
        <p className="font-semibold text-text-primary text-sm">{title}</p>
        {badge && (
          <span
            className="font-mono text-xs px-2 py-0.5"
            style={{ background: 'rgba(0,229,255,0.1)', color: '#00e5ff', border: '1px solid rgba(0,229,255,0.2)', borderRadius: '2px' }}
          >
            {badge}
          </span>
        )}
      </div>
      <p className="text-text-secondary text-sm mb-0.5">{subtitle}</p>
      <p className="font-mono text-xs text-text-muted mb-2">{period}</p>
      {description && <p className="text-text-secondary text-sm leading-relaxed">{description}</p>}
    </div>
  )
}

export default function CV() {
  return (
    <div className="pt-14">
      <Section>
        <SectionHeader label="Curriculum Vitae" title="Mon Parcours" index={0} />

        {/* Download */}
        <div className="mb-10">
          <button
            onClick={() => alert('Remplacez ce lien par votre CV PDF.')}
            className="btn-primary"
          >
            <Download className="w-3.5 h-3.5" /> TÉLÉCHARGER LE CV PDF
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ── LEFT ─────────────────────────────── */}
          <div className="lg:col-span-1">
            {/* Identity card */}
            <div
              className="p-5 mb-6"
              style={{ background: 'rgba(10,22,40,0.8)', border: '1px solid rgba(0,229,255,0.12)', borderRadius: '4px' }}
            >
              <h2 className="text-xl font-extrabold text-text-bright mb-0.5">
                {profile.prenom} {profile.nom}
              </h2>
              <p className="text-xs text-accent-cyan opacity-70 mb-4 font-mono">{profile.objectifProfessionnel}</p>
              <div className="space-y-2.5">
                {[
                  { href: `mailto:${profile.email}`, icon: Mail, label: profile.email },
                  { href: `tel:${profile.telephone}`, icon: Phone, label: profile.telephone },
                  { href: null, icon: MapPin, label: profile.localisation },
                  { href: profile.github, icon: Github, label: 'GitHub' },
                  { href: profile.linkedin, icon: Linkedin, label: 'LinkedIn' },
                ].map(({ href, icon: Icon, label }) =>
                  href ? (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-accent-cyan transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5 flex-shrink-0" /> {label}
                    </a>
                  ) : (
                    <div key={label} className="flex items-center gap-2 font-mono text-xs text-text-secondary">
                      <Icon className="w-3.5 h-3.5 flex-shrink-0" /> {label}
                    </div>
                  )
                )}
              </div>
            </div>

            <CVBlock title="Formation">
              {profile.formation.map((f, i) => (
                <TimelineItem
                  key={i}
                  title={f.diplome}
                  subtitle={`${f.ecole} — ${f.lieu}`}
                  period={f.periode}
                  badge={f.statut}
                  description={f.description}
                />
              ))}
            </CVBlock>

            <CVBlock title="Langues">
              <div className="space-y-3">
                {profile.langues.map((l) => (
                  <div key={l.langue} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-text-primary">{l.langue}</p>
                      <p className="font-mono text-xs text-text-muted">{l.niveau}</p>
                    </div>
                    <span
                      className="font-mono text-xs px-2 py-0.5"
                      style={{ background: 'rgba(22,37,64,0.8)', border: '1px solid rgba(0,229,255,0.1)', borderRadius: '2px', color: '#5f8fb4' }}
                    >
                      {l.code}
                    </span>
                  </div>
                ))}
              </div>
            </CVBlock>

            <CVBlock title="Soft Skills">
              <div className="space-y-3">
                {profile.softSkills.map((s) => (
                  <div key={s.nom}>
                    <p className="text-xs font-semibold text-text-primary mb-0.5">{s.nom}</p>
                    <p className="font-mono text-xs text-text-muted leading-relaxed">{s.description}</p>
                  </div>
                ))}
              </div>
            </CVBlock>
          </div>

          {/* ── RIGHT ────────────────────────────── */}
          <div className="lg:col-span-2">
            <CVBlock title="Compétences Techniques">
              <div className="space-y-5 mb-6">
                {profile.competencesTechniques.map((cat) => (
                  <div key={cat.categorie}>
                    <p className="font-mono text-xs text-text-muted mb-2 opacity-70">{cat.categorie}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.items.map((item) => <Tag key={item}>{item}</Tag>)}
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-4 pt-5" style={{ borderTop: '1px solid rgba(0,229,255,0.08)' }}>
                <p className="font-mono text-xs text-text-muted opacity-70">// auto-évaluation des niveaux</p>
                {profile.niveaux.map((n) => (
                  <ProgressBar key={n.competence} label={n.competence} value={n.niveau} />
                ))}
              </div>
            </CVBlock>

            <CVBlock title="Expériences Professionnelles">
              {profile.experiences.map((exp, i) => (
                <TimelineItem
                  key={i}
                  title={exp.poste}
                  subtitle={`${exp.entreprise} — ${exp.lieu}`}
                  period={`${exp.periode} · ${exp.type}`}
                  description={exp.description}
                />
              ))}
            </CVBlock>

            <CVBlock title="Projets Personnels">
              <div className="space-y-3">
                {profile.projets.map((proj) => (
                  <div
                    key={proj.nom}
                    className="t-card p-5"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="font-semibold text-text-primary text-sm">{proj.nom}</h4>
                      <a
                        href={proj.lien}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-accent-cyan transition-colors flex-shrink-0"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                    <p className="text-xs text-text-muted leading-relaxed mb-3">{proj.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.technologies.map((t) => <Tag key={t}>{t}</Tag>)}
                    </div>
                  </div>
                ))}
              </div>
            </CVBlock>
          </div>
        </div>
      </Section>
    </div>
  )
}
