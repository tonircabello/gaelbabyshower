import { useEffect, useState } from 'react'

export type CountdownPhase = 'before' | 'during' | 'after'

export interface Countdown {
  phase: CountdownPhase
  days: number
  hours: number
  minutes: number
  seconds: number
}

const EMPTY = { days: 0, hours: 0, minutes: 0, seconds: 0 }

export function useCountdown(startIso: string, durationHours: number): Countdown {
  const [now, setNow] = useState(Date.now)

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const start = Date.parse(startIso)
  const end = start + durationHours * 3_600_000

  if (now >= end) return { phase: 'after', ...EMPTY }
  if (now >= start) return { phase: 'during', ...EMPTY }

  const total = Math.floor((start - now) / 1000)
  return {
    phase: 'before',
    days: Math.floor(total / 86_400),
    hours: Math.floor((total % 86_400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  }
}
