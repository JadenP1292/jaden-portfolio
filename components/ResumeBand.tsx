import Button from '@/components/ui/Button'

export default function ResumeBand() {
  return (
    <section id="resume" className="py-20 px-6 bg-dark text-center">
      <p className="text-[11px] font-bold tracking-[2.5px] uppercase text-accent mb-2.5">
        Resume
      </p>
      <h2 className="text-[32px] font-extrabold text-white tracking-[-0.5px] mb-3.5">
        Want the full picture?
      </h2>
      <p className="text-base text-stone-400 leading-[1.6] max-w-[440px] mx-auto mb-8">
        Download my resume for a complete view of my experience, coursework, and skills.
      </p>
      <Button href="/resume.pdf" variant="primary">Download Resume (PDF)</Button>
    </section>
  )
}
