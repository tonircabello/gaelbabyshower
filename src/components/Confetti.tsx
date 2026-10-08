import { useEffect, useState } from 'react'
import { cssVars } from '../lib/css'
import './Confetti.css'

interface Piece {
  id: number
  left: number
  drift: number
  spin: number
  delay: number
  duration: number
  color: string
  round: boolean
}

const COLORS = ['#FFD76A', '#FF9E8E', '#9ED8B8', '#7DB9E8', '#C8B6F0', '#FFFFFF']
const COUNT = 70
const LIFETIME_MS = 5000

const random = (min: number, max: number) => min + Math.random() * (max - min)

const createPieces = (): Piece[] =>
  Array.from({ length: COUNT }, (_, id) => ({
    id,
    left: random(0, 100),
    drift: random(-120, 120),
    spin: random(360, 1080) * (Math.random() < 0.5 ? -1 : 1),
    delay: random(0, 0.6),
    duration: random(2.4, 4),
    color: COLORS[id % COLORS.length],
    round: Math.random() < 0.35,
  }))

// Mount it (with a fresh key) to throw a burst of confetti; it asks to be unmounted once the pieces have fallen.
export default function Confetti({ onDone }: { onDone: () => void }) {
  const [pieces] = useState(createPieces)

  useEffect(() => {
    const timer = window.setTimeout(onDone, LIFETIME_MS)
    return () => window.clearTimeout(timer)
  }, [onDone])

  return (
    <div className="confetti" aria-hidden="true">
      {pieces.map(({ id, left, drift, spin, delay, duration, color, round }) => (
        <span
          key={id}
          className={`confetti__piece${round ? ' confetti__piece--round' : ''}`}
          style={cssVars({
            '--x': `${left}%`,
            '--drift': `${drift}px`,
            '--spin': `${spin}deg`,
            '--delay': `${delay}s`,
            '--dur': `${duration}s`,
            '--color': color,
          })}
        />
      ))}
    </div>
  )
}
