import { MAP_URL } from '../data'

export default function Details() {
  return (
    <section aria-labelledby="cuando">
      <h2 id="cuando">Cuándo y dónde</h2>
      <div className="details">
        <div>
          <span className="emoji" aria-hidden="true">📅</span>
          <h3>Día</h3>
          <p>Sábado, 7 de noviembre</p>
        </div>
        <div>
          <span className="emoji" aria-hidden="true">🕔</span>
          <h3>Hora</h3>
          <p>A las 13:00 h</p>
        </div>
        <div>
          <span className="emoji" aria-hidden="true">📍</span>
          <h3>Lugar</h3>
          <p>
            Barbacoa Park Les Camanyes
            <br />
            <a href={MAP_URL} target="_blank" rel="noopener noreferrer">Ver en el mapa</a>
          </p>
        </div>
      </div>
    </section>
  )
}
