import { render, screen } from '@testing-library/react'
import Projects from '@/components/Projects'
import { projects } from '@/data/projects'

describe('Projects', () => {
  it('renders a card for every project in the data file', () => {
    render(<Projects />)
    projects.forEach(project => {
      expect(screen.getByText(project.title)).toBeInTheDocument()
    })
  })

  it('renders a "View Case Study" link for each project', () => {
    render(<Projects />)
    const links = screen.getAllByRole('link', { name: /View Case Study/i })
    expect(links).toHaveLength(projects.length)
  })

  it('renders tool tags for the Creator Matchmaking project', () => {
    render(<Projects />)
    expect(screen.getByText('React Native')).toBeInTheDocument()
    expect(screen.getByText('Supabase')).toBeInTheDocument()
  })
})
