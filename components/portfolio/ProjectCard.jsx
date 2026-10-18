import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import './project-card.css'

function ProjectLink({ href, label, icon, variant }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`btn btn--sm btn--${variant}`}>
      {icon}
      {label}
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  )
}

function TravelThumbnail() {
  return (
    <div className="thumb-travel" aria-hidden="true">
      <div className="thumb-travel__route" />
      <div className="thumb-travel__suitcase">
        <div className="thumb-travel__handle" />
        <div className="thumb-travel__body">
          <span />
          <span />
        </div>
      </div>
      <div className="thumb-travel__list">
        {[0, 1, 2].map((i) => (
          <div key={i} className="thumb-travel__item">
            <span className={`thumb-travel__check ${i < 2 ? 'is-done' : ''}`} />
            <span className="thumb-travel__line" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ProjectCard({ project }) {
  const { title, description, tags = [], githubUrl, githubProfileUrl, liveUrl } = project
  const hasRepo = Boolean(githubUrl)

  return (
    <article className="project-card">
      <div className="project-card__media">
        <TravelThumbnail />
      </div>
      <div className="project-card__body">
        <span className="project-card__label">Personal Project</span>
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{description}</p>

        <div className="project-card__tags">
          {tags.length > 0 ? (
            <ul aria-label="Technologies used">
              {tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          ) : (
            <p className="project-card__tags-empty">Tech stack details coming soon</p>
          )}
        </div>

        <div className="project-card__actions">
          {hasRepo ? (
            <ProjectLink href={githubUrl} label="View on GitHub" variant="primary" icon={<GithubIcon size={16} />} />
          ) : (
            <ProjectLink
              href={githubProfileUrl}
              label="View GitHub Profile"
              variant="primary"
              icon={<GithubIcon size={16} />}
            />
          )}
          {liveUrl && (
            <ProjectLink
              href={liveUrl}
              label="Live Demo"
              variant="secondary"
              icon={<ArrowUpRight size={16} aria-hidden="true" />}
            />
          )}
        </div>
        {!hasRepo && <p className="project-card__note">Repository link coming soon.</p>}
      </div>
    </article>
  )
}
