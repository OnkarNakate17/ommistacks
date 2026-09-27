import { motion, useReducedMotion } from 'framer-motion'
import { YoutubeIcon } from '../components/BrandIcons'
import { ArrowRight } from 'lucide-react'
import { Button } from '../components/Button'
import profilePlaceholder from '../assets/profile-placeholder.png'

function ProfilePanel() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]">
        <img
          src={profilePlaceholder}
          alt="Onkar Nakate — Java backend developer, creator of OmmiStacks"
          className="aspect-[9/12] w-full object-cover"
        />
      </div>
      <div className="absolute -bottom-5 -left-5 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] px-5 py-3 shadow-lg">
        <p className="font-[var(--font-display)] text-sm font-semibold text-[var(--text-primary)]">Onkar Nakate</p>
        <p className="text-xs text-[var(--text-muted)]">Java Backend Developer · Fintech</p>
      </div>
    </div>
  )
}

export function Hero() {
  const reduce = useReducedMotion()
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-28 lg:pt-24">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center rounded-full border border-[var(--border)] px-3 py-1 font-mono text-xs text-[var(--text-secondary)]">
            Software Engineering · AI · System Design
          </span>

          <h1 className="mt-6 font-[var(--font-display)] text-4xl font-semibold leading-[1.1] tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-[3.25rem]">
            Building software. Explaining systems. Sharing what I learn.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            I'm Onkar Nakate, a Java backend developer and the creator of OmmiStacks — a technology
            platform focused on practical software engineering, backend systems, AI and system design.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button as="a" href="#/projects" variant="primary" icon={<ArrowRight size={16} />}>
              Explore My Work
            </Button>
            <Button as="a" href="#/content" variant="secondary" icon={<YoutubeIcon size={16} />}>
              Watch on YouTube
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
        >
          <ProfilePanel />
        </motion.div>
      </div>
    </section>
  )
}
