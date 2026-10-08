import { cssVars } from '../lib/css'
import './Bunting.css'

const COLORS = ['#FFD76A', '#FF9E8E', '#9ED8B8', '#7DB9E8', '#C8B6F0']
const TILES = 9
const TILE_WIDTH = 240
// Flag anchors follow the string's sag (a quadratic curve) across one tile.
const FLAGS = [
  { x: 40, y: 15.4 },
  { x: 80, y: 21.1 },
  { x: 120, y: 23 },
  { x: 160, y: 21.1 },
  { x: 200, y: 15.4 },
]

export default function Bunting() {
  return (
    <svg
      className="bunting"
      viewBox={`0 0 ${TILES * TILE_WIDTH} 80`}
      width={TILES * TILE_WIDTH}
      height="80"
      aria-hidden="true"
    >
      {Array.from({ length: TILES }, (_, tile) => (
        <g key={tile} transform={`translate(${tile * TILE_WIDTH} 0)`}>
          <path d="M0 6 Q120 40 240 6" fill="none" stroke="var(--line)" strokeWidth="3" strokeLinecap="round" />
          {FLAGS.map(({ x, y }, i) => {
            const n = tile * FLAGS.length + i
            const color = COLORS[n % COLORS.length]
            return (
              <g key={x} className="bunting__flag" style={cssVars({ '--d': `${-(n % 7) * 0.55}s` })}>
                <path
                  d={`M${x - 15} ${y + 2} L${x + 15} ${y + 2} L${x} ${y + 34} Z`}
                  fill={color}
                  stroke={color}
                  strokeWidth="6"
                  strokeLinejoin="round"
                />
                <circle cx={x} cy={y + 12} r="3" fill="#fff" opacity="0.75" />
              </g>
            )
          })}
        </g>
      ))}
    </svg>
  )
}
