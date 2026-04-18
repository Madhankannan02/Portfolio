import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, index, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative"
        >
            <div
                onClick={() => onClick && onClick(project)}
                className="relative overflow-hidden rounded-2xl bg-surface aspect-[4/3] w-full cursor-pointer"
            >
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <div className="bg-surface text-text-primary rounded-full p-4 shadow-card transform scale-50 group-hover:scale-100 transition-transform duration-300">
                        <ArrowUpRight size={24} />
                    </div>
                </div>

                {/* Image */}
                <img
                    src={project.image.src}
                    srcSet={project.image.srcSet}
                    sizes={project.image.sizes}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            <div className="pt-6 space-y-2">
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-brand font-medium text-text-primary group-hover:text-text-secondary transition-colors">
                        {project.title}
                    </h3>
                    <span className="text-text-secondary text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
                </div>

                <p className="text-text-secondary font-ui line-clamp-2 text-sm leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 text-xs font-ui font-medium rounded-full bg-border/30 text-text-secondary border border-primary/50">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
