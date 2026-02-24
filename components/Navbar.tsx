"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { User, Terminal, Briefcase, Mail } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-6 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl"
            >
                <NavItem href="#about" icon={<User size={18} />} label="About" />
                <NavItem href="#experience" icon={<Briefcase size={18} />} label="Experience" />
                <NavItem href="#skills" icon={<Terminal size={18} />} label="Skills" />
                <NavItem href="#contact" icon={<Mail size={18} />} label="Contact" />
            </motion.div>
        </nav>
    );
}

function NavItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <Link
            href={href}
            className="flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
        >
            {icon}
            <span className="hidden sm:inline">{label}</span>
        </Link>
    );
}
