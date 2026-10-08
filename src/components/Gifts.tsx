import type { CSSProperties } from 'react'
import { gifts } from '../data'

export default function Gifts() {
  return (
    <section aria-labelledby="regalos">
      <h2 id="regalos">¿Qué podéis traer?</h2>
      <p className="lead">
        Lo que más nos va a ayudar en los primeros meses. Cualquier cosita de esta lista será perfecta.
      </p>
      <ul className="gifts">
        {gifts.map(({ emoji, title, description, color }) => (
          <li
            key={title}
            className={color ? 'gift' : 'gift free'}
            style={color ? ({ '--c': color } as CSSProperties) : undefined}
          >
            <span className="emoji" aria-hidden="true">{emoji}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ul>
      <p className="note">Lo más importante es que vengáis. El regalo es lo de menos 💛</p>
    </section>
  )
}
