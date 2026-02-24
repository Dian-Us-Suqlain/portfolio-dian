"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Core Technologies",
        skills: ["React", "Next.js", "Python", "TypeScript", "Node.js", "Tailwind CSS"]
    },
    {
        title: "AI & Automation",
        skills: ["n8n Workflows", "LLM Integration", "Prompt Engineering", "RAG Systems", "OpenAI API"]
    },
    {
        title: "Architecture & DevOps",
        skills: ["System Design", "Vercel", "AWS", "Docker", "CI/CD", "Microservices"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-4 max-w-5xl mx-auto relative">
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] -z-10" />

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">02.</span> Technical Arsenal
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:-translate-y-1 transition-transform duration-300">
                            <h3 className="text-xl font-semibold text-white mb-6">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map(skill => (
                                    <div key={skill} className="px-3 py-2 rounded-lg bg-black/40 border border-white/5 text-sm text-neutral-300 hover:text-white hover:border-white/20 transition-colors">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
