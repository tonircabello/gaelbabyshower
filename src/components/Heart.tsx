interface HeartProps {
  className?: string
  color?: string
}

export default function Heart({ className, color = '#FF8F7E' }: HeartProps) {
  return (
    <svg className={className} viewBox="0 0 24 22" aria-hidden="true">
      <path
        d="M12 21C5 15.5 1.5 12 1.5 7.4 1.5 4.2 3.9 1.8 7 1.8c2 0 3.8 1 5 2.8 1.2-1.8 3-2.8 5-2.8 3.1 0 5.5 2.4 5.5 5.6 0 4.6-3.5 8.1-10.5 13.6Z"
        fill={color}
      />
      <ellipse cx="6.6" cy="6.2" rx="2" ry="1.3" fill="#fff" opacity="0.55" transform="rotate(-30 6.6 6.2)" />
    </svg>
  )
}
