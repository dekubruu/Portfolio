import { typeBadgeMap } from '../../lib/utils'

export default function Badge({ type, className = '' }) {
  const cls = typeBadgeMap[type] ?? 'bg-slate-400/10 text-slate-400 border border-slate-400/20'
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 font-mono text-xs tracking-wider ${cls} ${className}`}
      style={{ borderRadius: '2px' }}
    >
      {type}
    </span>
  )
}
