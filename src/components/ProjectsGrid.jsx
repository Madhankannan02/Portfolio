import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const ProjectsGrid = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (project) => {
        if (project.link && project.link !== '#') {
            setSelectedProject(project);
        }
    };

    return (
        <>
            <section id="work" className="py-24">
                <div className="space-y-4 mb-16">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-semibold text-primary uppercase tracking-widest"
                    >
                        Selected Work
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold"
                    >
                        Crafting digital perfection.
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-y-24">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            onClick={handleProjectClick}
                        />
                    ))}
                </div>
            </section>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
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
