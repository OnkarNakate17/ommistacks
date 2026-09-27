export interface ContentItem {
  title: string
  description: string
  category: string
  youtubeUrl: string // TODO: replace with the real video/playlist URL
  thumbnail?: string // optional image URL, e.g. a YouTube thumbnail
}

// Placeholder content cards — replace youtubeUrl with real links once published.
export const contentItems: ContentItem[] = [
  {
    title: 'Core Java Interview Mastery',
    description: '1500+ interview questions — concept, explanation, real-world scenario, code, follow-up.',
    category: 'Interview Preparation',
    youtubeUrl: 'https://youtube.com/@OmmiStacks', // TODO: replace
  },
  {
    title: 'What Actually Happens After You Call an API?',
    description: 'Tracing a request from the client through the network to the response.',
    category: 'Backend Engineering',
    youtubeUrl: 'https://youtube.com/@OmmiStacks', // TODO: replace
  },
  {
    title: 'How Does a UPI Payment System Work?',
    description: 'Breaking down the architecture behind real-time payments in India.',
    category: 'System Design',
    youtubeUrl: 'https://youtube.com/@OmmiStacks', // TODO: replace
  },
  {
    title: 'Spring Boot Request Lifecycle Explained',
    description: 'What happens between a request hitting your controller and the response leaving it.',
    category: 'Spring Boot',
    youtubeUrl: 'https://youtube.com/@OmmiStacks', // TODO: replace
  },
  {
    title: 'Microservices vs Monolith',
    description: 'When to split a system apart — and when not to.',
    category: 'System Design',
    youtubeUrl: 'https://youtube.com/@OmmiStacks', // TODO: replace
  },
  {
    title: 'What Happens Inside HashMap?',
    description: 'Buckets, hashing and collisions — the internals behind java.util.HashMap.',
    category: 'Java',
    youtubeUrl: 'https://youtube.com/@OmmiStacks', // TODO: replace
  },
]

export const contentCategories = [
  'Java',
  'Spring Boot',
  'System Design',
  'Backend Engineering',
  'AI',
  'Interview Preparation',
]
