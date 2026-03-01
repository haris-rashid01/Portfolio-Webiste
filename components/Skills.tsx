"use client";

import { motion } from "framer-motion";

const skills = [
    "ReactJS", "NodeJS", "React Native", "Python", "JavaScript", "CSS",
    "Django", "MongoDB", "Express", "n8n", "Docker", "FastAPI"
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 overflow-hidden border-t border-b border-foreground/5 bg-background text-foreground">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="flex w-fit gap-4 animate-marquee whitespace-nowrap"
            >
                {/* Double the array for seamless scrolling */}
                {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-12 mx-4"
                    >
                        <span className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter text-foreground/5 hover:text-foreground transition-all duration-700 cursor-default">
                            {skill}
                        </span>
                        <span className="text-foreground/10 text-4xl">•</span>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
