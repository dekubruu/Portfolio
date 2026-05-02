export const colorMap = {
  cyan: {
    text: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/30',
    dot: 'bg-cyan-400',
    hover: 'hover:border-cyan-400/50',
    badge: 'bg-cyan-400/15 text-cyan-300 border border-cyan-400/30',
  },
  red: {
    text: 'text-red-400',
    bg: 'bg-red-400/10',
    border: 'border-red-400/30',
    dot: 'bg-red-400',
    hover: 'hover:border-red-400/50',
    badge: 'bg-red-400/15 text-red-300 border border-red-400/30',
  },
  blue: {
    text: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/30',
    dot: 'bg-blue-400',
    hover: 'hover:border-blue-400/50',
    badge: 'bg-blue-400/15 text-blue-300 border border-blue-400/30',
  },
  purple: {
    text: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/30',
    dot: 'bg-purple-400',
    hover: 'hover:border-purple-400/50',
    badge: 'bg-purple-400/15 text-purple-300 border border-purple-400/30',
  },
  green: {
    text: 'text-green-400',
    bg: 'bg-green-400/10',
    border: 'border-green-400/30',
    dot: 'bg-green-400',
    hover: 'hover:border-green-400/50',
    badge: 'bg-green-400/15 text-green-300 border border-green-400/30',
  },
  orange: {
    text: 'text-orange-400',
    bg: 'bg-orange-400/10',
    border: 'border-orange-400/30',
    dot: 'bg-orange-400',
    hover: 'hover:border-orange-400/50',
    badge: 'bg-orange-400/15 text-orange-300 border border-orange-400/30',
  },
  yellow: {
    text: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/30',
    dot: 'bg-yellow-400',
    hover: 'hover:border-yellow-400/50',
    badge: 'bg-yellow-400/15 text-yellow-300 border border-yellow-400/30',
  },
}

export const typeBadgeMap = {
  distanciel: 'bg-blue-400/15 text-blue-300 border border-blue-400/30',
  présentiel: 'bg-green-400/15 text-green-300 border border-green-400/30',
  hackathon: 'bg-purple-400/15 text-purple-300 border border-purple-400/30',
  projet: 'bg-orange-400/15 text-orange-300 border border-orange-400/30',
  conférence: 'bg-cyan-400/15 text-cyan-300 border border-cyan-400/30',
  certification: 'bg-amber-400/15 text-amber-300 border border-amber-400/30',
  visite: 'bg-teal-400/15 text-teal-300 border border-teal-400/30',
  événement: 'bg-rose-400/15 text-rose-300 border border-rose-400/30',
  salon: 'bg-pink-400/15 text-pink-300 border border-pink-400/30',
}

export function totalHeures(themes) {
  return themes.reduce((sum, t) => sum + t.heuresTotal, 0)
}

export function totalActivites(themes) {
  return themes.reduce((sum, t) => sum + t.activites.length, 0)
}
