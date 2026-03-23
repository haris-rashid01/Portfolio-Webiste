"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Heart, Linkedin, Mail } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Contact() {
    return (
        <section id="contact" className="pt-24 pb-12 px-6 md:px-12 max-w-6xl mx-auto flex flex-col justify-between min-h-[70vh] overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 100, rotateX: 20, perspective: 1000 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 1.5, ease: EASE }}
                className="flex flex-col flex-1 h-full"
            >
                <div className="flex flex-col">
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
                        className="group inline-flex items-center gap-4 text-2xl md:text-4xl font-display tracking-widest border-b-2 border-foreground/10 hover:border-foreground transition-all pb-2 mb-16"
                    >
                        haris.rashidch@gmail.com
                        <ArrowUpRight className="w-8 h-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                    </motion.a>
                </div>

                <div className="flex flex-col gap-12 border-t border-foreground/10 pt-12 mt-auto overflow-hidden">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex flex-col items-center md:items-start gap-1">
                            <p className="opacity-40 text-sm font-medium tracking-widest uppercase text-center md:text-left">
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
                                    className="p-4 rounded-full border border-foreground/10 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                                >
                                    <item.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-12 overflow-hidden border-t border-foreground/5 pt-6">
                <motion.h3
                    animate={{
                        color: ["#ffffff", "#94a3b8", "#cbd5e1", "#ffffff"]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="font-display text-[14vw] font-bold uppercase tracking-tighter leading-none text-center select-none w-full mix-blend-difference whitespace-nowrap"
                >
                    HARIS RASHID
                </motion.h3>
            </div>
        </section>
    );
}
