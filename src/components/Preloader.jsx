import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PenTool, Layers, Layout, Palette } from 'lucide-react';

const Preloader = ({ onComplete }) => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setStep((prev) => {
                if (prev >= 4) {
                    clearInterval(timer);
                    setTimeout(onComplete, 600);
                    return prev;
                }
                return prev + 1;
            });
        }, 400);

        return () => clearInterval(timer);
    }, [onComplete]);

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => ({
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay: i * 0.1, type: "spring", duration: 0.5, bounce: 0 },
                opacity: { delay: i * 0.1, duration: 0.01 }
            }
        })
    };

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ y: "-100%", transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-[9999] bg-[#0A0A0A] flex flex-col items-center justify-center font-sans text-white cursor-wait"
        >
            <div className="relative w-32 h-32 md:w-48 md:h-48 mb-12">
                {/* Abstract Design Grid/Wireframe Animation */}
                <svg viewBox="0 0 100 100" className="w-full h-full stroke-white stroke-[1.5] fill-none stroke-linecap-round stroke-linejoin-round">
                    {/* 1. Frame */}
                    <motion.rect
                        x="10" y="10" width="80" height="80" rx="4"
                        initial="hidden" animate={step >= 1 ? "visible" : "hidden"} variants={draw} custom={0}
                    />

                    {/* 2. Header / Nav */}
                    <motion.line
                        x1="10" y1="30" x2="90" y2="30"
                        initial="hidden" animate={step >= 2 ? "visible" : "hidden"} variants={draw} custom={1}
                    />

                    {/* 3. Hero Section / Image Placeholders */}
                    <motion.rect
                        x="20" y="40" width="25" height="25" rx="2"
                        initial="hidden" animate={step >= 3 ? "visible" : "hidden"} variants={draw} custom={2}
                    />
                    <motion.rect
                        x="55" y="40" width="25" height="25" rx="2"
                        initial="hidden" animate={step >= 3 ? "visible" : "hidden"} variants={draw} custom={3}
                    />

                    {/* 4. Text Lines / Details */}
                    <motion.line
                        x1="20" y1="75" x2="80" y2="75"
                        initial="hidden" animate={step >= 4 ? "visible" : "hidden"} variants={draw} custom={4}
                    />
                </svg>

                {/* Floating Tool Icons - Decorative */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={step >= 1 ? { opacity: 1, scale: 1, x: -40, y: -20 } : {}}
                    className="absolute top-0 right-0 text-purple-400"
                >
                    <PenTool size={24} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={step >= 3 ? { opacity: 1, scale: 1, x: 40, y: 20 } : {}}
                    className="absolute bottom-0 left-0 text-orange-400"
                >
                    <Palette size={24} />
                </motion.div>
            </div>

            {/* Loading Text */}
            <div className="h-8 overflow-hidden flex flex-col items-center justify-start">
                <AnimatePresence mode="popLayout">
                    {step === 0 && <motion.p key="start" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="text-gray-500 font-mono text-sm tracking-[0.2em] uppercase">Initializing...</motion.p>}
                    {step === 1 && <motion.p key="grid" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="text-gray-500 font-mono text-sm tracking-[0.2em] uppercase">Building Grid...</motion.p>}
                    {step === 2 && <motion.p key="layout" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="text-gray-500 font-mono text-sm tracking-[0.2em] uppercase">Defining Layout...</motion.p>}
                    {step === 3 && <motion.p key="assets" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="text-gray-500 font-mono text-sm tracking-[0.2em] uppercase">Vectorizing Assets...</motion.p>}
                    {step === 4 && <motion.p key="polish" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="text-white font-mono text-sm tracking-[0.2em] uppercase font-bold">Rendering Pixel Perfect.</motion.p>}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default Preloader;
