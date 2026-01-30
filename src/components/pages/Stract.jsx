import React from 'react';
import '@fontsource/manrope'; // Defaults to weight 400
import '@fontsource/manrope/300.css'; // Light weight
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

// Assets
import HeroImage from '../../assets/stract-slides/first mockup.svg';

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

            {/* About the Project Section */}
            <section className="py-[50px] px-6 md:px-[80px] bg-[#181A1A] border-t border-white/5">
                <div className="max-w-8xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start relative">

                        {/* Divider Line (Vertical on Desktop) */}
                        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-white/10 -translate-x-1/2" />

                        {/* Left Column */}
                        <div className="flex flex-col justify-between h-full space-y-12 lg:space-y-24">
                            <FadeIn>
                                <div className="flex items-baseline gap-4">
                                    <span className="text-6xl md:text-8xl font-light text-white tracking-tighter">01</span>
                                    <span className="text-sm font-mono text-gray-500 uppercase tracking-widest">[ About the project ]</span>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.2} className="mt-8 lg:mt-auto">
                                <blockquote className="text-gray-400 text-lg leading-relaxed max-w-md border-l-2 border-purple-500 pl-6 mb-6">
                                    "Stract provided us with the financial visibility we didn't know we were missing. It's not just a tool; it's a competitive advantage."
                                </blockquote>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-900/20">
                                        ER
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">Elena Rodriguez</h4>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider">CFO, TechFlow Inc.</p>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-12 pt-4">
                            <FadeIn delay={0.4}>
                                <h2 className="text-3xl md:text-5xl leading-tight font-light text-gray-200">
                                    Redefining financial clarity. Stract acts as the central nervous system for modern enterprises, unifying disparate data streams into a single, cohesive interface.
                                </h2>
                            </FadeIn>

                            <FadeIn delay={0.6} className="flex flex-wrap gap-3">
                                {["Fintech", "Dashboard", "SaaS", "Data Visualization", "UX Design"].map((tag, i) => (
                                    <span key={i} className="px-6 py-3 rounded-full border border-white/10 text-gray-400 text-sm hover:border-purple-500/50 hover:text-white transition-colors duration-300">
                                        {tag}
                                    </span>
                                ))}
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
