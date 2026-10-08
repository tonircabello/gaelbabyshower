import { EVENT } from '../data'
import { downloadIcs } from '../lib/calendar'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import './Details.css'

const [hours, minutes] = EVENT.time.split(':').map(Number)
const HOUR_ANGLE = (hours % 12) * 30 + minutes * 0.5
const MINUTE_ANGLE = minutes * 6

function Calendar() {
  return (
    <div className="cal" aria-hidden="true">
      <span className="cal__ring cal__ring--l" />
      <span className="cal__ring cal__ring--r" />
      <div className="cal__top">{EVENT.month}</div>
      <div className="cal__body">
        <strong>{EVENT.day}</strong>
        <span>{EVENT.weekday}</span>
      </div>
    </div>
  )
}

function AlarmClock() {
  return (
    <svg className="clock" viewBox="0 0 100 100" aria-hidden="true">
      <g stroke="#2F3B5C" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <g className="clock__bells">
          <circle cx="22" cy="24" r="12" fill="#FFD76A" />
          <circle cx="78" cy="24" r="12" fill="#FFD76A" />
        </g>
        <path d="M30 86 22 96M70 86 78 96" fill="none" />
        <circle cx="50" cy="54" r="36" fill="#FF9E8E" />
        <circle cx="50" cy="54" r="27" fill="#fff" />
        <path d="M50 33v5M50 70v5M29 54h5M66 54h5" fill="none" strokeWidth="3" />
        <path d="M50 54V40" fill="none" strokeWidth="4.5" transform={`rotate(${HOUR_ANGLE} 50 54)`} />
        <path d="M50 54V34" fill="none" strokeWidth="3" transform={`rotate(${MINUTE_ANGLE} 50 54)`} />
        <circle cx="50" cy="54" r="3.2" fill="#2F3B5C" />
      </g>
    </svg>
  )
}

function MapPin() {
  return (
    <div className="map" aria-hidden="true">
      <svg className="pin" viewBox="0 0 80 100">
        <ellipse className="pin__shadow" cx="40" cy="92" rx="16" ry="5" />
        <g className="pin__body">
          <path
            d="M40 4C22 4 10 17 10 33c0 23 30 57 30 57s30-34 30-57C70 17 58 4 40 4Z"
            fill="#FF9E8E"
            stroke="#2F3B5C"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <circle cx="40" cy="33" r="12" fill="#fff" stroke="#2F3B5C" strokeWidth="3.5" />
        </g>
      </svg>
    </div>
  )
}

export default function Details() {
  return (
    <section className="details" id="cuando" aria-labelledby="cuando-title">
      <Reveal>
        <SectionTitle id="cuando-title" kicker="Apunta la fecha" title="Cuándo y dónde" />
      </Reveal>

      <div className="details__grid">
        <Reveal className="info info--day">
          <h3 className="info__label">Día</h3>
          <div className="info__art">
            <Calendar />
          </div>
          <p className="info__text">
            {EVENT.weekday}, {EVENT.day} de {EVENT.month}
          </p>
        </Reveal>

        <Reveal className="info info--time" delay={120}>
          <h3 className="info__label">Hora</h3>
          <div className="info__art">
            <AlarmClock />
          </div>
          <p className="info__text">A las {EVENT.time} h</p>
        </Reveal>

        <Reveal className="info info--place" delay={240}>
          <h3 className="info__label">Lugar</h3>
          <div className="info__art">
            <MapPin />
          </div>
          <div className="info__text">
            <p>{EVENT.place}</p>
            <a className="info__link" href={EVENT.mapUrl} target="_blank" rel="noopener noreferrer">
              Ver en el mapa
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal className="details__actions">
        <button type="button" className="btn btn--soft" onClick={downloadIcs}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3.5" y="5" width="17" height="15.5" rx="3.5" />
            <path d="M8 3v4M16 3v4M3.5 10h17M12 13.5v4M10 15.5h4" />
          </svg>
          Añadir al calendario
        </button>
      </Reveal>
    </section>
  )
}
