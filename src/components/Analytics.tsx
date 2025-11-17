import { useEffect } from "react"
import { useAnalytics } from "@/hooks/useAnalytics"

export function Analytics() {
  useAnalytics() // Track page views automaticamente

  useEffect(() => {
    // Script do Plausible será adicionado no index.html
    // Script do Google Analytics será adicionado no index.html

    // Log de inicialização
    if (process.env.NODE_ENV === "development") {
      console.log("📊 Analytics initialized")
    }
  }, [])

  return null // Componente invisível
}
