"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 pb-12 overflow-hidden">
            <div className="flex-1 flex flex-col justify-center">
                <div className="max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: EASE }}
                        className="flex items-center gap-4 mb-10"
                    >
                        <h2 className="text-xl md:text-2xl font-medium tracking-wide border px-4 py-1 rounded-full border-foreground/20">
                            AVAILABLE FOR WORK
                        </h2>
                        <div className="h-px bg-foreground/10 flex-1 hidden md:block"></div>
                    </motion.div>

                    <h1 className="font-display text-[15vw] md:text-[12vw] leading-[0.85] tracking-tighter uppercase font-bold text-foreground overflow-hidden">
                        <motion.span
                            initial={{ y: "100%", rotateX: 60, perspective: 1000 }}
                            animate={{ y: 0, rotateX: 0 }}
                            transition={{ duration: 1.5, ease: EASE, delay: 0.2 }}
                            className="block"
                        >
                            HARIS
                        </motion.span>
                        <motion.span
                            initial={{ y: "100%", rotateX: 60, perspective: 1000 }}
                            animate={{ y: 0, rotateX: 0 }}
                            transition={{ duration: 1.5, ease: EASE, delay: 0.3 }}
                            className="block"
                        >
                            RASHID
                        </motion.span>
                    </h1>
                </div>

                <div className="mt-12 md:mt-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                    <motion.p
                        initial={{ opacity: 0, y: 100, rotateX: 45 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ duration: 1, ease: EASE, delay: 0.6 }}
                        className="text-lg md:text-xl font-medium max-w-sm leading-relaxed text-foreground/80 uppercase"
                    >
                        ASSOCIATE SOFTWARE ENGINEER
                    </motion.p>

                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
                        <motion.a
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
                            href="/Haris_Rashid_Resume.pdf"
                            download
                            className="group flex items-center gap-4 text-xl md:text-2xl font-display uppercase tracking-widest hover:opacity-60 transition-opacity"
                        >
                            Download CV
                            <motion.span
                                className="p-3 rounded-full border border-foreground group-hover:bg-foreground group-hover:text-background transition-colors"
                                whileHover={{ y: 5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <Download className="w-5 h-5" />
                            </motion.span>
                        </motion.a>

                        <motion.a
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: EASE, delay: 0.8 }}
                            href="#contact"
                            className="group flex items-center gap-4 text-xl md:text-3xl font-display uppercase tracking-widest hover:text-foreground/70 transition-colors"
                        >
                            LET'S WORK TOGETHER
                            <motion.span
                                className="p-3 md:p-4 rounded-full border border-foreground group-hover:bg-foreground group-hover:text-background transition-colors"
                                whileHover={{ scale: 1.1, rotate: 15 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <ArrowRight className="w-5 h-5 md:w-8 md:h-8" />
                            </motion.span>
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
}

