import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navegacao: [
      { name: "Home", path: "/" },
      { name: "Sobre", path: "/sobre" },
      { name: "Portfólio", path: "/portfolio" },
      { name: "Serviços", path: "/servicos" },
    ],
    social: [
      { name: "GitHub", icon: Github, url: "https://github.com" },
      { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-accent-foreground font-bold text-xl">
                CJ
              </div>
              <span className="text-xl font-semibold">Cleverton Jaber</span>
            </div>
            <p className="text-primary-foreground/80 text-sm max-w-md mb-4">
              Desenvolvedor de Software e Líder de Projetos especializado em criar
              soluções tecnológicas inovadoras e escaláveis.
            </p>
            <a
              href="mailto:clevertonsage@gmail.com"
              className="inline-flex items-center text-sm text-accent hover:text-accent/80 transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              clevertonsage@gmail.com
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              {footerLinks.navegacao.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="font-semibold mb-4">Conecte-se</h3>
            <div className="flex flex-col space-y-3">
              {footerLinks.social.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary-foreground/80 hover:text-accent transition-colors group"
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {social.name}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
            <p>© {currentYear} Cleverton Jaber. Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-0">
              Desenvolvido com React + TypeScript + Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
