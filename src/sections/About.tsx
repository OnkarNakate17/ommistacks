import { MapPin } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { useReveal } from '../hooks/useReveal'

const interests = [
  'Backend engineering',
  'Distributed systems',
  'Microservices',
  'APIs',
  'Databases',
  'System design',
  'AI engineering',
]

export function About() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        tag="~/ommistacks/about"
        title="Engineering with curiosity"
        description="I work primarily with Java and Spring Boot, and spend a lot of that time trying to understand how systems behave underneath the framework — not just how to make them work."
      />

      <div
        ref={ref}
        className={`mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr] transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-ommi-yellow/10 font-[var(--font-display)] text-lg font-semibold text-ommi-yellow">
            ON
          </div>
          <h3 className="mt-4 font-[var(--font-display)] text-xl font-semibold text-[var(--text-primary)]">
            Onkar Nakate
          </h3>
          <p className="text-sm text-[var(--text-secondary)]">Java Full Stack Developer</p>
          <p className="text-sm text-[var(--text-secondary)]">Creator — OmmiStacks</p>
          <div className="mt-4 flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
            <MapPin size={14} />
            Pune, India
          </div>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6">
          <p className="font-mono text-xs text-[var(--text-muted)]">areas of interest</p>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {interests.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <span className="h-1.5 w-1.5 rounded-full bg-ommi-blue-light" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
