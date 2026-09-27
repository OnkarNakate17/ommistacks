import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
  onOpen: (project: Project) => void
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <div className="group rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-ommi-yellow sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-ommi-yellow">{project.highlight}</p>
          <h3 className="mt-2 font-[var(--font-display)] text-2xl font-semibold text-[var(--text-primary)]">
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-[var(--text-muted)]">{project.tagline}</p>
        </div>
      </div>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)]">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--text-secondary)] transition-colors group-hover:border-ommi-blue-light/60"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-5">
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-primary)] transition-colors group-hover:text-ommi-yellow"
        >
          {project.ctaLabel}
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
        >
          <GithubIcon size={16} />
          Source
        </a>
      </div>
    </div>
  )
}
