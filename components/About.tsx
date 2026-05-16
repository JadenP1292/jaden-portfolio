import SectionLabel from '@/components/ui/SectionLabel'

const stats = [
  { num: '473K+',  label: 'Followers Grown' },
  { num: '271M+',  label: 'Total Content Views' },
  { num: '85%',    label: 'Modeling Time Reduced' },
  { num: "'26",    label: 'LMU Graduate' },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-6 border-b border-warm-border bg-cream-alt">
      <div className="max-w-[900px] mx-auto">
        <SectionLabel>About</SectionLabel>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Bio */}
          <div>
            <h2 className="text-[32px] font-extrabold text-dark tracking-[-0.5px] leading-tight mb-5">
              Strategy + data,<br />built for impact.
            </h2>
            <p className="text-[15px] text-stone-600 leading-[1.75] mb-4">
              I recently graduated from Loyola Marymount University with a degree in Information
              Systems and Business Analytics and a minor in Computer Science. I care about
              building things that are useful: products, systems, and strategies that drive real
              outcomes.
            </p>
            <p className="text-[15px] text-stone-600 leading-[1.75] mb-4">
              My work spans analytics, product operations, growth, and early-stage tech. I'm
              energized by AI's potential to reshape how companies operate, how creators build
              audiences, and how decisions get made at scale.
            </p>
            <p className="text-[15px] text-stone-600 leading-[1.75]">
              When I'm not in spreadsheets or dashboards, I'm building apps, studying the
              creator economy, and thinking about what the next generation of growth looks like.
            </p>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(stat => (
              <div
                key={stat.label}
                className="bg-white border border-warm-border rounded-xl p-5 text-center"
              >
                <div className="text-[28px] font-black text-accent mb-1 whitespace-pre-line leading-tight">
                  {stat.num}
                </div>
                <div className="text-xs text-stone-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
