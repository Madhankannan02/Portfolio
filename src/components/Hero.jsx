import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center py-20 overflow-hidden">

            {/* Premium Mesh Gradient Background */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/30 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        x: [0, -40, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] -right-[10%] w-[35%] h-[45%] bg-hover/20 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[10%] left-[20%] w-[50%] h-[30%] bg-border/40 rounded-full blur-[110px]"
                />
            </div>

            <div className="flex flex-col items-center text-center space-y-8 max-w-4xl z-10 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/40 backdrop-blur-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-text-secondary text-sm font-medium tracking-wide uppercase">Available for new projects</span>
                </motion.div>

                <h1
                    className="text-6xl md:text-8xl font-brand font-bold leading-tight tracking-tighter text-text-primary"
                >
                    Designing the <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-secondary">Future of Digital.</span>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-xl md:text-2xl text-text-secondary font-ui max-w-2xl leading-relaxed"
                >
                    Hi, I am Madhan Kannan. I craft aesthetically pleasing and highly functional user interfaces that drive business growth and user satisfaction.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="flex flex-col sm:flex-row items-center gap-4 pt-4"
                >
                    <a
                        href="#work"
                        className="group px-8 py-4 rounded-[10px] bg-primary text-text-primary font-semibold text-lg hover:bg-hover transition-all flex items-center gap-2 border border-text-primary/5"
                    >
                        View Projects
                        <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 rounded-[10px] border border-text-secondary/30 hover:bg-primary/10 transition-colors font-medium text-lg text-text-primary"
                    >
                        Let's Collaborate
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-secondary text-sm animate-bounce"
            >
                Scroll to explore
            </motion.div>
        </section>
    );
};

export default Hero;


