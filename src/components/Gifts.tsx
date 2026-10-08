import { gifts, type Gift } from '../data'
import { useInView } from '../hooks/useInView'
import { cssVars } from '../lib/css'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import './Gifts.css'

function GiftCard({ gift, index }: { gift: Gift; index: number }) {
  const [ref, shown] = useInView<HTMLLIElement>()
  const { emoji, title, description, color } = gift

  return (
    <li ref={ref} className="gift-slot">
      <div
        className={`gift${color ? '' : ' gift--free'}${shown ? ' is-visible' : ''}`}
        style={cssVars({ '--c': color ?? 'var(--card)', '--d': `${-index * 0.9}s` })}
      >
        <span className="gift__peg gift__peg--l" aria-hidden="true" />
        <span className="gift__peg gift__peg--r" aria-hidden="true" />
        <span className="gift__icon" aria-hidden="true">
          {emoji}
        </span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  )
}

export default function Gifts() {
  return (
    <section className="gifts" aria-labelledby="regalos">
      <Reveal className="gifts__intro">
        <SectionTitle
          id="regalos"
          kicker="Ideas de regalo"
          title="¿Qué podéis traer?"
          lead="Lo que más nos va a ayudar en los primeros meses. Cualquier cosita de esta lista será perfecta."
        />
      </Reveal>

      <ul className="gifts__list">
        {gifts.map((gift, i) => (
          <GiftCard key={gift.title} gift={gift} index={i} />
        ))}
      </ul>

      <Reveal className="gifts__note">
        <p>Lo más importante es que vengáis. El regalo es lo de menos 💛</p>
      </Reveal>
    </section>
  )
}
