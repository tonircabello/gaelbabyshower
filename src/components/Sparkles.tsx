import './Sparkles.css'

export interface SparkleSpec {
  x: number
  y: number
  size: number
  delay: number
  color?: string
}

export default function Sparkles({ items }: { items: SparkleSpec[] }) {
  return (
    <div className="sparkles" aria-hidden="true">
      {items.map(({ x, y, size, delay, color }, i) => (
        <svg
          key={i}
          className="sparkle"
          viewBox="0 0 24 24"
          style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, animationDelay: `${delay}s`, fill: color }}
        >
          <path d="M12 0C12.9 7.2 16.8 11.1 24 12 16.8 12.9 12.9 16.8 12 24 11.1 16.8 7.2 12.9 0 12 7.2 11.1 11.1 7.2 12 0Z" />
        </svg>
      ))}
    </div>
  )
}
