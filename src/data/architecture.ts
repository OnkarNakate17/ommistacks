export interface SystemNode {
  id: string
  label: string
  concept: string
  explanation: string
}

// The request-flow diagram used in the System Design section.
export const systemNodes: SystemNode[] = [
  {
    id: 'user',
    label: 'User',
    concept: 'Client',
    explanation: 'A browser or mobile app initiating a request.',
  },
  {
    id: 'lb',
    label: 'Load Balancer',
    concept: 'Load Balancing',
    explanation: 'Distributes incoming traffic across healthy instances.',
  },
  {
    id: 'gateway',
    label: 'API Gateway',
    concept: 'Service Discovery',
    explanation: 'Single entry point that routes requests to the right service.',
  },
  {
    id: 'auth',
    label: 'Auth Service',
    concept: 'Authentication',
    explanation: 'Verifies identity and issues or validates tokens.',
  },
  {
    id: 'services',
    label: 'Microservices',
    concept: 'Service Boundaries',
    explanation: 'Independently deployable units, each owning one responsibility.',
  },
  {
    id: 'cache',
    label: 'Redis / Kafka',
    concept: 'Caching & Messaging',
    explanation: 'Speeds up reads and decouples services with async events.',
  },
  {
    id: 'db',
    label: 'PostgreSQL',
    concept: 'Database',
    explanation: 'Durable storage for the state each service owns.',
  },
]
