import { useState } from "react"
import { render } from "@react-email/render"
import ContactEmail from "@/emails/ContactEmail"

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

interface UseContactFormReturn {
  sendEmail: (data: ContactFormData) => Promise<void>
  isLoading: boolean
  error: string | null
  success: boolean
}

export function useContactForm(): UseContactFormReturn {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const sendEmail = async (data: ContactFormData) => {
    setIsLoading(true)
    setError(null)
    setSuccess(false)

    try {
      // Renderiza o template de email
      const emailHtml = render(ContactEmail(data))

      // IMPORTANTE: Esta é uma simulação!
      // Para usar em produção, você precisa:
      // 1. Criar uma API route no backend (Express, Next.js API Routes, etc)
      // 2. Configurar a chave API do Resend no servidor
      // 3. Fazer a requisição para essa API

      // Exemplo de chamada real (comentado):
      /*
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'seu-email@example.com',
          subject: `[Portfólio] ${data.subject}`,
          html: emailHtml,
          from: data.email,
          replyTo: data.email,
        }),
      })

      if (!response.ok) {
        throw new Error('Erro ao enviar email')
      }
      */

      // Simulação de delay de rede
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Log do HTML do email para visualização (desenvolvimento)
      console.log("📧 Email Template HTML:")
      console.log(emailHtml)
      console.log("\n📨 Dados do formulário:", data)

      setSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao enviar mensagem")
      console.error("Erro ao enviar email:", err)
    } finally {
      setIsLoading(false)
    }
  }

  return { sendEmail, isLoading, error, success }
}
