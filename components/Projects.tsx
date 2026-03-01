"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "FullStack Ecommerce",
        stack: "React, Node.js, Express, MongoDB, Stripe",
        desc: "Complete shopping website with cart, auth, orders, and Stripe checkout. Admin dashboard included for inventory and order management.",
    },
    {
        title: "Realtime Chat App",
        stack: "React, Node.js, MongoDB, Socket.io",
        desc: "Full stack chatting web app with private messaging, group chats, image sharing and real-time sockets.",
    },
    {
        title: "Bite Box Delivery",
        stack: "React Native, Firebase, Sanity.io",
        desc: "Dynamic food delivery mobile app showcasing modern design, built for the Mobile App Dev course.",
    },
    {
        title: "Weather Mobile App",
        stack: "WeatherAPI",
        desc: "Mobile application for global weather forecasting built with live API integration.",
    }
];

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 md:px-12 bg-foreground text-background overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: EASE }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8"
                >
                    <h2 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tight">
                        Selected<br />Works
                    </h2>
                    <p className="text-lg md:text-xl font-light opacity-60 max-w-sm">
                        Showcasing academic projects and personal endeavors that solve real problems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((proj, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: EASE, delay: idx * 0.1 }}
                            className="group relative flex flex-col p-8 md:p-12 border border-background/10 hover:bg-background hover:text-foreground transition-all duration-700 rounded-[2rem] overflow-hidden"
                        >
                            <div className="flex justify-between items-start mb-12 relative z-10">
                                <span className="text-xs font-semibold tracking-widest uppercase py-1 px-4 border rounded-full border-current opacity-40 group-hover:opacity-100 transition-opacity">
                                    {proj.stack}
                                </span>
                                <motion.span
                                    whileHover={{ scale: 1.2, rotate: 15 }}
                                    className="p-3 rounded-full border border-current opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0"
                                >
                                    <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                                </motion.span>
                            </div>
                            <div className="mt-auto relative z-10">
                                <h3 className="font-display text-3xl md:text-5xl font-bold uppercase leading-none mb-6 group-hover:translate-x-2 transition-transform duration-500">
                                    {proj.title}
                                </h3>
                                <p className="text-lg opacity-40 font-light group-hover:opacity-80 transition-opacity duration-500 leading-relaxed">
                                    {proj.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
