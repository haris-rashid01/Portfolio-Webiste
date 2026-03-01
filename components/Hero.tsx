"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 pb-12">
            <div className="flex-1 flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-6xl"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <h2 className="text-xl md:text-2xl font-medium tracking-wide border px-4 py-1 rounded-full border-foreground/20">
                            AVAILABLE FOR WORK
                        </h2>
                        <div className="h-px bg-foreground/20 flex-1 hidden md:block"></div>
                    </div>

                    <h1 className="font-display text-[15vw] md:text-[12vw] leading-[0.85] tracking-tighter uppercase font-bold text-foreground">
                        HARIS<br />RASHID
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-12 md:mt-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
                >
                    <p className="text-lg md:text-xl font-medium max-w-sm leading-relaxed text-foreground/80">
                        ASSOCIATE SOFTWARE ENGINEER FOCUSED ON CREATING IMPACTFUL SOFTWARE SOLUTIONS.
                    </p>
                    <a
                        href="#contact"
                        className="group flex items-center gap-4 text-xl md:text-3xl font-display uppercase tracking-widest hover:text-foreground/70 transition-colors"
                    >
                        LET'S WORK TOGETHER
                        <span className="p-3 md:p-4 rounded-full border border-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
                            <ArrowRight className="w-5 h-5 md:w-8 md:h-8" />
                        </span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
