"use client";

import { useEffect } from "react";
import { motion, useSpring, useMotionTemplate } from "framer-motion";

export default function AnimatedBackground() {
    const springConfig = { damping: 25, stiffness: 120 };
    const mouseX = useSpring(0, springConfig);
    const mouseY = useSpring(0, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Set initial position to center
        if (typeof window !== 'undefined') {
            mouseX.set(window.innerWidth / 2);
            mouseY.set(window.innerHeight / 2);
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#030303]">
            {/* Base steady faint dots */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: "radial-gradient(circle at center, #ffffff 1px, transparent 1px)",
                    backgroundSize: "24px 24px"
                }}
            />

            {/* Highlighted dots that follow the cursor */}
            <motion.div
                className="absolute inset-0 opacity-60"
                style={{
                    backgroundImage: "radial-gradient(circle at center, #ffffff 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                    WebkitMaskImage: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`,
                    maskImage: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`,
                }}
            />

            {/* Subtle orbs following cursor for extra glow */}
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[120px] mix-blend-screen"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
            <motion.div
                className="absolute w-[400px] h-[400px] rounded-full bg-cyan-600/10 blur-[100px] mix-blend-screen"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-30%",
                    translateY: "-70%",
                }}
            />
        </div>
    );
}
