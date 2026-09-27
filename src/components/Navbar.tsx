import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GithubIcon, LinkedinIcon, YoutubeIcon } from './BrandIcons'
import { Menu, X } from 'lucide-react'
import { BrandMark } from './BrandMark'
import { SocialButton } from './SocialButton'
import { ThemeToggle } from './ThemeToggle'
import { Button } from './Button'
import { socialLinks as defaultSocialLinks, type SocialLinks } from '../data/site'
import { useContent } from '../lib/useContent'
import type { Theme } from '../hooks/useTheme'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Projects', to: '/projects' },
  { label: 'Content', to: '/content' },
  { label: 'Experience', to: '/experience' },
  { label: 'Contact', to: '/contact' },
]

export function Navbar({  }: { onToggleTheme: () => void }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const socialLinks = useContent<SocialLinks>('social.json', defaultSocialLinks)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm transition-colors hover:text-[var(--text-primary)] ${
      isActive ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'
    }`

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-200 ${
        scrolled
          ? 'border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur-sm'
          : 'border-transparent bg-[var(--bg)]/0'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5" aria-label="OmmiStacks home">
          <BrandMark />
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} end={item.to === '/'} className={linkClass}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <SocialButton href={socialLinks.github} label="GitHub" icon={<GithubIcon size={16} />} />
          <SocialButton href={socialLinks.linkedin} label="LinkedIn" icon={<LinkedinIcon size={16} />} />
          <SocialButton href={socialLinks.youtube} label="YouTube" icon={<YoutubeIcon size={16} />} />
          <Button as="a" href="#/projects" variant="primary">
            Explore Projects
          </Button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] text-[var(--text-primary)]"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[var(--border)] bg-[var(--bg)] px-6 pb-6 lg:hidden">
          <ul className="flex flex-col gap-1 pt-4">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2.5 text-sm text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-3">
            <SocialButton href={socialLinks.github} label="GitHub" icon={<GithubIcon size={16} />} />
            <SocialButton href={socialLinks.linkedin} label="LinkedIn" icon={<LinkedinIcon size={16} />} />
            <SocialButton href={socialLinks.youtube} label="YouTube" icon={<YoutubeIcon size={16} />} />
          </div>
          <Button as="a" href="#/projects" variant="primary" className="mt-4 w-full justify-center" onClick={() => setOpen(false)}>
            Explore Projects
          </Button>
        </div>
      )}
    </header>
  )
}
