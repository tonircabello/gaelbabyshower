import { EVENT } from '../data'

const pad = (n: number) => String(n).padStart(2, '0')

const toIcsDate = (d: Date) =>
  `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}` +
  `T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`

const escapeText = (s: string) =>
  s.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n')

// RFC 5545 asks for lines of at most 75 characters; continuation lines start with a space.
const fold = (line: string) => {
  const chunks: string[] = []
  for (let i = 0; i < line.length; i += 74) chunks.push(line.slice(i, i + 74))
  return chunks.join('\r\n ')
}

export function buildIcs(): string {
  const start = new Date(EVENT.start)
  const end = new Date(start.getTime() + EVENT.durationHours * 3_600_000)

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Gael Baby Shower//ES',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'UID:baby-shower-gael-2026@gaelbabyshower',
    `DTSTAMP:${toIcsDate(new Date())}`,
    `DTSTART:${toIcsDate(start)}`,
    `DTEND:${toIcsDate(end)}`,
    `SUMMARY:${escapeText(EVENT.title)}`,
    `LOCATION:${escapeText(EVENT.place)}`,
    `DESCRIPTION:${escapeText(`Samanta y Toni os esperan. Mapa: ${EVENT.mapUrl}`)}`,
    'BEGIN:VALARM',
    'TRIGGER:-P1D',
    'ACTION:DISPLAY',
    `DESCRIPTION:${escapeText(`Mañana: ${EVENT.title}`)}`,
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ]
    .map(fold)
    .join('\r\n')
}

export function downloadIcs() {
  const blob = new Blob([buildIcs()], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'baby-shower-gael.ics'
  document.body.append(link)
  link.click()
  link.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
