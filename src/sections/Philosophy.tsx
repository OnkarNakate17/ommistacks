import { SectionHeading } from '../components/SectionHeading'
import { principles as defaultPrinciples } from '../data/philosophy'
import { useReveal } from '../hooks/useReveal'
import { useContent } from '../lib/useContent'

export function Philosophy() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const principles = useContent('philosophy.json', defaultPrinciples)
  return (
    <section className="border-y border-[var(--border)] bg-[var(--bg-elevated-2)]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading tag="~/ommistacks/philosophy" title="How I think about software" />

        <div
          ref={ref}
          className={`mt-12 grid gap-5 transition-opacity duration-700 sm:grid-cols-2 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {principles.map((p) => (
            <div key={p.title} className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-6">
              <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--text-primary)]">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
