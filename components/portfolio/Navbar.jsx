'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '@/data/portfolio'
import './navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="navbar">
      <nav className="container navbar__inner" aria-label="Primary">
        <a href="#home" className="navbar__logo" onClick={close}>
          {profile.name}
          <span className="navbar__dot" aria-hidden="true">.</span>
        </a>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn btn--primary btn--sm navbar__cta">
          Contact Me
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      <div id="mobile-menu" className={`navbar__mobile ${open ? 'is-open' : ''}`} hidden={!open}>
        <ul className="container">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={close}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn btn--primary" onClick={close}>
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
