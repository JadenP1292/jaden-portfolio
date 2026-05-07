export interface SkillGroup {
  name: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    name: 'Data & Analytics',
    skills: ['SQL', 'Python', 'Excel', 'Financial Modeling', 'KPI Tracking', 'Growth Analytics', 'YoY Analysis'],
  },
  {
    name: 'Product & Growth',
    skills: ['Product Analytics', 'Growth Strategy', 'Social Media Analytics', 'Content Strategy', 'Audience Growth', 'Creator Economy', 'Prompt Engineering'],
  },
  {
    name: 'Tech & Tools',
    skills: ['React Native', 'TypeScript', 'Supabase', 'FastAPI', 'Claude Code', 'AI Workflows', 'Notion / Airtable'],
  },
]
