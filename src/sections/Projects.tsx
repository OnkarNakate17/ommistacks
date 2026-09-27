import { useState } from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { ProjectCard } from '../components/ProjectCard'
import { ProjectModal } from '../components/ProjectModal'
import { projects as defaultProjects, type Project } from '../data/projects'
import { useContent } from '../lib/useContent'

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)
  const projects = useContent('projects.json', defaultProjects)

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading tag="~/ommistacks/projects" title="Things I've built" />

      <div className="mt-12 grid gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} onOpen={setActive} />
        ))}
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  )
}
