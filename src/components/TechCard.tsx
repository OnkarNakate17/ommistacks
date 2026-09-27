import type { Skill } from '../data/skills'

export function TechCard({ skill }: { skill: Skill }) {
  return (
    <div className="group rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-ommi-yellow">
      <p className="font-medium text-[var(--text-primary)]">{skill.name}</p>
      <p className="mt-1 text-sm text-[var(--text-muted)] transition-colors group-hover:text-[var(--text-secondary)]">
        {skill.note}
      </p>
    </div>
  )
}
