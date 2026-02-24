"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "AI Support Agent Workflow",
        description: "An automated customer support pipeline built with n8n, integrating OpenAI for intent classification and automated responses. Reduces manual ticket handling by 60%.",
        tags: ["n8n", "OpenAI", "PostgreSQL", "Slack API"],
        link: "#",
        github: "#"
    },
    {
        title: "Content Generation Pipeline",
        description: "End-to-end automated content generation system. Scrapes industry news, summarizes key points using LLMs, and drafts technical newsletters ready for review.",
        tags: ["Python", "FastAPI", "n8n", "LangChain"],
        link: "#",
        github: "#"
    },
    {
        title: "React UI Components",
        description: "A highly reusable, accessible, and animated UI component library for React applications using Tailwind CSS and Framer Motion.",
        tags: ["React", "Tailwind CSS", "Framer Motion"],
        link: "#",
        github: "#"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-4 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-400">03.</span> Featured Workflows
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <div key={idx} className="flex flex-col p-6 rounded-3xl bg-white/5 border border-white/10 hover:-translate-y-2 hover:bg-white/[0.07] transition-all duration-300 group">
                            <div className="flex justify-end gap-3 mb-4 text-neutral-400">
                                <a href={project.github} className="hover:text-white transition-colors">
                                    <Github size={20} />
                                </a>
                                <a href={project.link} className="hover:text-white transition-colors">
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-mono text-emerald-400/80 bg-emerald-400/10 px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
