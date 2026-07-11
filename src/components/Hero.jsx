import React from 'react';
import { motion } from 'framer-motion';

const Bird = ({ className }) => (
    <svg 
        className={className} 
        viewBox="0 0 100 50" 
        fill="currentColor"
    >
        <path d="M50 25 C30 0, 0 10, 0 10 C15 15, 30 25, 50 40 C70 25, 85 15, 100 10 C100 10, 70 0, 50 25 Z"/>
    </svg>
);

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden" 
                 style={{ background: 'linear-gradient(180deg, var(--color-sky-top) 0%, var(--color-sky-bottom) 100%)' }}>
            
            {/* Floating Birds flying across the screen */}
            <motion.div
                initial={{ x: '-10vw', y: '10vh', opacity: 0, rotate: 75 }}
                animate={{ x: '110vw', y: '-15vh', opacity: [0, 0.6, 0.6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute top-[20%] text-white/40 w-12 h-6"
            >
                <Bird />
            </motion.div>
            
            <motion.div
                initial={{ x: '110vw', y: '30vh', opacity: 0, rotate: -75 }}
                animate={{ x: '-10vw', y: '10vh', opacity: [0, 0.4, 0.4, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 2 }}
                className="absolute top-[10%] text-white/30 w-8 h-4"
            >
                 <Bird />
            </motion.div>

            <motion.div
                initial={{ x: '-20vw', y: '-5vh', opacity: 0, rotate: 105 }}
                animate={{ x: '120vw', y: '20vh', opacity: [0, 0.5, 0.5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 4 }}
                className="absolute top-[40%] text-white/30 w-10 h-5"
            >
                 <Bird />
            </motion.div>
            
            <motion.div
                initial={{ x: '120vw', y: '20vh', opacity: 0, rotate: -105 }}
                animate={{ x: '-20vw', y: '35vh', opacity: [0, 0.3, 0.3, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "linear", delay: 1 }}
                className="absolute top-[50%] text-white/20 w-6 h-3"
            >
                 <Bird />
            </motion.div>

            {/* Main Content Container */}
            <div className="relative z-10 flex flex-col items-center w-full max-w-4xl px-6 mt-16">
                
                {/* Intro Line */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-0 mb-8 px-4 md:px-12"
                >
                    <p className="text-white font-ui font-medium tracking-wide text-center md:text-left">Hello, from the design &amp; code studio.</p>
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30 shrink-0">
                        <span className="text-white text-xs font-ui font-semibold uppercase tracking-wider whitespace-nowrap">Open To Work</span>
                        <span className="w-2 h-2 rounded-full bg-white block shrink-0"></span>
                    </div>
                </motion.div>

                {/* Big Serif Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-5xl md:text-[90px] font-serif leading-[0.9] text-white text-center tracking-tight drop-shadow-sm"
                >
                    Thoughtful<br/> 
                    <span className="italic font-light tracking-normal pr-4">by</span>design<br/>
                    Powered<br/> 
                    <span className="italic font-light tracking-normal pr-4">by</span>code
                </motion.h1>

                {/* Floating Note Card */}
                <motion.div
                    initial={{ opacity: 0, rotate: -15, y: 20 }}
                    animate={{ opacity: 1, rotate: -8, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="relative mt-12 md:absolute md:mt-0 right-auto md:-right-4 bottom-auto md:bottom-[-60px] bg-[#F8F9FA] p-5 shadow-xl w-[240px] border border-gray-200"
                    style={{ transform: 'rotate(-8deg)' }}
                >
                    {/* A simple decorative tape */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-5 bg-white/60 backdrop-blur-sm shadow-sm rotate-3"></div>
                    
                    <div className="font-ui text-[14px] text-gray-700 leading-snug text-center mt-1">
                        <p>I'm Madhan, a Designer & Full-Stack Developer building end-to-end experiences.</p>
                    </div>
                </motion.div>
            </div>
            
        </section>
    );
};

export default Hero;



