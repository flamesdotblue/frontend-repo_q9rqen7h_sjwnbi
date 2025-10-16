import { useEffect, useRef } from 'react';

const techs = [
  { name: 'HTML5', color: '#e34f26', short: 'HTML' },
  { name: 'CSS3', color: '#2965f1', short: 'CSS' },
  { name: 'JavaScript', color: '#f7df1e', short: 'JS', text: '#111' },
  { name: 'React', color: '#61dafb', short: '⚛︎', text: '#0b1a27' },
  { name: 'Tailwind', color: '#38bdf8', short: 'TW', text: '#082f49' },
  { name: 'Node', color: '#8cc84b', short: 'Node', text: '#0b1a0b' },
];

export default function TechStackOrbit() {
  const containerRef = useRef(null);

  useEffect(() => {
    // trigger reflow to restart animations if component remounts
    const el = containerRef.current;
    if (!el) return;
    void el.offsetHeight; // no-op
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-b from-slate-950 to-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">Tools & Tech</h2>
        <p className="mt-2 max-w-2xl text-white/70">A playful solar system of tools I use to build robust, maintainable products.</p>
      </div>

      <div ref={containerRef} className="mx-auto mt-10 grid max-w-6xl place-items-center px-6">
        <div className="relative aspect-square w-full max-w-[680px]">
          {/* center */}
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <div className="grid place-items-center rounded-full border border-white/20 bg-white/10 px-8 py-8 text-center backdrop-blur">
              <p className="text-sm uppercase tracking-widest text-white/70">My Tech Stack</p>
              <h3 className="mt-1 text-2xl font-bold">Core Orbit</h3>
            </div>
          </div>

          {/* orbits */}
          <div className="absolute inset-0">
            <Orbit radiusClass="w-[80%] h-[80%]" duration="18s">
              <TechBadge {...techs[0]} />
              <TechBadge {...techs[1]} />
            </Orbit>
            <Orbit radiusClass="w-[62%] h-[62%]" duration="14s" reverse>
              <TechBadge {...techs[2]} />
              <TechBadge {...techs[3]} />
            </Orbit>
            <Orbit radiusClass="w-[44%] h-[44%]" duration="10s">
              <TechBadge {...techs[4]} />
              <TechBadge {...techs[5]} />
            </Orbit>
          </div>

          {/* soft glow */}
          <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.15),transparent_60%)]" />
        </div>
      </div>

      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .orbit {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: 9999px;
          border: 1px dashed rgba(255,255,255,0.15);
        }
        .orbit-track {
          position: absolute;
          inset: 0;
          animation: orbit var(--duration) linear infinite;
          transform-origin: center;
        }
        .orbit-track.reverse {
          animation-direction: reverse;
        }
        .planet {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) translateX(var(--offset));
        }
      `}</style>
    </section>
  );
}

function Orbit({ children, radiusClass, duration = '12s', reverse = false }) {
  const childArray = Array.isArray(children) ? children : [children];
  const angleStep = 360 / childArray.length;

  return (
    <div className={`orbit ${radiusClass}`} style={{ ['--duration']: duration }}>
      <div className={`orbit-track ${reverse ? 'reverse' : ''}`} style={{ ['--duration']: duration }}>
        {childArray.map((child, idx) => (
          <div
            key={idx}
            className="planet"
            style={{ ['--offset']: 'calc(50% - 28px)', transform: `translate(-50%, -50%) rotate(${angleStep * idx}deg) translateX(calc(50% - 28px))` }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

function TechBadge({ name, color, short, text = '#0b1220' }) {
  return (
    <div
      title={name}
      className="grid h-14 w-14 place-items-center rounded-full text-sm font-bold shadow-lg shadow-black/40"
      style={{ backgroundColor: color, color: text }}
    >
      {short}
    </div>
  );
}
