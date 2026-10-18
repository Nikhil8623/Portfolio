import { LayoutTemplate, Database, Terminal } from 'lucide-react'
import { skillGroups } from '@/data/portfolio'
import './skills.css'

const icons = { layout: LayoutTemplate, database: Database, terminal: Terminal }

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">02 / Skills</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-lead">
            The technologies I&apos;m currently working with and building on through coursework and projects.
          </p>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group) => {
            const Icon = icons[group.icon] ?? Terminal
            return (
              <article key={group.category} className="skill-card">
                <div className="skill-card__head">
                  <span className="skill-card__icon">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3>{group.category}</h3>
                </div>
                <ul className="skill-card__list">
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
