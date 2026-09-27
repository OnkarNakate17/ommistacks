import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon, YoutubeIcon } from '../components/BrandIcons'
import { SectionHeading } from '../components/SectionHeading'
import { Button } from '../components/Button'
import { socialLinks as defaultSocialLinks, type SocialLinks } from '../data/site'
import { useContent } from '../lib/useContent'

export function Contact() {
  const socialLinks = useContent<SocialLinks>('social.json', defaultSocialLinks)
  return (
    <section id="contact" className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          tag="~/ommistacks/contact"
          title="Let's build something interesting"
          description="I'm open to conversations around software engineering, backend development, AI projects, collaboration and technical content."
        />

        <div className="mt-10 flex flex-wrap gap-4">
          <Button as="a" href={`mailto:${socialLinks.email}`} variant="primary" icon={<Mail size={16} />}>
            Email
          </Button>
          <Button as="a" href={socialLinks.linkedin} target="_blank" rel="noreferrer noopener" variant="secondary" icon={<LinkedinIcon size={16} />}>
            LinkedIn
          </Button>
          <Button as="a" href={socialLinks.github} target="_blank" rel="noreferrer noopener" variant="secondary" icon={<GithubIcon size={16} />}>
            GitHub
          </Button>
          <Button as="a" href={socialLinks.youtube} target="_blank" rel="noreferrer noopener" variant="secondary" icon={<YoutubeIcon size={16} />}>
            YouTube
          </Button>
        </div>
      </div>
    </section>
  )
}
