import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'

const contactLinks = [
  {
    emoji: '💼',
    label: 'LinkedIn',
    sub: 'linkedin.com/in/jaden-path',
    href: 'https://www.linkedin.com/in/jaden-path/',
  },
  {
    emoji: '⌨️',
    label: 'GitHub',
    sub: 'github.com/JadenP1292',
    href: 'https://github.com/JadenP1292',
  },
  {
    emoji: '✉️',
    label: 'Email',
    sub: 'jadenp1292@gmail.com',
    href: 'mailto:jadenp1292@gmail.com',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 border-b border-warm-border bg-cream-alt">
      <div className="max-w-[900px] mx-auto">
        <SectionLabel>Contact</SectionLabel>
        <h2 className="text-[32px] font-extrabold text-dark tracking-[-0.5px] mb-3">
          Let's connect
        </h2>
        <p className="text-base text-stone-500 leading-[1.6] mb-12">
          Open to full-time roles in product marketing, growth, analytics, operations,
          and AI-adjacent work starting 2026.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact link cards */}
          <div className="flex flex-col gap-3.5">
            {contactLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-3 bg-white border border-warm-border rounded-xl px-5 py-4 no-underline text-dark hover:shadow-sm transition-shadow"
              >
                <div className="w-9 h-9 bg-cream-muted rounded-lg flex-shrink-0 flex items-center justify-center text-base">
                  {link.emoji}
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-dark">{link.label}</div>
                  <div className="text-xs text-stone-500">{link.sub}</div>
                </div>
              </a>
            ))}
          </div>

          {/* CTA card */}
          <div className="bg-white border border-warm-border rounded-xl p-8 flex flex-col items-center text-center gap-5">
            <div className="w-12 h-12 bg-cream-muted rounded-xl flex items-center justify-center text-2xl">
              ✉️
            </div>
            <div>
              <h3 className="text-[16px] font-bold text-dark mb-2">Ready to reach out?</h3>
              <p className="text-[13px] text-stone-500 leading-[1.6]">
                Tap the button below to open an email. I aim to respond within 48 hours.
              </p>
            </div>
            <Button
              href="mailto:jadenp1292@gmail.com?subject=Hello%20Jaden"
              variant="primary"
            >
              Send an Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
