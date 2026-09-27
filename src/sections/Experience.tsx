import { SectionHeading } from '../components/SectionHeading'
import { TimelineItem } from '../components/TimelineItem'
import { experience as defaultExperience } from '../data/experience'
import { useReveal } from '../hooks/useReveal'
import { useContent } from '../lib/useContent'

export function ExperienceSection() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const experience = useContent('experience.json', defaultExperience)
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading tag="~/ommistacks/experience" title="Professional experience" />

      <div
        ref={ref}
        className={`mt-12 max-w-2xl space-y-10 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {experience.map((item, i) => (
          <TimelineItem key={item.role + item.period} item={item} isLast={i === experience.length - 1} />
        ))}
      </div>
    </section>
  )
}
