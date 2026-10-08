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
  { emoji: '👶', title: 'Bodys', description: 'De 0 a 3 o de 3 a 6 meses. De manga corta o larga, todos sirven.', color: '#DCEBF5' },
  { emoji: '🍼', title: 'Y demás', description: 'Muselinas, baberos, pijamitas, crema para el culito… lo básico del día a día.', color: '#FFE7A3' },
  { emoji: '🎁', title: 'Lo que tú elijas', description: 'Si nada de esto te convence, sorpréndenos con algo que te apetezca regalarle.' },
]

export const MAP_URL = 'https://share.google/9fU222P2wzshoy3MI'

export const WHATSAPP_URL =
  'https://wa.me/34000000000?text=' +
  encodeURIComponent('¡Hola! Confirmo que voy al baby shower de Gael 🍼')
