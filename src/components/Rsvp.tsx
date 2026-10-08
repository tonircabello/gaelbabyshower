import { useCallback, useRef, useState, type FormEvent } from 'react'
import { prefersReducedMotion } from '../lib/motion'
import { buildWhatsappUrl } from '../lib/whatsapp'
import Confetti from './Confetti'
import Heart from './Heart'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import Sparkles, { type SparkleSpec } from './Sparkles'
import './Rsvp.css'

const MAX_GUESTS = 10

const SPARKLES: SparkleSpec[] = [
  { x: 2, y: 38, size: 20, delay: 0, color: 'var(--sun)' },
  { x: 96, y: 34, size: 16, delay: 1.2, color: '#fff' },
  { x: 3, y: 70, size: 14, delay: 0.6, color: '#fff' },
  { x: 97, y: 62, size: 22, delay: 1.8, color: 'var(--sun)' },
  { x: 95, y: 92, size: 14, delay: 0.3, color: '#fff' },
]

export default function Rsvp() {
  const [attending, setAttending] = useState(true)
  const [name, setName] = useState('')
  const [guests, setGuests] = useState(1)
  const [notes, setNotes] = useState('')
  const [error, setError] = useState('')
  const [sentUrl, setSentUrl] = useState<string | null>(null)
  const [confettiKey, setConfettiKey] = useState<number | null>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const stopConfetti = useCallback(() => setConfettiKey(null), [])

  const cleanName = name.trim()
  const url = buildWhatsappUrl({ attending, name: cleanName, guests, notes })
  // The confirmation message disappears as soon as the answer is edited.
  const sent = sentUrl === url

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!cleanName) {
      setError('Dinos cómo te llamas para saber quién viene 😊')
      nameRef.current?.focus()
      return
    }
    setError('')
    window.open(url, '_blank', 'noopener,noreferrer')
    setSentUrl(url)
    if (attending && !prefersReducedMotion()) setConfettiKey(Date.now())
  }

  return (
    <section className="rsvp" id="confirma" aria-labelledby="confirma-title">
      <Sparkles items={SPARKLES} />
      {confettiKey !== null && <Confetti key={confettiKey} onDone={stopConfetti} />}

      <Reveal>
        <SectionTitle
          id="confirma-title"
          kicker="No faltes"
          title="¿Vendrás?"
          lead="Confírmanos tu asistencia para que no falte comida para nadie."
        />
      </Reveal>

      <Reveal className="rsvp__card" delay={120}>
        <div className="rsvp__seal" aria-hidden="true">
          <Heart color="#fff" />
        </div>

        <form className="rsvp__form" onSubmit={handleSubmit} noValidate>
          <fieldset className="rsvp__choices">
            <legend className="sr-only">¿Vienes al baby shower?</legend>
            <label className="choice choice--yes">
              <input type="radio" name="attending" checked={attending} onChange={() => setAttending(true)} />
              <span>¡Allí estaré! 🎉</span>
            </label>
            <label className="choice choice--no">
              <input type="radio" name="attending" checked={!attending} onChange={() => setAttending(false)} />
              <span>No podré 😢</span>
            </label>
          </fieldset>

          <div className="field">
            <label className="field__label" htmlFor="rsvp-name">
              Tu nombre
            </label>
            <input
              ref={nameRef}
              id="rsvp-name"
              type="text"
              name="name"
              autoComplete="name"
              maxLength={60}
              placeholder="Ej. Gael"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? 'rsvp-error' : undefined}
            />
            {error && (
              <p id="rsvp-error" className="field__error" role="alert">
                {error}
              </p>
            )}
          </div>

          {attending && (
            <div className="field" role="group" aria-labelledby="rsvp-guests">
              <span className="field__label" id="rsvp-guests">
                ¿Cuántos sois?
              </span>
              <div className="stepper">
                <button
                  type="button"
                  onClick={() => setGuests((g) => Math.max(1, g - 1))}
                  disabled={guests <= 1}
                  aria-label="Una persona menos"
                >
                  −
                </button>
                <output aria-live="polite">
                  {guests} {guests === 1 ? 'persona' : 'personas'}
                </output>
                <button
                  type="button"
                  onClick={() => setGuests((g) => Math.min(MAX_GUESTS, g + 1))}
                  disabled={guests >= MAX_GUESTS}
                  aria-label="Una persona más"
                >
                  +
                </button>
              </div>
            </div>
          )}

          <div className="field">
            <label className="field__label" htmlFor="rsvp-notes">
              Alergias o algo que quieras contarnos <small>(opcional)</small>
            </label>
            <textarea
              id="rsvp-notes"
              name="notes"
              rows={3}
              maxLength={300}
              placeholder="Intolerancias, vegetarianos, un peque en camino…"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          <button type="submit" className="btn rsvp__submit">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 4 10.5 14.5M21 4l-6.5 17-4-6.5L4 10.5 21 4Z" />
            </svg>
            Enviar por WhatsApp
          </button>

          {sent && (
            <p className="rsvp__sent" role="status">
              {attending ? `¡Gracias, ${cleanName}! Qué ganas de verte 🎉` : `¡Gracias por avisar, ${cleanName}! Te echaremos de menos 💛`}{' '}
              Si no se ha abierto WhatsApp,{' '}
              <a href={url} target="_blank" rel="noopener noreferrer">
                pulsa aquí
              </a>
              .
            </p>
          )}
        </form>
      </Reveal>
    </section>
  )
}
