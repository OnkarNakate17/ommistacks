import { Code2, Cpu, Rocket } from 'lucide-react'
import { YoutubeIcon } from '../components/BrandIcons'
import { SectionHeading } from '../components/SectionHeading'
import { useReveal } from '../hooks/useReveal'

const items = [
  {
    icon: Code2,
    title: 'Practical backend engineering',
    description: 'Java, Spring Boot and real production patterns — explained the way they actually work, not just how to make them pass an interview.',
  },
  {
    icon: Cpu,
    title: 'System design, made concrete',
    description: 'Microservices, databases, queues and API design broken down into ideas you can actually reuse in your own projects.',
  },
  {
    icon: Rocket,
    title: 'AI-assisted engineering',
    description: 'How AI fits into a modern backend workflow — from tooling to shipping features faster without losing rigor.',
  },
  {
    icon: YoutubeIcon,
    title: 'Content you can follow along with',
    description: 'Videos and write-ups built around real projects, so every concept is tied to something you can build yourself.',
  },
]

export function WhatYouGet() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <section id="what-you-get" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        tag="~/ommistacks/what-you-get"
        title="What you get from OmmiStacks"
        description="A single place to learn backend engineering, system design and AI the way it's actually practiced — not just theory."
      />

      <div
        ref={ref}
        className={`mt-12 grid gap-5 transition-all duration-700 sm:grid-cols-2 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {items.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 transition-colors hover:border-ommi-yellow"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-ommi-yellow/10 text-ommi-yellow">
              <Icon size={20} />
            </div>
            <h3 className="mt-4 font-[var(--font-display)] text-lg font-semibold text-[var(--text-primary)]">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
