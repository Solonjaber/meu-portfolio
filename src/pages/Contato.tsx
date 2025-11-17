import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useContactForm } from "@/hooks/useContactForm";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "clevertonsage@gmail.com",
    link: "mailto:clevertonsage@gmail.com"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/cleverton-jaber",
    link: "https://linkedin.com"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/cleverton-jaber",
    link: "https://github.com"
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "São Paulo, Brasil",
    link: null
  }
];

const Contato = () => {
  const { toast } = useToast();
  const { sendEmail, isLoading, error, success } = useContactForm();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await sendEmail(formData);
  };

  // Mostrar toast quando envio for bem-sucedido
  useEffect(() => {
    if (success) {
      toast({
        title: "✅ Mensagem enviada com sucesso!",
        description: "Obrigado pelo contato. Responderei em breve!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  }, [success, toast]);

  // Mostrar toast quando houver erro
  useEffect(() => {
    if (error) {
      toast({
        variant: "destructive",
        title: "❌ Erro ao enviar mensagem",
        description: error,
      });
    }
  }, [error, toast]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-background to-secondary/10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6">Contato</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Vamos Conversar?
              </h1>
              <p className="text-xl text-muted-foreground">
                Tem um projeto em mente ou quer discutir uma oportunidade?
                Estou sempre aberto a novos desafios.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Contact Info */}
                <div className="lg:col-span-1">
                  <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <Card key={index}>
                          <CardContent className="pt-6">
                            <div className="flex items-start space-x-4">
                              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                                <Icon className="w-5 h-5 text-accent" />
                              </div>
                              <div>
                                <p className="font-medium mb-1">{info.label}</p>
                                {info.link ? (
                                  <a
                                    href={info.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                                  >
                                    {info.value}
                                  </a>
                                ) : (
                                  <p className="text-sm text-muted-foreground">{info.value}</p>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>

                  <Card className="mt-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                    <CardHeader>
                      <CardTitle className="text-lg">Horário de Atendimento</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      <p>Segunda a Sexta</p>
                      <p className="font-medium text-foreground">9:00 - 18:00 (BRT)</p>
                      <p className="mt-2 text-xs">
                        Respondo geralmente em até 24 horas úteis
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">Envie uma Mensagem</CardTitle>
                      <CardDescription>
                        Preencha o formulário abaixo e retornarei o mais breve possível.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name">Nome *</Label>
                            <Input
                              id="name"
                              name="name"
                              placeholder="Seu nome completo"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="seu@email.com"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Assunto *</Label>
                          <Input
                            id="subject"
                            name="subject"
                            placeholder="Sobre o que você gostaria de falar?"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Mensagem *</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Descreva seu projeto ou dúvida..."
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full md:w-auto group"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                              Enviando...
                            </>
                          ) : (
                            <>
                              Enviar Mensagem
                              <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prefere uma Conversa Rápida?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Envie um email direto ou conecte-se comigo nas redes sociais.
                Estou sempre disponível para trocar ideias!
              </p>
              <div className="flex justify-center gap-4">
                <Button asChild size="lg" variant="secondary">
                  <a href="mailto:clevertonsage@gmail.com">
                    <Mail className="mr-2 w-5 h-5" />
                    Enviar Email
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 w-5 h-5" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contato;
