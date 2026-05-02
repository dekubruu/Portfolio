import { Link } from 'react-router-dom'
import {
  ArrowRight, Download, Code2, Shield, Cloud, Brain,
  Layout, Network, Users, BookOpen, Briefcase, Star, Clock,
} from 'lucide-react'
import { profile } from '../data/profile'
import { themes, syntheseGlobale } from '../data/portfolio'
import { colorMap, totalHeures, totalActivites } from '../lib/utils'
import Section, { SectionHeader } from '../components/ui/Section'

const iconComponents = { Code2, Shield, Cloud, Brain, Layout, Network, Users }

const overviewCards = [
  { to: '/cv', icon: Briefcase, title: 'Curriculum Vitae', desc: 'Formation, compétences, expériences et projets.', accent: 'rgba(0,229,255,0.15)', border: 'rgba(0,229,255,0.2)' },
  { to: '/projet-professionnel', icon: Star, title: 'Projet Professionnel', desc: "Objectif de carrière, forces, faiblesses et plan d'action.", accent: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.2)' },
  { to: '/portfolio', icon: BookOpen, title: "Portfolio d'Activités", desc: '7 thèmes, 13 activités et analyses réflexives.', accent: 'rgba(192,132,252,0.12)', border: 'rgba(192,132,252,0.2)' },
  { to: '/bilan', icon: Clock, title: 'Bilan & Auto-Évaluation', desc: 'Synthèse de la progression et plan amélioration.', accent: 'rgba(5,255,161,0.1)', border: 'rgba(5,255,161,0.2)' },
]

const stats = [
  { value: themes.length, label: 'THÈMES', unit: '' },
  { value: totalActivites(themes), label: 'ACTIVITÉS', unit: '' },
  { value: totalHeures(themes), label: 'HEURES', unit: '+' },
  { value: 1, label: 'HACKATHON', unit: '' },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────────── */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden scanlines scan-beam">
        {/* Background depth layers */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 70% 55% at 50% -5%, rgba(0,229,255,0.07) 0%, transparent 65%)',
          }}
        />
        <div className="absolute inset-0 dot-grid opacity-40" />

        {/* Main content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-20 pb-12 w-full">

          {/* Terminal window chrome */}
          <div className="flex items-center gap-2 mb-6 font-mono">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            </div>
            <div
              className="flex-1 h-6 rounded flex items-center px-3 text-xs text-text-muted"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(0,229,255,0.07)' }}
            >
              <span className="text-accent-cyan opacity-50 mr-1.5">$</span>
              portfolio.ephec.exe --init
            </div>
          </div>

          {/* Terminal frame */}
          <div className="terminal-frame noise-grain p-8 md:p-14">

            {/* Status line */}
            <div className="flex items-center gap-3 font-mono text-xs mb-8">
              <span className="text-accent-cyan animate-blink">▶</span>
              <span className="text-accent-cyan opacity-50">BAC_3_TI</span>
              <span className="text-text-muted">/</span>
              <span className="text-accent-cyan opacity-50">EPHEC_BRUXELLES</span>
              <span className="text-text-muted">/</span>
              <span className="text-accent-cyan opacity-50">2025–2026</span>
            </div>

            {/* Name — glitch animation */}
            <h1
              className="font-extrabold tracking-tight mb-3 leading-none animate-glitch"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)' }}
            >
              <span className="text-gradient">
                {profile.prenom.toUpperCase()} {profile.nom.toUpperCase()}
              </span>
            </h1>

            {/* Role */}
            <div className="flex items-center gap-3 mb-6">
              <span
                className="h-px flex-1 max-w-8"
                style={{ background: 'rgba(0,229,255,0.3)' }}
              />
              <p className="font-mono text-sm md:text-base text-text-secondary tracking-wide cursor">
                {profile.objectifProfessionnel}
              </p>
            </div>

            {/* Divider */}
            <div className="t-divider" />

            {/* Accroche */}
            <p className="text-text-secondary leading-relaxed mb-10 max-w-2xl text-sm md:text-base">
              {profile.accroche}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link to="/portfolio" className="btn-primary">
                <span>PORTFOLIO</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link to="/cv" className="btn-ghost">
                <Download className="w-3.5 h-3.5" />
                <span>TÉLÉCHARGER CV</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #060c18, transparent)' }}
        />
      </div>

      {/* ── STATS ──────────────────────────────────────────────────── */}
      <div
        className="border-y"
        style={{
          borderColor: 'rgba(0,229,255,0.08)',
          background: 'rgba(10,22,40,0.6)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-0 divide-x"
          style={{ divideColor: 'rgba(0,229,255,0.08)' }}
        >
          {stats.map((s, i) => (
            <div key={s.label} className="text-center px-6 py-4" style={{ borderColor: 'rgba(0,229,255,0.08)', borderRight: i < 3 ? '1px solid rgba(0,229,255,0.08)' : 'none' }}>
              <p className="font-mono text-4xl md:text-5xl font-bold text-gradient leading-none">
                {s.value}{s.unit}
              </p>
              <p className="font-mono text-xs text-text-muted tracking-widest mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── OVERVIEW CARDS ─────────────────────────────────────────── */}
      <Section>
        <SectionHeader
          label="Portfolio Académique EPHEC"
          title="Structure du Portfolio"
          index={1}
          subtitle="Ce portfolio répond aux exigences EPHEC pour le BAC 3 TI — pages, analyses réflexives et conformité institutionnelle."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {overviewCards.map((card) => {
            const Icon = card.icon
            return (
              <Link
                key={card.to}
                to={card.to}
                className="group t-card p-6 block"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                    style={{
                      background: card.accent,
                      border: `1px solid ${card.border}`,
                      borderRadius: '4px',
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: '#00e5ff' }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-text-primary mb-1 group-hover:text-accent-cyan transition-colors text-sm">
                      {card.title}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed">{card.desc}</p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-text-muted opacity-0 group-hover:opacity-100 group-hover:text-accent-cyan transition-all flex-shrink-0 mt-0.5" />
                </div>
              </Link>
            )
          })}
        </div>
      </Section>

      {/* ── THEMES PREVIEW ─────────────────────────────────────────── */}
      <Section className="pt-0">
        <SectionHeader
          label="Activités d'Acquisition de Compétences"
          title="Les 7 Thèmes"
          index={2}
          subtitle={syntheseGlobale.split('\n\n')[0]}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {themes.map((theme) => {
            const Icon = iconComponents[theme.icone] ?? Code2
            const c = colorMap[theme.couleur]
            return (
              <Link
                key={theme.id}
                to={`/portfolio/${theme.id}`}
                className="group t-card p-5 block"
              >
                {/* Top accent line in theme color */}
                <div
                  className={`absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  style={{
                    background: `linear-gradient(90deg, transparent, ${
                      theme.couleur === 'cyan' ? '#00e5ff'
                      : theme.couleur === 'red' ? '#ff4d6d'
                      : theme.couleur === 'blue' ? '#60a5fa'
                      : theme.couleur === 'purple' ? '#c084fc'
                      : theme.couleur === 'green' ? '#05ffa1'
                      : theme.couleur === 'orange' ? '#fb923c'
                      : '#fbbf24'
                    }, transparent)`,
                  }}
                />
                <div className={`w-8 h-8 rounded flex items-center justify-center mb-4 ${c.bg}`} style={{ borderRadius: '3px' }}>
                  <Icon className={`w-4 h-4 ${c.text}`} />
                </div>
                <h3 className="font-semibold text-text-primary text-xs mb-3 leading-snug group-hover:text-accent-cyan transition-colors">
                  {theme.titre}
                </h3>
                <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
                  <span className="text-accent-cyan opacity-60">{theme.heuresTotal}h</span>
                  <span className="opacity-30">·</span>
                  <span>{theme.activites.length} act.</span>
                </div>
              </Link>
            )
          })}
          {/* See all */}
          <Link
            to="/portfolio"
            className="group t-card p-5 flex flex-col items-center justify-center gap-2 text-center"
          >
            <span className="font-mono text-xs text-text-muted group-hover:text-accent-cyan transition-colors">
              voir_tout()
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-text-muted group-hover:text-accent-cyan transition-colors" />
          </Link>
        </div>
      </Section>
    </>
  )
}
