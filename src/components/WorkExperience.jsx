import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/experience';

const WorkExperience = () => {
    return (
        <section id="about" className="py-24 px-4 max-w-7xl mx-auto">
            <div className="space-y-4 mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-sm font-semibold text-primary uppercase tracking-widest"
                >
                    Career History
                </motion.h2>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl md:text-5xl font-bold"
                >
                    Experience & Roles.
                </motion.h3>
            </div>

            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6 md:gap-12 py-8 border-t border-white/10 first:border-0"
                    >
                        <div className="space-y-2">
                            <span className="text-gray-400 font-mono text-sm block">{exp.period}</span>
                            <h4 className="text-xl md:text-2xl font-bold text-white">{exp.company}</h4>
                        </div>
                        <div className="space-y-4">
                            <h5 className="text-lg font-semibold text-gray-200">{exp.role}</h5>
                            <p className="text-gray-400 leading-relaxed max-w-2xl">
                                {exp.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default WorkExperience;
