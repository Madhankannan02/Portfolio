import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

// Assets
import HeroImage from '../../assets/titan-storage-slide/HomeScreen.svg';
import FirstImageBackground from '../../assets/titan-storage-slide/first image background.svg';
import FirstImageLaptop from '../../assets/titan-storage-slide/first image laptop.svg';
import JoelAvatar from '../../assets/generated/joel_k_avatar_1769328668647.png';

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

export default function TitanStorage() {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

    return (
        <div className="bg-[#0A0A0A] min-h-screen text-slate-100 font-sans selection:bg-slate-700 selection:text-white overflow-x-hidden">

            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col justify-end items-center px-4 overflow-hidden bg-black text-white pt-32">

                {/* 1. Background Image Layer */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={FirstImageBackground}
                        alt="Background Texture"
                        className="w-full h-full object-cover opacity-30 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/90" />
                </div>

                {/* 2. Text Layer */}
                <div className="relative z-10 text-center max-w-5xl mx-auto mb-[-8%] md:mb-[-12%]">
                    <FadeIn delay={0.2}>
                        <span className="inline-block px-4 py-1.5 mb-8 text-xs tracking-[0.2em] uppercase border border-white/20 rounded-full bg-white/5 text-gray-300 font-bold backdrop-blur-md">
                            Industrial Engineering
                        </span>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <h1 className="text-5xl md:text-9xl font-black mb-8 tracking-tighter leading-none relative">
                            <span className="relative z-10 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">TITAN STORAGE</span>
                            {/* Text Glow Effect */}
                            <div className="absolute inset-0 blur-[100px] bg-white/5 -z-10 rounded-full pointer-events-none" />
                        </h1>
                    </FadeIn>
                </div>

                {/* 3. Laptop Image Layer */}
                <FadeIn delay={0.8} className="relative z-20 w-full max-w-[90rem] mx-auto -translate-y-12">
                    <img
                        src={FirstImageLaptop}
                        alt="Titan Storage Dashboard Interface"
                        className="w-full h-auto drop-shadow-2xl"
                    />
                </FadeIn>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 z-30"
                >
                    <span className="text-xs uppercase tracking-widest font-semibold text-gray-600">Scroll to Explore</span>
                    <ArrowDown className="animate-bounce text-white" size={16} />
                </motion.div>
            </section>

            {/* About the Project Section */}
            <section className="py-32 px-6 bg-[#0A0A0A] border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start relative">

                        {/* Divider Line (Vertical on Desktop) */}
                        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-white/10 -translate-x-1/2" />

                        {/* Left Column */}
                        <div className="flex flex-col justify-between h-full space-y-24">
                            <FadeIn>
                                <div className="flex items-baseline gap-4">
                                    <span className="text-8xl font-light text-white tracking-tighter">01</span>
                                    <span className="text-sm font-mono text-gray-500 uppercase tracking-widest">[ About the project ]</span>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.2} className="mt-auto">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20">
                                        <img src={JoelAvatar} alt="Joel K" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">Joel K</h4>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider">Founder, Titan Storage Solutions</p>
                                    </div>
                                </div>
                                <blockquote className="text-gray-400 text-sm leading-relaxed max-w-sm">
                                    «We need a structured, industrial platform that captures our global expertise in tank engineering and delivers a seamless experience for EPC contractors.»
                                </blockquote>
                            </FadeIn>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-12 pt-4">
                            <FadeIn delay={0.4}>
                                <h2 className="text-3xl md:text-5xl leading-tight font-light text-gray-200">
                                    A new era of industrial engineering – defined by technical precision and global reach. Titan Storage Solutions bridges the gap between complex engineering and digital accessibility through a modern, informative interface.
                                </h2>
                            </FadeIn>

                            <FadeIn delay={0.6} className="flex flex-wrap gap-3">
                                {["Industrial Engineering", "Storage Tanks", "Pressure Vessels", "Piping & Structural", "Heavy Storage"].map((tag, i) => (
                                    <span key={i} className="px-6 py-3 rounded-full border border-white/10 text-gray-400 text-sm hover:border-white/30 hover:text-white transition-colors duration-300">
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
