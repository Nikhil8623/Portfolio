import { profile, contact } from '@/data/portfolio'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import './footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">{profile.name}</p>
          <p className="footer__desc">{profile.title}</p>
        </div>
        <div className="footer__links">
          <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in a new tab)">
            <GithubIcon size={18} />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in a new tab)">
            <LinkedinIcon size={18} />
          </a>
        </div>
      </div>
      <div className="container">
        <p className="footer__copy">
          &copy; {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
