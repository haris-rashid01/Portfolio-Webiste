"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        role: "Associate Software Engineer",
        company: "Fusion Cortex",
        period: "Oct 2024 - Present",
        desc: "Worked on AI Automation, Agents, Chatbots, n8n, RAG, Docker, Python.",
    },
    {
        role: "MERN Stack Intern",
        company: "KnowaTech",
        period: "Aug 2024 - Sep 2024",
        desc: "Worked on ReactJS, NodeJS, ExpressJS, MongoDB, FastAPI.",
    },
    {
        role: "AI Programmer Intern",
        company: "AppsGenii Technologies",
        period: "Jun 2024 - Aug 2024",
        desc: "Python, Django, Object Detection.",
    },
    {
        role: "Web Dev Intern",
        company: "Qwerty Experts",
        period: "Aug 2024 - Aug 2024",
        desc: "Worked on frontend development, HTML, CSS, Javascript and Wordpress.",
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <h2 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tight mb-16">
                    Experience
                </h2>
            </motion.div>

            <div className="flex flex-col">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, borderBottomWidth: 0 }}
                        whileInView={{ opacity: 1, borderBottomWidth: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group flex flex-col md:flex-row justify-between py-8 md:py-12 border-b border-foreground/20 hover:border-foreground transition-colors"
                    >
                        <div className="md:w-1/3 mb-4 md:mb-0">
                            <span className="text-sm font-semibold tracking-widest uppercase opacity-60">
                                {exp.period}
                            </span>
                            <h3 className="text-2xl md:text-4xl font-display font-medium mt-2 group-hover:translate-x-4 transition-transform duration-300">
                                {exp.company}
                            </h3>
                        </div>

                        <div className="md:w-1/2 flex flex-col justify-center">
                            <h4 className="text-xl md:text-2xl font-medium mb-2">{exp.role}</h4>
                            <p className="text-lg opacity-70 leading-relaxed">{exp.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
