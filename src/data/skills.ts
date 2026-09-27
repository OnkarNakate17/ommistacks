export interface Skill {
  name: string
  note: string
}

export interface SkillCategory {
  category: string
  path: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Backend',
    path: '~/stack/backend',
    skills: [
      { name: 'Java', note: 'Primary language' },
      { name: 'Spring Boot', note: 'Application framework' },
      { name: 'Spring Security', note: 'Auth & access control' },
      { name: 'Spring Data JPA', note: 'Persistence layer' },
      { name: 'REST APIs', note: 'Service contracts' },
      { name: 'Microservices', note: 'System architecture' },
    ],
  },
  {
    category: 'Database',
    path: '~/stack/database',
    skills: [
      { name: 'PostgreSQL', note: 'Primary datastore' },
      { name: 'Redis', note: 'Caching & sessions' },
    ],
  },
  {
    category: 'Frontend',
    path: '~/stack/frontend',
    skills: [
      { name: 'React', note: 'UI development' },
      { name: 'TypeScript', note: 'Typed application code' },
      { name: 'Angular', note: 'Enterprise UIs' },
    ],
  },
  {
    category: 'DevOps / Infra',
    path: '~/stack/infra',
    skills: [
      { name: 'Docker', note: 'Containerization' },
      { name: 'Git', note: 'Version control' },
      { name: 'GitHub', note: 'Collaboration & CI' },
      { name: 'CI/CD', note: 'Build & release pipelines' },
      { name: 'AWS', note: 'Cloud infrastructure' },
    ],
  },
  {
    category: 'AI',
    path: '~/stack/ai',
    skills: [
      { name: 'Python', note: 'AI tooling & scripts' },
      { name: 'FastAPI', note: 'AI service layer' },
      { name: 'Whisper', note: 'Speech transcription' },
      { name: 'AI Video Processing', note: 'Applied pipelines' },
    ],
  },
]
