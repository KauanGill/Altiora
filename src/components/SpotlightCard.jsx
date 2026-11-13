import { useRef } from 'react'

/** Card com brilho dourado que segue o mouse. */
export default function SpotlightCard({ className = '', children, ...rest }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--mx', `${e.clientX - r.left}px`)
    ref.current.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <div ref={ref} className={`card ${className}`} onMouseMove={onMove} {...rest}>
      {children}
    </div>
  )
}
