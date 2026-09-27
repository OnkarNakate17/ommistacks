import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

interface SectionHeadingProps {
  tag: string
  title: string
  description?: ReactNode
  align?: 'left' | 'center'
}

export function SectionHeading({ tag, title, description, align = 'left' }: SectionHeadingProps) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`max-w-2xl transition-all duration-700 ease-out ${
        align === 'center' ? 'mx-auto text-center' : ''
      } ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      <p className="font-mono text-xs text-ommi-yellow">{tag}</p>
      <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)]">{description}</p>
      )}
    </div>
  )
}
