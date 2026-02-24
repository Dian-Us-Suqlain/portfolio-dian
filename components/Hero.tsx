"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center items-center py-20 px-4 relative overflow-hidden">
            {/* Background glowing orb */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[120px] -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-3xl"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-violet-300 text-sm font-medium mb-6">
                    <Sparkles size={16} />
                    <span>Senior Tech Lead II @ educative.io</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                    Building the future with <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                        Intelligent Systems
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    AI enthusiast, React & Python expert, and n8n workflow architect.
                    I bridge the gap between complex engineering and elegant product design.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#experience" className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors flex items-center gap-2">
                        View My Work <ArrowRight size={18} />
                    </a>
                    <a href="#contact" className="px-8 py-4 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors border border-white/10">
                        Get in touch
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
