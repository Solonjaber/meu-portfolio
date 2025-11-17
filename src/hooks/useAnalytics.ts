import { useEffect } from "react"
import { useLocation } from "react-router-dom"

// Configuração do Analytics
const ANALYTICS_CONFIG = {
  // Opção 1: Plausible (Recomendado - sem cookies, LGPD compliant)
  plausible: {
    enabled: false, // Mude para true quando criar conta
    domain: "seudominio.com", // Mude para seu domínio
  },

  // Opção 2: Google Analytics 4
  googleAnalytics: {
    enabled: false, // Mude para true quando configurar
    measurementId: "G-XXXXXXXXXX", // Seu ID do GA4
  },
}

// Track page view no Plausible
function trackPlausiblePageView(url: string) {
  if (typeof window.plausible !== "undefined") {
    window.plausible("pageview", { props: { path: url } })
  }
}

// Track page view no Google Analytics
function trackGoogleAnalytics(url: string) {
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", ANALYTICS_CONFIG.googleAnalytics.measurementId, {
      page_path: url,
    })
  }
}

// Track custom events (exemplo: cliques em botões)
export function trackEvent(eventName: string, properties?: Record<string, any>) {
  // Plausible
  if (ANALYTICS_CONFIG.plausible.enabled && typeof window.plausible !== "undefined") {
    window.plausible(eventName, { props: properties })
  }

  // Google Analytics
  if (ANALYTICS_CONFIG.googleAnalytics.enabled && typeof window.gtag !== "undefined") {
    window.gtag("event", eventName, properties)
  }

  // Log para desenvolvimento
  if (process.env.NODE_ENV === "development") {
    console.log("📊 Analytics Event:", eventName, properties)
  }
}

// Hook principal
export function useAnalytics() {
  const location = useLocation()

  useEffect(() => {
    const url = location.pathname + location.search

    // Track page view
    if (ANALYTICS_CONFIG.plausible.enabled) {
      trackPlausiblePageView(url)
    }

    if (ANALYTICS_CONFIG.googleAnalytics.enabled) {
      trackGoogleAnalytics(url)
    }

    // Log para desenvolvimento
    if (process.env.NODE_ENV === "development") {
      console.log("📊 Page View:", url)
    }
  }, [location])

  return { trackEvent }
}

// Tipos para TypeScript
declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, any> }) => void
    gtag?: (...args: any[]) => void
  }
}
