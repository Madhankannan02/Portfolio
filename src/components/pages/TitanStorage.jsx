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
        <div className="bg-[#181A1A] min-h-screen text-slate-100 font-montreal selection:bg-slate-700 selection:text-white overflow-x-hidden">

            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden bg-black text-white pt-20 pb-20 md:pt-12 md:pb-0">

                {/* 1. Background Image Layer - Slow Scale Out */}
                <motion.div
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={FirstImageBackground}
                        alt="Background Texture"
                        className="w-full h-full object-cover opacity-30 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/90" />
                </motion.div>

                {/* 2. Text Layer - Mask Reveal */}
                <div className="relative z-10 text-center max-w-5xl mx-auto mb-[-15%] md:mb-[-12%] pt-12 md:pt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-8 text-xs tracking-[0.2em] uppercase border border-white/20 rounded-full bg-white/5 text-gray-300 font-bold backdrop-blur-md">
                            Industrial Engineering
                        </span>
                    </motion.div>

                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: "100%", rotate: 2 }}
                            animate={{ y: 0, rotate: 0 }}
                            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="text-5xl md:text-9xl font-black mb-8 tracking-tighter leading-none relative origin-bottom-left"
                        >
                            <span className="relative z-10 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">TITAN STORAGE</span>
                            {/* Text Glow Effect */}
                            <div className="absolute inset-0 blur-[100px] bg-white/5 -z-10 rounded-full pointer-events-none" />
                        </motion.h1>
                    </div>
                </div>

                {/* 3. Laptop Image Layer - Heavy Impact Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 150, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        duration: 1.2,
                        delay: 0.8,
                        type: "spring",
                        bounce: 0.2, // Subtle bounce for weight
                        stiffness: 100
                    }}
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
            <section className="py-[50px] px-6 md:px-[80px] bg-[#E5E5E5] text-gray-900 relative overflow-hidden mx-4 md:mx-[30px] rounded-[45px] mb-[50px]">
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



            {/* Third Mockup Section */}
            <section className="bg-[#181A1A] px-4 md:px-[30px] pb-[50px]">
                <FadeIn>
                    <div className="w-full">
                        <img
                            src={ThirdMockup}
                            alt="Titan Storage Interface Mockup 3"
                            className="w-full h-auto object-cover rounded-2xl md:rounded-[45px] shadow-2xl border border-white/5"
                        />
                    </div>
                </FadeIn>
            </section>

            {/* Typography & Colors Section */}
            <section className="py-24 px-6 md:px-[80px] bg-[#0F0F0F] text-white border-t border-white/5 font-sans">
                <div className="max-w-8xl mx-auto">
                    {/* Header */}
                    <FadeIn>
                        <div className="flex justify-between items-start mb-24 border-b border-white/10 pb-8">
                            <span className="text-sm font-mono text-gray-500 uppercase tracking-widest">[ 03 ]</span>
                            <span className="text-sm font-mono text-gray-500 uppercase tracking-widest">[ TYPOGRAPHY & COLORS ]</span>
                        </div>
                    </FadeIn>

                    {/* Typography Subsection */}
                    <FadeIn delay={0.2}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center mb-32 border-b border-white/10 pb-24">
                            <div>
                                <h2 className="text-6xl md:text-8xl lg:text-[12rem] leading-none font-medium tracking-tighter text-white break-words">Manrope</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
                                <div className="space-y-2">
                                    <h4 className="text-gray-500 text-lg mb-4">Weight</h4>
                                    <ul className="space-y-1 text-xl text-gray-300">
                                        <li>Medium</li>
                                        <li>Regular</li>
                                        <li>Semibold</li>
                                        <li>Bold</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-gray-500 text-lg mb-4">Line Height</h4>
                                    <p className="text-xl text-gray-300">36 / 80</p>
                                </div>
                                <div>
                                    <h4 className="text-gray-500 text-lg mb-4">Letter Spacing</h4>
                                    <p className="text-xl text-gray-300">0</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Colors Subsection */}
                    <FadeIn delay={0.4}>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            {/* Sidebar Label */}
                            <div className="lg:col-span-2">
                                <span className="text-gray-500 uppercase tracking-widest text-sm sticky top-24">COLORS</span>
                            </div>

                            {/* Cards Column */}
                            <div className="lg:col-span-10 divide-y divide-white/10 border-b border-white/10">
                                {/* Color 1: Industrial Ember */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-8">
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        This vibrant orange mirrors the safety markings, heavy machinery, and high-heat engineering environments common in storage tank manufacturing.
                                    </p>
                                    <div className="relative h-64 bg-[#FF7420] rounded-[2rem] p-8 flex flex-col justify-between shadow-2xl group overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="flex justify-end">
                                            <h3 className="text-4xl text-right font-light text-white leading-tight">Industrial <br /> Ember</h3>
                                        </div>
                                        <div className="flex justify-between items-end">
                                            <span className="text-white/50 font-mono text-sm">01</span>
                                            <div className="text-right font-mono text-xs text-white/80 space-y-1">
                                                <p>HEX: #FF7420</p>
                                                <p>RGB: 255. 116. 32</p>
                                                <p>CMYK: 0. 68. 93. 0</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Color 2: White */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-8">
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        Represents clarity and precision. It is used for all technical data, headings, and body copy to ensure maximum legibility for engineers reviewing complex specs.
                                    </p>
                                    <div className="relative h-64 bg-white rounded-[2rem] p-8 flex flex-col justify-between shadow-2xl">
                                        <div className="flex justify-end">
                                            <h3 className="text-5xl font-light text-black">White</h3>
                                        </div>
                                        <div className="flex justify-between items-end">
                                            <span className="text-black/30 font-mono text-sm">02</span>
                                            <div className="text-right font-mono text-xs text-gray-800 space-y-1">
                                                <p>HEX: #FFFFFF</p>
                                                <p>RGB: 255. 255. 255</p>
                                                <p>CMYK: 0. 0. 0. 0</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Color 3: Deep Obsidian */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-8">
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        This isn't just "black": it's a deep, technical charcoal that mimics the look of raw industrial materials like steel and coated carbon.
                                    </p>
                                    <div className="relative h-64 bg-[#191A19] rounded-[2rem] p-8 flex flex-col justify-between shadow-2xl border border-white/10">
                                        <div className="flex justify-end">
                                            <h3 className="text-4xl text-right font-light text-white leading-tight">Deep <br /> Obsidian</h3>
                                        </div>
                                        <div className="flex justify-between items-end">
                                            <span className="text-white/30 font-mono text-sm">03</span>
                                            <div className="text-right font-mono text-xs text-gray-400 space-y-1">
                                                <p>HEX: #191A19</p>
                                                <p>RGB: 25. 26. 25</p>
                                                <p>CMYK: 75. 66. 65. 80</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Fourth Mockup Section */}
            <section className="bg-[#181A1A] px-4 md:px-[30px] pb-[50px]">
                <FadeIn>
                    <div className="w-full">
                        <img
                            src={FourthMockup}
                            alt="Titan Storage Interface Mockup 4"
                            className="w-full h-auto object-cover rounded-2xl md:rounded-[45px] shadow-2xl border border-white/5"
                        />
                    </div>
                </FadeIn>
            </section>

            {/* High Fidelity Preview Section */}
            <section className="py-32 px-6 md:px-[60px] bg-[#0A0A0A] border-t border-white/5">
                <div className="max-w-[90rem] mx-auto">
                    <FadeIn>
                        <div className="flex justify-between items-end mb-24">
                            <div>
                                <span className="text-sm font-mono text-gray-500 uppercase tracking-widest block mb-4">[ 04 ]</span>
                                <h2 className="text-6xl md:text-8xl font-light text-white tracking-tighter">
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
                        {/* 1. Home Page Preview */}
                        <FadeIn>
                            <div className="group relative">
                                <div className="absolute -inset-1 bg-gradient-to-b from-white/10 to-transparent rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#141414] shadow-2xl">
                                    <div className="h-12 bg-[#1A1A1A] border-b border-white/5 flex items-center px-6 gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/20" />
                                    </div>
                                    <img src={HeroImage} alt="Home Page Design" className="w-full h-auto" />
                                </div>
                                <h3 className="text-xl text-gray-500 mt-6 font-mono text-center uppercase tracking-widest">Home Screen</h3>
                            </div>
                        </FadeIn>

                        {/* 2 & 3. Split View: Services & About */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                            <FadeIn delay={0.2} className="lg:mt-24">
                                <div className="group relative">
                                    <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#141414] shadow-2xl">
                                        <div className="h-12 bg-[#1A1A1A] border-b border-white/5 flex items-center px-6 gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                            <div className="w-3 h-3 rounded-full bg-green-500/20" />
                                        </div>
                                        <img src={ServicesImage} alt="Services Page" className="w-full h-auto" />
                                    </div>
                                    <h3 className="text-xl text-gray-500 mt-6 font-mono text-center uppercase tracking-widest">Engineering Services</h3>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.4}>
                                <div className="group relative">
                                    <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#141414] shadow-2xl">
                                        <div className="h-12 bg-[#1A1A1A] border-b border-white/5 flex items-center px-6 gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                            <div className="w-3 h-3 rounded-full bg-green-500/20" />
                                        </div>
                                        <img src={AboutUsImage} alt="About Us Page" className="w-full h-auto" />
                                    </div>
                                    <h3 className="text-xl text-gray-500 mt-6 font-mono text-center uppercase tracking-widest">Company Profile</h3>
                                </div>
                            </FadeIn>
                        </div>


                    </div>
                </div>
            </section>

            {/* Design Process Section */}
            <section className="pt-16 pb-24 px-6 md:px-[60px] bg-[#E5E5E5] text-gray-900 mx-4 md:mx-[30px] rounded-[45px] mb-[50px]">
                <div className="max-w-8xl mx-auto">
                    {/* Header */}
                    <FadeIn>
                        <div className="flex justify-between items-start mb-8">
                            <span className="text-sm font-mono text-gray-500 uppercase tracking-widest">[ 05 ]</span>
                            <span className="text-sm font-mono text-gray-500 uppercase tracking-widest">[ DESIGN PROCESS ]</span>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Title Column */}
                        <div className="lg:col-span-4">
                            <FadeIn>
                                <div className="sticky top-24">
                                    <h2 className="text-7xl font-light tracking-tighter leading-none mb-8">
                                        Design <br /> Process
                                    </h2>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Steps Column */}
                        <div className="lg:col-span-8">
                            <div className="divide-y divide-gray-300 border-b border-gray-300">
                                {/* Step 01 */}
                                <FadeIn delay={0.1}>
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 items-start">
                                        <div className="md:col-span-2">
                                            <span className="text-8xl font-light text-gray-300">01</span>
                                        </div>
                                        <div className="md:col-span-8">
                                            <h3 className="text-4xl font-light mb-6">UX Research</h3>
                                            <p className="text-gray-600 text-lg leading-relaxed">
                                                I began by exploring the global industrial storage landscape, analyzing competitor platforms and the specific documentation needs of EPC firms. This helped me identify the technical requirements and trust signals necessary for a high-stakes engineering site.
                                            </p>
                                        </div>
                                        <div className="md:col-span-2 flex justify-end">
                                            <span className="inline-block px-4 py-2 rounded-full bg-gray-200 text-xs font-bold text-gray-600 uppercase tracking-wider">1 Week</span>
                                        </div>
                                    </div>
                                </FadeIn>

                                {/* Step 02 */}
                                <FadeIn delay={0.2}>
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 items-start">
                                        <div className="md:col-span-2">
                                            <span className="text-8xl font-light text-gray-300">02</span>
                                        </div>
                                        <div className="md:col-span-8">
                                            <h3 className="text-4xl font-light mb-6">Personas</h3>
                                            <p className="text-gray-600 text-lg leading-relaxed">
                                                Based on my research, I developed personas representing lead engineers and procurement managers. These profiles focused on their need for data precision and compliance verification, which guided the site's content hierarchy and technical depth.
                                            </p>
                                        </div>
                                        <div className="md:col-span-2 flex justify-end">
                                            <span className="inline-block px-4 py-2 rounded-full bg-gray-200 text-xs font-bold text-gray-600 uppercase tracking-wider">1 Week</span>
                                        </div>
                                    </div>
                                </FadeIn>

                                {/* Step 03 */}
                                <FadeIn delay={0.3}>
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 items-start">
                                        <div className="md:col-span-2">
                                            <span className="text-8xl font-light text-gray-300">03</span>
                                        </div>
                                        <div className="md:col-span-8">
                                            <h3 className="text-4xl font-light mb-6">Wireframing</h3>
                                            <p className="text-gray-600 text-lg leading-relaxed">
                                                I mapped out a highly structured site architecture using low-fidelity wireframes. The focus was on ensuring a seamless path to technical specifications and project galleries, allowing professional users to find critical information in fewer than three clicks.
                                            </p>
                                        </div>
                                        <div className="md:col-span-2 flex justify-end">
                                            <span className="inline-block px-4 py-2 rounded-full bg-gray-200 text-xs font-bold text-gray-600 uppercase tracking-wider">1 Week</span>
                                        </div>
                                    </div>
                                </FadeIn>

                                {/* Step 04 */}
                                <FadeIn delay={0.4}>
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 items-start">
                                        <div className="md:col-span-2">
                                            <span className="text-8xl font-light text-gray-300">04</span>
                                        </div>
                                        <div className="md:col-span-8">
                                            <h3 className="text-4xl font-light mb-6">UI Design</h3>
                                            <p className="text-gray-600 text-lg leading-relaxed">
                                                I designed a high-contrast, industrial interface that combines technical authority with modern minimalism. Using a dark obsidian background and "Industrial Ember" accents, I created a visual language that reflects the precision and scale of Titan's engineering solutions.
                                            </p>
                                        </div>
                                        <div className="md:col-span-2 flex justify-end">
                                            <span className="inline-block px-4 py-2 rounded-full bg-gray-200 text-xs font-bold text-gray-600 uppercase tracking-wider">2 Weeks</span>
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conclusion & Feedback Section */}
            <section className="py-[50px] px-6 md:px-[80px] bg-[#181A1A] border-t border-white/5">
                <div className="max-w-8xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start relative">

                        {/* Divider Line (Vertical on Desktop) */}
                        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-white/10 -translate-x-1/2" />

                        {/* Left Column */}
                        <div className="flex flex-col justify-between h-full space-y-12 lg:space-y-24">
                            <FadeIn>
                                <div className="flex items-baseline gap-4">
                                    <span className="text-6xl md:text-8xl font-light text-white tracking-tighter">06</span>
                                    <span className="text-sm font-mono text-gray-500 uppercase tracking-widest">[ CONCLUSION & FEEDBACK ]</span>
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
                                    "The transformation of our digital presence is remarkable. The new site doesn't just look professional; it functions as a high-precision tool for our clients. The designer captured our technical scale perfectly while making the information incredibly easy to navigate. It has truly elevated our brand on the global stage."
                                </blockquote>
                            </FadeIn>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-12 pt-4">
                            <FadeIn delay={0.4}>
                                <h2 className="text-3xl md:text-5xl leading-tight font-light text-gray-200">
                                    This project challenged me to translate complex industrial engineering into a clean, accessible digital experience. By balancing technical depth with modern UI patterns, I created a platform that establishes Titan Storage Solutions as a global authority while ensuring a seamless journey for engineers and procurement teams.
                                </h2>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fifth Mockup Section */}
            <section className="bg-[#181A1A] px-4 md:px-[30px] pb-[50px]">
                <FadeIn>
                    <div className="w-full">
                        <img
                            src={FifthMockup}
                            alt="Titan Storage Interface Mockup 5"
                            className="w-full h-auto object-cover rounded-2xl md:rounded-[45px] shadow-2xl border border-white/5"
                        />
                    </div>
                </FadeIn>
            </section>

        </div >
    );
}
