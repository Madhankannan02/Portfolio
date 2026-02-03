import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

// Import Assets
import HeroLaptop from '../../assets/images/butcherbox-slides/hero laptop.png';

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
                <FadeIn delay={0.8} className="relative z-20 w-full max-w-[80rem] mx-auto -translate-y-8 md:-translate-y-12 px-4">
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

        </div>
    );
}
