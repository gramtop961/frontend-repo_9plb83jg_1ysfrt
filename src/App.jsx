import Hero3D from './components/Hero3D';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactCTA from './components/ContactCTA';

function Nav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-gradient-to-b from-[#0b0e14]/80 to-transparent backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#" className="text-lg font-bold">DS Portfolio</a>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#skills" className="text-white/80 transition hover:text-white">Skills</a>
          <a href="#projects" className="text-white/80 transition hover:text-white">Projects</a>
          <a href="#contact" className="text-white/80 transition hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0e14] antialiased">
      <Nav />
      <main>
        <Hero3D />
        <Skills />
        <Projects />
        <ContactCTA />
      </main>
    </div>
  );
}
