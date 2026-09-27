import { Projects as ProjectsSection } from '../sections/Projects'
import { SystemDesign } from '../sections/SystemDesign'
import { GitHubSection } from '../sections/GitHubSection'

export function ProjectsPage() {
  return (
    <>
      <ProjectsSection />
      <SystemDesign />
      <GitHubSection />
    </>
  )
}
