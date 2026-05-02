export default function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`max-w-6xl mx-auto px-6 py-16 ${className}`}>
      {children}
    </section>
  )
}

export function SectionHeader({ label, title, subtitle, index }) {
  return (
    <div className="mb-12">
      {/* Terminal-style label row */}
      <div className="flex items-center gap-4 mb-4">
        {index !== undefined && (
          <span className="font-mono text-xs text-text-muted select-none">
            {String(index).padStart(2, '0')}
          </span>
        )}
        {label && (
          <div className="flex items-center gap-2">
            <span className="text-accent-cyan text-xs opacity-60 font-mono">▶</span>
            <p className="font-mono text-xs text-accent-cyan tracking-widest uppercase opacity-80">
              {label}
            </p>
          </div>
        )}
        <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(0,229,255,0.2), transparent)' }} />
      </div>

      <h2 className="text-3xl md:text-4xl font-extrabold text-text-bright mb-3 tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="text-text-secondary text-base max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
