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

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 md:px-12 bg-foreground text-background">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8"
                >
                    <h2 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tight">
                        Selected<br />Works
                    </h2>
                    <p className="text-lg md:text-xl font-light opacity-80 max-w-sm">
                        Showcasing academic projects and personal endeavors that solve real problems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((proj, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="group relative flex flex-col p-8 border border-background/20 hover:bg-background hover:text-foreground transition-all duration-500 rounded-3xl"
                        >
                            <div className="flex justify-between items-start mb-12">
                                <span className="text-xs font-semibold tracking-widest uppercase py-1 px-3 border rounded-full border-current opacity-70">
                                    {proj.stack}
                                </span>
                                <span className="p-2 rounded-full border border-current opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:-translate-y-2 group-hover:translate-x-2">
                                    <ArrowUpRight className="w-5 h-5" />
                                </span>
                            </div>
                            <div className="mt-auto">
                                <h3 className="font-display text-3xl md:text-5xl font-bold uppercase leading-none mb-4">
                                    {proj.title}
                                </h3>
                                <p className="text-lg opacity-80 font-light group-hover:opacity-100">
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
