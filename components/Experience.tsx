import SectionLabel from '@/components/ui/SectionLabel'
import { experiences } from '@/data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 border-b border-warm-border">
      <div className="max-w-[900px] mx-auto">
        <SectionLabel>Experience</SectionLabel>
        <h2 className="text-[32px] font-extrabold text-dark tracking-[-0.5px] mb-3">
          Where I've worked
        </h2>
        <p className="text-base text-stone-500 leading-[1.6] mb-12">
          Hands-on roles in analytics, operations, and product, building real deliverables
          for real teams.
        </p>
        <div className="flex flex-col gap-6">
          {experiences.map(exp => (
            <div
              key={exp.title}
              className="bg-white border border-warm-border rounded-xl p-6 flex gap-5"
            >
              {/* Emoji icon dot */}
              <div className="w-10 h-10 bg-cream-muted rounded-lg flex-shrink-0 flex items-center justify-center text-base">
                {exp.emoji}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-[15px] font-bold text-dark mb-0.5">{exp.title}</h3>
                <p className="text-xs font-semibold text-accent-dark mb-3">{exp.meta}</p>
                <ul>
                  {exp.bullets.map(bullet => (
                    <li
                      key={bullet}
                      className="text-[13px] text-stone-600 py-0.5 pl-3.5 relative before:content-['-'] before:absolute before:left-0 before:text-accent"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
