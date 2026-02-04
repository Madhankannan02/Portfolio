import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const words = ["THINK", "DESIGN", "BUILD", "SCALE"];

const Preloader = ({ onComplete }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index === words.length - 1) return;
        const timeout = setTimeout(() => {
            setIndex((prev) => prev + 1);
        }, index === 0 ? 1000 : 250); // Initial delay, then fast cycle

        return () => clearTimeout(timeout);
    }, [index]);

    useEffect(() => {
        if (index === words.length - 1) {
            const timer = setTimeout(() => {
                onComplete();
            }, 800);
            return () => clearTimeout(timer);
        }
    }, [index, onComplete]);

    const slideUp = {
        initial: { y: 0 },
        exit: { y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
    };

    const slideDown = {
        initial: { y: 0 },
        exit: { y: "100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
    };

    return (
        <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            className="fixed inset-0 z-[9999] flex flex-col pointer-events-none font-sans cursor-wait"
        >
            {/* Top Shutter */}
            <motion.div variants={slideUp} className="relative w-full h-1/2 bg-[#0a0a0a] flex items-end justify-center z-20 border-b border-white/5">
            </motion.div>

            {/* Bottom Shutter */}
            <motion.div variants={slideDown} className="relative w-full h-1/2 bg-[#0a0a0a] flex items-start justify-center z-20 border-t border-white/5">
            </motion.div>

            {/* Centered Content Overlay */}
            <motion.div
                className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
            >
                <div className="flex items-center gap-4 overflow-hidden h-[100px] md:h-[150px]">
                    <motion.p
                        key={index}
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        className="text-5xl md:text-8xl font-black tracking-tighter text-white"
                    >
                        {words[index]}
                    </motion.p>
                    <span className="text-5xl md:text-8xl font-black text-primary">.</span>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Preloader;
