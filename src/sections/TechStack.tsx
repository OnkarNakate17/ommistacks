import { SectionHeading } from '../components/SectionHeading'
import { TechCard } from '../components/TechCard'
import { skillCategories } from '../data/skills'
import { useContent } from '../lib/useContent'
import { useReveal } from '../hooks/useReveal'

export function TechStack() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const categories = useContent('skills.json', skillCategories)
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading tag="~/ommistacks/stack" title="My engineering stack" />

      <div ref={ref} className={`mt-12 space-y-10 transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        {categories.map((category) => (
          <div key={category.category}>
            <div className="flex items-baseline justify-between border-b border-[var(--border)] pb-3">
              <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--text-primary)]">
                {category.category}
              </h3>
              <span className="font-mono text-xs text-[var(--text-muted)]">{category.path}</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {category.skills.map((skill) => (
                <TechCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
