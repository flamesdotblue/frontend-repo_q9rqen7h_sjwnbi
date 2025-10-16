import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Horizon UI Kit',
    desc: 'Beautiful component library with theming and dark mode baked in.',
    tags: ['React', 'Tailwind', 'Radix'],
    link: '#',
  },
  {
    title: 'Pulse Analytics',
    desc: 'Interactive dashboards and real-time charts for product metrics.',
    tags: ['Vite', 'D3', 'API'],
    link: '#',
  },
  {
    title: 'Nimbus Docs',
    desc: 'Lightning-fast documentation site with search and MDX.',
    tags: ['MDX', 'React', 'Algolia'],
    link: '#',
  },
  {
    title: 'Canvas Playground',
    desc: 'Generative art and shader experiments in the browser.',
    tags: ['Canvas', 'WebGL', 'Shaders'],
    link: '#',
  },
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">Selected Projects</h2>
        <p className="mt-2 max-w-2xl text-white/70">A showcase of recent work exploring design systems, data viz, and creative coding.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((p, idx) => (
            <a
              key={idx}
              href={p.link}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 shadow-lg shadow-black/40 transition-transform hover:-translate-y-1"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <ExternalLink className="h-5 w-5 opacity-60 transition group-hover:opacity-100" />
              </div>
              <p className="mt-2 text-white/70">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-white/80">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
