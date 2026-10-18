import { ArrowRight } from 'lucide-react'
import { profile, education } from '@/data/portfolio'
import './hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content reveal">
          <p className="hero__status">
            <span className="hero__status-dot" aria-hidden="true" />
            Open to internships and learning opportunities
          </p>
          <h1 className="hero__title">
            Hi, I&apos;m <span className="hero__name">{profile.name}.</span>
          </h1>
          <p className="hero__headline">{profile.headline}</p>
          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View My Projects
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn--secondary">
              Get In Touch
            </a>
          </div>

          <ul className="hero__tech" aria-label="Technologies I work with">
            {profile.heroTech.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>

        <div className="hero__visual reveal" aria-hidden="true">
          <div className="code-window">
            <div className="code-window__bar">
              <span />
              <span />
              <span />
              <p>nikhil.js</p>
            </div>
            <pre className="code-window__body">
              <code>
                <span className="c-key">const</span> <span className="c-var">developer</span> = {'{'}
                {'\n'}  <span className="c-prop">name</span>: <span className="c-str">{`'${profile.name}'`}</span>,
                {'\n'}  <span className="c-prop">degree</span>: <span className="c-str">&apos;B.Tech IT&apos;</span>,
                {'\n'}  <span className="c-prop">year</span>: <span className="c-str">{`'${education.currentYear}'`}</span>,
                {'\n'}  <span className="c-prop">focus</span>: <span className="c-str">&apos;Frontend&apos;</span>,
                {'\n'}  <span className="c-prop">stack</span>: [
                {'\n'}    <span className="c-str">&apos;HTML&apos;</span>, <span className="c-str">&apos;CSS&apos;</span>, <span className="c-str">&apos;JS&apos;</span>,
                {'\n'}    <span className="c-str">&apos;SQL&apos;</span>, <span className="c-str">&apos;Python&apos;</span>
                {'\n'}  ],
                {'\n'}  <span className="c-prop">learning</span>: <span className="c-key">true</span>,
                {'\n'}{'}'};
              </code>
            </pre>
          </div>
          <div className="hero__shape hero__shape--ring" />
          <div className="hero__shape hero__shape--square" />
        </div>
      </div>
    </section>
  )
}
