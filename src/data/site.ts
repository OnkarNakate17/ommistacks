// Centralized brand + social configuration.
// Update the values in this file with your real links — nothing else
// in the codebase needs to change.

// Which GitHub repo the live site reads its editable content from, and
// which the admin panel (/admin/) commits to. Change this if you rename
// the repo or move to a different account.
export const repoConfig = {
  owner: 'OnkarNakate17', // TODO: your GitHub username / org
  repo: 'OmmiStacks', // TODO: your repository name
  branch: 'main',
  contentPath: 'content', // folder in the repo holding the editable JSON files
}

export const siteConfig = {
  name: 'OmmiStacks',
  author: 'Onkar Nakate',
  title: 'OmmiStacks — Learn Software Engineering by Understanding How It Actually Works',
  description:
    'OmmiStacks is a software engineering education platform by Onkar Nakate, a Java backend developer. Practical content on Java, Spring Boot, microservices, system design and AI engineering.',
  url: 'https://onkarnakate17.github.io/OmmiStacks/', // TODO: replace with your canonical URL
  keywords: [
    'Java Developer',
    'Java Backend Developer',
    'Spring Boot Developer',
    'Java Interview Preparation',
    'System Design',
    'Microservices',
    'Backend Engineering',
    'Software Engineering',
    'AI Engineering',
    'OmmiStacks',
    'Onkar Nakate',
  ],
}

export interface SocialLinks {
  github: string
  linkedin: string
  youtube: string
  email: string
}

export const socialLinks: SocialLinks = {
  github: 'https://github.com/OnkarNakate17', // TODO: verify
  linkedin: 'https://linkedin.com/in/onkarnakate', // TODO: replace with real profile
  youtube: 'https://youtube.com/@OmmiStacks', // TODO: replace with real channel
  email: 'contact@ommistacks.dev', // TODO: replace with real email
}

export interface FeaturedRepo {
  name: string
  description: string
  url: string
  tech: string[]
}

export const githubConfig: { username: string; profileUrl: string; featuredRepos: FeaturedRepo[] } = {
  username: 'OnkarNakate17',
  profileUrl: 'https://github.com/OnkarNakate17', // TODO: verify
  featuredRepos: [
    {
      name: 'FinBook',
      description: 'Business accounting platform — customers, transactions and financial workflows.',
      url: 'https://github.com/OnkarNakate17/finbook', // TODO: replace with real repo URL
      tech: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL'],
    },
    {
      name: 'PatSeva',
      description: 'Microservices-based core banking system with API gateway and service discovery.',
      url: 'https://github.com/OnkarNakate17/patseva', // TODO: replace with real repo URL
      tech: ['Java', 'Spring Cloud', 'PostgreSQL', 'Redis'],
    },
    {
      name: 'NeuroCuts',
      description: 'AI-powered autonomous video editing pipeline, run locally.',
      url: 'https://github.com/OnkarNakate17/neurocuts', // TODO: replace with real repo URL
      tech: ['Python', 'FastAPI', 'Whisper', 'FFmpeg'],
    },
  ],
}
