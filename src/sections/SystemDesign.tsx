import { SectionHeading } from '../components/SectionHeading'
import { ArchitectureNode } from '../components/ArchitectureNode'
import { systemNodes } from '../data/architecture'
import { useReveal } from '../hooks/useReveal'

export function SystemDesign() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <section className="border-y border-[var(--border)] bg-[var(--bg-elevated-2)]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          tag="~/ommistacks/system-design"
          title="I like understanding what happens behind the API"
          description="A single request touches more than a controller method. Hover or tap a stage below to see the concept behind it."
        />

        <div
          ref={ref}
          className={`mt-12 grid grid-cols-2 gap-4 transition-opacity duration-700 sm:grid-cols-3 lg:grid-cols-7 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {systemNodes.map((node, i) => (
            <ArchitectureNode key={node.id} node={node} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
