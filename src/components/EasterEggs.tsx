import { useEffect, useState } from "react"
import confetti from "canvas-confetti"

export function EasterEggs() {
  const [konamiProgress, setKonamiProgress] = useState(0)
  const [logoClicks, setLogoClicks] = useState(0)

  // Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ]

  useEffect(() => {
    // 1. KONAMI CODE
    const handleKonamiKey = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()

      if (key === konamiCode[konamiProgress].toLowerCase()) {
        setKonamiProgress(konamiProgress + 1)

        if (konamiProgress === konamiCode.length - 1) {
          activateKonamiMode()
          setKonamiProgress(0)
        }
      } else {
        setKonamiProgress(0)
      }
    }

    // 2. TRIPLE CLICK - Matrix Rain
    let clickCount = 0
    let clickTimer: NodeJS.Timeout

    const handleTripleClick = () => {
      clickCount++

      if (clickCount === 3) {
        activateMatrixRain()
        clickCount = 0
      }

      clearTimeout(clickTimer)
      clickTimer = setTimeout(() => {
        clickCount = 0
      }, 500)
    }

    // 3. TYPE "DEV" - Developer Mode
    let typedKeys = ""
    const handleTyping = (e: KeyboardEvent) => {
      typedKeys += e.key.toLowerCase()

      if (typedKeys.includes("dev")) {
        activateDeveloperMode()
        typedKeys = ""
      }

      // Limpa após 2 segundos
      setTimeout(() => {
        typedKeys = ""
      }, 2000)
    }

    document.addEventListener("keydown", handleKonamiKey)
    document.addEventListener("keypress", handleTyping)
    document.addEventListener("click", handleTripleClick)

    return () => {
      document.removeEventListener("keydown", handleKonamiKey)
      document.removeEventListener("keypress", handleTyping)
      document.removeEventListener("click", handleTripleClick)
      clearTimeout(clickTimer)
    }
  }, [konamiProgress])

  // EASTER EGG 1: Konami Code - Explosão de confetti
  const activateKonamiMode = () => {
    console.log("🎮 KONAMI CODE ACTIVATED! 🎮")

    // Confetti explosion!
    const duration = 3000
    const end = Date.now() + duration

    const colors = ["#FFD700", "#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"]

    ;(function frame() {
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      })

      confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    })()

    // Mensagem especial
    setTimeout(() => {
      alert("🎮 You found the Konami Code! You're a true gamer! 🎉")
    }, 500)
  }

  // EASTER EGG 2: Matrix Rain
  const activateMatrixRain = () => {
    console.log("💚 ENTERING THE MATRIX... 💚")

    const canvas = document.createElement("canvas")
    canvas.style.position = "fixed"
    canvas.style.top = "0"
    canvas.style.left = "0"
    canvas.style.width = "100%"
    canvas.style.height = "100%"
    canvas.style.pointerEvents = "none"
    canvas.style.zIndex = "9999"
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    document.body.appendChild(canvas)

    const ctx = canvas.getContext("2d")!
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()".split("")
    const fontSize = 14
    const columns = canvas.width / fontSize

    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    let frameCount = 0
    const maxFrames = 200 // 3-4 segundos

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#0F0"
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }

      frameCount++

      if (frameCount < maxFrames) {
        requestAnimationFrame(draw)
      } else {
        document.body.removeChild(canvas)
      }
    }

    draw()
  }

  // EASTER EGG 3: Developer Mode
  const activateDeveloperMode = () => {
    console.log("%c👨‍💻 DEVELOPER MODE ACTIVATED! 👨‍💻", "font-size: 20px; color: #4ECDC4;")
    console.log("%cWelcome, fellow developer!", "font-size: 16px; color: #45B7D1;")
    console.log("%c", "")
    console.log("%cInterested in the code?", "font-size: 14px;")
    console.log("%cCheck it out: https://github.com/Solonjaber", "font-size: 14px; color: #FFD700;")
    console.log("%c", "")
    console.log("%cTech Stack:", "font-size: 14px; font-weight: bold;")
    console.log("  • React 18 + TypeScript")
    console.log("  • Framer Motion")
    console.log("  • Tailwind CSS")
    console.log("  • Radix UI")
    console.log("  • Vite")
    console.log("%c", "")
    console.log("%cMore Easter Eggs:", "font-size: 14px; font-weight: bold; color: #FF6B6B;")
    console.log("  • Try the Konami Code: ↑↑↓↓←→←→BA")
    console.log("  • Triple click anywhere")
    console.log("  • Click the logo 10 times")
  }

  return null // Componente invisível
}

// Helper para usar confetti em outros lugares
export function fireConfetti() {
  const count = 200
  const defaults = {
    origin: { y: 0.7 },
  }

  function fire(particleRatio: number, opts: any) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    })
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  })

  fire(0.2, {
    spread: 60,
  })

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  })

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  })

  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  })
}
