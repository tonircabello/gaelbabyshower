import { EVENT } from '../data'
import { useCountdown } from '../hooks/useCountdown'
import { cssVars } from '../lib/css'
import Reveal from './Reveal'
import './Countdown.css'

const UNITS = [
  { key: 'days', label: 'días', color: '#FFE7A3' },
  { key: 'hours', label: 'horas', color: '#CDEBD9' },
  { key: 'minutes', label: 'min', color: '#F8CBB8' },
  { key: 'seconds', label: 'seg', color: '#CFE6F6' },
] as const

export default function Countdown() {
  const countdown = useCountdown(EVENT.start, EVENT.durationHours)

  return (
    <section className="countdown" aria-label="Cuenta atrás">
      <Reveal className="countdown__card">
        {countdown.phase === 'before' && (
          <>
            <p className="countdown__label">Faltan</p>
            <div className="countdown__units" role="timer" aria-label="Tiempo que falta para el baby shower">
              {UNITS.map(({ key, label, color }) => (
                <div key={key} className="unit" style={cssVars({ '--c': color })}>
                  <span key={countdown[key]} className="unit__num">
                    {String(countdown[key]).padStart(2, '0')}
                  </span>
                  <span className="unit__label">{label}</span>
                </div>
              ))}
            </div>
            <p className="countdown__note">para darle la bienvenida a Gael 💛</p>
          </>
        )}
        {countdown.phase === 'during' && <p className="countdown__done">¡Ya estamos de fiesta! 🎉</p>}
        {countdown.phase === 'after' && <p className="countdown__done">¡Gracias por venir! 💛</p>}
      </Reveal>
    </section>
  )
}
