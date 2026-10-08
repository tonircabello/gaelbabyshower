import { WHATSAPP_NUMBER } from '../data'

export interface RsvpAnswer {
  attending: boolean
  name: string
  guests: number
  notes: string
}

export function buildWhatsappUrl({ attending, name, guests, notes }: RsvpAnswer): string {
  const lines = attending
    ? [
        `¡Hola! Soy ${name} y confirmo que voy al baby shower de Gael 🍼`,
        `Seremos ${guests} ${guests === 1 ? 'persona' : 'personas'}.`,
      ]
    : [`¡Hola! Soy ${name} y, aunque me encantaría, no podré ir al baby shower de Gael 💛`]

  const extra = notes.trim()
  if (extra) lines.push(`Nota: ${extra}`)

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`
}
