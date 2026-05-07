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
