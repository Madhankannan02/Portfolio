import React from 'react';
import '@fontsource/manrope'; // Defaults to weight 400
import '@fontsource/manrope/300.css'; // Light weight
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

// Assets
import HeroImage from '../../assets/titan-storage-slide/HomeScreen.svg';
import FirstImageBackground from '../../assets/titan-storage-slide/first image background.svg';
import FirstImageLaptop from '../../assets/titan-storage-slide/first image laptop.svg';
import SecondMockup from '../../assets/titan-storage-slide/second mockup.svg';
import JoelAvatar from '../../assets/generated/joel_k_avatar_1769328668647.png';
import AboutUsImage from '../../assets/titan-storage-slide/About us.svg';
import ServicesImage from '../../assets/titan-storage-slide/Services.svg';
import ThirdMockup from '../../assets/titan-storage-slide/third mockup image.svg';
import FourthMockup from '../../assets/titan-storage-slide/fourth mockup.svg';
import FifthMockup from '../../assets/titan-storage-slide/fifth mockup image.svg';

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
        <div className="bg-[#0A0A0A] min-h-screen text-slate-100 font-montreal selection:bg-slate-700 selection:text-white overflow-x-hidden">

            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden bg-black text-white pt-20 pb-20 md:pt-12 md:pb-0">

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
                <div className="relative z-10 text-center max-w-5xl mx-auto mb-[-15%] md:mb-[-12%] pt-12 md:pt-0">
                    <FadeIn delay={0.2}>
                        <span className="inline-block px-4 py-1.5 mb-8 text-xs tracking-[0.2em] uppercase border border-white/20 rounded-full bg-white/5 text-gray-300 font-bold backdrop-blur-md">
                            Industrial Engineering
                        </span>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <h1 className="text-5xl md:text-9xl font-black mb-8 tracking-tighter leading-none relative">
                            <span className="relative z-10 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">TITAN STORAGE</span>
                            {/* Text Glow Effect */}
                            <div className="absolute inset-0 blur-[100px] bg-white/5 -z-10 rounded-full pointer-events-none" />
                        </h1>
                    </FadeIn>
                </div>

                {/* 3. Laptop Image Layer */}
                {/* 3. Laptop Image Layer - Custom Faster Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 100, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-20 w-full max-w-[90rem] mx-auto -translate-y-8 md:-translate-y-12"
                >
                    <img
                        src={FirstImageLaptop}
                        alt="Titan Storage Dashboard Interface"
                        className="w-full h-auto drop-shadow-2xl"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
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
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20">
                                        <img src={JoelAvatar} alt="Joel K" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">Joel K</h4>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider">Founder, Titan Storage Solutions</p>
                                    </div>
                                </div>
                                <blockquote className="text-gray-400 text-lg leading-relaxed max-w-md">
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

            {/* Second Mockup Section */}
            <section className="bg-[#181A1A] px-4 md:px-[30px] pb-[50px]">
                <FadeIn>
                    <div className="w-full">
                        <img
                            src={SecondMockup}
                            alt="Titan Storage Interface Mockup"
                            className="w-full h-auto object-cover rounded-2xl md:rounded-[45px] shadow-2xl border border-white/5"
                        />
                    </div>
                </FadeIn>
            </section>

            {/* User Research / Audience Analysis */}
            {/* User Research / Audience Analysis */}
            <section className="py-[50px] px-6 md:px-[80px] bg-[#E5E5E5] text-gray-900 relative border-t border-white/5 overflow-hidden">
                {/* Background Shapes */}
                <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#D4D4D4] rounded-bl-full opacity-50 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[#D4D4D4] rounded-tr-full opacity-50 pointer-events-none" />

                <div className="max-w-8xl mx-auto relative z-10">
                    <FadeIn>
                        <div className="flex justify-between items-start mb-16">
                            <div>
                                <span className="text-sm font-mono text-gray-500 uppercase tracking-widest block mb-4">[ 02 ]</span>
                                <h2 className="text-6xl md:text-8xl font-light tracking-tighter mb-8 leading-none">
                                    User <br /> Research
                                </h2>
                            </div>
                            <div className="hidden md:block">
                                <span className="text-sm font-mono text-gray-500 uppercase tracking-widest">[ AUDIENCE ANALYSIS ]</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 -mt-12">
                            <div /> {/* Spacer */}
                            <p className="text-2xl md:text-4xl text-gray-700 font-light leading-tight tracking-tight">
                                I conducted a detailed audience analysis to align the site's UX with the technical needs, procurement workflows, and safety concerns of EPC contractors and industrial engineers.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Persona 1: Mark */}
                            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm flex flex-col gap-8">
                                <div className="flex items-center gap-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200"
                                        alt="Mark"
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">Mark, 48</h3>
                                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mt-1">Senior Procurement Manager<br />at a Global EPC Firm</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-bold text-xl text-gray-900">Profile:</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Responsible for sourcing high-stakes equipment for large-scale energy projects. Values reliability, proven track records, and rapid access to technical certifications. He uses LinkedIn for industry networking and expects a website to function as a professional digital portfolio that proves a company's capacity to deliver.
                                    </p>
                                </div>
                                <div className="mt-auto space-y-2">
                                    <h4 className="font-bold text-xl text-gray-900">Pain Points:</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Frustrated by "marketing-heavy" sites that lack technical depth. Needs to find specific compliance data and engineering standards quickly. Distrusts companies that don't clearly showcase their global project history or safety certifications.
                                    </p>
                                </div>
                            </div>

                            {/* Persona 2: Sanjay */}
                            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm flex flex-col gap-8">
                                <div className="flex items-center gap-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200"
                                        alt="Sanjay"
                                        className="w-16 h-16 rounded-full object-cover grayscale"
                                    />
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">Sanjay, 35</h3>
                                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mt-1">Lead Structural Engineer</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-bold text-xl text-gray-900">Profile:</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Focuses on the technical integrity and design specifications of storage solutions. He is looking for detailed engineering drawings, material specifications, and pressure vessel standards. He prefers a clean, data-first interface that allows him to evaluate technical compatibility before making a recommendation.
                                    </p>
                                </div>
                                <div className="mt-auto space-y-2">
                                    <h4 className="font-bold text-xl text-gray-900">Pain Points:</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Avoids sites with complex navigation or hidden information. He needs to download data sheets and view piping diagrams without having to jump through multiple contact forms. Expects a modern, high-performance site that reflects the precision of the engineering itself.
                                    </p>
                                </div>
                            </div>

                            {/* Goals Card (Black) */}
                            <div className="bg-[#1A1A1A] text-white p-8 rounded-[2.5rem] shadow-xl flex flex-col gap-8">
                                <h3 className="text-5xl font-light tracking-tight">Goals</h3>

                                <ul className="space-y-6">
                                    {[
                                        { title: "Establish Technical Authority", desc: "Showcase deep expertise in tank design and pressure vessels through clear, professional documentation." },
                                        { title: "Direct Lead Generation", desc: "Provide a seamless, professional 'Request a Quote' path for high-value procurement inquiries." },
                                        { title: "Build Global Trust", desc: "Feature a structured project gallery that proves the ability to handle international industrial contracts." },
                                        { title: "Streamline Data Access", desc: "Allow engineers to find specifications, certifications, and service breakdowns in two clicks or less." }
                                    ].map((goal, i) => (
                                        <li key={i} className="flex gap-4 items-start">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-white shrink-0" />
                                            <div>
                                                <p className="text-sm font-bold mb-1 text-gray-200">{goal.title}</p>
                                                <p className="text-sm text-gray-400 leading-relaxed font-sans">{goal.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Services Page Section */}
            <section className="py-24 bg-[#0A0A0A] px-4 md:px-[60px]">
                <FadeIn>
                    <div className="max-w-7xl mx-auto mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-12 h-[1px] bg-orange-500"></span>
                            <span className="text-orange-500 uppercase tracking-widest text-xs font-bold">Capabilities</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-light text-white mb-6">Engineering Services</h2>
                        <p className="text-gray-400 max-w-2xl text-lg">
                            We structured the services to provide immediate access to technical specifications.
                            The layout prioritizes clarity, allowing contractors to quickly assess capabilities and certifications.
                        </p>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-[#141414]">
                        <img src={ServicesImage} alt="Titan Storage Services Page" className="w-full h-auto" />
                    </div>
                </FadeIn>
            </section>

            {/* About Page Design */}
            <section className="py-24 bg-[#111111] px-4 md:px-[60px] border-y border-white/5">
                <FadeIn>
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-[#0A0A0A]">
                                    <img src={AboutUsImage} alt="Titan Storage About Page" className="w-full h-auto" />
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <h2 className="text-3xl md:text-5xl font-light text-white mb-8">Corporate Identity</h2>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                    The About page serves as the trust anchor. We designed it to highlight Titan's rigorous safety standards and global engineering footprint without overwhelming the user.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                                            <span className="text-xl">🏆</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1">Legacy of Excellence</h4>
                                            <p className="text-sm text-gray-500">Highlighting decades of industry leadership.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                                            <span className="text-xl">🌍</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1">Global Reach</h4>
                                            <p className="text-sm text-gray-500">Displaying operational capacity across continents.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </section>

            {/* Visual Interface Showcase (Mockups 3, 4, 5) */}
            <section className="py-32 bg-[#0A0A0A] px-4 md:px-[30px]">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-light text-white mb-6">System Architecture</h2>
                            <p className="text-gray-400">High-fidelity interface views across different modules.</p>
                        </div>
                    </FadeIn>

                    <div className="space-y-32">
                        {/* Mockup 3 */}
                        <FadeIn>
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                                <img src={ThirdMockup} alt="Interface Detail 1" className="relative w-full h-auto rounded-3xl border border-white/10 shadow-2xl" />
                            </div>
                        </FadeIn>

                        {/* Mixed Grid for 4 & 5 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                            <FadeIn delay={0.2}>
                                <div className="space-y-4">
                                    <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#141414]">
                                        <img src={FourthMockup} alt="Mobile Interface" className="w-full h-auto" />
                                    </div>
                                    <p className="text-center text-sm text-gray-500 uppercase tracking-widest pt-4">Mobile Adaptation</p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.4}>
                                <div className="space-y-4 md:mt-16">
                                    <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#141414]">
                                        <img src={FifthMockup} alt="Data Visualization" className="w-full h-auto" />
                                    </div>
                                    <p className="text-center text-sm text-gray-500 uppercase tracking-widest pt-4">Data Visualization</p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

        </div >
    );
}
