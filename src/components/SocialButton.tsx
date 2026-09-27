import type { ReactNode } from 'react'

interface SocialButtonProps {
  href: string
  label: string
  icon: ReactNode
}

export function SocialButton({ href, label, icon }: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] text-[var(--text-secondary)] transition-colors hover:border-ommi-yellow hover:text-ommi-yellow"
    >
      {icon}
    </a>
  )
}
