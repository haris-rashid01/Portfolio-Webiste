"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function About() {
    return (
        <section id="about" className="py-24 px-6 md:px-12 bg-foreground text-background">
            <motion.div
                initial={{ opacity: 0, y: 100, rotateX: 30, perspective: 1000 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 1.2, ease: EASE }}
                className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-start"
            >
                <h2 className="font-display text-4xl md:text-7xl font-bold uppercase tracking-tight w-full md:w-1/3 text-background">
                    Define.<br />Design.<br />Deliver.
                </h2>

                <div className="w-full md:w-2/3 flex flex-col gap-8">
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: EASE, delay: 0.2 }}
                        className="text-xl md:text-2xl font-light leading-snug"
                    >
                        I’m a Software Engineering student at COMSATS University Lahore with a strong interest in building practical, user-focused software. I have experience in frontend and backend development using technologies like React.js, Node.js, Express.js, MongoDB, and Python.

                        I’ve worked across AI automation and full-stack development, and I’m currently working as an Associate Software Engineer at Fusion Cortex, where I contribute to real-world projects and continue to grow as a developer.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: EASE, delay: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 border-t border-background/20 pt-8"
                    >
                        <div>
                            <h3 className="uppercase tracking-widest text-sm font-semibold mb-2 opacity-60">Education</h3>
                            <p className="font-medium text-lg">BS Software Engineering</p>
                            <p className="opacity-80">COMSATS University Lahore (2022-2026)</p>
                        </div>
                        <div>
                            <h3 className="uppercase tracking-widest text-sm font-semibold mb-2 opacity-60">Location</h3>
                            <p className="font-medium text-lg">Lahore, Pakistan</p>
                            <p className="opacity-80">Available Globally</p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
