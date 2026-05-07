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
