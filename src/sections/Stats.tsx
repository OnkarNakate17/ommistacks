import { heroStats } from '../data/stats'
import { useReveal } from '../hooks/useReveal'
import { useContent } from '../lib/useContent'

export function Stats() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const stats = useContent('stats.json', heroStats)
  return (
    <section aria-label="Highlights" className="border-y border-[var(--border)]">
      <div
        ref={ref}
        className={`mx-auto grid max-w-6xl grid-cols-2 gap-px bg-[var(--border)] transition-opacity duration-700 sm:grid-cols-4 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {stats.map((stat) => (
          <div key={stat.label} className="bg-[var(--bg)] px-6 py-8">
            <p className="font-[var(--font-display)] text-2xl font-semibold text-ommi-yellow sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
