"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-32 px-4 max-w-3xl mx-auto text-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
                <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
                    Whether you have a question about AI integrations, scalable React architecture, or just want to say hi, I'll try my best to get back to you!
                </p>

                <a
                    href="mailto:hello@example.com"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold transition-colors shadow-lg shadow-indigo-500/25 mb-16"
                >
                    <Mail size={18} /> Say Hello
                </a>

                <div className="flex justify-center gap-6">
                    <a href="#" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-neutral-300 hover:text-white transition-all hover:-translate-y-1">
                        <Github size={24} />
                    </a>
                    <a href="#" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-neutral-300 hover:text-white transition-all hover:-translate-y-1">
                        <Linkedin size={24} />
                    </a>
                </div>
            </motion.div>

            <div className="mt-32 text-neutral-600 text-sm">
                <p>Built with Next.js & Tailwind CSS.</p>
                <p className="mt-1">© {new Date().getFullYear()} Senior Tech Lead II at educative.io.</p>
            </div>
        </section>
    );
}
