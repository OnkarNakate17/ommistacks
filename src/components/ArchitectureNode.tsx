import { useState } from 'react'
import type { SystemNode } from '../data/architecture'

export function ArchitectureNode({ node, index }: { node: SystemNode; index: number }) {
  const [active, setActive] = useState(false)

  return (
    <div className="relative flex flex-col items-center">
      <button
        type="button"
        onClick={() => setActive((a) => !a)}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        aria-expanded={active}
        className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-3 text-left transition-colors hover:border-ommi-yellow focus-visible:border-ommi-yellow"
      >
        <p className="font-mono text-[11px] text-[var(--text-muted)]">{String(index + 1).padStart(2, '0')}</p>
        <p className="mt-1 font-medium text-[var(--text-primary)]">{node.label}</p>
      </button>
      <div
        className={`mt-2 w-full overflow-hidden rounded-md border border-ommi-yellow/40 bg-ommi-yellow/5 transition-all duration-200 ${
          active ? 'max-h-24 opacity-100 p-3' : 'max-h-0 opacity-0 p-0'
        }`}
      >
        <p className="text-xs font-semibold text-ommi-yellow">{node.concept}</p>
        <p className="mt-1 text-xs leading-relaxed text-[var(--text-secondary)]">{node.explanation}</p>
      </div>
    </div>
  )
}
