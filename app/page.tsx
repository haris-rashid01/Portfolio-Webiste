import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-background min-h-screen selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <nav className="fixed top-0 left-0 w-full p-6 md:px-12 flex justify-between items-center z-50 mix-blend-difference text-white">
        <a href="#" className="font-display text-2xl font-bold uppercase tracking-widest hover:opacity-70 transition-opacity">
          HR.
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
          <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
          <a href="#experience" className="hover:opacity-70 transition-opacity">Experience</a>
          <a href="#projects" className="hover:opacity-70 transition-opacity">Projects</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
        </div>
      </nav>

      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
