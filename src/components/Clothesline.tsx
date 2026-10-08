import type { ReactNode } from 'react'
import './Clothesline.css'

const ONESIE_PATH =
  'M-48 0 L-18 0 Q0 14 18 0 L48 0 L66 34 L44 46 L36 34 L36 108 Q36 126 18 126 L8 126 Q0 112 -8 126 L-18 126 Q-36 126 -36 108 L-36 34 L-44 46 L-66 34 Z'

interface OnesieProps {
  x: number
  y: number
  fill: string
  delay: string
  children?: ReactNode
}

function Onesie({ x, y, fill, delay, children }: OnesieProps) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="onesie" style={{ animationDelay: delay }}>
        <rect x="-5" y="-14" width="10" height="22" rx="3" fill="#E9B78F" stroke="#2F3B5C" strokeWidth="2" />
        <path d={ONESIE_PATH} fill={fill} stroke="#2F3B5C" strokeWidth="2.5" strokeLinejoin="round" />
        {children}
      </g>
    </g>
  )
}

export default function Clothesline() {
  return (
    <svg className="clothesline" viewBox="0 0 760 210" role="img" aria-label="Tres bodys de bebé tendidos en una cuerda">
      <path d="M10 40 Q380 95 750 40" fill="none" stroke="var(--line)" strokeWidth="3" strokeLinecap="round" />
      <Onesie x={170} y={62} fill="#FFE7A3" delay="0s">
        <circle cx="0" cy="62" r="10" fill="#F8CBB8" />
      </Onesie>
      <Onesie x={380} y={82} fill="#FFFFFF" delay="-1.3s">
        <text x="0" y="74" textAnchor="middle" fontFamily="Fredoka, sans-serif" fontSize="24" fontWeight="600" fill="#2F3B5C">
          Gael
        </text>
      </Onesie>
      <Onesie x={590} y={62} fill="#CDEBD9" delay="-2.6s">
        <circle cx="-10" cy="56" r="4" fill="#2F3B5C" />
        <circle cx="10" cy="56" r="4" fill="#2F3B5C" />
        <path d="M-9 70 Q0 78 9 70" fill="none" stroke="#2F3B5C" strokeWidth="2.5" strokeLinecap="round" />
      </Onesie>
    </svg>
  )
}
