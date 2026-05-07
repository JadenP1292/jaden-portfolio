# Jaden Path — Portfolio Website Design Spec

**Date:** 2026-05-06
**Owner:** Jaden Path
**Stack:** Next.js 14 (App Router), React, Tailwind CSS, Vercel deployment
**Status:** Approved — ready for implementation

---

## 1. Overview

A single-page, scroll-based portfolio website for Jaden Path targeting roles in product marketing, growth marketing, business operations, product operations, analytics, AI startups, consulting, and tech-adjacent positions. The site is aimed at recruiters and hiring managers who skim quickly and should communicate: analytical, product-minded, AI-aware, startup-ready.

---

## 2. Visual Direction

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `cream-base` | `#faf8f5` | Page background |
| `cream-alt` | `#f5f0e8` | Alternating section background |
| `cream-muted` | `#ede8df` | Skill pills, tool tags, icon backgrounds, hero tag |
| `border` | `#e8e3db` | All card and section borders |
| `text-primary` | `#1c1917` | Headings, body |
| `text-muted` | `#78716c` | Secondary body, nav links |
| `text-subtle` | `#57534e` | Experience bullets, about body |
| `accent` | `#c2650a` | Primary CTA buttons, section labels, link accents |
| `accent-dark` | `#92400e` | Hero tag text, project type labels |
| `dark-bg` | `#1c1917` | Resume band background, footer, nav CTA button |
| `white` | `#ffffff` | Cards, form fields, contact links |

### Typography

- Font: `Inter` (system fallback: `-apple-system, BlinkMacSystemFont`)
- Loaded via `next/font/google`
- Hero H1: 52px, weight 900, letter-spacing -1.5px
- Section titles: 32px, weight 800, letter-spacing -0.5px
- Body: 15–16px, weight 400, line-height 1.65–1.75
- Section labels: 11px, weight 700, letter-spacing 2.5px, uppercase, `accent-dark`

### Key Design Rules

- No em dashes in any copy
- No heavy animations — subtle hover shadows on cards only (`box-shadow` transition 0.2s)
- Rounded corners: 6–12px on cards and buttons
- Soft drop shadows on card hover: `0 8px 30px rgba(0,0,0,0.08)`
- Sticky nav with backdrop blur on scroll
- Every section has a short `SECTION LABEL` tag above the title in `accent-dark` + letter-spacing

---

## 3. Layout

**Structure:** Single-page, vertical scroll. Sticky top navigation links jump to section anchors.

**Max content width:** 900px, centered with `mx-auto`.

**Responsive breakpoints:**
- Desktop: full layout as designed
- Tablet (md): grids collapse to 1–2 columns
- Mobile (sm): single column, nav collapses to hamburger menu

---

## 4. File Structure

```
jaden-portfolio/
├── app/
│   ├── layout.tsx          # Root layout, Inter font, metadata
│   ├── page.tsx            # Home page (all sections)
│   └── globals.css         # Tailwind base + any custom utilities
├── components/
│   ├── Nav.tsx             # Sticky nav with logo + links + CTA
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About + stat cards
│   ├── Skills.tsx          # Three-column skill groups
│   ├── Projects.tsx        # Two-column project card grid
│   ├── Experience.tsx      # Experience list
│   ├── ResumeBand.tsx      # Dark band with resume download CTA
│   ├── Contact.tsx         # Contact links + mailto form
│   ├── Footer.tsx          # Simple footer
│   └── ui/
│       ├── SectionLabel.tsx
│       ├── Button.tsx
│       └── Card.tsx
├── public/
│   └── resume.pdf          # Drop PDF here to enable download
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## 5. Section Specs

### 5.1 Nav

- Sticky, `top-0`, `z-50`
- Background: `cream-base` at 94% opacity + `backdrop-blur-md`
- Left: "Jaden **Path**" — "Path" in `accent` color
- Right: About · Skills · Projects · Experience · [Contact CTA]
- Contact CTA: `dark-bg` background, white text, `rounded-md`, `px-4 py-2`
- Mobile: hamburger icon opens an absolute-positioned dropdown below the nav bar; closes on link click or outside click

### 5.2 Hero

- Full-width, centered text
- Background: linear gradient from `cream-base` to `cream-alt`
- Tag pill: "LMU · Information Systems & Business Analytics" — `cream-muted` bg, `accent-dark` text, `rounded-full`
- H1: "Product. Growth. Analytics." — "Analytics." in `accent`
- Subtext: "I build at the intersection of data, product, and AI, turning insights into strategy and strategy into results."
- CTA row: [View Projects] `accent` filled · [Download Resume] `dark-bg` filled · [LinkedIn →] `accent` outlined
- Badge row: Product Marketing · Growth Analytics · Business Operations · AI Workflows · Creator Economy — white bg, border, `rounded-full`

### 5.3 About

- Two-column grid: left = bio text (3 paragraphs), right = 2x2 stat cards
- Stat cards: white bg, border, `rounded-xl`, centered — accent-colored number, muted label
- Stats (placeholders, fill with real numbers): 5+ Projects, 3 Roles, SQL/Python, Class of 2025

### 5.4 Skills

- Three-column card grid
- Groups: Data & Analytics | Product & Growth | Tech & Tools
- Pills: `cream-muted` bg, `text-subtle` color, `rounded-md`
- Skills list:
  - Data: SQL, Python, Excel/Sheets, Dashboards, KPI Modeling, Financial Analysis, YoY Analysis
  - Product/Growth: Product Analytics, Growth Strategy, Social Media, Content Creation, Audience Growth, Creator Economy
  - Tech: React Native, TypeScript, Supabase, AI Workflows, Project Coordination, Notion/Airtable

### 5.5 Projects

- Two-column card grid (single column on mobile)
- Each card: image placeholder area (140px tall, `cream-muted` bg) + body
- Card body: project type label · title · description · tool tags · "View Case Study →" link
- Five projects:

| # | Type | Title | Tools |
|---|---|---|---|
| 1 | Mobile App | Creator Matchmaking App | Expo, React Native, TypeScript, Supabase, NativeWind |
| 2 | Analytics | Real Estate Analytics | Excel, Financial Modeling, KPI Dashboards |
| 3 | Data | SQL / Data Dashboard | SQL, Python, [placeholder] |
| 4 | Growth | Growth / Social Media Case Study | Content Strategy, Analytics, [platform placeholder] |
| 5 | AI / Productivity | AI Workflow Project | AI Tools, Automation, [tool placeholder] |

Each project card links to a placeholder `#` anchor. Case study detail pages are out of scope for v1 — links can be updated later to external write-ups or expanded sections.

Each project (for future case study pages) follows this structure:
- Problem
- My role
- Tools used
- Process
- Outcome
- What I learned

### 5.6 Experience

- Vertical list of experience items
- Each item: white card, icon dot (`cream-muted` bg, emoji), title, meta (dates + location in `accent-dark`), bullet list
- Bullet prefix: `–` in `accent` color
- Three entries (placeholders for company names and dates):
  1. Business Analyst / Operations — [Company]
  2. Real Estate Analytics — [Company]
  3. Creator Matchmaking App — [Role]

### 5.7 Resume Band

- Full-width dark section (`dark-bg`)
- Section label in `accent`, title and subtext in white/muted
- Single CTA: "Download Resume (PDF)" — links to `/resume.pdf`

### 5.8 Contact

- Two-column grid: left = link cards (LinkedIn, GitHub, Email), right = mailto form
- Link cards: white bg, border, icon dot (`cream-muted`), label + subtitle
- Form: name, email, textarea, submit button — submit uses `mailto:jadenp1292@gmail.com` href (no backend required for v1)
- Pre-filled values:
  - LinkedIn: linkedin.com/in/jadenpath (placeholder — update with real URL)
  - GitHub: github.com/JadenP1292
  - Email: jadenp1292@gmail.com

### 5.9 Footer

- Dark background (`dark-bg`), one-line
- Left: "Jaden Path · 2025"
- Right: LinkedIn · GitHub · Resume links

---

## 6. Metadata & SEO

Set in `app/layout.tsx`:
```ts
export const metadata = {
  title: 'Jaden Path — Product, Growth & Analytics',
  description: 'Portfolio of Jaden Path, LMU senior specializing in product marketing, growth analytics, and AI workflows.',
  openGraph: { ... }
}
```

---

## 7. Deployment

- Platform: Vercel (zero-config Next.js support)
- Steps: `vercel login` → `vercel` in project root → auto-detected as Next.js
- Resume PDF: drop `resume.pdf` into `/public/` — linked from Resume band and nav

---

## 8. Out of Scope for v1

- Individual case study sub-pages (project links are `#` placeholders)
- Backend contact form (mailto used instead)
- Dark mode toggle
- Analytics / tracking
- CMS integration

---

## 9. Placeholders to Fill Before Launch

- [ ] Real LinkedIn URL
- [ ] Real company names and dates in Experience section
- [ ] Screenshots / images for each project card
- [ ] Descriptions and outcomes for projects 3, 4, 5
- [ ] Real stats in About section (replace "5+", "3", etc.)
- [ ] Resume PDF file added to `/public/resume.pdf`
