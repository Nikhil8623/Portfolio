import { projects } from '@/data/portfolio'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">03 / Projects</span>
          <h2 className="section-title">Featured Project</h2>
          <p className="section-lead">A closer look at what I&apos;ve been building outside the classroom.</p>
        </div>
        <div style={{ display: 'grid', gap: 24 }}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
