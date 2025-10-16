import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6 py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="relative">
          <span className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs tracking-wide text-white/90 backdrop-blur">
            Portfolio • Interactive • Modern
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-6xl">
            Anchal Gupta
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            Creative developer crafting delightful digital experiences. I design, build, and ship modern web apps with performance and polish.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-white/10 transition hover:scale-105 hover:shadow-white/20"
            >
              View Projects
            </a>
            <a
              href="#experience"
              className="rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Experience
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
