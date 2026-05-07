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
