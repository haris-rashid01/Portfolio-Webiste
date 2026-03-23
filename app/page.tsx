"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Education from "@/components/Education";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const SectionWrapper = ({ children, id }: { children: React.ReactNode, id?: string }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0.2, y: 100, rotateX: 45, scale: 0.9, perspective: 2000 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
    viewport={{ once: false, margin: "-10%" }}
    transition={{ duration: 1.2, ease: EASE }}
    className="w-full relative origin-top z-10"
    style={{ transformStyle: 'preserve-3d' }}
  >
    {children}
  </motion.section>
);

export default function Home() {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <main className="bg-background min-h-screen selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black overflow-x-hidden">
      <nav className="fixed top-0 left-0 w-full p-6 md:px-12 flex justify-between items-center z-50 mix-blend-difference text-white">
        <motion.a
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: EASE }}
          href="#"
          className="font-display text-2xl font-bold uppercase tracking-widest hover:opacity-70 transition-opacity flex items-center gap-2"
        >
          <img src="/favicon.png" alt="HR Logo" className="w-10 h-10 rounded-lg invert" />
        </motion.a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 * i }}
              whileHover={{ y: -2, opacity: 0.7 }}
              href={item.href}
              className="hover:opacity-70 transition-opacity"
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </nav>

      <SectionWrapper><Hero /></SectionWrapper>
      <SectionWrapper id="about"><About /></SectionWrapper>
      <SectionWrapper id="experience"><Experience /></SectionWrapper>
      <SectionWrapper id="education"><Education /></SectionWrapper>
      <SectionWrapper id="skills"><Skills /></SectionWrapper>
      <Projects />
      <SectionWrapper id="contact"><Contact /></SectionWrapper>
    </main>
  );
}
