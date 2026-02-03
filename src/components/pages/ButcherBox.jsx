import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Utensils } from 'lucide-react';
import '@fontsource/poppins';
import '@fontsource/poppins/300.css'; // Light
import '@fontsource/inter';
import '@fontsource/inter/300.css'; // Light
import '@fontsource/inter/500.css'; // Medium
import '@fontsource/inter/700.css'; // Bold

// Import Assets
import HeroLaptop from '../../assets/images/butcherbox-slides/hero laptop.png';
import Mockup1 from '../../assets/images/butcherbox-slides/mockup 1.svg';
import Mockup2 from '../../assets/images/butcherbox-slides/mockup 2.png';
import Mockup3 from '../../assets/images/butcherbox-slides/mockup 3.jpg';
import Mockup4 from '../../assets/images/butcherbox-slides/mockup 4.jpg';
import LandingPage from '../../assets/images/butcherbox-slides/Landing Page HighFi.png';
import ProductPage from '../../assets/images/butcherbox-slides/Product Page High Fi.png';
import SearchPage from '../../assets/images/butcherbox-slides/Search Page High Fi.png';
import CartPage from '../../assets/images/butcherbox-slides/Cart Page High Fi.png';
import CheckoutPage from '../../assets/images/butcherbox-slides/Checkout Page High Fi.png';

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

export default function ButcherBox() {
    return (
        <div className="bg-stone-50 min-h-screen text-stone-900 font-sans selection:bg-red-100 selection:text-red-900 overflow-x-hidden">

            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden bg-[#0a0a0a] text-white pt-20 pb-20 md:pt-12 md:pb-0">

                {/* Background Effects */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-900/20 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
                </div>

                <div className="z-10 text-center max-w-5xl mx-auto mb-[-8%] md:mb-[-6%] pt-12 md:pt-0">
                    <FadeIn delay={0.2}>
                        <span className="inline-block px-4 py-1.5 mb-8 text-xs tracking-[0.2em] uppercase border border-white/10 rounded-full bg-white/5 text-white/60 font-medium backdrop-blur-sm">
                            Direct to Consumer
                        </span>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <h1 className="text-5xl md:text-9xl font-serif font-medium mb-8 tracking-tight leading-none">
                            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">ButcherBox</span>
                        </h1>
                    </FadeIn>
                </div>

                {/* Hero Laptop Image */}
                <FadeIn delay={0.8} className="relative z-20 w-full max-w-[70rem] mx-auto -translate-y-8 md:-translate-y-12 px-4">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-b from-red-500/20 to-transparent blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-1000" />
                        <img
                            src={HeroLaptop}
                            alt="ButcherBox Website on Laptop"
                            className="relative w-full h-auto drop-shadow-2xl transform transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                        />
                    </div>
                </FadeIn>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 z-30 mix-blend-difference"
                >
                    <span className="text-xs uppercase tracking-widest font-semibold text-white/80">Scroll to Explore</span>
                    <ArrowDown className="animate-bounce text-white" size={16} />
                </motion.div>
            </section>

            {/* Problem & Solution Section */}
            <section className="relative py-32 px-6 bg-[#0a0a0a] text-white border-t border-white/5 overflow-hidden">
                {/* Grid Background */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                    style={{
                        backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
                        backgroundSize: '50px 50px'
                    }}
                />

                <div className="max-w-7xl mx-auto relative z-10">
                    <FadeIn>
                        <h2 className="text-4xl md:text-6xl font-serif text-center mb-24 leading-tight">
                            High-quality meat,<br />
                            <span className="text-white/40 italic">humanely raised,</span><br />
                            delivered to you.
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.2} className="flex justify-center mb-24 relative">
                        {/* Glowing Icon */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-red-500 blur-[40px] opacity-40 rounded-full" />
                            <div className="relative w-20 h-20 rounded-full border border-red-500/30 bg-[#0a0a0a] flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                                <Utensils className="text-red-500 w-8 h-8" />
                            </div>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
                        <FadeIn delay={0.3}>
                            <div>
                                <h3 className="text-sm font-semibold tracking-widest text-white/40 mb-6 uppercase">Problem</h3>
                                <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
                                    Butcher Box required a digital presence that could effectively showcase their portfolio of high-quality meats while reflecting both professionalism and culinary excellence. The main challenge was to design a platform that communicated their expertise and ethical sourcing approach, while also highlighting the brand's bold, premium character.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div>
                                <h3 className="text-sm font-semibold tracking-widest text-white/40 mb-6 uppercase">Solution</h3>
                                <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
                                    We designed a website and visual identity that balance professionalism with appetite appeal. Rich color accents and refined typography reflect Butcher Box's premium quality, while a clean layout ensures clarity and trust. The result is a digital presence that is both distinctive and reliable, simplifying the path from farm to table.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Mockup 1 Section */}
            <section className="bg-[#0a0a0a] px-4 md:px-[30px] pb-[50px]">
                <FadeIn>
                    <div className="w-full">
                        <img
                            src={Mockup1}
                            alt="Butcher Box Mobile Interface"
                            loading="lazy"
                            decoding="async"
                            className="w-full h-auto object-cover rounded-2xl md:rounded-[45px] shadow-2xl border border-white/5"
                        />
                    </div>
                </FadeIn>
            </section>

            {/* Typography & Colors Section */}
            <section className="py-24 px-6 md:px-[60px] bg-[#0F0F0F] text-white border-t border-white/5 font-sans">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <div className="mb-24">
                            <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Typography & Colors
                            </h2>
                            <p className="text-gray-400">The foundation of the visual identity.</p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                        {/* Typography: Poppins */}
                        <FadeIn delay={0.2}>
                            <div className="p-10 rounded-[2.5rem] bg-[#141414] border border-white/5 h-full relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-10 text-[8rem] font-bold leading-none select-none pointer-events-none" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    Aa
                                </div>
                                <h3 className="text-sm text-gray-500 mb-8 font-mono uppercase tracking-widest">Headline Font</h3>
                                <div className="space-y-4 relative z-10">
                                    <div className="text-6xl md:text-7xl font-bold text-white tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                        Poppins
                                    </div>
                                    <div className="flex flex-wrap gap-4 pt-8">
                                        <span className="px-4 py-2 rounded-lg bg-white/5 text-gray-300 border border-white/10 font-light" style={{ fontFamily: 'Poppins, sans-serif' }}>Light</span>
                                        <span className="px-4 py-2 rounded-lg bg-white/5 text-white border border-white/10" style={{ fontFamily: 'Poppins, sans-serif' }}>Regular</span>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Typography: Inter */}
                        <FadeIn delay={0.3}>
                            <div className="p-10 rounded-[2.5rem] bg-[#141414] border border-white/5 h-full relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10 text-[8rem] font-bold leading-none select-none pointer-events-none" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    Aa
                                </div>
                                <h3 className="text-sm text-gray-500 mb-8 font-mono uppercase tracking-widest">Body Font</h3>
                                <div className="space-y-4 relative z-10">
                                    <div className="text-6xl md:text-7xl font-bold text-white tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        Inter
                                    </div>
                                    <div className="flex flex-wrap gap-4 pt-8">
                                        <span className="px-4 py-2 rounded-lg bg-white/5 text-gray-300 border border-white/10 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>Light</span>
                                        <span className="px-4 py-2 rounded-lg bg-white/5 text-white border border-white/10" style={{ fontFamily: 'Inter, sans-serif' }}>Regular</span>
                                        <span className="px-4 py-2 rounded-lg bg-white/5 text-white border border-white/10 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Medium</span>
                                        <span className="px-4 py-2 rounded-lg bg-white/5 text-white border border-white/10 font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>Bold</span>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Colors */}
                    <FadeIn delay={0.4}>
                        <div className="p-10 rounded-[2.5rem] bg-[#141414] border border-white/5">
                            <h3 className="text-sm text-gray-500 mb-8 font-mono uppercase tracking-widest">Color Palette</h3>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                {/* Off White */}
                                <div className="space-y-3">
                                    <div className="h-32 rounded-2xl bg-[#F6F6F6] border border-white/10"></div>
                                    <div className="flex flex-col text-xs text-gray-400 font-mono">
                                        <span className="text-white font-bold mb-1">Off White</span>
                                        <span>#F6F6F6</span>
                                    </div>
                                </div>
                                {/* Electric Lime */}
                                <div className="space-y-3">
                                    <div className="h-32 rounded-2xl bg-[#E1FF00] border border-white/10 shadow-[0_0_20px_rgba(225,255,0,0.3)]"></div>
                                    <div className="flex flex-col text-xs text-gray-400 font-mono">
                                        <span className="text-white font-bold mb-1">Electric Lime</span>
                                        <span>#E1FF00</span>
                                    </div>
                                </div>
                                {/* Hyper Blue */}
                                <div className="space-y-3">
                                    <div className="h-32 rounded-2xl bg-[#3C22FC] border border-white/10 shadow-[0_0_20px_rgba(60,34,252,0.3)]"></div>
                                    <div className="flex flex-col text-xs text-gray-400 font-mono">
                                        <span className="text-white font-bold mb-1">Hyper Blue</span>
                                        <span>#3C22FC</span>
                                    </div>
                                </div>
                                {/* Light Gray */}
                                <div className="space-y-3">
                                    <div className="h-32 rounded-2xl bg-[#F6F6F6] border border-white/10"></div>
                                    <div className="flex flex-col text-xs text-gray-400 font-mono">
                                        <span className="text-white font-bold mb-1">Paper</span>
                                        <span>#F6F6F6</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Mockup 2 Section */}
            <section className="bg-[#0a0a0a] px-4 md:px-[30px] pb-[50px]">
                <FadeIn>
                    <div className="w-full">
                        <img
                            src={Mockup2}
                            alt="Butcher Box Interface Mockup 2"
                            loading="lazy"
                            decoding="async"
                            className="w-full h-auto object-cover rounded-2xl md:rounded-[45px] shadow-2xl border border-white/5"
                        />
                    </div>
                </FadeIn>
            </section>

            {/* High Fidelity Preview Section */}
            <section className="py-32 px-6 md:px-[60px] bg-[#0A0A0A] border-t border-white/5 font-sans">
                <div className="max-w-[90rem] mx-auto">
                    <FadeIn>
                        <div className="flex justify-between items-end mb-24">
                            <div>
                                <h2 className="text-6xl md:text-8xl font-light text-white tracking-tighter" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    Full Preview
                                </h2>
                            </div>
                            <div className="hidden md:block">
                                <p className="text-gray-400 max-w-md text-right leading-relaxed">
                                    A cohesive design system applied across key application interfaces, ensuring consistency and clarity.
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    <div className="space-y-32">
                        {/* 1. Landing Page Preview */}
                        <FadeIn>
                            <div className="group relative">
                                <div className="absolute -inset-1 bg-gradient-to-b from-white/10 to-transparent rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#141414] shadow-2xl">
                                    <div className="h-12 bg-[#1A1A1A] border-b border-white/5 flex items-center px-6 gap-2">
                                        <div className="w-3 h-3 rounded-full bg-[#EF4444]/20" />
                                        <div className="w-3 h-3 rounded-full bg-[#E1FF00]/20" />
                                        <div className="w-3 h-3 rounded-full bg-[#3C22FC]/20" />
                                    </div>
                                    <img src={LandingPage} alt="Landing Page Design" loading="lazy" decoding="async" className="w-full h-auto" />
                                </div>
                                <h3 className="text-xl text-gray-500 mt-6 font-mono text-center uppercase tracking-widest">Landing Page</h3>
                            </div>
                        </FadeIn>

                        {/* 2 & 3. Split View: Product & Search */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                            <FadeIn delay={0.2}>
                                <div className="group relative">
                                    <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#141414] shadow-2xl">
                                        <div className="h-12 bg-[#1A1A1A] border-b border-white/5 flex items-center px-6 gap-2">
                                            <div className="w-3 h-3 rounded-full bg-[#EF4444]/20" />
                                            <div className="w-3 h-3 rounded-full bg-[#E1FF00]/20" />
                                            <div className="w-3 h-3 rounded-full bg-[#3C22FC]/20" />
                                        </div>
                                        <img src={ProductPage} alt="Product Page" loading="lazy" decoding="async" className="w-full h-auto" />
                                    </div>
                                    <h3 className="text-xl text-gray-500 mt-6 font-mono text-center uppercase tracking-widest">Product Details</h3>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.4} className="lg:mt-32">
                                <div className="group relative">
                                    <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#141414] shadow-2xl">
                                        <div className="h-12 bg-[#1A1A1A] border-b border-white/5 flex items-center px-6 gap-2">
                                            <div className="w-3 h-3 rounded-full bg-[#EF4444]/20" />
                                            <div className="w-3 h-3 rounded-full bg-[#E1FF00]/20" />
                                            <div className="w-3 h-3 rounded-full bg-[#3C22FC]/20" />
                                        </div>
                                        <img src={SearchPage} alt="Search Page" loading="lazy" decoding="async" className="w-full h-auto" />
                                    </div>
                                    <h3 className="text-xl text-gray-500 mt-6 font-mono text-center uppercase tracking-widest">Search & Filter</h3>
                                </div>
                            </FadeIn>
                        </div>

                        {/* 4 & 5. Split View: Cart & Checkout */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                            <FadeIn delay={0.2}>
                                <div className="group relative">
                                    <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#141414] shadow-2xl">
                                        <div className="h-12 bg-[#1A1A1A] border-b border-white/5 flex items-center px-6 gap-2">
                                            <div className="w-3 h-3 rounded-full bg-[#EF4444]/20" />
                                            <div className="w-3 h-3 rounded-full bg-[#E1FF00]/20" />
                                            <div className="w-3 h-3 rounded-full bg-[#3C22FC]/20" />
                                        </div>
                                        <img src={CartPage} alt="Cart Page" loading="lazy" decoding="async" className="w-full h-auto" />
                                    </div>
                                    <h3 className="text-xl text-gray-500 mt-6 font-mono text-center uppercase tracking-widest">Shopping Cart</h3>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.4} className="lg:mt-32">
                                <div className="group relative">
                                    <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#141414] shadow-2xl">
                                        <div className="h-12 bg-[#1A1A1A] border-b border-white/5 flex items-center px-6 gap-2">
                                            <div className="w-3 h-3 rounded-full bg-[#EF4444]/20" />
                                            <div className="w-3 h-3 rounded-full bg-[#E1FF00]/20" />
                                            <div className="w-3 h-3 rounded-full bg-[#3C22FC]/20" />
                                        </div>
                                        <img src={CheckoutPage} alt="Checkout Page" loading="lazy" decoding="async" className="w-full h-auto" />
                                    </div>
                                    <h3 className="text-xl text-gray-500 mt-6 font-mono text-center uppercase tracking-widest">Secure Checkout</h3>
                                </div>
                            </FadeIn>
                        </div>

                    </div>
                </div>
            </section>

            {/* Mockup 3 Section */}
            <section className="bg-[#0a0a0a] px-4 md:px-[30px] pb-[50px]">
                <FadeIn>
                    <div className="w-full">
                        <img
                            src={Mockup3}
                            alt="Butcher Box Interface Mockup 3"
                            loading="lazy"
                            decoding="async"
                            className="w-full h-auto object-cover rounded-2xl md:rounded-[45px] shadow-2xl border border-white/5"
                        />
                    </div>
                </FadeIn>
            </section>

            {/* Mockup 4 Section */}
            <section className="bg-[#0a0a0a] px-4 md:px-[30px] pb-[50px]">
                <FadeIn>
                    <div className="w-full">
                        <img
                            src={Mockup4}
                            alt="Butcher Box Interface Mockup 4"
                            loading="lazy"
                            decoding="async"
                            className="w-full h-auto object-cover rounded-2xl md:rounded-[45px] shadow-2xl border border-white/5"
                        />
                    </div>
                </FadeIn>
            </section>

            {/* Footer / Call to Action */}
            <section className="py-32 px-6 md:px-[80px] bg-[#0A0A0A] border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <h2 className="text-4xl md:text-6xl font-medium text-white mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Ready to elevate your <br /> culinary brand?
                        </h2>
                        <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                            Butcher Box isn't just a store—it's a movement for ethical eating. Designed for appetite, trust, and conversion.
                        </p>
                        <a href="mailto:madhankannan29@gmail.com" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-red-500 hover:text-white transition-all duration-300">
                            Start a Project
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </a>
                    </FadeIn>
                </div>
            </section>

        </div>
    );
}

