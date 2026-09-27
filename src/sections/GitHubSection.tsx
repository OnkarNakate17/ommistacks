import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '../components/BrandIcons'
import { SectionHeading } from '../components/SectionHeading'
import { Button } from '../components/Button'
import { githubConfig, socialLinks as defaultSocialLinks, type FeaturedRepo, type SocialLinks } from '../data/site'
import { useReveal } from '../hooks/useReveal'
import { useContent } from '../lib/useContent'

export function GitHubSection() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const repos = useContent<FeaturedRepo[]>('github-repos.json', githubConfig.featuredRepos)
  const social = useContent<SocialLinks>('social.json', defaultSocialLinks)

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading tag="~/ommistacks/github" title="Code is better when it's visible" />

      <div
        ref={ref}
        className={`mt-12 grid gap-5 transition-opacity duration-700 sm:grid-cols-3 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {repos.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex flex-col rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 transition-colors hover:border-ommi-yellow"
          >
            <div className="flex items-center justify-between">
              <GithubIcon size={18} className="text-[var(--text-muted)]" />
              <ExternalLink size={16} className="text-[var(--text-muted)] transition-colors group-hover:text-ommi-yellow" />
            </div>
            <h3 className="mt-3 font-[var(--font-display)] text-lg font-semibold text-[var(--text-primary)]">
              {repo.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{repo.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {repo.tech.map((t) => (
                <span key={t} className="rounded-full border border-[var(--border)] px-2 py-0.5 text-xs text-[var(--text-secondary)]">
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Button as="a" href={social.github} target="_blank" rel="noreferrer noopener" variant="primary" icon={<GithubIcon size={16} />}>
          GitHub Profile
        </Button>
        <Button as="a" href={social.github} target="_blank" rel="noreferrer noopener" variant="secondary">
          View Repositories
        </Button>
      </div>
    </section>
  )
}
