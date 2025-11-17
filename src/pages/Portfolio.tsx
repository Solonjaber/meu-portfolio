import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { GitHubProjects } from "@/components/GitHubProjects";
import { TiltCard } from "@/components/TiltCard";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Plataforma E-commerce",
    description: "Sistema completo de comércio eletrônico com painel administrativo.",
    longDescription: "Sistema completo de comércio eletrônico com painel administrativo, gestão de estoque, integração de pagamentos via Stripe, notificações em tempo real e dashboard de analytics.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    category: "web",
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Plataforma de visualização de dados em tempo real.",
    longDescription: "Plataforma de visualização de dados em tempo real com gráficos interativos, relatórios customizáveis, integração com múltiplas fontes de dados e exportação para PDF.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    tags: ["TypeScript", "D3.js", "Redis", "WebSocket"],
    category: "web",
    github: "#"
  },
  {
    id: 3,
    title: "App Mobile Banking",
    description: "Aplicativo mobile para gestão financeira.",
    longDescription: "Aplicativo mobile para gestão financeira com autenticação biométrica, transações seguras, histórico de movimentações e notificações push.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop",
    tags: ["React Native", "Firebase", "GraphQL"],
    category: "mobile",
    demo: "#"
  },
  {
    id: 4,
    title: "API REST Escalável",
    description: "Arquitetura de microserviços para alta performance.",
    longDescription: "Arquitetura de microserviços robusta com autenticação JWT, rate limiting, cache distribuído, documentação Swagger e testes automatizados.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop",
    tags: ["Node.js", "Docker", "Redis", "MongoDB"],
    category: "backend",
    github: "#"
  },
  {
    id: 5,
    title: "Sistema de Gestão Hospitalar",
    description: "Plataforma para gestão de prontuários e agendamentos.",
    longDescription: "Sistema completo para gestão hospitalar incluindo prontuário eletrônico, agendamento de consultas, controle de estoque de medicamentos e geração de relatórios.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop",
    tags: ["React", "Python", "PostgreSQL", "Docker"],
    category: "web",
    github: "#",
    demo: "#"
  },
  {
    id: 6,
    title: "Plataforma de E-learning",
    description: "Sistema de educação online com gamificação.",
    longDescription: "Plataforma educacional com sistema de cursos, aulas em vídeo, quizzes interativos, gamificação, certificados e área do aluno.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop",
    tags: ["Next.js", "Prisma", "Stripe", "AWS"],
    category: "web",
    demo: "#"
  }
];

const categories = [
  { id: "all", label: "Todos" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "backend", label: "Backend" },
  { id: "github", label: "GitHub" }
];

// ⚙️ CONFIGURAÇÃO: Username do GitHub
const GITHUB_USERNAME = "Solonjaber";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === selectedCategory) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedCategory(categoryId);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-background to-secondary/10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6">Portfólio</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Projetos que Fazem a Diferença
              </h1>
              <p className="text-xl text-muted-foreground">
                Conheça alguns dos projetos que desenvolvi ao longo da minha carreira,
                desde startups até grandes empresas.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-background sticky top-20 z-40 border-b">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex justify-center gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => handleCategoryChange(category.id)}
                  disabled={isTransitioning}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            {selectedCategory === "github" ? (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">Meus Repositórios no GitHub</h2>
                  <p className="text-muted-foreground">
                    Projetos open-source e contribuições públicas
                  </p>
                </div>
                <GitHubProjects username={GITHUB_USERNAME} maxRepos={6} />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                <TiltCard
                  key={project.id}
                  className={`${
                    isTransitioning ? 'animate-fade-out' : 'animate-fade-in'
                  }`}
                  style={{ animationDelay: isTransitioning ? '0s' : `${index * 0.05}s` }}
                  tiltAmount={10}
                >
                <Card
                  className="group overflow-hidden hover:shadow-premium transition-all duration-300 h-full"
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.longDescription}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 flex gap-2">
                    {project.github && (
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Código
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" className="flex-1" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
                </TiltCard>
              ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
