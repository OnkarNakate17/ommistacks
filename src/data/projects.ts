export interface ArchitectureStep {
  label: string
}

export interface Project {
  slug: string
  name: string
  tagline: string
  description: string
  tech: string[]
  highlight: string
  features?: string[]
  architecture?: ArchitectureStep[]
  pipeline?: ArchitectureStep[]
  ctaLabel: string
  githubUrl: string // TODO: replace with real repository URL
}

export const projects: Project[] = [
  {
    slug: 'finbook',
    name: 'FinBook',
    tagline: 'Business accounting platform',
    description:
      'A business accounting platform inspired by modern accounting applications — built for customer management, transactions and day-to-day financial workflows.',
    tech: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Flyway'],
    highlight: 'Accounting • Dashboards • REST API architecture',
    features: [
      'Business accounting',
      'Customer management',
      'Transactions',
      'Financial workflows',
      'Dashboard',
      'REST API architecture',
    ],
    ctaLabel: 'View project',
    githubUrl: 'https://github.com/OnkarNakate17/finbook', // TODO: replace
  },
  {
    slug: 'patseva',
    name: 'PatSeva — Core Banking System',
    tagline: 'Microservices-based core banking system',
    description:
      'A core banking system split into independently deployable services, fronted by a gateway and secured with token-based authentication.',
    tech: ['Java', 'Spring Boot', 'Spring Cloud', 'PostgreSQL', 'Redis', 'JWT'],
    highlight: 'Microservices • Security • Distributed architecture',
    architecture: [
      { label: 'Config Server' },
      { label: 'Discovery Server' },
      { label: 'API Gateway' },
      { label: 'Auth Service' },
      { label: 'Customer Service' },
      { label: 'Account Service' },
      { label: 'Transaction Service' },
      { label: 'Admin Service' },
      { label: 'Loan Service' },
    ],
    ctaLabel: 'View architecture',
    githubUrl: 'https://github.com/OnkarNakate17/patseva', // TODO: replace
  },
  {
    slug: 'neurocuts',
    name: 'NeuroCuts',
    tagline: 'AI-powered autonomous video editing',
    description:
      'Converts raw video into production-ready content using a locally-run AI pipeline — no cloud processing required.',
    tech: ['Spring Boot', 'Python', 'FastAPI', 'Whisper', 'FFmpeg', 'PostgreSQL', 'Redis', 'MinIO'],
    highlight: 'AI • Video processing • Backend architecture',
    pipeline: [
      { label: 'Upload' },
      { label: 'Transcription' },
      { label: 'Highlight Detection' },
      { label: 'Scene Detection' },
      { label: 'Emotion Analysis' },
      { label: 'Hook Detection' },
      { label: 'Final Video' },
    ],
    ctaLabel: 'Explore project',
    githubUrl: 'https://github.com/OnkarNakate17/neurocuts', // TODO: replace
  },
]
