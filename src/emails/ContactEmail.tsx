import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components"

interface ContactEmailProps {
  name: string
  email: string
  subject: string
  message: string
}

export function ContactEmail({ name, email, subject, message }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nova mensagem de contato de {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Nova Mensagem de Contato</Heading>

          <Text style={text}>
            Você recebeu uma nova mensagem através do formulário de contato do seu portfólio.
          </Text>

          <Hr style={hr} />

          <Section style={infoSection}>
            <Text style={label}>Nome:</Text>
            <Text style={value}>{name}</Text>
          </Section>

          <Section style={infoSection}>
            <Text style={label}>Email:</Text>
            <Text style={value}>{email}</Text>
          </Section>

          <Section style={infoSection}>
            <Text style={label}>Assunto:</Text>
            <Text style={value}>{subject}</Text>
          </Section>

          <Hr style={hr} />

          <Section>
            <Text style={label}>Mensagem:</Text>
            <Text style={messageText}>{message}</Text>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            Esta mensagem foi enviada através do formulário de contato do seu portfólio.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  maxWidth: "600px",
}

const h1 = {
  color: "#1a1a1a",
  fontSize: "28px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0 40px",
}

const text = {
  color: "#6a6a6a",
  fontSize: "16px",
  lineHeight: "24px",
  padding: "0 40px",
}

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
}

const infoSection = {
  padding: "0 40px",
  marginBottom: "16px",
}

const label = {
  color: "#8898aa",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0",
  marginBottom: "4px",
}

const value = {
  color: "#1a1a1a",
  fontSize: "16px",
  margin: "0",
  marginBottom: "16px",
}

const messageText = {
  color: "#1a1a1a",
  fontSize: "16px",
  lineHeight: "24px",
  padding: "20px 40px",
  backgroundColor: "#f6f9fc",
  borderRadius: "8px",
  whiteSpace: "pre-wrap",
}

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
  padding: "0 40px",
  marginTop: "32px",
}

export default ContactEmail
