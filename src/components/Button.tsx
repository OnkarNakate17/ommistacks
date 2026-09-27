import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

const base =
  'inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2'

const variants: Record<Variant, string> = {
  primary: 'bg-ommi-yellow text-[#06120e] hover:bg-[#57f0bf]',
  secondary:
    'border border-[var(--border)] text-[var(--text-primary)] hover:border-ommi-yellow hover:text-ommi-yellow',
  ghost: 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
}

interface CommonProps {
  variant?: Variant
  children: ReactNode
  icon?: ReactNode
}

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' }

type LinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a'; href: string }

export function Button(props: ButtonProps | LinkProps) {
  const { variant = 'primary', children, icon, className = '', ...rest } = props
  const classes = `${base} ${variants[variant]} ${className}`

  if (props.as === 'a') {
    const { as: _as, ...anchorRest } = rest as LinkProps
    return (
      <a className={classes} {...anchorRest}>
        {children}
        {icon}
      </a>
    )
  }

  const { as: _as, ...buttonRest } = rest as ButtonProps
  return (
    <button className={classes} {...buttonRest}>
      {children}
      {icon}
    </button>
  )
}
