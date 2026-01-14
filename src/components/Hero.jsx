import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center py-20 overflow-hidden">

            {/* Animated Background Gradient */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    rotate: [0, 90, 0]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary/30 to-purple-500/30 rounded-full blur-[100px] -z-10 bg-blend-screen"
            />

            <div className="flex flex-col items-center text-center space-y-8 max-w-4xl z-10 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-gray-300 text-sm font-medium tracking-wide uppercas">Available for new projects</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-6xl md:text-8xl font-bold leading-tight tracking-tighter"
                >
                    Designing the <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Future of Digital.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed"
                >
                    Hi, I am Madhan Kannan. I craft aesthetically pleasing and highly functional user interfaces that drive business growth and user satisfaction.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-4 pt-4"
                >
                    <a
                        href="#work"
                        className="group px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-gray-200 transition-all flex items-center gap-2"
                    >
                        View Projects
                        <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors font-medium text-lg"
                    >
                        Let's Collaborate
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 text-sm animate-bounce"
            >
                Scroll to explore
            </motion.div>
        </section>
    );
};

export default Hero;
