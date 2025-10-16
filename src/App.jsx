import React from 'react';
import Hero from './components/Hero.jsx';
import ExperienceTimeline from './components/ExperienceTimeline.jsx';
import ProjectsGrid from './components/ProjectsGrid.jsx';
import TechStackOrbit from './components/TechStackOrbit.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black">
      {/* Header */}
      <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#" className="font-semibold text-white">Anchal Gupta</a>
          <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#experience">Experience</a>
            <a className="hover:text-white" href="#stack">Stack</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <ProjectsGrid />
        <ExperienceTimeline />
        <TechStackOrbit />

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold text-white">Let’s build something</h3>
            <p className="mt-2 max-w-2xl text-white/70">
              Have a project in mind or want to collaborate? I’m always open to interesting challenges and creative ideas.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="mailto:anchal@example.com" className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-black shadow hover:bg-white/90">Email Me</a>
              <a href="#projects" className="rounded-md bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20">See Work</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-sm text-white/60">
          <span>© {new Date().getFullYear()} Anchal Gupta</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">GitHub</a>
            <a href="#" className="hover:text-white">Dribbble</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
