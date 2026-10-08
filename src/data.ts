export const EVENT = {
  title: 'Baby shower de Gael',
  start: '2026-11-07T13:00:00+01:00',
  durationHours: 4,
  weekday: 'Sábado',
  day: '7',
  month: 'noviembre',
  time: '13:00',
  place: 'Barbacoa Park Les Camanyes',
  mapUrl: 'https://share.google/9fU222P2wzshoy3MI',
} as const

export const WHATSAPP_NUMBER = '34625969435'

export interface Gift {
  emoji: string
  title: string
  description: string
  color?: string
}

export const gifts: Gift[] = [
  { emoji: '🧷', title: 'Pañales', description: 'Nunca son demasiados. Mejor de tallas 1, 2 y 3, que crece rapidísimo.', color: '#FFE7A3' },
  { emoji: '🧻', title: 'Toallitas húmedas', description: 'Paquetes y más paquetes. Se gastan a una velocidad increíble.', color: '#CDEBD9' },
  { emoji: '🌸', title: 'Compresas', description: 'Para mamá, que el posparto también necesita mimos.', color: '#F8CBB8' },
  { emoji: '👶', title: 'Bodys', description: 'De 0 a 3 o de 3 a 6 meses. De manga corta o larga, todos sirven.', color: '#CFE6F6' },
  { emoji: '🍼', title: 'Y demás', description: 'Muselinas, baberos, pijamitas, crema para el culito… lo básico del día a día.', color: '#E3DAF7' },
  { emoji: '🎁', title: 'Lo que tú elijas', description: 'Si nada de esto te convence, sorpréndenos con algo que te apetezca regalarle.' },
]
