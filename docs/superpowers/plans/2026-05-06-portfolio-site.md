# Jaden Path Portfolio — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a fully responsive single-page portfolio website for Jaden Path using Next.js 14 (App Router), React, and Tailwind CSS, ready to deploy on Vercel.

**Architecture:** A single Next.js page (`app/page.tsx`) assembles all section components in order. Content (projects, skills, experience) lives in typed `data/` modules so it can be updated without touching component code. Nav is a client component (uses `useState` for mobile menu); all other sections are server components (pure JSX, no hooks). Styling is entirely Tailwind CSS with custom color tokens defined in `tailwind.config.ts`.

**Tech Stack:** Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS v3, Inter via `next/font/google`, Jest + React Testing Library (component tests), Vercel (deployment)

---

## File Map

| File | Responsibility |
|---|---|
| `app/layout.tsx` | Root layout, Inter font variable, `<html>` metadata |
| `app/page.tsx` | Assembles all section components in order |
| `app/globals.css` | Tailwind directives + `scroll-behavior: smooth` |
| `tailwind.config.ts` | Custom color tokens, font-sans override |
| `data/projects.ts` | Project data array + `Project` type |
| `data/skills.ts` | Skill group data array + `SkillGroup` type |
| `data/experience.ts` | Experience data array + `Experience` type |
| `components/ui/SectionLabel.tsx` | Uppercase orange label above section titles |
| `components/ui/Button.tsx` | Three-variant (primary, dark, outline) anchor button |
| `components/Nav.tsx` | Sticky nav, desktop links, mobile hamburger dropdown |
| `components/Hero.tsx` | Full-width hero with headline, CTAs, badges |
| `components/About.tsx` | Bio text + 2×2 stat cards grid |
| `components/Skills.tsx` | Three-column skill group cards |
| `components/Projects.tsx` | Two-column project card grid |
| `components/Experience.tsx` | Vertical list of experience cards |
| `components/ResumeBand.tsx` | Dark full-width resume download band |
| `components/Contact.tsx` | Contact links + mailto form |
| `components/Footer.tsx` | One-line footer with name and links |
| `jest.config.ts` | Jest config using `next/jest` helper |
| `jest.setup.ts` | Imports `@testing-library/jest-dom` |
| `__tests__/Nav.test.tsx` | Nav render + mobile toggle tests |
| `__tests__/Projects.test.tsx` | All 5 project cards render test |
| `__tests__/smoke.test.tsx` | Key sections render without crashing |

---

## Task 1: Scaffold Next.js project and configure testing

**Files:**
- Create: all project files via `create-next-app`
- Create: `jest.config.ts`
- Create: `jest.setup.ts`
- Modify: `package.json`

- [ ] **Step 1: Run create-next-app in the current directory**

From `/Users/bpath/Documents/jaden-portfolio`, run:
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --no-src-dir --import-alias="@/*" --use-npm
```
If prompted that the directory is not empty, confirm with `y`.
If asked about additional options interactively, accept defaults.

Expected result: project files appear including `app/`, `public/`, `tailwind.config.ts`, `next.config.ts`, `package.json`.

- [ ] **Step 2: Verify the version of Tailwind that was installed**

```bash
npm list tailwindcss
```

Expected: `tailwindcss@3.x.x` (this plan is written for Tailwind 3). If `4.x.x` is installed, run `npm install tailwindcss@^3` before continuing.

- [ ] **Step 3: Install testing dependencies**

```bash
npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @types/jest
```

- [ ] **Step 4: Create `jest.config.ts`**

```ts
import type { Config } from 'jest'
import nextJest from 'next/jest'

const createJestConfig = nextJest({ dir: './' })

const config: Config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
}

export default createJestConfig(config)
```

- [ ] **Step 5: Create `jest.setup.ts`**

```ts
import '@testing-library/jest-dom'
```

- [ ] **Step 6: Add test script to `package.json`**

In the `"scripts"` section of `package.json`, add:
```json
"test": "jest",
"test:watch": "jest --watch"
```

- [ ] **Step 7: Verify dev server starts**

```bash
npm run dev
```
Expected: server starts at `http://localhost:3000` showing the default Next.js landing page. Stop with Ctrl+C.

- [ ] **Step 8: Re-add `.superpowers/` to `.gitignore`** (create-next-app may have overwritten it)

Add to the bottom of `.gitignore`:
```
.superpowers/
```

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "chore: scaffold Next.js 14 project with TypeScript, Tailwind, and Jest"
```

---

## Task 2: Configure Tailwind, globals, and root layout

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Replace `tailwind.config.ts` with custom color tokens**

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cream-base': '#faf8f5',
        'cream-alt':  '#f5f0e8',
        'cream-muted': '#ede8df',
        'warm-border': '#e8e3db',
        accent: {
          DEFAULT: '#c2650a',
          dark: '#92400e',
        },
        dark: '#1c1917',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 2: Replace `app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}
```

- [ ] **Step 3: Replace `app/layout.tsx`**

```tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Jaden Path — Product, Growth & Analytics',
  description: 'Portfolio of Jaden Path, LMU senior specializing in product marketing, growth analytics, and AI workflows.',
  openGraph: {
    title: 'Jaden Path — Product, Growth & Analytics',
    description: 'Portfolio of Jaden Path, LMU senior specializing in product marketing, growth analytics, and AI workflows.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-cream-base text-dark antialiased`}>
        {children}
      </body>
    </html>
  )
}
```

- [ ] **Step 4: Verify Tailwind classes resolve — check dev server**

```bash
npm run dev
```
Visit `http://localhost:3000`. The page should load without console errors about unknown classes. Stop with Ctrl+C.

- [ ] **Step 5: Commit**

```bash
git add tailwind.config.ts app/globals.css app/layout.tsx
git commit -m "chore: configure Tailwind custom tokens, Inter font, and page metadata"
```

---

## Task 3: Create content data files

**Files:**
- Create: `data/projects.ts`
- Create: `data/skills.ts`
- Create: `data/experience.ts`

- [ ] **Step 1: Create `data/projects.ts`**

```ts
export interface Project {
  id: string
  type: string
  title: string
  description: string
  tools: string[]
  imageAlt: string
}

export const projects: Project[] = [
  {
    id: 'creator-matchmaking',
    type: 'Mobile App',
    title: 'Creator Matchmaking App',
    description:
      'Built a mobile platform connecting brands with content creators, solving discovery and vetting friction in the creator economy.',
    tools: ['Expo', 'React Native', 'TypeScript', 'Supabase', 'NativeWind'],
    imageAlt: 'Screenshot / Demo',
  },
  {
    id: 'real-estate-analytics',
    type: 'Analytics',
    title: 'Real Estate Analytics',
    description:
      'Designed financial analysis systems for investment properties, covering rent rolls, income statements, KPI benchmarking, and year-over-year performance.',
    tools: ['Excel', 'Financial Modeling', 'KPI Dashboards'],
    imageAlt: 'Charts / Spreadsheet',
  },
  {
    id: 'sql-dashboard',
    type: 'Data',
    title: 'SQL / Data Dashboard',
    description:
      '[Brief description of the problem this project solved. Fill in with real context.]',
    tools: ['SQL', 'Python'],
    imageAlt: 'Dashboard Screenshot',
  },
  {
    id: 'growth-case-study',
    type: 'Growth',
    title: 'Growth / Social Media Case Study',
    description:
      '[Brief description of what you grew, for who, using what strategy. Include the key metric or channel.]',
    tools: ['Content Strategy', 'Analytics'],
    imageAlt: 'Growth Metrics',
  },
  {
    id: 'ai-workflow',
    type: 'AI / Productivity',
    title: 'AI Workflow Project',
    description:
      '[Describe the workflow you built, what manual process it replaced or improved, and what measurable gain it produced.]',
    tools: ['AI Tools', 'Automation'],
    imageAlt: 'AI Workflow Diagram',
  },
]
```

- [ ] **Step 2: Create `data/skills.ts`**

```ts
export interface SkillGroup {
  name: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    name: 'Data & Analytics',
    skills: ['SQL', 'Python', 'Excel / Sheets', 'Dashboards', 'KPI Modeling', 'Financial Analysis', 'YoY Analysis'],
  },
  {
    name: 'Product & Growth',
    skills: ['Product Analytics', 'Growth Strategy', 'Social Media', 'Content Creation', 'Audience Growth', 'Creator Economy'],
  },
  {
    name: 'Tech & Tools',
    skills: ['React Native', 'TypeScript', 'Supabase', 'AI Workflows', 'Project Coordination', 'Notion / Airtable'],
  },
]
```

- [ ] **Step 3: Create `data/experience.ts`**

```ts
export interface Experience {
  emoji: string
  title: string
  meta: string
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    emoji: '💼',
    title: 'Business Analyst / Operations — [Company Name]',
    meta: '[Dates] · [Location / Remote]',
    bullets: [
      'Led audits and inventory reporting, surfacing cost-saving opportunities across product lines',
      'Built product performance analyses and supported new product development cycles',
      'Assisted with website creation and cross-functional project coordination',
    ],
  },
  {
    emoji: '📊',
    title: 'Real Estate Analytics — [Company / Context]',
    meta: '[Dates] · [Location / Remote]',
    bullets: [
      'Built financial analysis spreadsheets covering rent rolls, income statements, and balance sheets',
      'Benchmarked property KPIs and produced year-over-year investment performance reports',
      'Supported strategic decisions with data-backed recommendations for portfolio optimization',
    ],
  },
  {
    emoji: '🚀',
    title: '[Role] — Creator Matchmaking App',
    meta: '[Dates] · Independent / Team Project',
    bullets: [
      'Designed and built a full-stack mobile app using Expo, React Native, TypeScript, and Supabase',
      'Owned product decisions, UX flows, and backend data architecture',
      '[Add metric or outcome when available]',
    ],
  },
]
```

- [ ] **Step 4: Commit**

```bash
git add data/
git commit -m "feat: add typed content data files for projects, skills, and experience"
```

---

## Task 4: Create UI primitive components

**Files:**
- Create: `components/ui/SectionLabel.tsx`
- Create: `components/ui/Button.tsx`

- [ ] **Step 1: Write the failing smoke test for SectionLabel and Button**

Create `__tests__/smoke.test.tsx`:
```tsx
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
```

- [ ] **Step 2: Run the test to verify it fails**

```bash
npm test -- --testPathPattern="smoke"
```
Expected: FAIL — `Cannot find module '@/components/ui/SectionLabel'`

- [ ] **Step 3: Create `components/ui/SectionLabel.tsx`**

```tsx
interface Props {
  children: React.ReactNode
}

export default function SectionLabel({ children }: Props) {
  return (
    <p className="text-[11px] font-bold tracking-[2.5px] uppercase text-accent-dark mb-2.5">
      {children}
    </p>
  )
}
```

- [ ] **Step 4: Create `components/ui/Button.tsx`**

```tsx
interface Props {
  href: string
  variant: 'primary' | 'dark' | 'outline'
  children: React.ReactNode
  className?: string
}

const variantClasses: Record<Props['variant'], string> = {
  primary: 'bg-accent text-white',
  dark:    'bg-dark text-white',
  outline: 'border-[1.5px] border-accent text-accent-dark bg-transparent',
}

export default function Button({ href, variant, children, className = '' }: Props) {
  return (
    <a
      href={href}
      className={`text-[14px] font-semibold px-6 py-3 rounded-[7px] inline-block ${variantClasses[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
```

- [ ] **Step 5: Run the tests to verify they pass**

```bash
npm test -- --testPathPattern="smoke"
```
Expected: all 4 tests in `smoke.test.tsx` PASS.

- [ ] **Step 6: Commit**

```bash
git add components/ui/ __tests__/smoke.test.tsx
git commit -m "feat: add SectionLabel and Button UI primitive components with tests"
```

---

## Task 5: Nav component

**Files:**
- Create: `components/Nav.tsx`
- Create: `__tests__/Nav.test.tsx`

- [ ] **Step 1: Write the failing Nav test**

Create `__tests__/Nav.test.tsx`:
```tsx
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
```

- [ ] **Step 2: Run the test to verify it fails**

```bash
npm test -- --testPathPattern="Nav"
```
Expected: FAIL — `Cannot find module '@/components/Nav'`

- [ ] **Step 3: Create `components/Nav.tsx`**

```tsx
'use client'

import { useState } from 'react'

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
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
```

- [ ] **Step 4: Run the tests to verify they pass**

```bash
npm test -- --testPathPattern="Nav"
```
Expected: all 5 Nav tests PASS.

- [ ] **Step 5: Commit**

```bash
git add components/Nav.tsx __tests__/Nav.test.tsx
git commit -m "feat: add Nav component with sticky header and mobile dropdown"
```

---

## Task 6: Hero section

**Files:**
- Create: `components/Hero.tsx`

- [ ] **Step 1: Add Hero tests to `__tests__/smoke.test.tsx`**

Open `__tests__/smoke.test.tsx` and add at the bottom:
```tsx
import Hero from '@/components/Hero'

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
```

- [ ] **Step 2: Run to verify Hero tests fail**

```bash
npm test -- --testPathPattern="smoke"
```
Expected: FAIL on Hero tests — `Cannot find module '@/components/Hero'`

- [ ] **Step 3: Create `components/Hero.tsx`**

```tsx
import Button from '@/components/ui/Button'

const badges = [
  'Product Marketing',
  'Growth Analytics',
  'Business Operations',
  'AI Workflows',
  'Creator Economy',
]

export default function Hero() {
  return (
    <section className="py-24 px-6 text-center bg-gradient-to-b from-cream-base to-cream-alt border-b border-warm-border">
      <div className="max-w-[900px] mx-auto">
        {/* Tag pill */}
        <div className="inline-block bg-cream-muted text-accent-dark text-[11px] font-bold tracking-[2.5px] uppercase px-4 py-1.5 rounded-full mb-6">
          LMU · Information Systems & Business Analytics
        </div>

        {/* Headline */}
        <h1 className="text-[52px] font-black text-dark leading-[1.05] tracking-[-1.5px] mb-5">
          Product. Growth.
          <br />
          <span className="text-accent">Analytics.</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg text-stone-500 max-w-[520px] mx-auto leading-[1.65] mb-9">
          I build at the intersection of data, product, and AI, turning insights into strategy
          and strategy into results.
        </p>

        {/* CTA row */}
        <div className="flex gap-3 justify-center flex-wrap mb-12">
          <Button href="#projects" variant="primary">View Projects</Button>
          <Button href="/resume.pdf" variant="dark">Download Resume</Button>
          <Button href="https://linkedin.com/in/jadenpath" variant="outline">LinkedIn →</Button>
        </div>

        {/* Badges */}
        <div className="flex gap-2.5 justify-center flex-wrap">
          {badges.map(badge => (
            <span
              key={badge}
              className="text-xs text-stone-500 bg-white border border-warm-border px-3.5 py-1.5 rounded-full"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run to verify Hero tests pass**

```bash
npm test -- --testPathPattern="smoke"
```
Expected: all smoke tests PASS (SectionLabel, Button, Hero groups).

- [ ] **Step 5: Commit**

```bash
git add components/Hero.tsx __tests__/smoke.test.tsx
git commit -m "feat: add Hero section with headline, CTAs, and interest badges"
```

---

## Task 7: About section

**Files:**
- Create: `components/About.tsx`

- [ ] **Step 1: Add About tests to `__tests__/smoke.test.tsx`**

Add at the bottom:
```tsx
import About from '@/components/About'

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
```

- [ ] **Step 2: Run to verify About tests fail**

```bash
npm test -- --testPathPattern="smoke"
```
Expected: FAIL on About tests.

- [ ] **Step 3: Create `components/About.tsx`**

```tsx
import SectionLabel from '@/components/ui/SectionLabel'

const stats = [
  { num: '5+',            label: 'Projects Shipped' },
  { num: '3',             label: 'Internships & Roles' },
  { num: 'SQL\nPython',   label: 'Core Tech Skills' },
  { num: '2025',          label: 'LMU Graduation' },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-6 border-b border-warm-border bg-cream-alt">
      <div className="max-w-[900px] mx-auto">
        <SectionLabel>About</SectionLabel>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Bio */}
          <div>
            <h2 className="text-[32px] font-extrabold text-dark tracking-[-0.5px] leading-tight mb-5">
              Strategy + data,<br />built for impact.
            </h2>
            <p className="text-[15px] text-stone-600 leading-[1.75] mb-4">
              I'm a senior at Loyola Marymount University studying Information Systems and
              Business Analytics with a minor in Computer Science. I care about building things
              that are useful: products, systems, and strategies that drive real outcomes.
            </p>
            <p className="text-[15px] text-stone-600 leading-[1.75] mb-4">
              My work spans analytics, product operations, growth, and early-stage tech. I'm
              energized by AI's potential to reshape how companies operate, how creators build
              audiences, and how decisions get made at scale.
            </p>
            <p className="text-[15px] text-stone-600 leading-[1.75]">
              When I'm not in spreadsheets or dashboards, I'm building apps, studying the
              creator economy, and thinking about what the next generation of growth looks like.
            </p>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(stat => (
              <div
                key={stat.label}
                className="bg-white border border-warm-border rounded-xl p-5 text-center"
              >
                <div className="text-[28px] font-black text-accent mb-1 whitespace-pre-line leading-tight">
                  {stat.num}
                </div>
                <div className="text-xs text-stone-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run to verify About tests pass**

```bash
npm test -- --testPathPattern="smoke"
```
Expected: all smoke tests PASS.

- [ ] **Step 5: Commit**

```bash
git add components/About.tsx __tests__/smoke.test.tsx
git commit -m "feat: add About section with bio text and stat cards"
```

---

## Task 8: Skills section

**Files:**
- Create: `components/Skills.tsx`

- [ ] **Step 1: Add Skills tests to `__tests__/smoke.test.tsx`**

Add at the bottom:
```tsx
import Skills from '@/components/Skills'

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
```

- [ ] **Step 2: Run to verify Skills tests fail**

```bash
npm test -- --testPathPattern="smoke"
```
Expected: FAIL on Skills tests.

- [ ] **Step 3: Create `components/Skills.tsx`**

```tsx
import SectionLabel from '@/components/ui/SectionLabel'
import { skillGroups } from '@/data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 border-b border-warm-border">
      <div className="max-w-[900px] mx-auto">
        <SectionLabel>Skills</SectionLabel>
        <h2 className="text-[32px] font-extrabold text-dark tracking-[-0.5px] mb-3">
          What I work with
        </h2>
        <p className="text-base text-stone-500 leading-[1.6] mb-12">
          A mix of technical, analytical, and strategic skills built across coursework,
          internships, and self-directed projects.
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {skillGroups.map(group => (
            <div key={group.name} className="bg-white border border-warm-border rounded-xl p-5">
              <h3 className="text-[12px] font-bold tracking-[1.5px] uppercase text-accent-dark mb-3.5">
                {group.name}
              </h3>
              <div>
                {group.skills.map(skill => (
                  <span
                    key={skill}
                    className="inline-block text-xs text-stone-700 bg-cream-muted rounded-[5px] px-2.5 py-1 mr-1.5 mb-1.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run to verify Skills tests pass**

```bash
npm test -- --testPathPattern="smoke"
```
Expected: all smoke tests PASS.

- [ ] **Step 5: Commit**

```bash
git add components/Skills.tsx __tests__/smoke.test.tsx
git commit -m "feat: add Skills section with three-column skill group cards"
```

---

## Task 9: Projects section

**Files:**
- Create: `components/Projects.tsx`
- Modify: `__tests__/Projects.test.tsx`

- [ ] **Step 1: Create `__tests__/Projects.test.tsx`**

```tsx
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
```

- [ ] **Step 2: Run to verify Projects tests fail**

```bash
npm test -- --testPathPattern="Projects"
```
Expected: FAIL — `Cannot find module '@/components/Projects'`

- [ ] **Step 3: Create `components/Projects.tsx`**

```tsx
import SectionLabel from '@/components/ui/SectionLabel'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 border-b border-warm-border bg-cream-alt">
      <div className="max-w-[900px] mx-auto">
        <SectionLabel>Projects</SectionLabel>
        <h2 className="text-[32px] font-extrabold text-dark tracking-[-0.5px] mb-3">
          Featured Work
        </h2>
        <p className="text-base text-stone-500 leading-[1.6] mb-12">
          A selection of projects spanning product, analytics, growth, and AI, each one
          tackling a real problem.
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map(project => (
            <div
              key={project.id}
              className="bg-white border border-warm-border rounded-xl overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow"
            >
              {/* Image placeholder */}
              <div className="h-[140px] bg-cream-muted flex items-center justify-center text-[11px] font-semibold tracking-wide text-stone-500">
                {project.imageAlt}
              </div>

              {/* Body */}
              <div className="p-5">
                <p className="text-[10px] font-bold tracking-[2px] uppercase text-accent-dark mb-1.5">
                  {project.type}
                </p>
                <h3 className="text-base font-bold text-dark mb-2">{project.title}</h3>
                <p className="text-[13px] text-stone-500 leading-[1.6] mb-3.5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3.5">
                  {project.tools.map(tool => (
                    <span
                      key={tool}
                      className="text-[11px] bg-cream-muted text-stone-600 px-2.5 py-1 rounded-[4px]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <a href="#" className="text-xs font-semibold text-accent">
                  View Case Study →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run to verify Projects tests pass**

```bash
npm test -- --testPathPattern="Projects"
```
Expected: all 3 Projects tests PASS.

- [ ] **Step 5: Commit**

```bash
git add components/Projects.tsx __tests__/Projects.test.tsx
git commit -m "feat: add Projects section with two-column card grid and image placeholders"
```

---

## Task 10: Experience section

**Files:**
- Create: `components/Experience.tsx`

- [ ] **Step 1: Add Experience tests to `__tests__/smoke.test.tsx`**

Add at the bottom:
```tsx
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
```

- [ ] **Step 2: Run to verify Experience tests fail**

```bash
npm test -- --testPathPattern="smoke"
```
Expected: FAIL on Experience tests.

- [ ] **Step 3: Create `components/Experience.tsx`**

```tsx
import SectionLabel from '@/components/ui/SectionLabel'
import { experiences } from '@/data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 border-b border-warm-border">
      <div className="max-w-[900px] mx-auto">
        <SectionLabel>Experience</SectionLabel>
        <h2 className="text-[32px] font-extrabold text-dark tracking-[-0.5px] mb-3">
          Where I've worked
        </h2>
        <p className="text-base text-stone-500 leading-[1.6] mb-12">
          Hands-on roles in analytics, operations, and product, building real deliverables
          for real teams.
        </p>
        <div className="flex flex-col gap-6">
          {experiences.map(exp => (
            <div
              key={exp.title}
              className="bg-white border border-warm-border rounded-xl p-6 flex gap-5"
            >
              {/* Emoji icon dot */}
              <div className="w-10 h-10 bg-cream-muted rounded-lg flex-shrink-0 flex items-center justify-center text-base">
                {exp.emoji}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-[15px] font-bold text-dark mb-0.5">{exp.title}</h3>
                <p className="text-xs font-semibold text-accent-dark mb-3">{exp.meta}</p>
                <ul>
                  {exp.bullets.map(bullet => (
                    <li
                      key={bullet}
                      className="text-[13px] text-stone-600 py-0.5 pl-3.5 relative before:content-['-'] before:absolute before:left-0 before:text-accent"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run to verify Experience tests pass**

```bash
npm test -- --testPathPattern="smoke"
```
Expected: all smoke tests PASS.

- [ ] **Step 5: Commit**

```bash
git add components/Experience.tsx __tests__/smoke.test.tsx
git commit -m "feat: add Experience section with icon-dot cards and bullet lists"
```

---

## Task 11: ResumeBand section

**Files:**
- Create: `components/ResumeBand.tsx`

- [ ] **Step 1: Add ResumeBand test to `__tests__/smoke.test.tsx`**

Add at the bottom:
```tsx
import ResumeBand from '@/components/ResumeBand'

describe('ResumeBand', () => {
  it('renders the resume download CTA linking to /resume.pdf', () => {
    render(<ResumeBand />)
    const link = screen.getByRole('link', { name: 'Download Resume (PDF)' })
    expect(link).toHaveAttribute('href', '/resume.pdf')
  })
})
```

- [ ] **Step 2: Run to verify ResumeBand test fails**

```bash
npm test -- --testPathPattern="smoke"
```
Expected: FAIL on ResumeBand test.

- [ ] **Step 3: Create `components/ResumeBand.tsx`**

```tsx
import Button from '@/components/ui/Button'

export default function ResumeBand() {
  return (
    <section id="resume" className="py-20 px-6 bg-dark text-center">
      <p className="text-[11px] font-bold tracking-[2.5px] uppercase text-accent mb-2.5">
        Resume
      </p>
      <h2 className="text-[32px] font-extrabold text-white tracking-[-0.5px] mb-3.5">
        Want the full picture?
      </h2>
      <p className="text-base text-stone-400 leading-[1.6] max-w-[440px] mx-auto mb-8">
        Download my resume for a complete view of my experience, coursework, and skills.
      </p>
      <Button href="/resume.pdf" variant="primary">Download Resume (PDF)</Button>
    </section>
  )
}
```

- [ ] **Step 4: Run to verify ResumeBand test passes**

```bash
npm test -- --testPathPattern="smoke"
```
Expected: all smoke tests PASS.

- [ ] **Step 5: Commit**

```bash
git add components/ResumeBand.tsx __tests__/smoke.test.tsx
git commit -m "feat: add ResumeBand dark section with PDF download CTA"
```

---

## Task 12: Contact section

**Files:**
- Create: `components/Contact.tsx`

- [ ] **Step 1: Add Contact tests to `__tests__/smoke.test.tsx`**

Add at the bottom:
```tsx
import Contact from '@/components/Contact'

describe('Contact', () => {
  it('renders all three contact links', () => {
    render(<Contact />)
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /GitHub/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Email/i })).toHaveAttribute('href', 'mailto:jadenp1292@gmail.com')
  })

  it('renders the mailto send button', () => {
    render(<Contact />)
    expect(screen.getByRole('link', { name: 'Send an Email' })).toHaveAttribute(
      'href',
      'mailto:jadenp1292@gmail.com?subject=Hello%20Jaden'
    )
  })
})
```

- [ ] **Step 2: Run to verify Contact tests fail**

```bash
npm test -- --testPathPattern="smoke"
```
Expected: FAIL on Contact tests.

- [ ] **Step 3: Create `components/Contact.tsx`**

```tsx
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'

const contactLinks = [
  {
    emoji: '💼',
    label: 'LinkedIn',
    sub: 'linkedin.com/in/jadenpath',
    href: 'https://linkedin.com/in/jadenpath',
  },
  {
    emoji: '⌨️',
    label: 'GitHub',
    sub: 'github.com/JadenP1292',
    href: 'https://github.com/JadenP1292',
  },
  {
    emoji: '✉️',
    label: 'Email',
    sub: 'jadenp1292@gmail.com',
    href: 'mailto:jadenp1292@gmail.com',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 border-b border-warm-border bg-cream-alt">
      <div className="max-w-[900px] mx-auto">
        <SectionLabel>Contact</SectionLabel>
        <h2 className="text-[32px] font-extrabold text-dark tracking-[-0.5px] mb-3">
          Let's connect
        </h2>
        <p className="text-base text-stone-500 leading-[1.6] mb-12">
          Open to full-time roles in product marketing, growth, analytics, operations,
          and AI-adjacent work starting 2025.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact link cards */}
          <div className="flex flex-col gap-3.5">
            {contactLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-3 bg-white border border-warm-border rounded-xl px-5 py-4 no-underline text-dark hover:shadow-sm transition-shadow"
              >
                <div className="w-9 h-9 bg-cream-muted rounded-lg flex-shrink-0 flex items-center justify-center text-base">
                  {link.emoji}
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-dark">{link.label}</div>
                  <div className="text-xs text-stone-500">{link.sub}</div>
                </div>
              </a>
            ))}
          </div>

          {/* CTA card */}
          <div className="bg-white border border-warm-border rounded-xl p-8 flex flex-col items-center text-center gap-5">
            <div className="w-12 h-12 bg-cream-muted rounded-xl flex items-center justify-center text-2xl">
              ✉️
            </div>
            <div>
              <h3 className="text-[16px] font-bold text-dark mb-2">Ready to reach out?</h3>
              <p className="text-[13px] text-stone-500 leading-[1.6]">
                Tap the button below to open an email. I aim to respond within 48 hours.
              </p>
            </div>
            <Button
              href="mailto:jadenp1292@gmail.com?subject=Hello%20Jaden"
              variant="primary"
            >
              Send an Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run to verify Contact tests pass**

```bash
npm test -- --testPathPattern="smoke"
```
Expected: all smoke tests PASS.

- [ ] **Step 5: Commit**

```bash
git add components/Contact.tsx __tests__/smoke.test.tsx
git commit -m "feat: add Contact section with link cards and mailto CTA"
```

---

## Task 13: Footer

**Files:**
- Create: `components/Footer.tsx`

- [ ] **Step 1: Add Footer test to `__tests__/smoke.test.tsx`**

Add at the bottom:
```tsx
import Footer from '@/components/Footer'

describe('Footer', () => {
  it('renders the author name and year', () => {
    render(<Footer />)
    expect(screen.getByText(/Jaden Path/)).toBeInTheDocument()
    expect(screen.getByText(/2025/)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run to verify Footer test fails**

```bash
npm test -- --testPathPattern="smoke"
```
Expected: FAIL on Footer test.

- [ ] **Step 3: Create `components/Footer.tsx`**

```tsx
const footerLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/jadenpath' },
  { label: 'GitHub',   href: 'https://github.com/JadenP1292' },
  { label: 'Resume',   href: '/resume.pdf' },
]

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-stone-800 px-6 py-7 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-[13px] text-stone-500">Jaden Path · 2025</p>
      <div className="flex gap-5">
        {footerLinks.map(link => (
          <a
            key={link.label}
            href={link.href}
            className="text-xs text-stone-600 hover:text-stone-400 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
```

- [ ] **Step 4: Run to verify Footer test passes**

```bash
npm test -- --testPathPattern="smoke"
```
Expected: all smoke tests PASS.

- [ ] **Step 5: Commit**

```bash
git add components/Footer.tsx __tests__/smoke.test.tsx
git commit -m "feat: add Footer with name, year, and social links"
```

---

## Task 14: Assemble page.tsx and verify full build

**Files:**
- Modify: `app/page.tsx`
- Create: `public/resume.pdf` (placeholder)

- [ ] **Step 1: Replace `app/page.tsx` with the assembled page**

```tsx
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import ResumeBand from '@/components/ResumeBand'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <ResumeBand />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 2: Create a placeholder resume PDF**

```bash
echo "placeholder — replace with real resume.pdf" > public/resume.pdf
```

- [ ] **Step 3: Run the full test suite**

```bash
npm test
```
Expected: all tests PASS with 0 failures.

- [ ] **Step 4: Run the production build**

```bash
npm run build
```
Expected: build completes with `✓ Compiled successfully`. Fix any TypeScript or lint errors before continuing.

- [ ] **Step 5: Verify the site in the browser**

```bash
npm run dev
```
Visit `http://localhost:3000`. Scroll through all sections and verify:
- Nav is sticky and links scroll to correct sections
- Mobile menu opens and closes (test by narrowing the browser window below 768px)
- All 5 project cards display with placeholder image areas
- Resume band and contact section look correct
- No console errors

Stop with Ctrl+C.

- [ ] **Step 6: Commit**

```bash
git add app/page.tsx public/resume.pdf
git commit -m "feat: assemble full page and add placeholder resume PDF"
```

---

## Running locally

```bash
npm install
npm run dev     # development server at http://localhost:3000
npm test        # run test suite
npm run build   # production build check
```

## Deploying to Vercel

```bash
npm install -g vercel
vercel login
vercel          # follow prompts — Next.js is auto-detected
```

On subsequent deploys: `vercel --prod`

## Placeholders to fill before launch

- [ ] Update LinkedIn URL in `components/Hero.tsx` and `components/Contact.tsx` with your real profile URL
- [ ] Add real company names and dates in `data/experience.ts`
- [ ] Replace `public/resume.pdf` with your actual resume
- [ ] Add screenshots/images for project cards (replace the placeholder `<div>` in `components/Projects.tsx`)
- [ ] Fill in descriptions for projects 3, 4, 5 in `data/projects.ts`
- [ ] Update stat numbers in `components/About.tsx` with accurate counts
