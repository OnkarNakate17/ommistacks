export interface Principle {
  title: string
  description: string
}

export const principles: Principle[] = [
  {
    title: 'Understand before optimizing',
    description: "Don't optimize code you don't understand.",
  },
  {
    title: 'Design for failure',
    description: 'Production systems fail. Good systems handle failure gracefully.',
  },
  {
    title: 'Keep it simple',
    description: 'Complexity should be justified.',
  },
  {
    title: 'Build. Measure. Improve.',
    description: 'Real engineering comes from iteration.',
  },
]
