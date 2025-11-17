import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Sparkles, Users, Rocket } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Desenvolvimento Full-Stack",
    description: "Criação de aplicações web completas com as melhores tecnologias do mercado, desde o frontend até o backend.",
    features: ["React/Next.js", "Node.js", "PostgreSQL", "APIs REST"]
  },
  {
    icon: Sparkles,
    title: "Consultoria Técnica",
    description: "Análise arquitetural, code review e recomendações estratégicas para otimização de projetos existentes.",
    features: ["Arquitetura", "Performance", "Segurança", "Escalabilidade"]
  },
  {
    icon: Users,
    title: "Liderança de Projetos",
    description: "Gestão completa de equipes de desenvolvimento com metodologias ágeis e entrega contínua.",
    features: ["Scrum/Kanban", "CI/CD", "Gestão de time", "Roadmapping"]
  },
  {
    icon: Rocket,
    title: "MVP & Prototipagem",
    description: "Desenvolvimento rápido de MVPs e protótipos funcionais para validação de ideias e captação de investimentos.",
    features: ["Validação rápida", "Design System", "Deploy", "Iteração"]
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Serviços Oferecidos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para transformar sua visão em realidade digital
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:border-accent/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <li 
                        key={idx}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
