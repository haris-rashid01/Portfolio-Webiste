"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, X, Play, ShoppingBag, Truck, Cloud, Activity, MessageSquare, Layout } from "lucide-react";

const projects = [
    {
        id: "mercenta",
        title: "Mercenta Web App",
        stack: "React, Node.js, Express, MongoDB, Tailwind CSS",
        desc: "A powerful web application for merchants to manage their business efficiently. Demo available via the linked post.",
        github: "https://github.com/haris-rashid01",
        linkedinEmbed: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7395444719297835009?compact=1",
        live: "https://github.com/haris-rashid01",
        icon: Layout,
        gradient: "from-[#FACC15]/20 to-[#422006]/30"
    },
    {
        id: "threadly",
        title: "Threadly Chat Web",
        stack: "Next.js, Socket.io, Tailwind CSS, MongoDB",
        desc: "A feature-rich real-time messaging platform with high-concurrency support. Explore the demo in the linked post.",
        github: "https://github.com/haris-rashid01",
        linkedinEmbed: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7389942805772566528?compact=1",
        live: "https://github.com/haris-rashid01",
        icon: MessageSquare,
        gradient: "from-[#FDE047]/30 to-[#1C1917]/20"
    },
    {
        id: "ecommerce",
        title: "Ecommerce Mobile App",
        stack: "React Native, Firebase, Redux Toolkit",
        desc: "A high-performance mobile shopping experience with real-time sync and secure payments. Watch the demo in the linked post.",
        github: "https://github.com/haris-rashid01",
        linkedinEmbed: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7345889407553495043?compact=1",
        live: "https://github.com/haris-rashid01",
        icon: ShoppingBag,
        gradient: "from-[#FACC15]/20 to-[#A16207]/10"
    },
    {
        id: "bitebox",
        title: "Bite Box Delivery",
        stack: "React Native, Firebase, Sanity.io",
        desc: "A modular food delivery platform with real-time tracking and dynamic delivery management. Demo available in the linked post.",
        github: "https://github.com/haris-rashid01",
        linkedinEmbed: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7275479449976872961?compact=1",
        live: "https://github.com/haris-rashid01",
        icon: Truck,
        gradient: "from-[#FDE047]/20 to-[#854D0E]/20"
    },
    {
        id: "weather",
        title: "Weather App",
        stack: "React Native, WeatherAPI, Core Location",
        desc: "A sleek mobile application for global weather forecasting with real-time API integration and location services.",
        github: "https://github.com/haris-rashid01",
        linkedinEmbed: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7342180846226845696?compact=1",
        live: "https://github.com/haris-rashid01",
        icon: Cloud,
        gradient: "from-[#FACC15]/30 to-[#422006]/10"
    },
    {
        id: "fitness",
        title: "Fitness App Mobile",
        stack: "React Native, Expo, Redux Toolkit, Sanity.io",
        desc: "A comprehensive mobile solution for fitness tracking, workouts, and health monitoring. Demo available in the linked post.",
        github: "https://github.com/haris-rashid01",
        linkedinEmbed: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7337629311279030272?compact=1",
        live: "https://github.com/haris-rashid01",
        icon: Activity,
        gradient: "from-[#FEF08A]/20 to-[#713F12]/30"
    }
];


const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Projects() {
    const [playingId, setPlayingId] = useState<string | null>(null);

    return (
        <section id="projects" className="py-24 px-6 md:px-12 bg-foreground text-background overflow-hidden font-display">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: EASE }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8"
                >
                    <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tight text-background">
                        Selected<br />Works
                    </h2>
                    <p className="text-lg md:text-xl font-light opacity-60 max-w-sm">
                        Showcasing academic projects and personal endeavors that solve real problems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((proj, idx) => {
                        const isPlaying = playingId === proj.id;
                        const VisualIcon = proj.icon;

                        return (
                            <motion.div
                                key={proj.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: EASE, delay: idx * 0.1 }}
                                className={`group relative flex flex-col border border-background/10 transition-all duration-700 rounded-[2rem] overflow-hidden ${isPlaying ? 'bg-background' : 'hover:bg-background/5'}`}
                                style={{ minHeight: '520px' }}
                            >
                                <AnimatePresence mode="wait">
                                    {!isPlaying ? (
                                        <motion.div
                                            key="content"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex flex-col h-full p-8 md:p-12"
                                        >
                                            <div className="flex justify-between items-start mb-8 relative z-10">
                                                <div className="flex flex-col gap-4">
                                                    <span className="text-xs font-semibold tracking-widest uppercase py-1 px-4 border rounded-full border-current opacity-40 group-hover:opacity-100 transition-opacity">
                                                        {proj.stack}
                                                    </span>
                                                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                                        {proj.github && (
                                                            <a
                                                                href={proj.github}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="p-2 border border-current rounded-full hover:bg-foreground hover:text-background transition-colors"
                                                            >
                                                                <Github className="w-4 h-4" />
                                                            </a>
                                                        )}
                                                        <button
                                                            onClick={() => setPlayingId(proj.id)}
                                                            className="p-2 border border-current rounded-full hover:bg-foreground hover:text-background transition-colors"
                                                        >
                                                            <Play className="w-4 h-4 fill-current group-hover:fill-background transition-colors" />
                                                        </button>
                                                    </div>
                                                </div>
                                                {proj.live && (
                                                    <motion.a
                                                        href={proj.live}
                                                        target="_blank"
                                                        className="p-3 rounded-full border border-current opacity-0 group-hover:opacity-100 transition-all"
                                                    >
                                                        <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                                                    </motion.a>
                                                )}
                                            </div>

                                            <div className="relative flex-1 rounded-2xl overflow-hidden mb-8 group-hover:scale-[1.02] transition-all duration-700 bg-background/5 border border-background/10">
                                                <div className={`w-full h-full bg-gradient-to-br ${proj.gradient} flex flex-col items-center justify-center relative`}>
                                                    <VisualIcon className="w-24 h-24 text-[#FACC15] opacity-20 group-hover:opacity-80 transition-all duration-700 scale-90 group-hover:scale-110" />
                                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
                                                    <div className="absolute w-full h-full opacity-10 animate-pulse bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                                                </div>

                                                <div className="absolute inset-0 flex items-center justify-center z-10">
                                                    <motion.div
                                                        whileHover={{ scale: 1.1 }}
                                                        className="w-20 h-20 rounded-full bg-background/90 backdrop-blur-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 cursor-pointer shadow-2xl border border-[#FACC15]/20"
                                                        onClick={() => setPlayingId(proj.id)}
                                                    >
                                                        <Play className="w-8 h-8 text-[#FACC15] fill-[#FACC15]" />
                                                    </motion.div>
                                                </div>
                                            </div>

                                            <div className="mt-auto relative z-10">
                                                <h3 className="text-3xl md:text-5xl font-bold uppercase leading-none mb-4 md:mb-6 group-hover:translate-x-2 transition-transform duration-500 text-background">
                                                    {proj.title}
                                                </h3>
                                                <p className="text-lg opacity-40 font-light group-hover:opacity-100 transition-opacity duration-500 leading-relaxed max-w-lg">
                                                    {proj.desc}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="player"
                                            initial={{ opacity: 0, scale: 0.98 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.98 }}
                                            className="absolute inset-0 z-20 bg-background flex flex-col"
                                        >
                                            <div className="flex justify-between items-center p-6 bg-background/50 backdrop-blur-md border-b border-background/5">
                                                <h4 className="text-xs font-bold uppercase tracking-widest text-foreground">{proj.title} Demo</h4>
                                                <button
                                                    onClick={() => setPlayingId(null)}
                                                    className="p-2 rounded-full hover:bg-foreground/10 text-foreground transition-colors"
                                                >
                                                    <X className="w-6 h-6" />
                                                </button>
                                            </div>
                                            <div className="flex-1 bg-black p-2 md:p-6">
                                                <iframe
                                                    src={proj.linkedinEmbed}
                                                    className="w-full h-full rounded-2xl shadow-inner border border-white/5"
                                                    frameBorder="0"
                                                    allowFullScreen
                                                    title={proj.title}
                                                />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}





