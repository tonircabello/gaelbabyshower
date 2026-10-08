import { useRef, useState } from 'react'
import { cssVars } from '../lib/css'
import Heart from './Heart'
import './BearScene.css'

const OUTLINE = '#2F3B5C'
const FUR = '#EBC08F'
const CREAM = '#FFF0D9'
const PINK = '#F7B7A8'
const NOSE = '#5A3A2E'
const BLUE = '#7DB9E8'

const MESSAGES = ['¡Hola! 👋', '¡Ven a la fiesta!', '¡Habrá barbacoa!', '¡Gael ya casi está aquí!', '¡Te esperamos!']
const HEART_COLORS = ['#FF8F7E', '#7DB9E8', '#FFD76A', '#9ED8B8']
const MAX_HEARTS = 6

interface BalloonProps {
  cx: number
  cy: number
  rx: number
  ry: number
  color: string
}

function Balloon({ cx, cy, rx, ry, color }: BalloonProps) {
  const bottom = cy + ry
  const hx = cx - rx * 0.42
  const hy = cy - ry * 0.42
  return (
    <g>
      <path
        d={`M${cx} ${cy - ry} C${cx + rx * 1.35} ${cy - ry} ${cx + rx * 1.25} ${bottom - ry * 0.25} ${cx} ${bottom} C${cx - rx * 1.25} ${bottom - ry * 0.25} ${cx - rx * 1.35} ${cy - ry} ${cx} ${cy - ry} Z`}
        fill={color}
        stroke={OUTLINE}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d={`M${cx - 5} ${bottom + 7} L${cx} ${bottom - 1} L${cx + 5} ${bottom + 7} Z`}
        fill={color}
        stroke={OUTLINE}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <ellipse cx={hx} cy={hy} rx={rx * 0.16} ry={ry * 0.28} fill="#fff" opacity="0.6" transform={`rotate(25 ${hx} ${hy})`} />
    </g>
  )
}

interface PoppedHeart {
  id: number
  x: number
  color: string
}

export default function BearScene() {
  const [taps, setTaps] = useState(0)
  const [hearts, setHearts] = useState<PoppedHeart[]>([])
  const nextId = useRef(0)

  const onTap = () => {
    setTaps((n) => n + 1)
    const heart = {
      id: nextId.current++,
      x: 30 + Math.random() * 40,
      color: HEART_COLORS[nextId.current % HEART_COLORS.length],
    }
    setHearts((list) => [...list.slice(-(MAX_HEARTS - 1)), heart])
  }

  const dropHeart = (id: number) => setHearts((list) => list.filter((h) => h.id !== id))

  return (
    <div className="scene">
      <button type="button" className="scene__btn" onClick={onTap} aria-label="Saluda al osito de Gael">
        <svg viewBox="0 0 360 340" aria-hidden="true">
          <defs>
            <radialGradient id="scene-halo">
              <stop offset="0" style={{ stopColor: 'var(--halo)' }} />
              <stop offset="1" style={{ stopColor: 'var(--halo)', stopOpacity: 0 }} />
            </radialGradient>
            <g id="scene-cloud">
              <circle cx="90" cy="296" r="32" />
              <circle cx="146" cy="284" r="38" />
              <circle cx="204" cy="280" r="42" />
              <circle cx="262" cy="290" r="36" />
              <circle cx="300" cy="304" r="24" />
              <rect x="62" y="290" width="250" height="44" rx="22" />
            </g>
          </defs>

          <circle cx="180" cy="160" r="160" fill="url(#scene-halo)" />

          <use href="#scene-cloud" fill={OUTLINE} stroke={OUTLINE} strokeWidth="7" strokeLinejoin="round" />
          <use href="#scene-cloud" className="scene__cloud" />
          <g className="scene__cloud-face">
            <circle cx="162" cy="304" r="4.2" fill={OUTLINE} />
            <circle cx="206" cy="304" r="4.2" fill={OUTLINE} />
            <ellipse cx="148" cy="314" rx="8" ry="5" fill="#FF9E8E" opacity="0.55" />
            <ellipse cx="220" cy="314" rx="8" ry="5" fill="#FF9E8E" opacity="0.55" />
            <path d="M176 309Q184 318 192 309" fill="none" stroke={OUTLINE} strokeWidth="3.2" strokeLinecap="round" />
          </g>

          <g className="scene__balloons">
            <g className="scene__balloon" style={cssVars({ '--dur': '4.6s', '--d': '0s' })}>
              <path d="M322 82 Q300 118 254 130" fill="none" stroke={OUTLINE} strokeWidth="2" strokeLinecap="round" />
              <Balloon cx={322} cy={58} rx={19} ry={24} color="#FFD76A" />
            </g>
            <g className="scene__balloon" style={cssVars({ '--dur': '5.4s', '--d': '-1.5s' })}>
              <path d="M296 58 Q292 100 254 130" fill="none" stroke={OUTLINE} strokeWidth="2" strokeLinecap="round" />
              <Balloon cx={296} cy={34} rx={19} ry={24} color="#FF9E8E" />
            </g>
            <g className="scene__balloon" style={cssVars({ '--dur': '3.9s', '--d': '-2.4s' })}>
              <path d="M282 113 Q276 124 254 130" fill="none" stroke={OUTLINE} strokeWidth="2" strokeLinecap="round" />
              <Balloon cx={282} cy={86} rx={22} ry={27} color={BLUE} />
            </g>
          </g>

          <g transform="translate(70 8)">
            <g key={taps} className={taps > 0 ? 'bear-jump' : undefined}>
              <g className="bear">
                {/* baby bottle held on the left */}
                <g transform="rotate(-18 39 196)" stroke={OUTLINE} strokeWidth="3" strokeLinejoin="round">
                  <path d="M33 172 Q39 150 45 172 Z" fill={PINK} />
                  <rect x="27" y="176" width="24" height="42" rx="8" fill="#fff" />
                  <rect x="25" y="170" width="28" height="10" rx="4" fill="#FFD76A" />
                  <path d="M33 192h8M33 202h8M33 212h8" stroke="#9ED0F5" strokeLinecap="round" />
                </g>

                {/* body, belly and legs */}
                <ellipse cx="110" cy="188" rx="50" ry="52" fill={FUR} stroke={OUTLINE} strokeWidth="3" />
                <ellipse cx="110" cy="194" rx="32" ry="34" fill={CREAM} />
                <path
                  d="M110 214C94 202 98 188 107 190c3 1 3 4 3 4s0-3 3-4c9-2 13 12-3 24Z"
                  fill="#FF9E8E"
                />
                <ellipse cx="72" cy="232" rx="26" ry="19" fill={FUR} stroke={OUTLINE} strokeWidth="3" />
                <ellipse cx="148" cy="232" rx="26" ry="19" fill={FUR} stroke={OUTLINE} strokeWidth="3" />
                <ellipse cx="72" cy="236" rx="12" ry="8" fill={PINK} />
                <ellipse cx="148" cy="236" rx="12" ry="8" fill={PINK} />

                {/* arms */}
                <ellipse cx="62" cy="184" rx="14" ry="28" transform="rotate(18 62 184)" fill={FUR} stroke={OUTLINE} strokeWidth="3" />
                <ellipse cx="167" cy="141" rx="14" ry="30" transform="rotate(35 167 141)" fill={FUR} stroke={OUTLINE} strokeWidth="3" />

                {/* ears and head */}
                <circle cx="64" cy="56" r="21" fill={FUR} stroke={OUTLINE} strokeWidth="3" />
                <circle cx="156" cy="56" r="21" fill={FUR} stroke={OUTLINE} strokeWidth="3" />
                <circle cx="64" cy="58" r="11" fill={PINK} />
                <circle cx="156" cy="58" r="11" fill={PINK} />
                <circle cx="110" cy="98" r="56" fill={FUR} stroke={OUTLINE} strokeWidth="3" />

                {/* party hat */}
                <g transform="rotate(-10 110 48)">
                  <path d="M92 48 L110 6 L128 48 Q110 55 92 48 Z" fill="#FFD76A" stroke={OUTLINE} strokeWidth="3" strokeLinejoin="round" />
                  <circle cx="104" cy="37" r="2.8" fill="#fff" opacity="0.85" />
                  <circle cx="117" cy="37" r="2.8" fill="#fff" opacity="0.85" />
                  <circle cx="110" cy="24" r="2.8" fill="#fff" opacity="0.85" />
                  <circle cx="110" cy="6" r="7" fill="#FF9E8E" stroke={OUTLINE} strokeWidth="3" />
                </g>

                {/* face */}
                <circle cx="72" cy="114" r="9" fill="#FF9E8E" opacity="0.55" />
                <circle cx="148" cy="114" r="9" fill="#FF9E8E" opacity="0.55" />
                <ellipse cx="110" cy="116" rx="25" ry="20" fill={CREAM} />
                <g className="bear__eyes">
                  <circle cx="87" cy="96" r="6" fill={OUTLINE} />
                  <circle cx="133" cy="96" r="6" fill={OUTLINE} />
                  <circle cx="89" cy="94" r="2" fill="#fff" />
                  <circle cx="135" cy="94" r="2" fill="#fff" />
                </g>
                <path d="M101 107Q110 101 119 107Q117 116 110 118Q103 116 101 107Z" fill={NOSE} />
                <path
                  d="M110 118V124M110 124Q103 131 96 125M110 124Q117 131 124 125"
                  fill="none"
                  stroke={NOSE}
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* bow tie */}
                <path d="M110 156L82 142Q76 156 82 170Z" fill={BLUE} stroke={OUTLINE} strokeWidth="3" strokeLinejoin="round" />
                <path d="M110 156L138 142Q144 156 138 170Z" fill={BLUE} stroke={OUTLINE} strokeWidth="3" strokeLinejoin="round" />
                <rect x="101" y="148" width="18" height="16" rx="6" fill={BLUE} stroke={OUTLINE} strokeWidth="3" />
              </g>
            </g>
          </g>
        </svg>
      </button>

      <div className="scene__bubble" aria-live="polite">
        <span key={taps}>{MESSAGES[taps % MESSAGES.length]}</span>
      </div>

      {hearts.map(({ id, x, color }) => (
        <span
          key={id}
          className="scene__heart"
          style={cssVars({ '--x': `${x}%` })}
          onAnimationEnd={() => dropHeart(id)}
        >
          <Heart color={color} />
        </span>
      ))}
    </div>
  )
}
