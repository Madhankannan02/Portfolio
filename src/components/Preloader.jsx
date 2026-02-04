import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => {
                if (prev === 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 800);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9999] bg-[#0a0a0a] text-white flex flex-col justify-between p-6 md:p-12 font-sans"
        >
            {/* Top Bar */}
            <div className="flex justify-between items-start overflow-hidden">
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <span className="text-xs md:text-sm font-mono text-gray-500 uppercase tracking-widest">Madhan Kannan</span>
                </motion.div>
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <span className="text-xs md:text-sm font-mono text-gray-500 uppercase tracking-widest">Portfolio 2026</span>
                </motion.div>
            </div>

            {/* Center Content - Counter */}
            <div className="flex flex-col items-center justify-center relative">
                <motion.h1
                    className="text-[15vw] md:text-[12vw] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {count}
                </motion.h1>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100px" }}
                    className="h-1 bg-white mt-4 md:mt-8"
                />
            </div>

            {/* Bottom Bar */}
            <div className="flex justify-between items-end overflow-hidden">
                <motion.div
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className=" hidden md:block"
                >
                    <span className="text-xs md:text-sm font-mono text-gray-500 uppercase tracking-widest">Creating Digital Experiences</span>
                </motion.div>

                <motion.div
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <span className="text-xs md:text-sm font-mono text-gray-500 uppercase tracking-widest">Loading...</span>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Preloader;
