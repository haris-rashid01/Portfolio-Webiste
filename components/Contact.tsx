"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Heart, Linkedin, Mail } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Contact() {
    return (
        <section id="contact" className="pt-24 pb-12 px-6 md:px-12 max-w-6xl mx-auto flex flex-col justify-between min-h-[70vh] overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: EASE }}
            >
                <h2 className="font-display text-[12vw] md:text-[10vw] leading-[0.85] font-bold uppercase tracking-tighter mb-8 bg-gradient-to-r from-foreground to-foreground/50 bg-clip-text text-transparent">
                    LET'S TALK
                </h2>

                <p className="text-xl md:text-3xl font-light mb-16 max-w-2xl opacity-60">
                    Interested in working together or have a question? Feel free to reach out.
                </p>

                <motion.a
                    whileHover={{ x: 20 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    href="mailto:haris.rashidch@gmail.com"
                    className="group inline-flex items-center gap-4 text-2xl md:text-4xl font-display uppercase tracking-widest border-b-2 border-foreground/10 hover:border-foreground transition-all pb-2 mb-16"
                >
                    haris.rashidch@gmail.com
                    <ArrowUpRight className="w-8 h-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                </motion.a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-foreground/10 pt-8 mt-auto"
            >
                <div className="flex flex-col items-center md:items-start gap-2">
                    <p className="opacity-40 text-sm font-medium tracking-widest uppercase">
                        © {new Date().getFullYear()} Haris Rashid. All rights reserved.
                    </p>
                    <p className="opacity-40 text-[10px] md:text-xs font-medium tracking-widest uppercase flex items-center gap-1.5">
                        Made with <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" /> by Haris
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    {[
                        { icon: Linkedin, href: "https://www.linkedin.com/in/haris-rashid-/" },
                        { icon: Github, href: "https://github.com/haris-rashid01" },
                        { icon: Mail, href: "mailto:haris.rashidch@gmail.com" }
                    ].map((item, i) => (
                        <motion.a
                            key={i}
                            whileHover={{ y: -5, scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full border border-foreground/10 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                        >
                            <item.icon className="w-5 h-5" />
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
