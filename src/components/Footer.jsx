import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Behance = ({ size = 20, className }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5" />
        <path d="M3 12l4.5 0" />
        <path d="M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1" />
        <path d="M16 6l3 0" />
    </svg>
);

const Footer = () => {
    return (
        <footer className="py-8 mt-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Madhan Kannan. All rights reserved.
                </p>

                <div className="flex items-center gap-6">
                    <a href="https://www.linkedin.com/in/madhankannan/" target='_blank' className="text-gray-500 hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
                    <a href="https://github.com/Madhankannan02" target='_blank' className="text-gray-500 hover:text-white transition-colors" aria-label="GitHub"><Github size={20} /></a>
                    <a href="https://www.behance.net/madhankannan" target='_blank' className="text-gray-500 hover:text-white transition-colors" aria-label="Behance"><Behance size={20} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
