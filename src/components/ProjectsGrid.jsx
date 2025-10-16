import React from 'react';
import { ExternalLink } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Interactive Product Tour',
    desc: 'A playful guided tour with 3D interactions and smooth choreography.',
    tags: ['React', 'Spline', 'GSAP'],
    href: '#',
  },
  {
    title: 'Design System Website',
    desc: 'Documentation site with dark mode, search, and rich component examples.',
    tags: ['Vite', 'Tailwind', 'MDX'],
    href: '#',
  },
  {
    title: 'Analytics Dashboard',
    desc: 'Real-time data visualizations with crisp typography and motion.',
    tags: ['React', 'D3', 'Framer Motion'],
    href: '#',
  },
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-white md:text-3xl">Selected Projects</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <a
            key={i}
            href={p.href}
            className="group relative flex flex-col rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/10"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-medium text-white">{p.title}</h3>
              <ExternalLink className="h-4 w-4 text-white/60 transition group-hover:text-white" />
            </div>
            <p className="mt-2 text-sm text-white/70">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/80">
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
