import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, index, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
        >
            <div
                onClick={() => onClick && onClick(project)}
                className="relative overflow-hidden rounded-2xl bg-surface aspect-[4/3] w-full cursor-pointer"
            >
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <div className="bg-white text-black rounded-full p-4 transform scale-50 group-hover:scale-100 transition-transform duration-300">
                        <ArrowUpRight size={24} />
                    </div>
                </div>

                {/* Image */}
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            <div className="pt-6 space-y-2">
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        {project.title}
                    </h3>
                    <span className="text-gray-500 text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
                </div>

                <p className="text-gray-400 line-clamp-2 text-sm leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-300 border border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
