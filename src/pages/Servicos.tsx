import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Code2, Sparkles, Users, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Code2,
    title: "Desenvolvimento Full-Stack",
    description: "Aplicações web completas do zero ao deploy.",
    features: [
      "Arquitetura escalável e modular",
      "Frontend moderno com React/Next.js",
      "Backend robusto com Node.js ou Python",
      "Banco de dados otimizado",
      "Integração de APIs e serviços",
      "Testes automatizados"
    ],
    price: "A partir de R$ 15.000",
    duration: "4-8 semanas"
  },
  {
    icon: Sparkles,
    title: "Consultoria Técnica",
    description: "Análise especializada e otimização de projetos.",
    features: [
      "Revisão de arquitetura",
      "Code review detalhado",
      "Otimização de performance",
      "Auditoria de segurança",
      "Documentação técnica",
      "Recomendações estratégicas"
    ],
    price: "R$ 5.000/sessão",
    duration: "1-2 semanas"
  },
  {
    icon: Users,
    title: "Liderança de Projetos",
    description: "Gestão completa de times e entregas.",
    features: [
      "Planejamento e roadmap",
      "Gestão ágil (Scrum/Kanban)",
      "Coordenação de equipes",
      "Comunicação com stakeholders",
      "Definição de processos",
      "Garantia de qualidade"
    ],
    price: "A partir de R$ 12.000/mês",
    duration: "Contrato mensal"
  },
  {
    icon: Rocket,
    title: "MVP & Prototipagem",
    description: "Validação rápida de ideias e conceitos.",
    features: [
      "Prototipagem funcional",
      "Design system básico",
      "Features essenciais",
      "Deploy em produção",
      "Documentação de uso",
      "Suporte pós-lançamento"
    ],
    price: "A partir de R$ 8.000",
    duration: "2-4 semanas"
  }
];

const process = [
  {
    step: "01",
    title: "Descoberta",
    description: "Entendimento profundo do seu negócio, objetivos e desafios técnicos."
  },
  {
    step: "02",
    title: "Planejamento",
    description: "Definição de escopo, cronograma, tecnologias e estratégia de execução."
  },
  {
    step: "03",
    title: "Desenvolvimento",
    description: "Execução iterativa com entregas frequentes e feedback contínuo."
  },
  {
    step: "04",
    title: "Entrega",
    description: "Deploy, testes finais, treinamento e documentação completa."
  }
];

const faqs = [
  {
    question: "Qual é o prazo médio de entrega de um projeto?",
    answer: "O prazo varia de acordo com a complexidade e escopo do projeto. Projetos menores (MVPs) podem ser entregues em 2-4 semanas, enquanto sistemas mais complexos podem levar de 2-6 meses. Durante a fase de descoberta, defino um cronograma detalhado e realista."
  },
  {
    question: "Você oferece suporte após a entrega?",
    answer: "Sim! Todos os projetos incluem um período de garantia e suporte pós-lançamento. Também ofereço contratos de manutenção contínua para quem deseja um acompanhamento de longo prazo."
  },
  {
    question: "Como funciona o processo de pagamento?",
    answer: "Geralmente divido em etapas: 30% no início, 40% no meio do desenvolvimento e 30% na entrega final. Para projetos maiores, posso trabalhar com pagamentos mensais. Tudo é flexível e adaptado à sua realidade."
  },
  {
    question: "Você trabalha com contratos de longo prazo?",
    answer: "Sim! Trabalho tanto com projetos pontuais quanto com contratos mensais para clientes que precisam de dedicação contínua, seja para desenvolvimento, manutenção ou liderança técnica."
  },
  {
    question: "Quais tecnologias você utiliza?",
    answer: "Sou especializado em React, Next.js, Node.js, TypeScript, Python, PostgreSQL, MongoDB, Docker e AWS. Sempre escolho a stack mais adequada para cada projeto, priorizando performance, escalabilidade e manutenibilidade."
  }
];

const Servicos = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-background to-secondary/10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6">Serviços</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Soluções Sob Medida para o Seu Negócio
              </h1>
              <p className="text-xl text-muted-foreground">
                Do planejamento à entrega, transformo ideias em produtos digitais
                que geram resultados reais.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card 
                    key={index}
                    className="hover:shadow-lg transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-accent" />
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <CheckCircle2 className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="space-y-2 pt-4 border-t">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Investimento:</span>
                          <span className="font-semibold">{service.price}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Prazo:</span>
                          <span className="font-semibold">{service.duration}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full group">
                        <Link to="/contato">
                          Solicitar Orçamento
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gradient-to-b from-background to-secondary/10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Como Funciona o Processo
                </h2>
                <p className="text-lg text-muted-foreground">
                  Metodologia comprovada para garantir qualidade e transparência
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {process.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Perguntas Frequentes
                </h2>
                <p className="text-lg text-muted-foreground">
                  Tire suas dúvidas sobre os serviços
                </p>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pronto para Transformar sua Ideia em Realidade?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Vamos conversar sobre seu projeto e descobrir como posso ajudar
                a alcançar seus objetivos.
              </p>
              <Button asChild size="lg" variant="secondary" className="group">
                <Link to="/contato">
                  Entrar em Contato
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Servicos;
