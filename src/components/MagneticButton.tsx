import { useRef, ReactNode } from "react"
import { motion, useSpring } from "framer-motion"

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  strength?: number // Força da atração magnética (0 a 1)
}

export function MagneticButton({
  children,
  className = "",
  strength = 0.4,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)

  // Springs para movimento suave
  const x = useSpring(0, { stiffness: 300, damping: 20 })
  const y = useSpring(0, { stiffness: 300, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Calcula distância do mouse até o centro do botão
    const deltaX = e.clientX - centerX
    const deltaY = e.clientY - centerY

    // Aplica o efeito magnético (move em direção ao cursor)
    x.set(deltaX * strength)
    y.set(deltaY * strength)
  }

  const handleMouseLeave = () => {
    // Volta para posição original
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x,
        y,
      }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  )
}
