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
