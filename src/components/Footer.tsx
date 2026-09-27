import { Link } from 'react-router-dom'
import { BrandMark } from './BrandMark'
import { GithubIcon, LinkedinIcon, YoutubeIcon } from './BrandIcons'
import { SocialButton } from './SocialButton'
import { siteConfig, socialLinks as defaultSocialLinks, type SocialLinks } from '../data/site'
import { useContent } from '../lib/useContent'

export function Footer() {
  const socialLinks = useContent<SocialLinks>('social.json', defaultSocialLinks)
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link to="/" className="flex items-center gap-2.5" aria-label="OmmiStacks home">
            <BrandMark />
            <span className="font-[var(--font-display)] text-base font-semibold text-[var(--text-primary)]">
              {siteConfig.name}
            </span>
          </Link>
          <p className="mt-2 text-sm text-[var(--text-muted)]">Build. Learn. Explain. Repeat.</p>
        </div>

        <div className="flex items-center gap-3">
          <SocialButton href={socialLinks.github} label="GitHub" icon={<GithubIcon size={16} />} />
          <SocialButton href={socialLinks.linkedin} label="LinkedIn" icon={<LinkedinIcon size={16} />} />
          <SocialButton href={socialLinks.youtube} label="YouTube" icon={<YoutubeIcon size={16} />} />
        </div>
      </div>
      <div className="border-t border-[var(--border)] px-6 py-5">
        <p className="max-w-6xl text-xs text-[var(--text-muted)]">
          © {new Date().getFullYear()} {siteConfig.name}. Built by {siteConfig.author}.
        </p>
      </div>
    </footer>
  )
}
