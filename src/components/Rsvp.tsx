import { WHATSAPP_URL } from '../data'

export default function Rsvp() {
  return (
    <section className="rsvp" aria-labelledby="confirma">
      <h2 id="confirma">¿Vendrás?</h2>
      <p className="lead">Confírmanos tu asistencia para que no falte comida para nadie.</p>
      <a className="btn" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
        Confirmar por WhatsApp
      </a>
    </section>
  )
}
