import { cssVars } from '../lib/css'
import './Cloud.css'

interface CloudProps {
  className?: string
  duration?: number
  delay?: number
  face?: boolean
}

export default function Cloud({ className = '', duration = 16, delay = 0, face = false }: CloudProps) {
  return (
    <svg
      className={`cloud ${className}`.trim()}
      viewBox="0 0 144 76"
      aria-hidden="true"
      style={cssVars({ '--dur': `${duration}s`, '--delay': `${delay}s` })}
    >
      <g className="cloud__shape">
        <circle cx="40" cy="48" r="22" />
        <circle cx="70" cy="36" r="30" />
        <circle cx="104" cy="46" r="24" />
        <rect x="20" y="46" width="104" height="26" rx="13" />
      </g>
      {face && (
        <g className="cloud__face">
          <circle cx="58" cy="52" r="3" />
          <circle cx="82" cy="52" r="3" />
          <ellipse className="cloud__cheek" cx="49" cy="59" rx="5.5" ry="3.5" />
          <ellipse className="cloud__cheek" cx="91" cy="59" rx="5.5" ry="3.5" />
          <path d="M65 57 Q70 62.5 75 57" fill="none" strokeWidth="2.4" strokeLinecap="round" />
        </g>
      )}
    </svg>
  )
}
