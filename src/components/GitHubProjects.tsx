import { motion } from "framer-motion"
import { useGitHub } from "@/hooks/useGitHub"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, GitFork, ExternalLink, Loader2, AlertCircle } from "lucide-react"
import { AnimatedCard } from "./AnimatedCard"

interface GitHubProjectsProps {
  username: string
  maxRepos?: number
}

export function GitHubProjects({ username, maxRepos = 6 }: GitHubProjectsProps) {
  const { repos, loading, error } = useGitHub({ username, maxRepos })

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <span className="ml-3 text-muted-foreground">Carregando repositórios do GitHub...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-12">
        <Card className="max-w-lg">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-destructive" />
              <CardTitle>Erro ao carregar repositórios</CardTitle>
            </div>
            <CardDescription className="space-y-2">
              <p>{error}</p>
              <p className="text-xs mt-2">
                💡 <strong>Dica:</strong> Verifique se o username do GitHub está correto em{" "}
                <code className="bg-muted px-1 rounded">src/pages/Portfolio.tsx</code>
              </p>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  if (repos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Nenhum repositório público encontrado.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.map((repo, index) => (
        <AnimatedCard key={repo.id} delay={index * 0.1}>
          <Card className="h-full flex flex-col group hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg line-clamp-1 group-hover:text-accent transition-colors">
                {repo.name}
              </CardTitle>
              <CardDescription className="line-clamp-2 min-h-[40px]">
                {repo.description || "Sem descrição"}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              {/* Topics/Tags */}
              {repo.topics && repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <Badge key={topic} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                  {repo.topics.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{repo.topics.length - 3}
                    </Badge>
                  )}
                </div>
              )}

              {/* Stats */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                {repo.language && (
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-primary" />
                    <span>{repo.language}</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  <span>{repo.stargazers_count}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="w-4 h-4" />
                  <span>{repo.forks_count}</span>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex gap-2">
              <Button asChild variant="outline" size="sm" className="flex-1">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Ver Código
                  <ExternalLink className="w-3 h-3" />
                </a>
              </Button>
              {repo.homepage && (
                <Button asChild size="sm" className="flex-1">
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Demo
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        </AnimatedCard>
      ))}
    </div>
  )
}
