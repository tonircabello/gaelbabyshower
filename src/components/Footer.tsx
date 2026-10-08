import Clothesline from './Clothesline'
import Sparkles, { type SparkleSpec } from './Sparkles'
import Wave from './Wave'
import './Footer.css'

const SPARKLES: SparkleSpec[] = [
  { x: 6, y: 12, size: 16, delay: 0 },
  { x: 24, y: 40, size: 11, delay: 1.1 },
  { x: 36, y: 8, size: 10, delay: 0.5 },
  { x: 70, y: 10, size: 14, delay: 1.6 },
  { x: 90, y: 38, size: 18, delay: 0.3 },
  { x: 95, y: 70, size: 11, delay: 1.9 },
  { x: 5, y: 66, size: 13, delay: 0.9 },
]

function Moon() {
  return (
    <svg className="moon" viewBox="-20 0 164 130" aria-hidden="true">
      <g className="moon__zzz" fontFamily="Fredoka, sans-serif" fontWeight="600" fill="#FFE7A3">
        <text x="104" y="40" fontSize="20">
          z
        </text>
        <text x="118" y="24" fontSize="15">
          z
        </text>
        <text x="130" y="11" fontSize="11">
          z
        </text>
      </g>
      <circle cx="62" cy="76" r="46" fill="#FFE7A3" />
      <circle cx="40" cy="96" r="7" fill="#F6D06F" />
      <circle cx="86" cy="104" r="5" fill="#F6D06F" />
      <circle cx="94" cy="64" r="4" fill="#F6D06F" />
      <path d="M42 72Q48 79 54 72M70 72Q76 79 82 72" fill="none" stroke="#2F3B5C" strokeWidth="3" strokeLinecap="round" />
      <path d="M55 86Q62 92 69 86" fill="none" stroke="#2F3B5C" strokeWidth="3" strokeLinecap="round" />
      <circle cx="38" cy="84" r="6" fill="#FF9E8E" opacity="0.6" />
      <circle cx="86" cy="84" r="6" fill="#FF9E8E" opacity="0.6" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <Wave from="var(--band-3)" to="var(--band-foot)" flip layered={false} />
      <div className="footer__body">
        <Sparkles items={SPARKLES} />
        <div className="footer__inner">
          <Moon />
          <Clothesline />
          <p className="footer__line">Con muchas ganas de veros,</p>
          <p className="footer__names">Samanta, Toni y Gael 🍼</p>
        </div>
      </div>
    </footer>
  )
}
