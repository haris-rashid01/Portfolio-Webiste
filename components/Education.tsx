"use client";

import { motion } from "framer-motion";

const education = [
    {
        degree: "Bachelor of Science in Software Engineering",
        institution: "COMSATS University Lahore",
        period: "2022 - 2026",
    },
    {
        degree: "FSc. Pre-Engineering",
        institution: "GC University Lahore",
        period: "2020 - 2022",
    },
    {
        degree: "Matriculation",
        institution: "St. Anthony High School",
        period: "2018 - 2020",
    }
];

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Education() {
    return (
        <section id="education" className="py-24 px-6 md:px-12 max-w-6xl mx-auto overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: EASE }}
            >
                <h2 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tight mb-16">
                    Education
                </h2>
            </motion.div>

            <div className="flex flex-col">
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: EASE, delay: index * 0.1 }}
                        className="group flex flex-col md:flex-row justify-between py-8 md:py-12 border-b border-foreground/10 hover:border-foreground transition-colors duration-500"
                    >
                        <div className="md:w-1/3 mb-4 md:mb-0">
                            <span className="text-sm font-semibold tracking-widest uppercase opacity-40 group-hover:opacity-100 transition-opacity">
                                {edu.period}
                            </span>
                            <h3 className="text-2xl md:text-4xl font-display font-medium mt-2 group-hover:translate-x-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                                {edu.institution}
                            </h3>
                        </div>

                        <div className="md:w-1/2 flex flex-col justify-center">
                            <h4 className="text-xl md:text-2xl font-medium mb-2 group-hover:text-foreground/80 transition-colors">{edu.degree}</h4>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
