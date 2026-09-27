import { useEffect, useRef } from 'react'
import { GithubIcon } from './BrandIcons'
import { X } from 'lucide-react'
import type { Project } from '../data/projects'

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const flow = project.architecture?.length ? project.architecture : project.pipeline?.length ? project.pipeline : undefined

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-ommi-yellow">{project.highlight}</p>
            <h3 id="project-modal-title" className="mt-2 font-[var(--font-display)] text-2xl font-semibold text-[var(--text-primary)]">
              {project.name}
            </h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="rounded-md border border-[var(--border)] p-2 text-[var(--text-secondary)] hover:border-ommi-yellow hover:text-ommi-yellow"
          >
            <X size={18} />
          </button>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--text-secondary)]">
              {t}
            </span>
          ))}
        </div>

        {project.features && (
          <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {project.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <span className="h-1 w-1 rounded-full bg-ommi-yellow" />
                {f}
              </li>
            ))}
          </ul>
        )}

        {flow && (
          <div className="mt-6">
            <p className="font-mono text-xs text-[var(--text-muted)]">
              {project.architecture?.length ? 'service topology' : 'processing pipeline'}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {flow.map((step, i) => (
                <div key={step.label} className="flex items-center gap-2">
                  <span className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-1.5 text-xs text-[var(--text-primary)]">
                    {step.label}
                  </span>
                  {i < flow.length - 1 && <span className="text-[var(--text-muted)]">→</span>}
                </div>
              ))}
            </div>
          </div>
        )}

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-ommi-yellow px-5 py-3 text-sm font-medium text-[#06120e] hover:bg-[#57f0bf]"
        >
          <GithubIcon size={16} />
          View on GitHub
        </a>
      </div>
    </div>
  )
}
