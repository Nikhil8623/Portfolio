import { GraduationCap, Hammer, CodeXml } from 'lucide-react'
import { about } from '@/data/portfolio'
import './about.css'

const icons = { graduation: GraduationCap, hammer: Hammer, code: CodeXml }

export default function About() {
  return (
    <section id="about" className="section section--alt">
      <div className="container about">
        <div>
          <span className="section-eyebrow">01 / About</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-lead">{about.text}</p>
        </div>

        <ul className="about__highlights">
          {about.highlights.map((item) => {
            const Icon = icons[item.icon]
            return (
              <li key={item.title} className="about__highlight">
                <span className="about__icon">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <p>{item.title}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
