import SectionLabel from '@/components/ui/SectionLabel'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 border-b border-warm-border bg-cream-alt">
      <div className="max-w-[900px] mx-auto">
        <SectionLabel>Projects</SectionLabel>
        <h2 className="text-[32px] font-extrabold text-dark tracking-[-0.5px] mb-3">
          Featured Work
        </h2>
        <p className="text-base text-stone-500 leading-[1.6] mb-12">
          A selection of projects spanning product, analytics, growth, and AI, each one
          tackling a real problem.
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map(project => (
            <div
              key={project.id}
              className="bg-white border border-warm-border rounded-xl overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow"
            >
              {/* Image placeholder */}
              <div className="h-[140px] bg-cream-muted flex items-center justify-center text-[11px] font-semibold tracking-wide text-stone-500">
                {project.imageAlt}
              </div>

              {/* Body */}
              <div className="p-5">
                <p className="text-[10px] font-bold tracking-[2px] uppercase text-accent-dark mb-1.5">
                  {project.type}
                </p>
                <h3 className="text-base font-bold text-dark mb-2">{project.title}</h3>
                <p className="text-[13px] text-stone-500 leading-[1.6] mb-3.5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3.5">
                  {project.tools.map(tool => (
                    <span
                      key={tool}
                      className="text-[11px] bg-cream-muted text-stone-600 px-2.5 py-1 rounded-[4px]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <a href="#" className="text-xs font-semibold text-accent">
                  View Case Study →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
