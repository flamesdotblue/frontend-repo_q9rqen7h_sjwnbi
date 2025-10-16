import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[85vh] md:h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Uniform, subtle overlays for readability without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="text-white">
          <p className="mb-3 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">Portfolio</p>
          <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
            Anchal Gupta
            <span className="block text-lg font-normal text-white/80 sm:text-2xl">Frontend Engineer • Creative Developer</span>
          </h1>
          <p className="mt-4 max-w-xl text-white/80">
            Building delightful, performant web experiences with modern tooling and a focus on craft.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-black shadow hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50">
              View Projects
            </a>
            <a href="#contact" className="rounded-md bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
