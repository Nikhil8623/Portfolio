import { GraduationCap, Building2, BookOpen, CalendarClock } from 'lucide-react'
import { education } from '@/data/portfolio'
import './education.css'

const statusText = { done: 'Completed', current: 'In progress', upcoming: 'Upcoming' }

export default function Education() {
  const details = [
    { icon: BookOpen, label: 'Branch', value: education.branch },
    { icon: Building2, label: 'College', value: education.college },
    { icon: CalendarClock, label: 'Expected Graduation', value: education.graduationYear },
  ]

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">04 / Education</span>
          <h2 className="section-title">Education</h2>
        </div>

        <article className="edu-card">
          <header className="edu-card__head">
            <span className="edu-card__icon">
              <GraduationCap size={26} aria-hidden="true" />
            </span>
            <div className="edu-card__heading">
              <h3>{education.degree}</h3>
              <p>{education.college}</p>
            </div>
            <span className="edu-card__badge">{education.currentYear}</span>
          </header>

          <dl className="edu-card__details">
            {details.map(({ icon: Icon, label, value }) => (
              <div key={label} className="edu-card__detail">
                <Icon size={18} aria-hidden="true" />
                <div>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              </div>
            ))}
          </dl>

          <div className="edu-timeline">
            <h4 className="edu-timeline__title">Academic Progress</h4>
            <ol className="edu-timeline__track">
              {education.timeline.map((step) => (
                <li key={step.label} className={`edu-timeline__step is-${step.status}`}>
                  <span className="edu-timeline__node" aria-hidden="true" />
                  <span className="edu-timeline__label">{step.label}</span>
                  <span className="edu-timeline__status">{statusText[step.status]}</span>
                </li>
              ))}
              <li className="edu-timeline__step is-goal">
                <span className="edu-timeline__node" aria-hidden="true">
                  <GraduationCap size={14} />
                </span>
                <span className="edu-timeline__label">Graduation</span>
                <span className="edu-timeline__status">Expected {education.graduationYear}</span>
              </li>
            </ol>
          </div>
        </article>
      </div>
    </section>
  )
}
