const timeline = [
  {
    year: '2024',
    title: 'Senior Frontend Engineer',
    company: 'Nimbus Labs',
    desc: 'Led development of a Design System and migrated a large app to React Server Components with performance-first patterns.',
  },
  {
    year: '2022',
    title: 'Frontend Engineer',
    company: 'PixelForge',
    desc: 'Built accessible UI, data visualizations, and shipped features across a multi-tenant SaaS platform.',
  },
  {
    year: '2020',
    title: 'Junior Developer',
    company: 'Open Source',
    desc: 'Contributed to OSS libraries and learned modern tooling: Vite, Tailwind, and FastAPI backends.',
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative w-full bg-gradient-to-b from-black to-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">Journey & Experience</h2>
        <p className="mt-2 max-w-2xl text-white/70">A quick timeline of roles, milestones, and the growth along the way.</p>

        <div className="mt-10 relative">
          <div className="absolute left-4 top-0 h-full w-[2px] bg-white/15 sm:left-1/2 sm:-translate-x-1/2" />
          <ul className="space-y-10">
            {timeline.map((item, idx) => (
              <li key={idx} className="relative grid grid-cols-1 items-center gap-4 sm:grid-cols-2">
                <div className="sm:text-right">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
                    <span className="font-semibold">{item.year}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                  <p className="text-white/70">{item.company}</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[calc(50vw)] hidden h-[2px] w-[50vw] bg-white/10 sm:block" />
                  <div className="rounded-xl border border-white/10 bg-white/5 p-5 shadow-inner shadow-black/30">
                    <p className="text-white/80">{item.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
