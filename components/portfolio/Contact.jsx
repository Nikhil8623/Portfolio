import { Mail, Phone, ArrowUpRight } from 'lucide-react'
import { contact } from '@/data/portfolio'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import './contact.css'

export default function Contact() {
  const items = [
    { label: 'Email', value: contact.email, href: `mailto:${contact.email}`, icon: <Mail size={20} aria-hidden="true" /> },
    { label: 'Mobile', value: contact.phoneDisplay, href: contact.phoneHref, icon: <Phone size={20} aria-hidden="true" /> },
    { label: 'LinkedIn', value: 'Nikhil Lawand', href: contact.linkedin, icon: <LinkedinIcon size={20} />, external: true },
    { label: 'GitHub', value: `@${contact.githubUsername}`, href: contact.github, icon: <GithubIcon size={20} />, external: true },
  ]

  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <div className="section-header contact__header">
          <span className="section-eyebrow">05 / Contact</span>
          <h2 className="section-title">Let&apos;s Connect</h2>
          <p className="section-lead">
            I&apos;m always interested in connecting with fellow developers, learning from new opportunities, and
            exploring internships and projects.
          </p>
        </div>

        <ul className="contact__grid">
          {items.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="contact-card"
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className="contact-card__icon">{item.icon}</span>
                <span className="contact-card__text">
                  <span className="contact-card__label">{item.label}</span>
                  <span className="contact-card__value">{item.value}</span>
                </span>
                <ArrowUpRight size={18} className="contact-card__arrow" aria-hidden="true" />
                {item.external && <span className="sr-only">(opens in a new tab)</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
