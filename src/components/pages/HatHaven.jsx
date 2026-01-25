import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    ArrowDown,
    Palette,
    Type,
    Monitor,
    Smartphone,
    ShoppingCart,
    Search
} from 'lucide-react';

// Import Assets
import MainPage from '../../assets/hathaven-slides/Main Page.svg';
import ProductPage from '../../assets/hathaven-slides/Product Page.svg';
import BlogPage from '../../assets/hathaven-slides/Blog Page.svg';
import ContactPage from '../../assets/hathaven-slides/Contact Us Page.svg';
import HeroAsset from '../../assets/hathaven-slides/Hero.svg';
import Mockup1 from '../../assets/hathaven-slides/mockup1.svg';
import Mockup2 from '../../assets/hathaven-slides/mockup2.svg';
import CharacterOverlay from '../../assets/hathaven-slides/Character overlay.svg';

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

const SectionHeader = ({ title, subtitle }) => (
    <FadeIn>
        <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent">{title}</h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">{subtitle}</p>
        </div>
    </FadeIn>
);

const ColorCard = ({ hex, name, darkText = false }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="flex flex-col gap-3"
    >
        <div
            className="h-32 w-full rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group flex items-center justify-center"
            style={{ backgroundColor: hex }}
        >
            <span className={`opacity-0 group-hover:opacity-100 transition-opacity font-mono ${darkText ? 'text-black' : 'text-white'}`}>{hex}</span>
        </div>
        <div className="text-left">
            <p className="font-semibold text-gray-800 text-lg">{name}</p>
        </div>
    </motion.div>
);

const TypographyCard = ({ weight, label, sample }) => (
    <div className="border border-gray-200 bg-white p-6 rounded-2xl flex flex-col justify-between h-full shadow-sm">
        <div>
            <p className="text-gray-400 text-sm mb-2">{label}</p>
            <p className={`text-4xl ${weight} text-gray-900`}>Aa</p>
        </div>
        <p className={`mt-4 text-gray-600 ${weight} text-lg`}>{sample}</p>
    </div>
);

const ProjectImage = ({ src, alt, caption }) => (
    <FadeIn y={50}>
        <div className="group relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
            <div className="bg-gray-50 p-2 border-b border-gray-100 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            <img src={src} alt={alt} className="w-full h-auto" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
        </div>
        {caption && <p className="text-center mt-4 text-gray-400 text-sm uppercase tracking-widest">{caption}</p>}
    </FadeIn>
);

export default function HatHaven() {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

    return (
        <div className="bg-white min-h-screen text-gray-900 font-sans selection:bg-purple-100 selection:text-purple-900 overflow-x-hidden">

            {/* Hero Section */}
            <section className="relative min-h-[85vh] md:min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden bg-[#F3F3F3] pt-8 md:pt-0">
                <div className="absolute inset-0 z-0 opacity-10"
                    style={{
                        backgroundImage: 'radial-gradient(#66588D 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                    }}
                />

                <div className="z-10 text-center max-w-4xl mx-auto">
                    <FadeIn delay={0.2}>
                        <span className="inline-block px-3 py-1 mb-6 text-xs tracking-widest uppercase border border-purple-200 rounded-full bg-purple-50 text-purple-600 font-semibold shadow-sm">
                            E-Commerce Experience
                        </span>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-gray-900">
                            HATHAVEN
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.6}>
                        <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
                            A modern e-commerce destination where elegance meets functionality.
                            Designed for seamless shopping and discovery.
                        </p>
                    </FadeIn>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
                >
                    <span className="text-xs uppercase tracking-widest">Scroll to View Project</span>
                    <ArrowDown className="animate-bounce text-purple-600" size={16} />
                </motion.div>
            </section>

            {/* Intro / Overview */}
            <section className="py-24 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="relative rounded-[3rem] bg-[#1a1a1a] overflow-hidden text-white shadow-2xl">
                        {/* Background abstract elements */}
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/30 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gray-800/50 rounded-full blur-[80px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-8 md:p-16 lg:p-24 relative z-10">
                            <div className="lg:col-span-5">
                                <FadeIn>
                                    <div className="space-y-8">
                                        <div>
                                            <div className="flex items-center gap-3 mb-6 text-purple-400">
                                                <div className="w-8 h-[2px] bg-purple-400" />
                                                <span className="uppercase tracking-[0.2em] text-xs font-semibold">Core Philosophy</span>
                                            </div>
                                            <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
                                                The Digital <br />
                                                <span className="text-purple-200">Sanctuary</span>
                                            </h2>
                                        </div>

                                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                                            <p>
                                                Hathaven reimagines the e-commerce experience by blending the tranquility of a sanctuary with the utility of a modern store.
                                            </p>
                                            <p>
                                                The goal was to move away from cluttered complexity and embrace a calming, "zen-mode" aesthetic that reduces cognitive load while encouraging discovery.
                                            </p>
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>

                            <div className="lg:col-span-7 relative">
                                <FadeIn delay={0.3}>
                                    <div className="relative group">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                        {/* Image Wrapper with 3D feel */}
                                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-gray-900/50 group-hover:scale-[1.02] transition-transform duration-700 ease-out">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                                            <img
                                                src={HeroAsset}
                                                alt="Hero Asset"
                                                className="w-full h-auto object-cover"
                                            />
                                        </div>

                                        {/* Decorative floating badge */}
                                        <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-lg hidden md:block">
                                            <div className="flex gap-3">
                                                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white">
                                                    <Palette size={20} />
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-400 uppercase tracking-wider">Theme</p>
                                                    <p className="font-semibold text-sm">Zen Mode</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Design Process - Process Flow */}
            <section className="py-24 bg-[#1A1A1A] relative overflow-hidden">
                {/* Grid Background */}
                <div className="absolute inset-0 z-0 opacity-10"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}
                />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <SectionHeader
                        title="The Methodology"
                        subtitle="From abstract concepts to pixel-perfect execution."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative mt-16">
                        {[
                            { step: "01", title: "Discovery", desc: "Analyzing market gaps in luxury headwear e-commerce." },
                            { step: "02", title: "Definition", desc: "Mapping the 'Zen Mode' user journey to reduce cognitive load.", arrow: "right" },
                            { step: "03", title: "Wireframing", desc: "Structuring the information architecture for seamless discovery.", arrow: "down-left" },
                            { step: "04", title: "Visual Design", desc: "Applying the 'Royal Purple' identity and tailored typography.", arrow: "left" },
                            { step: "05", title: "Prototyping", desc: "Crafting micro-interactions and transition variables.", arrow: "down-right" },
                            { step: "06", title: "Design Handoff", desc: "Preparing detailed documentation and assets for developers." }
                        ].map((item, index) => (
                            <FadeIn key={index} delay={index * 0.1} className={`relative p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 group
                                ${index === 0 ? 'rounded-tl-[2rem] rounded-tr-lg rounded-bl-lg rounded-br-lg' : ''}
                                ${index === 2 ? 'rounded-tr-[2rem]' : ''}
                                ${index === 3 ? 'rounded-bl-[2rem]' : ''}
                                ${index === 5 ? 'rounded-br-[2rem]' : ''}
                                rounded-lg
                            `}>
                                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#66588D] flex items-center justify-center text-white text-xs font-bold font-mono shadow-lg border border-[#1A1A1A] z-20">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>

                                {/* Connector Lines for Desktop Visuals - simplified for responsiveness (Decorative) */}
                                {index !== 5 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] bg-white/10 z-0" />
                                )}
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Design System - Hybrid Version */}
            <section className="py-32 bg-gray-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionHeader
                        title="Visual Identity"
                        subtitle="Refined simplicity. Every element serves a purpose."
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Typography Spec Sheet - Adapted from Version 3 */}
                        <FadeIn className="lg:col-span-2">
                            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col justify-between h-full hover:shadow-md transition-shadow duration-300">
                                <div>
                                    <span className="text-purple-600 font-mono text-sm tracking-widest uppercase mb-6 block flex items-center gap-2">
                                        <Type size={16} /> Primary Typeface
                                    </span>
                                    <h3 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 tracking-tighter">Inter</h3>

                                    <div className="flex flex-wrap gap-6 text-gray-400 mt-8 mb-12">
                                        <div className="space-y-2">
                                            <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center text-2xl text-gray-900 font-light border border-gray-100">Aa</div>
                                            <p className="text-[10px] uppercase tracking-wide text-center font-medium">Light</p>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center text-2xl text-gray-900 font-normal border border-gray-100">Aa</div>
                                            <p className="text-[10px] uppercase tracking-wide text-center font-medium">Regular</p>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center text-2xl text-gray-900 font-bold border border-gray-100">Aa</div>
                                            <p className="text-[10px] uppercase tracking-wide text-center font-medium">Bold</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full bg-[#FAFAFA] rounded-2xl p-8 border border-gray-100">
                                    <p className="text-xl md:text-2xl text-gray-800 leading-tight font-light">
                                        "Good design is as little design as possible."
                                    </p>
                                    <div className="mt-6 pt-6 border-t border-gray-200">
                                        <p className="text-gray-400 font-mono text-xs leading-loose opacity-70 break-words">
                                            ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                                            abcdefghijklmnopqrstuvwxyz 0123456789
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Colors Column - Restored from Version 2 */}
                        <div className="flex flex-col gap-6">
                            {/* Primary Color */}
                            <FadeIn delay={0.2} className="flex-1 min-h-[300px]">
                                <div className="bg-[#66588D] rounded-[2.5rem] p-8 flex flex-col justify-between h-full text-white relative overflow-hidden group shadow-xl shadow-purple-900/10">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="flex justify-between items-start relative z-10">
                                        <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl"><Palette size={24} className="text-white" /></div>
                                        <span className="font-mono text-sm opacity-60 bg-black/20 px-3 py-1 rounded-full">#66588D</span>
                                    </div>
                                    <div className="relative z-10">
                                        <p className="text-sm opacity-80 uppercase tracking-wider mb-2 font-medium">Primary Brand</p>
                                        <p className="text-3xl font-bold">Royal Purple</p>
                                    </div>
                                </div>
                            </FadeIn>

                            {/* Secondary Colors Grid */}
                            <div className="grid grid-cols-2 gap-6 flex-1">
                                <FadeIn delay={0.3}>
                                    <div className="bg-[#707070] rounded-[2rem] p-6 aspect-square flex flex-col justify-between text-white group hover:scale-[1.02] transition-transform shadow-lg">
                                        <span className="font-mono text-[10px] opacity-60 uppercase">Slate</span>
                                        <p className="font-bold text-lg">#707070</p>
                                    </div>
                                </FadeIn>
                                <FadeIn delay={0.4}>
                                    <div className="bg-[#C3C4CE] rounded-[2rem] p-6 aspect-square flex flex-col justify-between text-gray-800 group hover:scale-[1.02] transition-transform shadow-lg">
                                        <span className="font-mono text-[10px] opacity-60 uppercase">Mist</span>
                                        <p className="font-bold text-lg">#C3C4CE</p>
                                    </div>
                                </FadeIn>
                                <FadeIn delay={0.5}>
                                    <div className="bg-[#F3F3F3] rounded-[2rem] p-6 aspect-square flex flex-col justify-between text-gray-800 border border-gray-100 group hover:scale-[1.02] transition-transform">
                                        <span className="font-mono text-[10px] opacity-60 uppercase">Paper</span>
                                        <p className="font-bold text-lg">#F3F3F3</p>
                                    </div>
                                </FadeIn>
                                <FadeIn delay={0.6}>
                                    <div className="bg-[#1A1A1A] rounded-[2rem] p-6 aspect-square flex flex-col justify-between text-white group hover:scale-[1.02] transition-transform shadow-lg">
                                        <span className="font-mono text-[10px] opacity-60 uppercase">Charcoal</span>
                                        <p className="font-bold text-lg">#1A1A1A</p>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Showcase */}
            <section className="py-20 md:py-32 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 space-y-24 md:space-y-32">
                    <SectionHeader
                        title="Visual Journey"
                        subtitle="Explore the key pages of the Hathaven e-commerce platform."
                    />

                    <div className="space-y-24 md:space-y-40">
                        {/* Main Page */}
                        <div className="relative">
                            <div className="absolute top-0 right-0 w-2/3 h-full bg-purple-50 rounded-l-[3rem] -z-10 translate-x-1/3" />
                            <div className="max-w-5xl mx-auto">
                                <div className="flex items-end justify-between mb-8 px-4">
                                    <h3 className="text-4xl font-bold text-gray-900">01. Home</h3>
                                    <span className="text-gray-400 font-mono">Main Page</span>
                                </div>
                                <ProjectImage src={MainPage} alt="Main Page Design" />
                            </div>
                        </div>

                        {/* Product Page */}
                        <div className="relative">
                            <div className="absolute top-0 left-0 w-2/3 h-full bg-gray-50 rounded-r-[3rem] -z-10 -translate-x-1/3" />
                            <div className="max-w-5xl mx-auto">
                                <div className="flex items-end justify-between mb-8 px-4 flex-row-reverse">
                                    <h3 className="text-4xl font-bold text-gray-900">02. Product</h3>
                                    <span className="text-gray-400 font-mono">Details View</span>
                                </div>
                                <ProjectImage src={ProductPage} alt="Product Page Design" />
                            </div>
                        </div>

                        {/* Grid of smaller pages */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                            <FadeIn delay={0.2}>
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-2xl font-bold">03. Blog</h3>
                                </div>
                                <div className="group relative rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-white hover:shadow-xl transition-shadow">
                                    <img src={BlogPage} alt="Blog Page" className="w-full h-auto" />
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.4}>
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-2xl font-bold">04. Contact</h3>
                                </div>
                                <div className="group relative rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-white hover:shadow-xl transition-shadow">
                                    <img src={ContactPage} alt="Contact Page" className="w-full h-auto" />
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile Experience Section */}
            <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <FadeIn>
                            <div className="space-y-8">
                                <div className="flex items-center gap-3 text-purple-400">
                                    <Smartphone className="w-6 h-6" />
                                    <span className="uppercase tracking-[0.2em] text-xs font-semibold">Responsive Design</span>
                                </div>

                                <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                                    Seamless on <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                                        Every Device
                                    </span>
                                </h2>

                                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                                    The shopping experience transcends the desktop. We meticulously crafted a mobile-first interface that retains all the elegance of the full site while optimizing for touch interactions and smaller viewports.
                                </p>

                                <div className="flex flex-col gap-4 pt-8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                            <ShoppingCart size={20} className="text-purple-300" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">Streamlined Checkout</p>
                                            <p className="text-sm text-gray-500">One-tap purchasing flow</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                            <Search size={20} className="text-purple-300" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">Smart Discovery</p>
                                            <p className="text-sm text-gray-500">AI-powered recommendations</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3} className="relative">
                            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900">
                                <img src={Mockup1} alt="Mobile Interface" className="w-full h-auto" />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-purple-500/20 to-transparent blur-3xl opacity-50" />
                        </FadeIn>
                    </div>
                </div>
            </section>




            {/* High Fidelity UI Design */}
            <section className="py-24 px-6 bg-[#FaFaFa]">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader
                        title="High Fidelity Design"
                        subtitle="Crafting a visual language that speaks to luxury."
                    />

                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                        <div className="absolute inset-0 bg-purple-900/10 group-hover:bg-transparent transition-colors duration-500" />
                        <img src={Mockup2} alt="High Fidelity Interface" className="w-full h-auto" />

                        {/* Overlay Details */}
                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-between items-end">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Product Detail View</h3>
                                <p className="text-gray-300">Optimized for conversion and clarity.</p>
                            </div>
                            <div className="hidden md:block">
                                <div className="flex gap-2">
                                    <span className="px-3 py-1 border border-white/30 rounded-full text-xs uppercase tracking-wider">UI Design</span>
                                    <span className="px-3 py-1 border border-white/30 rounded-full text-xs uppercase tracking-wider">Figma</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 bg-gray-900 text-white relative z-10 text-center">
                <FadeIn>
                    <p className="text-3xl font-bold mb-4 tracking-tight">HATHAVEN</p>
                    <p className="text-gray-400 mb-8">E-Commerce Concept & Design</p>
                    <div className="flex justify-center gap-6">
                        <span className="w-10 h-1 rounded-full bg-purple-500" />
                    </div>
                    <p className="mt-12 text-sm text-gray-600">© 2026 Hathaven Project. All Rights Reserved.</p>
                </FadeIn>
            </footer>

        </div>
    );
}
