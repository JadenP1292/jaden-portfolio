export interface Experience {
  emoji: string
  title: string
  meta: string
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    emoji: '🏢',
    title: 'Real Estate Analytics Intern — Pacific Horizon LLC',
    meta: 'May 2025–Present · Los Angeles, CA',
    bullets: [
      'Built and deployed an internal web app used firm-wide to automate financial modeling across a ~$40M, 20-property portfolio, reducing modeling time up to 85%',
      'Engineered the tool to accept raw financial statements and cash flow inputs, outputting ranked property performance reports with automated identification of underperformers and itemized expense diagnostics',
      'Designed and maintain a dynamic financial analysis spreadsheet tracking 11 KPIs across the full portfolio to assess property profitability and investment potential',
      'Conducted year-over-year analysis using rent rolls, income statements, and balance sheets to surface actionable insights for asset management decisions',
    ],
  },
  {
    emoji: '🚀',
    title: 'Founder & Operator — Digital Media Brand',
    meta: 'Aug 2025–Present · Los Angeles, CA',
    bullets: [
      'Founded and operate a multi-platform digital media brand, building scalable content systems and growth strategies across TikTok, YouTube, and Instagram',
      'Scaled from 0 to 473,000+ followers and 271M+ cumulative views in 8 months using performance data to drive sustained audience growth',
      'Secured paid partnership deals with global major labels and media companies including Motown Records, Atlantic Records, 88Rising, and CUBE Entertainment',
      'Managed full business operations: content production, P&L, analytics reporting, and partner relationship management across domestic and global markets',
    ],
  },
  {
    emoji: '📊',
    title: 'Business Analyst & Operations Intern — Rose City Works',
    meta: 'May 2024–Aug 2024 · Los Angeles, CA',
    bullets: [
      'Informed $2M+ in sales decisions through historical trend analysis across Shopify storefronts for artist and music industry clients',
      'Analyzed inventory reports across client stores to identify top-performing and underperforming SKUs, streamlining product offerings for merch and album release campaigns',
      'Developed new product concepts tailored to specific artist brands and target audiences, expanding client store portfolios across music and entertainment verticals',
    ],
  },
  {
    emoji: '📣',
    title: 'Marketing & PR Manager — The Emily Shane Foundation',
    meta: 'Sep 2023–May 2025 · Los Angeles, CA',
    bullets: [
      'Drove a 17% increase in audience reach through email campaigns targeting hundreds of subscribers, earning the foundation a 2024 California Nonprofit of the Year award',
      'Scaled the Mentor/Tutor program by establishing partnerships with 13 nonprofits across LA, increasing capacity to serve hundreds of students annually',
      'Optimized content across social media platforms, resulting in a 12% increase in overall views and strengthening community engagement',
    ],
  },
]
