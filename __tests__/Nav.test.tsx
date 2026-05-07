import { render, screen, fireEvent } from '@testing-library/react'
import Nav from '@/components/Nav'

describe('Nav', () => {
  it('renders the logo with correct name', () => {
    render(<Nav />)
    expect(screen.getByText('Jaden')).toBeInTheDocument()
    expect(screen.getByText('Path')).toBeInTheDocument()
  })

  it('renders all desktop nav links', () => {
    render(<Nav />)
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Skills' })).toHaveAttribute('href', '#skills')
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '#projects')
    expect(screen.getByRole('link', { name: 'Experience' })).toHaveAttribute('href', '#experience')
  })

  it('renders the Contact CTA', () => {
    render(<Nav />)
    const contactLinks = screen.getAllByRole('link', { name: 'Contact' })
    expect(contactLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('shows mobile menu when hamburger is clicked', () => {
    render(<Nav />)
    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()
    fireEvent.click(toggle)
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()
  })

  it('hides mobile menu when a link inside it is clicked', () => {
    render(<Nav />)
    fireEvent.click(screen.getByRole('button', { name: 'Toggle menu' }))
    const mobileMenu = screen.getByTestId('mobile-menu')
    fireEvent.click(mobileMenu.querySelectorAll('a')[0])
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()
  })
})
