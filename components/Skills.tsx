import SectionLabel from '@/components/ui/SectionLabel'
import { skillGroups } from '@/data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 border-b border-warm-border">
      <div className="max-w-[900px] mx-auto">
        <SectionLabel>Skills</SectionLabel>
        <h2 className="text-[32px] font-extrabold text-dark tracking-[-0.5px] mb-3">
          What I work with
        </h2>
        <p className="text-base text-stone-500 leading-[1.6] mb-12">
          A mix of technical, analytical, and strategic skills built across coursework,
          internships, and self-directed projects.
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {skillGroups.map(group => (
            <div key={group.name} className="bg-white border border-warm-border rounded-xl p-5">
              <h3 className="text-[12px] font-bold tracking-[1.5px] uppercase text-accent-dark mb-3.5">
                {group.name}
              </h3>
              <div>
                {group.skills.map(skill => (
                  <span
                    key={skill}
                    className="inline-block text-xs text-stone-700 bg-cream-muted rounded-[5px] px-2.5 py-1 mr-1.5 mb-1.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
