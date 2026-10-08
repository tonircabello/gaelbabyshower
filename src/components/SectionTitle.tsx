import './SectionTitle.css'

interface SectionTitleProps {
  id: string
  kicker: string
  title: string
  lead?: string
}

export default function SectionTitle({ id, kicker, title, lead }: SectionTitleProps) {
  return (
    <div className="section-title">
      <p className="section-title__kicker">{kicker}</p>
      <h2 id={id}>{title}</h2>
      <svg className="section-title__squiggle" viewBox="0 0 124 12" aria-hidden="true">
        <path d="M2 6 Q12 -2 22 6 T42 6 T62 6 T82 6 T102 6 T122 6" fill="none" strokeWidth="3.5" strokeLinecap="round" />
      </svg>
      {lead && <p className="section-title__lead">{lead}</p>}
    </div>
  )
}
