export interface Experience {
  role: string
  location: string
  period: string
  focus: string[]
  note?: string
}

export const experience: Experience[] = [
  {
    role: 'Backend Software Developer',
    location: 'Pune, India',
    period: '3+ years',
    focus: ['Java', 'Spring Boot', 'Microservices', 'Fintech'],
    note: 'Building and maintaining backend systems in the fintech domain — API design, service reliability, and mentoring junior developers.',
  },
]
