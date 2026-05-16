import Button from '@/components/ui/Button'

const badges = [
  'Product Marketing',
  'Growth Analytics',
  'Business Operations',
  'AI Workflows',
  'Creator Economy',
]

export default function Hero() {
  return (
    <section className="py-24 px-6 text-center bg-gradient-to-b from-cream-base to-cream-alt border-b border-warm-border">
      <div className="max-w-[900px] mx-auto">
        {/* Tag pill */}
        <div className="inline-block bg-cream-muted text-accent-dark text-[11px] font-bold tracking-[2.5px] uppercase px-4 py-1.5 rounded-full mb-6">
          LMU '26 · Information Systems & Business Analytics
        </div>

        {/* Headline */}
        <h1 className="text-[52px] font-black text-dark leading-[1.05] tracking-[-1.5px] mb-5">
          Product. Growth.
          <br />
          <span className="text-accent">Analytics.</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg text-stone-500 max-w-[520px] mx-auto leading-[1.65] mb-9">
          I build at the intersection of data, product, and AI, turning insights into strategy
          and strategy into results.
        </p>

        {/* CTA row */}
        <div className="flex gap-3 justify-center flex-wrap mb-12">
          <Button href="#projects" variant="primary">View Projects</Button>
          <Button href="/resume.pdf" variant="dark">Download Resume</Button>
          <Button href="https://www.linkedin.com/in/jaden-path/" variant="outline">LinkedIn →</Button>
        </div>

        {/* Badges */}
        <div className="flex gap-2.5 justify-center flex-wrap">
          {badges.map(badge => (
            <span
              key={badge}
              className="text-xs text-stone-500 bg-white border border-warm-border px-3.5 py-1.5 rounded-full"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
