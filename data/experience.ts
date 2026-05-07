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
