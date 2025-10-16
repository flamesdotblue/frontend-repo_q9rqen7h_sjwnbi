import React from 'react';
import './animations.css';

// Text-only badges revolve in orbits without using any brand logos.
// Each badge also gently spins to enhance the motion effect.

const RING_ONE = ['React', 'TypeScript', 'Tailwind', 'Vite'];
const RING_TWO = ['FastAPI', 'Python', 'Node', 'Framer Motion'];

export default function TechStackOrbit() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-white md:text-3xl">My Tech Stack</h2>

      <div className="mt-10 grid place-items-center">
        <div className="relative h-[360px] w-[360px] sm:h-[420px] sm:w-[420px]">
          {/* Center label */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur">
            Tools I Use
          </div>

          {/* Outer ring */}
          <Orbit radius={160} duration={28} items={RING_TWO} reverse />

          {/* Inner ring */}
          <Orbit radius={110} duration={18} items={RING_ONE} />
        </div>
      </div>
    </section>
  );
}

function Orbit({ radius, duration, items, reverse = false }) {
  return (
    <div
      className={[
        'absolute left-1/2 top-1/2',
        '-translate-x-1/2 -translate-y-1/2',
        'rounded-full border border-white/10',
        reverse ? 'animate-orbit-reverse' : 'animate-orbit',
      ].join(' ')}
      style={{ width: radius * 2, height: radius * 2, animationDuration: `${duration}s` }}
    >
      {items.map((label, idx) => (
        <Badge key={label} index={idx} total={items.length} radius={radius} />
      ))}
      {items.map((label, idx) => (
        <BadgeLabel key={`${label}-label`} label={label} index={idx} total={items.length} radius={radius} />
      ))}
    </div>
  );
}

function polarToCartesian(radius, angleDeg) {
  const angle = (angleDeg * Math.PI) / 180;
  return { x: radius * Math.cos(angle), y: radius * Math.sin(angle) };
}

function Badge({ index, total, radius }) {
  const angle = (360 / total) * index;
  const { x, y } = polarToCartesian(radius, angle);
  return (
    <span
      className="absolute block h-[6px] w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 shadow"
      style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
    />
  );
}

function BadgeLabel({ label, index, total, radius }) {
  const angle = (360 / total) * index;
  const { x, y } = polarToCartesian(radius, angle);
  return (
    <span
      className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/90 shadow-sm backdrop-blur-sm animate-spin-slow"
      style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
    >
      {label}
    </span>
  );
}
