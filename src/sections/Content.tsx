import { PlayCircle } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { contentItems as defaultContentItems } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import { useContent } from '../lib/useContent'

export function Content() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const items = useContent('videos.json', defaultContentItems)
  return (
    <section id="content" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        tag="~/ommistacks/content"
        title="Learn with OmmiStacks"
        description="Practical software engineering content — for developers who want to know how things actually work, not just how to make them pass a test."
      />

      <div
        ref={ref}
        className={`mt-12 grid gap-5 transition-opacity duration-700 sm:grid-cols-2 lg:grid-cols-3 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {items.map((item) => (
          <a
            key={item.title}
            href={item.youtubeUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] transition-colors hover:border-ommi-yellow"
          >
            {item.thumbnail && (
              <div className="aspect-video w-full overflow-hidden bg-[var(--bg)]">
                <img
                  src={item.thumbnail}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
            )}
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[var(--text-muted)]">{item.category}</span>
                <PlayCircle size={18} className="text-[var(--text-muted)] transition-colors group-hover:text-ommi-yellow" />
              </div>
              <h3 className="mt-3 font-[var(--font-display)] text-lg font-semibold leading-snug text-[var(--text-primary)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
