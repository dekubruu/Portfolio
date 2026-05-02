export default function ProgressBar({ label, value, color = 'cyan', showValue = true }) {
  const barColor = {
    cyan: 'bg-accent-cyan',
    green: 'bg-accent-green',
    blue: 'bg-blue-400',
    amber: 'bg-accent-amber',
    purple: 'bg-accent-purple',
  }[color] ?? 'bg-accent-cyan'

  const glowColor = {
    cyan: 'rgba(0,229,255,0.5)',
    green: 'rgba(5,255,161,0.5)',
    blue: 'rgba(96,165,250,0.5)',
    amber: 'rgba(245,158,11,0.5)',
    purple: 'rgba(192,132,252,0.5)',
  }[color] ?? 'rgba(0,229,255,0.5)'

  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-text-secondary">{label}</span>
        {showValue && (
          <span className="font-mono text-xs text-accent-cyan opacity-70">{value}%</span>
        )}
      </div>
      <div className="h-1 bg-bg-elevated rounded-none overflow-hidden" style={{ borderRadius: '1px' }}>
        <div
          className={`h-full ${barColor} transition-all duration-700`}
          style={{
            width: `${value}%`,
            boxShadow: `0 0 8px ${glowColor}`,
            borderRadius: '1px',
          }}
        />
      </div>
    </div>
  )
}

export function DeltaBar({ competence, avant, apres }) {
  const gain = apres - avant
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-baseline">
        <span className="text-sm text-text-primary font-medium">{competence}</span>
        <span className="font-mono text-xs text-accent-green">+{gain}%</span>
      </div>
      <div className="relative h-1.5 bg-bg-elevated overflow-hidden" style={{ borderRadius: '1px' }}>
        {/* Before bar */}
        <div
          className="absolute inset-y-0 left-0 bg-border-light"
          style={{ width: `${avant}%`, borderRadius: '1px' }}
        />
        {/* After bar (glow) */}
        <div
          className="absolute inset-y-0 left-0 bg-accent-cyan transition-all duration-700"
          style={{
            width: `${apres}%`,
            opacity: 0.85,
            borderRadius: '1px',
            boxShadow: '0 0 8px rgba(0,229,255,0.5)',
          }}
        />
      </div>
      <div className="flex justify-between font-mono text-xs text-text-muted">
        <span>avant: {avant}%</span>
        <span>après: {apres}%</span>
      </div>
    </div>
  )
}
