import { cssVars } from '../lib/css'
import './Wave.css'

interface WaveProps {
  from: string
  to: string
  flip?: boolean
  layered?: boolean
}

export default function Wave({ from, to, flip = false, layered = true }: WaveProps) {
  return (
    <div className={`wave${flip ? ' wave--flip' : ''}`} style={cssVars({ '--from': from, '--to': to })} aria-hidden="true">
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
        {layered && (
          <path
            className="wave__back"
            d="M0 34 C200 78 360 66 560 38 C760 10 960 28 1160 56 C1280 72 1380 62 1440 42 V90 H0 Z"
          />
        )}
        <path
          className="wave__front"
          d="M0 52 C160 90 320 90 480 56 C640 22 800 22 960 56 C1120 90 1280 86 1440 46 V90 H0 Z"
        />
      </svg>
    </div>
  )
}
