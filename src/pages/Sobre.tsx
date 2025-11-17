import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const skills = {
  frontend: [
    "React & Next.js", "TypeScript", "Tailwind CSS", "Vue.js"
  ],
  backend: [
    "Node.js", "Python", "PostgreSQL", "MongoDB"
  ],
  devops: [
    "Docker", "AWS", "CI/CD", "Git"
  ],
  management: [
    "Scrum", "Kanban", "JIRA", "Roadmapping"
  ]
};

const timeline = [
  {
    year: "2023 - Presente",
    title: "Líder Técnico",
    company: "Tech Innovators Inc.",
    description: "Liderança de equipe de 8 desenvolvedores, arquitetura de soluções e entregas de projetos de alta complexidade."
  },
  {
    year: "2020 - 2023",
    title: "Desenvolvedor Full-Stack Senior",
    company: "Digital Solutions",
    description: "Desenvolvimento de aplicações web escaláveis, mentoria de desenvolvedores júnior e implementação de melhores práticas."
  },
  {
    year: "2018 - 2020",
    title: "Desenvolvedor Full-Stack",
    company: "StartupX",
    description: "Criação de MVPs e produtos digitais para startups em fase inicial, com foco em agilidade e qualidade."
  }
];

const certifications = [
  "AWS Certified Solutions Architect",
  "Professional Scrum Master (PSM I)",
  "MongoDB Certified Developer"
];

const Sobre = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-background to-secondary/10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-6">Sobre mim</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Construindo o futuro através da tecnologia
              </h1>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-xl mb-6">
                  Com mais de 6 anos de experiência em desenvolvimento de software, 
                  especializo-me em criar soluções tecnológicas que fazem a diferença 
                  nos negócios e na vida das pessoas.
                </p>
                <p className="text-lg">
                  Minha jornada na tecnologia combina habilidades técnicas sólidas com 
                  capacidade de liderança, permitindo não apenas desenvolver código de 
                  qualidade, mas também orientar equipes e projetos para o sucesso. 
                  Acredito que tecnologia é sobre pessoas, e cada linha de código deve 
                  servir um propósito claro e agregar valor real.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Habilidades Técnicas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(skills).map(([category, items]) => (
                  <Card key={category}>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-4 capitalize">
                        {category === "frontend" && "Frontend"}
                        {category === "backend" && "Backend"}
                        {category === "devops" && "DevOps & Cloud"}
                        {category === "management" && "Gestão"}
                      </h3>
                      <ul className="space-y-3">
                        {items.map((skill) => (
                          <li key={skill} className="flex items-center text-muted-foreground">
                            <CheckCircle2 className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 bg-gradient-to-b from-background to-secondary/10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Trajetória Profissional</h2>
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-accent/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent" />
                    <div className="mb-2">
                      <Badge variant="secondary">{item.year}</Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-accent font-medium mb-3">{item.company}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Certificações</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {certifications.map((cert) => (
                  <Card key={cert} className="text-center">
                    <CardContent className="pt-6">
                      <CheckCircle2 className="w-8 h-8 text-accent mx-auto mb-3" />
                      <p className="font-medium">{cert}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sobre;
