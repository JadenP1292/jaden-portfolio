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
      'Designed and built a full-stack mobile MVP connecting creators through swipe-based matching. Defined core product flows (discovery, profile evaluation, matching) and iterated on design based on user feedback.',
    tools: ['React Native', 'Supabase', 'TypeScript', 'NativeWind'],
    imageAlt: 'App Preview',
  },
  {
    id: 'real-estate-analytics',
    type: 'Web App + Analytics',
    title: 'Real Estate Financial Modeling Tool',
    description:
      'Built and deployed an internal web app used firm-wide at Pacific Horizon LLC to automate financial modeling across a ~$40M, 20-property portfolio, cutting modeling time by up to 85%.',
    tools: ['Python', 'FastAPI', 'Excel', 'Financial Modeling'],
    imageAlt: 'Real Estate Analytics Dashboard',
  },
  {
    id: 'aceprep-dashboards',
    type: 'AI / Product Analytics',
    title: 'AI Student Insights Dashboards',
    description:
      'Led development of AI-powered student insights dashboards at AcePrep tracking 7+ performance metrics. Improved AI quiz relevance by testing 50+ prompt variations and integrated frontend dashboards with backend analytics APIs.',
    tools: ['Product Analytics', 'Prompt Engineering', 'AI Tools', 'API Integration'],
    imageAlt: 'AcePrep AI Dashboards',
  },
  {
    id: 'digital-media-brand',
    type: 'Growth',
    title: 'Digital Media Brand: 473K Followers',
    description:
      'Founded and operate a multi-platform brand scaled from 0 to 473,000+ followers and 271M+ cumulative views in 8 months. Secured paid deals with Motown Records, Atlantic Records, 88Rising, and CUBE Entertainment.',
    tools: ['Content Strategy', 'Social Analytics', 'Growth Analytics', 'P&L'],
    imageAlt: 'Digital Media Brand Growth',
  },
  {
    id: 'sql-sales-analysis',
    type: 'Data',
    title: 'E-Commerce Sales Analysis',
    description:
      'Analyzed historical sales trends across Shopify storefronts for music and entertainment industry clients at Rose City Works, informing $2M+ in sales decisions and identifying SKU-level optimization opportunities.',
    tools: ['SQL', 'Excel', 'Shopify Analytics', 'Trend Analysis'],
    imageAlt: 'Sales Analysis Dashboard',
  },
]
