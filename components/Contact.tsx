"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="pt-24 pb-12 px-6 md:px-12 max-w-6xl mx-auto flex flex-col justify-between min-h-[70vh]">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <h2 className="font-display text-[12vw] md:text-[10vw] leading-[0.85] font-bold uppercase tracking-tighter mb-8">
                    LET'S TALK
                </h2>

                <p className="text-xl md:text-3xl font-light mb-16 max-w-2xl">
                    Interested in working together or have a question? Feel free to reach out.
                </p>

                <a
                    href="mailto:haris.rashidch@gmail.com"
                    className="group inline-flex items-center gap-4 text-2xl md:text-4xl font-display uppercase tracking-widest border-b-2 border-transparent hover:border-foreground transition-all pb-2 mb-16"
                >
                    haris.rashidch@gmail.com
                    <ArrowUpRight className="w-8 h-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </a>
            </motion.div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-foreground/20 pt-8 mt-auto">
                <p className="opacity-60 text-sm font-medium tracking-widest uppercase">
                    © {new Date().getFullYear()} Haris Rashid. All rights reserved.
                </p>

                <div className="flex items-center gap-6">
                    <a href="#" className="p-3 rounded-full border border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background transition-all">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-3 rounded-full border border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background transition-all">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="mailto:haris.rashidch@gmail.com" className="p-3 rounded-full border border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background transition-all">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
}
