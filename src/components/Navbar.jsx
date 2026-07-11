import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const leftLinks = [
        { name: 'Let\'s Connect', href: '#contact' },
        { name: 'Work', href: '#work' },
    ];
    
    const rightLinks = [
        { name: 'About', href: '#about' },
        { name: 'Resume', href: '#' }, // Add resume link if available
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between md:justify-center relative">
                
                {/* Mobile Logo */}
                <div className="md:hidden flex-1">
                     <a href="#" className="text-xl font-serif italic font-bold tracking-tighter text-white">
                        madhan
                    </a>
                </div>

                {/* Desktop Menu - Centered Layout */}
                <div className="hidden md:flex items-center gap-10">
                    <div className="flex items-center gap-8">
                        {leftLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-ui font-medium transition-colors ${scrolled ? 'text-text-secondary hover:text-text-primary' : 'text-white/80 hover:text-white'}`}
                            >
                                {link.name === 'Let\'s Connect' ? <span className="flex items-center gap-1"><Sparkles size={14} /> {link.name}</span> : link.name}
                            </a>
                        ))}
                    </div>

                    {/* Centered Logo */}
                    <a href="#" className={`text-3xl font-serif italic tracking-tighter transition-colors mx-4 ${scrolled ? 'text-text-primary' : 'text-white'}`}>
                        madhan
                    </a>

                    <div className="flex items-center gap-8">
                        {rightLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-ui font-medium transition-colors ${scrolled ? 'text-text-secondary hover:text-text-primary' : 'text-white/80 hover:text-white'}`}
                            >
                                {link.name === 'Resume' ? <span className="flex items-center gap-1"><Sparkles size={14} /> {link.name}</span> : link.name}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden p-2 ${scrolled ? 'text-text-secondary' : 'text-white'}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-background border-b border-border overflow-hidden absolute w-full"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {[...leftLinks, ...rightLinks].map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-text-secondary hover:text-text-primary font-ui"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
