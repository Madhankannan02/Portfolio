import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[95vh] flex flex-col justify-center items-center py-20 overflow-hidden">

            {/* Enhanced Mesh Gradient - High Visibility */}
            <div className="absolute inset-0 -z-10 bg-background overflow-hidden">
                {/* Core Atmospheric Glows */}
                <motion.div
                    animate={{
                        x: ['-10%', '10%', '-10%'],
                        y: ['-5%', '15%', '-5%'],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[10%] -left-[5%] w-[60%] h-[60%] bg-primary/40 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        x: ['10%', '-10%', '10%'],
                        y: ['5%', '-15%', '5%'],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[10%] right-[-5%] w-[50%] h-[50%] bg-hover/40 rounded-full blur-[80px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-[10%] left-[20%] w-[40%] h-[40%] bg-primary/30 rounded-full blur-[90px]"
                />

                {/* Center highlight */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-white/50 to-background pointer-events-none" />

                {/* Textural Grid */}
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: `radial-gradient(var(--color-text-secondary) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            <div className="flex flex-col items-center text-center space-y-10 max-w-5xl z-10 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-text-secondary/10 backdrop-blur-md shadow-sm"
                >
                    <Sparkles size={14} className="text-primary" />
                    <span className="text-text-secondary text-xs font-bold tracking-[0.15em] uppercase">Building Brands That Convert</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-8xl font-brand font-bold leading-[1.1] tracking-tighter text-text-primary max-w-4xl"
                >
                    Design That Makes You Look Like the <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500">Best Option in the Room</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-text-secondary font-ui max-w-3xl leading-relaxed"
                >
                    From pixel-perfect websites to scroll-stopping graphics — I help startups and local businesses build a brand that looks professional and turns visitors into paying customers.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-5 pt-4 w-full sm:w-auto"
                >
                    <a
                        href="#work"
                        className="group w-full sm:w-auto px-10 py-5 rounded-[12px] bg-primary text-text-primary font-bold text-lg hover:bg-hover transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 border border-white/20"
                    >
                        View My Work
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#contact"
                        className="w-full sm:w-auto px-10 py-5 rounded-[12px] border border-text-secondary/20 bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-all font-bold text-lg text-text-primary flex items-center justify-center shadow-sm"
                    >
                        Let's Work Together
                    </a>
                </motion.div>

                {/* Trust Line */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="pt-16 w-full"
                >
                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-xs md:text-sm font-bold tracking-[0.2em] text-text-secondary/40 uppercase">
                        <span>Web Design & Development</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                        <span>Graphic Design</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                        <span>Built for Results</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;



