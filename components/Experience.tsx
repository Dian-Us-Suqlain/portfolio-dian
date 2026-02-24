"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        role: "Senior Tech Lead II",
        company: "educative.io",
        period: "Present",
        description: "Leading technical initiatives, architecting scalable platforms, and guiding high-performing engineering teams. Focused on integrating advanced AI capabilities into the learning experience.",
        skills: ["Architecture", "Leadership", "AI Integration", "React", "Python"]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-4 max-w-5xl mx-auto relative">
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] -z-10" />

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">01.</span> Experience
                </h2>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                                        <div className="text-xl text-violet-400 mt-1">{exp.company}</div>
                                    </div>
                                    <div className="text-neutral-400 mt-2 md:mt-0 font-mono text-sm">
                                        {exp.period}
                                    </div>
                                </div>
                                <p className="text-neutral-300 leading-relaxed mb-6">
                                    {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map(skill => (
                                        <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
