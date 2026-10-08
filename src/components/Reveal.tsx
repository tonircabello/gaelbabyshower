import type { HTMLAttributes } from 'react'
import { useInView } from '../hooks/useInView'
import './Reveal.css'

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  delay?: number
}

export default function Reveal({ delay = 0, className = '', style, children, ...rest }: RevealProps) {
  const [ref, shown] = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`reveal${shown ? ' is-visible' : ''} ${className}`.trim()}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </div>
  )
}
