import { render, screen } from '@testing-library/react'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'

describe('SectionLabel', () => {
  it('renders its children', () => {
    render(<SectionLabel>About</SectionLabel>)
    expect(screen.getByText('About')).toBeInTheDocument()
  })
})

describe('Button', () => {
  it('renders as an anchor with correct href', () => {
    render(<Button href="#projects" variant="primary">View Projects</Button>)
    const link = screen.getByRole('link', { name: 'View Projects' })
    expect(link).toHaveAttribute('href', '#projects')
  })

  it('applies dark variant styles', () => {
    render(<Button href="/resume.pdf" variant="dark">Download Resume</Button>)
    const link = screen.getByRole('link', { name: 'Download Resume' })
    expect(link).toHaveClass('bg-dark')
  })

  it('applies outline variant styles', () => {
    render(<Button href="#" variant="outline">LinkedIn →</Button>)
    const link = screen.getByRole('link', { name: 'LinkedIn →' })
    expect(link).toHaveClass('border-accent')
  })
})

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />)
    expect(screen.getByText(/Product\. Growth\./)).toBeInTheDocument()
    expect(screen.getByText('Analytics.')).toBeInTheDocument()
  })

  it('renders the View Projects CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'View Projects' })).toHaveAttribute('href', '#projects')
  })

  it('renders the Download Resume CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Download Resume' })).toHaveAttribute('href', '/resume.pdf')
  })
})

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByText(/Strategy \+ data/)).toBeInTheDocument()
  })

  it('renders the four stat cards', () => {
    render(<About />)
    expect(screen.getByText('5+')).toBeInTheDocument()
    expect(screen.getByText('2025')).toBeInTheDocument()
    expect(screen.getByText('LMU Graduation')).toBeInTheDocument()
  })
})

describe('Skills', () => {
  it('renders all three skill group headings', () => {
    render(<Skills />)
    expect(screen.getByText('Data & Analytics')).toBeInTheDocument()
    expect(screen.getByText('Product & Growth')).toBeInTheDocument()
    expect(screen.getByText('Tech & Tools')).toBeInTheDocument()
  })

  it('renders specific skill pills', () => {
    render(<Skills />)
    expect(screen.getByText('SQL')).toBeInTheDocument()
    expect(screen.getByText('React Native')).toBeInTheDocument()
  })
})

import Experience from '@/components/Experience'
import { experiences } from '@/data/experience'

describe('Experience', () => {
  it('renders a card for every experience entry', () => {
    render(<Experience />)
    experiences.forEach(exp => {
      expect(screen.getByText(exp.title)).toBeInTheDocument()
    })
  })

  it('renders bullet points for the first experience', () => {
    render(<Experience />)
    expect(screen.getByText(experiences[0].bullets[0])).toBeInTheDocument()
  })
})
