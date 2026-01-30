import React from 'react';
import '@fontsource/manrope'; // Defaults to weight 400
import '@fontsource/manrope/300.css'; // Light weight
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

// Assets
import HeroImage from '../../assets/stract-slides/hero mockup.svg';

const FadeIn = ({ children, delay = 0, y = 30, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        className={className}
    >
        {children}
    </motion.div>
);

export default function Stract() {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
    const textParallax = useTransform(scrollYProgress, [0, 0.5], [0, 200]); // Text moves down slowly on scroll
    const laptopParallax = useTransform(scrollYProgress, [0, 0.5], [0, -80]); // Laptop moves up slightly on scroll

    return (
        <div className="bg-[#181A1A] min-h-screen text-slate-100 font-montreal selection:bg-slate-700 selection:text-white overflow-x-hidden">

            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden bg-black text-white pt-20 pb-20 md:pt-12 md:pb-0">

                {/* 1. Background Image Layer - Subtle Fade In */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 z-0 bg-gradient-to-b from-purple-900/20 to-black/90"
                >
                </motion.div>

                {/* 2. Text Layer - Slight Parallax & Fade */}
                <motion.div
                    style={{ y: textParallax }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    className="relative z-10 text-center max-w-5xl mx-auto mb-[-8%] md:mb-[-6%] pt-12 md:pt-0"
                >
                    <div className="mb-8">
                        <span className="inline-block px-4 py-1.5 text-xs tracking-[0.2em] uppercase border border-white/20 rounded-full bg-white/5 text-gray-300 font-bold backdrop-blur-md">
                            Finance & Management
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-9xl font-black mb-8 tracking-tighter leading-none relative">
                        <span className="relative z-10 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">STRACT</span>
                        {/* Text Glow Effect */}
                        <div className="absolute inset-0 blur-[100px] bg-purple-500/10 -z-10 rounded-full pointer-events-none" />
                    </h1>
                </motion.div>

                {/* 3. Laptop Image Layer - Slight Parallax & Fade */}
                <motion.div
                    style={{ y: laptopParallax }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                    className="relative z-20 w-full max-w-[90rem] mx-auto -translate-y-8 md:-translate-y-12"
                >
                    <img
                        src={HeroImage}
                        alt="Stract Dashboard Interface"
                        className="w-full h-auto drop-shadow-2xl"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 z-30 mix-blend-difference"
                >
                    <span className="text-xs uppercase tracking-widest font-semibold text-white/80">Scroll to Explore</span>
                    <ArrowDown className="animate-bounce text-white" size={16} />
                </motion.div>
            </section>
        </div>
    );
}
