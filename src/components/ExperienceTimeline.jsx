import React from 'react';

const TIMELINE = [
  {
    role: 'Senior Frontend Engineer',
    company: 'PixelCraft Studio',
    period: '2023 — Present',
    points: [
      'Led the UI architecture for a design system adopted across 5+ products.',
      'Optimized bundle splitting and SSR, improving TTI by ~32%.',
    ],
  },
  {
    role: 'Frontend Engineer',
    company: 'Aurora Labs',
    period: '2021 — 2023',
    points: [
      'Built interactive 3D product demos using WebGL frameworks.',
      'Shipped accessible components and robust test coverage.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'Freelance',
    period: '2019 — 2021',
    points: [
      'Delivered custom websites for startups with modern stacks.',
      'Implemented SEO best practices and analytics integrations.',
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-white md:text-3xl">Experience</h2>
      <div className="mt-10 border-l border-white/10 pl-6">
        {TIMELINE.map((item, idx) => (
          <div key={idx} className="relative mb-10">
            <span className="absolute -left-[9px] top-1 block h-4 w-4 rounded-full border border-white/20 bg-white/10" />
            <div className="flex flex-col gap-1">
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="text-white">{item.role}</h3>
                <span className="text-white/60">@ {item.company}</span>
              </div>
              <span className="text-sm text-white/50">{item.period}</span>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-white/80">
                {item.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
