"use client";

import { motion } from "framer-motion";

const skills = [
    "ReactJS", "NodeJS", "React Native", "Python", "JavaScript", "CSS",
    "Django", "MongoDB", "Express", "n8n", "Docker", "FastAPI"
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 overflow-hidden border-t border-b border-foreground/10 bg-background text-foreground">
            <div className="flex w-[200%] gap-4 animate-marquee whitespace-nowrap">
                {/* Double the array for seamless scrolling */}
                {[...skills, ...skills, ...skills].map((skill, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-8 mx-4"
                    >
                        <span className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tight text-foreground/10 hover:text-foreground transition-colors duration-300">
                            {skill}
                        </span>
                        <span className="text-foreground/20 text-4xl">•</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
