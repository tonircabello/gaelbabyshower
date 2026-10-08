import { cssVars } from '../lib/css'
import BearScene from './BearScene'
import Bunting from './Bunting'
import Cloud from './Cloud'
import Heart from './Heart'
import Sparkles, { type SparkleSpec } from './Sparkles'
import Wave from './Wave'
import './Hero.css'

const BLOCKS = [
  { letter: 'G', color: '#FFE7A3', tilt: -6 },
  { letter: 'A', color: '#CDEBD9', tilt: 4 },
  { letter: 'E', color: '#F8CBB8', tilt: -3 },
  { letter: 'L', color: '#DDD3F5', tilt: 6 },
]

const SPARKLES: SparkleSpec[] = [
  { x: 8, y: 20, size: 22, delay: 0 },
  { x: 90, y: 15, size: 18, delay: 0.8, color: 'var(--sun)' },
  { x: 16, y: 44, size: 14, delay: 1.4, color: 'var(--sun)' },
  { x: 94, y: 40, size: 24, delay: 0.4 },
  { x: 48, y: 8, size: 16, delay: 1.9 },
  { x: 5, y: 58, size: 18, delay: 1.1 },
  { x: 92, y: 60, size: 14, delay: 2.2, color: 'var(--sun)' },
  { x: 60, y: 46, size: 12, delay: 0.6 },
]

export default function Hero() {
  return (
    <header className="hero">
      <Bunting />
      <Sparkles items={SPARKLES} />
      <Cloud className="hero__cloud hero__cloud--1" duration={15} delay={-9} />
      <Cloud className="hero__cloud hero__cloud--2" duration={19} delay={-4} face />
      <Cloud className="hero__cloud hero__cloud--3" duration={17} delay={-2} />
      <Cloud className="hero__cloud hero__cloud--4" duration={22} delay={-12} />

      <div className="hero__inner">
        <div className="hero__head">
          <p className="hero__kicker">¡Estás invitado!</p>
          <h1 className="hero__title">
            <span className="hero__pre">Baby shower de</span>
            <span className="sr-only">Gael</span>
            <span className="blocks" aria-hidden="true">
              {BLOCKS.map(({ letter, color, tilt }, i) => (
                <span key={letter} className="block" style={cssVars({ '--c': color, '--r': `${tilt}deg`, '--i': i })}>
                  <span className="block__face">{letter}</span>
                </span>
              ))}
            </span>
          </h1>
          <p className="hero__hosts">
            Samanta y Toni os esperan <Heart className="hero__heart" />
          </p>
        </div>

        <BearScene />

        <div className="hero__body">
          <p className="hero__intro">
            Gael está a punto de llegar y ya tiene a todo el mundo con ganas de conocerle. Antes de que empiecen las
            noches en vela y los pañales a cualquier hora, queremos celebrarlo con vosotros: una barbacoa al aire libre,
            con risas y mucho cariño, para darle la bienvenida como se merece. Sin vosotros no sería lo mismo.
          </p>
          <div className="hero__cta">
            <a className="btn" href="#confirma">
              Confirmar asistencia
            </a>
            <a className="btn btn--soft" href="#cuando">
              Cuándo y dónde
            </a>
          </div>
        </div>
      </div>

      <Wave from="var(--sky-bottom)" to="var(--band-1)" />
    </header>
  )
}
