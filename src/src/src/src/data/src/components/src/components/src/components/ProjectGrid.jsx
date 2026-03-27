import React from 'react';
import { motion } from 'framer-motion';
import projectData from '../data/projects.json';

export default function ProjectGrid() {
  return (
    <section className="relative z-10 px-6 md:px-12 py-24 bg-apple-dark">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        {projectData.projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="group relative bg-apple-surface rounded-2xl overflow-hidden cursor-pointer aspect-square md:aspect-[4/3]"
          >
            <img 
              src={project.imagePath} 
              alt={project.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-[#000000] to-transparent">
              <span className="text-xs font-mono uppercase tracking-widest text-apple-muted mb-3 block">
                {project.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold text-apple-text mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-apple-muted transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {project.hook}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
