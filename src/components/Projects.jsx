import SectionHeading from './SectionHeading.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <SectionHeading>Projects</SectionHeading>

      {/* .map() turns each project object into a card. React needs a stable,
          unique `key` on each one so it can tell the cards apart between renders. */}
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  )
}
