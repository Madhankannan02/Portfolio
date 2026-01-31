import React from 'react';
import '@fontsource/manrope'; // Defaults to weight 400
import '@fontsource/manrope/300.css'; // Light weight
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Lightbulb, Compass, Triangle, LayoutTemplate, Palette, Brain, PenTool, Share2 } from 'lucide-react';

// Assets
import HeroImage from '../../assets/stract-slides/hero mockup.png';
import Mockup2 from '../../assets/stract-slides/mockup 2.png';
import Mockup3 from '../../assets/stract-slides/mockup 3.png';
import Mockup4 from '../../assets/stract-slides/mockup 4.png';
import Mockup5 from '../../assets/stract-slides/mockup 5.png';

import '@fontsource/inter';

const FadeIn = ({ children, delay = 0, y = 30, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
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

                    <h1 className="text-5xl md:text-9xl font-black mb-8 tracking-tighter leading-none relative" style={{ fontFamily: 'Inter, sans-serif' }}>
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
                    className="relative z-20 w-full max-w-[70rem] mx-auto -translate-y-8 md:-translate-y-12"
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
            <section className="py-32 px-6 md:px-[80px] bg-[#181A1A] relative overflow-hidden">
                {/* Background Glows */}
                <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

                <div className="max-w-[90rem] mx-auto relative z-10">

                    {/* Top Label */}
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-12">
                            <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
                            <span className="text-sm font-medium text-gray-300">What is Stract?</span>
                        </div>
                    </FadeIn>

                    {/* Main Typography Header with Floating Elements */}
                    <div className="relative mb-32">
                        {/* Floating Element 1: Purple Blur Icon */}
                        <motion.div
                            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 left-[20%] z-20 hidden md:flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/80 to-indigo-600/80 backdrop-blur-xl border border-white/20 shadow-2xl shadow-purple-900/50"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        </motion.div>

                        {/* Floating Element 2: Mic/Voice Icon */}
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute top-[20%] right-[15%] z-20 hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-[#1A1A1A]/80 backdrop-blur-md border border-white/10 shadow-xl"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" />
                            </svg>
                        </motion.div>

                        {/* Floating Element 3: Lightning Icon */}
                        <motion.div
                            animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute bottom-0 left-[40%] z-20 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white text-black shadow-lg shadow-white/20"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                            </svg>
                        </motion.div>

                        <FadeIn delay={0.2}>
                            <h2 className="text-5xl md:text-8xl font-normal leading-[1.1] tracking-tight text-white max-w-7xl">
                                Stract is the singular <span className="text-white/20">financial engine</span> that moves your business beyond mere <span className="text-white/20">feature comparison</span> and into <span className="text-white/20">measurable market</span> domination.
                            </h2>
                        </FadeIn>
                    </div>

                    {/* Bottom Grid Info */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-end">

                        {/* Left Text */}
                        <div className="lg:col-span-5">
                            <FadeIn delay={0.4}>
                                <p className="text-lg text-gray-400 leading-relaxed font-light">
                                    This multi-functional platform provides a unified toolkit that fundamentally re-engineers how your team works. It transcends the limitations of conventional dashboards by integrating powerful capabilities—from sophisticated data forecasting and strategic analysis to complex financial workflow automation.
                                </p>
                            </FadeIn>
                        </div>

                        {/* Spacer */}
                        <div className="lg:col-span-1"></div>

                        {/* Right Tags */}
                        <div className="lg:col-span-6">
                            <FadeIn delay={0.6}>
                                <div className="flex flex-col gap-4 items-start lg:w-fit lg:ml-auto">
                                    <div className="flex flex-wrap gap-4">
                                        <div className="px-5 py-3 rounded-2xl bg-[#222] border border-white/5 flex items-center gap-3 text-sm text-gray-300">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-500">
                                                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                                            </svg>
                                            Stract System
                                        </div>
                                        <div className="px-5 py-3 rounded-2xl bg-[#222] border border-white/5 flex items-center gap-3 text-sm text-gray-300">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500">
                                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                                <line x1="8" y1="21" x2="16" y2="21"></line>
                                                <line x1="12" y1="17" x2="12" y2="21"></line>
                                            </svg>
                                            SaaS Platform
                                        </div>
                                    </div>

                                    <div className="px-5 py-3 rounded-2xl bg-[#222] border border-white/5 flex items-center gap-3 text-sm text-gray-300">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500">
                                            <crop className="w-4 h-4" /> {/* Fallback generic icon shape */}
                                            <path d="M5 15h14" /><path d="M5 9h14" />
                                        </svg>
                                        UX & UI, Branding, Motion, Web & Mobile
                                    </div>

                                    <div className="px-5 py-3 rounded-2xl bg-[#222] border border-white/5 flex items-center gap-3 text-sm text-gray-300">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                            <line x1="16" y1="2" x2="16" y2="6"></line>
                                            <line x1="8" y1="2" x2="8" y2="6"></line>
                                            <line x1="3" y1="10" x2="21" y2="10"></line>
                                        </svg>
                                        November 2025
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>

                </div>
            </section>

            {/* Mockup 2 Section */}
            <section className="bg-[#181A1A] px-4 md:px-[30px] pb-[50px]">
                <FadeIn>
                    <div className="w-full">
                        <img
                            src={Mockup2}
                            alt="Stract Interface Mockup"
                            className="w-full h-auto object-cover rounded-2xl md:rounded-[45px] shadow-2xl border border-white/5"
                        />
                    </div>
                </FadeIn>
            </section>

            {/* Design System Section */}
            <section className="py-32 px-6 md:px-[60px] bg-[#0F0F0F] border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <div className="mb-24">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                                <span className="text-sm font-medium text-gray-300">Design System</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Bold typography & <br /> <span className="text-purple-400">Electric</span> colors.
                            </h2>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Typography */}
                        <FadeIn delay={0.2}>
                            <div className="p-12 rounded-[2.5rem] bg-[#141414] border border-white/5 h-full relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-20 text-[10rem] font-bold leading-none select-none pointer-events-none" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    Aa
                                </div>
                                <h3 className="text-2xl text-gray-400 mb-8 font-mono uppercase tracking-widest">Typography</h3>
                                <div className="space-y-4 relative z-10">
                                    <div className="text-6xl md:text-8xl font-bold text-white tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        Inter
                                    </div>
                                    <div className="flex flex-wrap gap-4 pt-8">
                                        <span className="px-4 py-2 rounded-lg bg-white/5 text-gray-300 border border-white/10">Regular</span>
                                        <span className="px-4 py-2 rounded-lg bg-white/5 text-gray-300 border border-white/10 font-medium">Medium</span>
                                        <span className="px-4 py-2 rounded-lg bg-white/5 text-white border border-white/10 font-bold">Bold</span>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Colors */}
                        <FadeIn delay={0.3}>
                            <div className="p-12 rounded-[2.5rem] bg-[#141414] border border-white/5 h-full">
                                <h3 className="text-2xl text-gray-400 mb-8 font-mono uppercase tracking-widest">Color Palette</h3>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <div className="h-32 rounded-2xl bg-purple-600 shadow-lg shadow-purple-900/20"></div>
                                        <div className="flex justify-between text-sm text-gray-400 font-mono">
                                            <span>Primary</span>
                                            <span>#9333EA</span>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-32 rounded-2xl bg-[#0A0A0A] border border-white/10"></div>
                                        <div className="flex justify-between text-sm text-gray-400 font-mono">
                                            <span>Surface</span>
                                            <span>#0A0A0A</span>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-32 rounded-2xl bg-white"></div>
                                        <div className="flex justify-between text-sm text-gray-400 font-mono">
                                            <span>Text</span>
                                            <span>#FFFFFF</span>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-32 rounded-2xl bg-[#222]"></div>
                                        <div className="flex justify-between text-sm text-gray-400 font-mono">
                                            <span>Secondary</span>
                                            <span>#222222</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Feature Showcase Grid */}
            <section className="py-32 px-6 md:px-[60px] bg-[#0A0A0A]">
                <div className="max-w-[90rem] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        <FadeIn delay={0.2}>
                            <div className="space-y-6">
                                <img src={Mockup3} alt="Analytics Feature" className="w-full h-auto rounded-[2rem] border border-white/10 shadow-2xl" />
                                <div className="px-4">
                                    <h3 className="text-2xl text-white font-medium mb-2">Real-time Analytics</h3>
                                    <p className="text-gray-400 leading-relaxed">Instantly visualize cash flow, recurring revenue, and churn rates with interactive charts that update in milli-seconds.</p>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.4} className="lg:mt-24">
                            <div className="space-y-6">
                                <img src={Mockup4} alt="Team Management" className="w-full h-auto rounded-[2rem] border border-white/10 shadow-2xl" />
                                <div className="px-4">
                                    <h3 className="text-2xl text-white font-medium mb-2">Team Collaboration</h3>
                                    <p className="text-gray-400 leading-relaxed">A unified workspace where finance teams can assign tasks, leave comments on invoices, and track approval workflows.</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Full Width Visual */}
            <section className="px-4 md:px-[30px] pb-[50px] bg-[#0A0A0A]">
                <FadeIn>
                    <div className="w-full max-w-[90rem] mx-auto">
                        <img
                            src={Mockup5}
                            alt="Stract Full Interface"
                            className="w-full h-auto object-cover rounded-2xl md:rounded-[45px] shadow-2xl border border-white/5"
                        />
                    </div>
                </FadeIn>
            </section>

            {/* Conclusion */}
            <section className="py-32 px-6 md:px-[80px] bg-[#0A0A0A] border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <h2 className="text-4xl md:text-6xl font-medium text-white mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Ready to transform your <br /> financial operations?
                        </h2>
                        <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                            Stract isn't just a dashboard—it's the clarity your business has been waiting for. Designed for scale, security, and speed.
                        </p>
                        <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
                            Start a Project
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </a>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
