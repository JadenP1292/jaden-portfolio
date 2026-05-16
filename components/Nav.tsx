'use client'

import { useState } from 'react'

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-cream-base/[0.94] backdrop-blur-md border-b border-warm-border">
      <div className="max-w-[900px] mx-auto px-6 h-[60px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-[15px] font-extrabold text-dark tracking-tight">
          Jaden <span className="text-accent">Path</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-stone-500 font-medium hover:text-dark transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-[13px] font-semibold text-white bg-dark px-4 py-2 rounded-md"
          >
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-dark"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          data-testid="mobile-menu"
          className="md:hidden absolute w-full bg-cream-base border-b border-warm-border px-6 py-4 flex flex-col gap-4 shadow-md"
        >
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[14px] text-dark font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-[14px] font-semibold text-white bg-dark px-4 py-2 rounded-md text-center"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  )
}
