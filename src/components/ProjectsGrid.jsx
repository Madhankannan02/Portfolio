import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const ProjectsGrid = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeCategory, setActiveCategory] = useState('ui-ux');
    const navigate = useNavigate();

    const handleProjectClick = (project) => {
        if (project.route) {
            navigate(project.route);
            return;
        }
        if (project.link && project.link !== '#') {
            setSelectedProject(project);
        }
    };

    return (
        <>
            <section id="work" className="py-24">
                <div className="space-y-4 mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-sm font-semibold text-primary uppercase tracking-widest"
                    >
                        Selected Work
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold"
                    >
                        Crafting digital perfection.
                    </motion.h3>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap gap-4 mb-12"
                >
                    <button
                        onClick={() => setActiveCategory('ui-ux')}
                        className={`px-6 py-2 rounded-full border text-sm md:text-base transition-all duration-300 ${
                            activeCategory === 'ui-ux' 
                                ? 'bg-white border-white text-black font-semibold' 
                                : 'border-white/20 text-white/70 hover:border-white/40 hover:text-white'
                        }`}
                    >
                        UI/UX Design
                    </button>
                    <button
                        onClick={() => setActiveCategory('graphic-design')}
                        className={`px-6 py-2 rounded-full border text-sm md:text-base transition-all duration-300 ${
                            activeCategory === 'graphic-design' 
                                ? 'bg-white border-white text-black font-semibold' 
                                : 'border-white/20 text-white/70 hover:border-white/40 hover:text-white'
                        }`}
                    >
                        Graphic Design
                    </button>
                </motion.div>

                <motion.div 
                    layout
                    className={activeCategory === 'ui-ux' ? "grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-y-24" : "columns-1 md:columns-2 lg:columns-3 gap-8 block"}
                >
                    <AnimatePresence mode="popLayout">
                        {projects.filter(p => p.category === activeCategory).map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className={activeCategory === 'graphic-design' ? "break-inside-avoid mb-8" : ""}
                            >
                                {activeCategory === 'graphic-design' ? (
                                    <div className="relative rounded-2xl overflow-hidden group">
                                        <img 
                                            src={project.image.src} 
                                            alt={project.title} 
                                            className="w-full h-auto block object-cover transform transition-transform duration-700 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 pointer-events-none">
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                                <p className="text-sm text-gray-200">{project.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <ProjectCard
                                        project={project}
                                        index={index}
                                        onClick={handleProjectClick}
                                    />
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    
                    {projects.filter(p => p.category === activeCategory).length === 0 && (
                        <div className="col-span-1 md:col-span-2 py-24 text-center text-white/50">
                            <p className="text-xl">More projects coming soon.</p>
                        </div>
                    )}
                </motion.div>
            </section>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-5xl w-full max-h-[90vh] overflow-auto rounded-xl bg-surface border border-white/10 no-scrollbar"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-colors z-10 backdrop-blur-md"
                            >
                                <X size={24} />
                            </button>
                            <img
                                src={selectedProject.link}
                                alt={selectedProject.title}
                                className="w-full h-auto block"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ProjectsGrid;
