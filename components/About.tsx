"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-24 px-6 md:px-12 bg-foreground text-background">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-start">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="font-display text-4xl md:text-7xl font-bold uppercase tracking-tight w-full md:w-1/3"
                >
                    Define.<br />Design.<br />Deliver.
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full md:w-2/3 flex flex-col gap-8"
                >
                    <p className="text-2xl md:text-4xl font-light leading-snug">
                        Passionate about technology and coding. As a Software Engineering student
                        in my 8th semester, I bring immense value to every project, consistently
                        exceeding expectations and setting new standards in software development.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 border-t border-background/20 pt-8">
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
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
