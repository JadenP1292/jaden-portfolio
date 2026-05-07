import { render, screen } from '@testing-library/react'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'

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
