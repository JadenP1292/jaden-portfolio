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
