import type { Experience } from '../data/experience'

export function TimelineItem({ item, isLast }: { item: Experience; isLast?: boolean }) {
  return (
    <div className="relative pl-8">
      <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-ommi-yellow bg-[var(--bg)]" />
      {!isLast && <span className="absolute left-[4px] top-4 h-[calc(100%+1.5rem)] w-px bg-[var(--border)]" />}
      <p className="font-mono text-xs text-[var(--text-muted)]">{item.period}</p>
      <h3 className="mt-1 font-[var(--font-display)] text-lg font-semibold text-[var(--text-primary)]">
        {item.role}
      </h3>
      <p className="text-sm text-[var(--text-muted)]">{item.location}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {item.focus.map((f) => (
          <span
            key={f}
            className="rounded-full border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--text-secondary)]"
          >
            {f}
          </span>
        ))}
      </div>
      {item.note && <p className="mt-3 text-sm text-[var(--text-secondary)]">{item.note}</p>}
    </div>
  )
}
