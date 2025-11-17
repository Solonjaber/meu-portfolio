import { useEffect } from "react"
import Lenis from "lenis"

export function SmoothScroll() {
  useEffect(() => {
    // Inicializa Lenis
    const lenis = new Lenis({
      duration: 1.2, // Duração da animação (mais alto = mais suave)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing customizado
      orientation: "vertical", // Scroll vertical
      gestureOrientation: "vertical", // Gestos verticais
      smoothWheel: true, // Suaviza scroll do mouse wheel
      wheelMultiplier: 1, // Multiplicador da velocidade do wheel
      smoothTouch: false, // Desativa em touch (mobile) para performance
      touchMultiplier: 2, // Multiplicador em touch devices
    })

    // Função de animação
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Integração com Framer Motion (se precisar)
    // Permite que animações baseadas em scroll funcionem com Lenis
    const handleScroll = () => {
      // Dispara evento customizado para outros componentes
      window.dispatchEvent(new CustomEvent("lenis-scroll"))
    }

    lenis.on("scroll", handleScroll)

    // Log de inicialização (desenvolvimento)
    if (process.env.NODE_ENV === "development") {
      console.log("🌊 Smooth Scroll (Lenis) initialized")
    }

    // Cleanup
    return () => {
      lenis.destroy()
    }
  }, [])

  return null // Componente invisível
}
