import { useState, useEffect } from "react"

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  stargazers_count: number
  forks_count: number
  language: string | null
  topics: string[]
  created_at: string
  updated_at: string
  pushed_at: string
}

interface UseGitHubOptions {
  username: string
  maxRepos?: number
  sort?: "updated" | "created" | "pushed" | "full_name"
}

export function useGitHub({ username, maxRepos = 6, sort = "updated" }: UseGitHubOptions) {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=${sort}&per_page=${maxRepos}&type=public`
        )

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`)
        }

        const data = await response.json()
        setRepos(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro ao buscar repositórios")
        console.error("Erro ao buscar repositórios do GitHub:", err)
      } finally {
        setLoading(false)
      }
    }

    if (username) {
      fetchRepos()
    }
  }, [username, maxRepos, sort])

  return { repos, loading, error }
}
