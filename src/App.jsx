import Hero from './components/Hero';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectsGrid from './components/ProjectsGrid';
import TechStackOrbit from './components/TechStackOrbit';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Header />
      <Hero />
      <ExperienceTimeline />
      <ProjectsGrid />
      <TechStackOrbit />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#" className="text-sm font-semibold tracking-wide text-white/80">Anchal Gupta</a>
        <nav className="hidden gap-6 text-sm text-white/70 sm:flex">
          <a href="#experience" className="transition hover:text-white">Experience</a>
          <a href="#projects" className="transition hover:text-white">Projects</a>
          <a href="#tech" className="transition hover:text-white">Tech</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer id="tech" className="w-full border-t border-white/10 bg-black py-10 text-white/70">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Anchal Gupta. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#projects" className="hover:text-white">Work</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
