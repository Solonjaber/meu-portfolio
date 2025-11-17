import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  Home,
  User,
  Briefcase,
  Code2,
  Mail,
  Moon,
  Sun,
  Github,
  Linkedin,
} from "lucide-react"
import { useTheme } from "next-themes"

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { setTheme } = useTheme()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = (command: () => void) => {
    setOpen(false)
    command()
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Digite um comando ou pesquise..." />
      <CommandList>
        <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>

        <CommandGroup heading="Navegação">
          <CommandItem
            onSelect={() => runCommand(() => navigate("/"))}
          >
            <Home className="mr-2 h-4 w-4" />
            <span>Home</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/sobre"))}
          >
            <User className="mr-2 h-4 w-4" />
            <span>Sobre</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/portfolio"))}
          >
            <Briefcase className="mr-2 h-4 w-4" />
            <span>Portfólio</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/servicos"))}
          >
            <Code2 className="mr-2 h-4 w-4" />
            <span>Serviços</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/contato"))}
          >
            <Mail className="mr-2 h-4 w-4" />
            <span>Contato</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Tema">
          <CommandItem
            onSelect={() => runCommand(() => setTheme("light"))}
          >
            <Sun className="mr-2 h-4 w-4" />
            <span>Modo Claro</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => setTheme("dark"))}
          >
            <Moon className="mr-2 h-4 w-4" />
            <span>Modo Escuro</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Links Externos">
          <CommandItem
            onSelect={() => runCommand(() => window.open("https://github.com", "_blank"))}
          >
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => window.open("https://linkedin.com", "_blank"))}
          >
            <Linkedin className="mr-2 h-4 w-4" />
            <span>LinkedIn</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
