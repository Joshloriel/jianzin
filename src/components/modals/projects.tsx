'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type ProjectModalProps = {
  projects: {
    title: string;
    description: string;
    image: StaticImageData;
    details?: string;
    services?: string[];
    client?: string;
    date?: string;
  }[];
};

const ProjectModal = ({ projects }: ProjectModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentProjectIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const goToPrevProject = () => {
    setCurrentProjectIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToNextProject = () => {
    setCurrentProjectIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const currentProject = projects[currentProjectIndex];

  return (
    <>
      {/* Project Cards - triggers modal */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden rounded-xl h-80 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => openModal(index)}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-zinc-300 mt-2">{project.description}</p>
              <button className="mt-4 self-start text-sm bg-red-700 hover:bg-red-600 text-white font-medium py-2 px-4 rounded transition-colors duration-300">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Content */}
            <motion.div
              className="relative bg-zinc-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-zinc-800 shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Body */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Project Image */}
                <div className="relative h-64 lg:h-full min-h-[300px]">
                  <Image
                    src={currentProject.image}
                    alt={currentProject.title}
                    fill
                    className="object-cover rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none"
                  />
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-2">{currentProject.title}</h2>
                  
                  {currentProject.client && (
                    <p className="text-zinc-400 mb-4">
                      <span className="font-medium">Client:</span> {currentProject.client}
                    </p>
                  )}
                  
                  {currentProject.date && (
                    <p className="text-zinc-400 mb-6">
                      <span className="font-medium">Date:</span> {currentProject.date}
                    </p>
                  )}

                  <div className="prose prose-invert max-w-none">
                    <p className="text-zinc-300 mb-6">{currentProject.description}</p>
                    
                    {currentProject.details && (
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-3">Project Details</h3>
                        <p className="text-zinc-300">{currentProject.details}</p>
                      </div>
                    )}

                    {currentProject.services && (
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-3">Services Provided</h3>
                        <ul className="space-y-2">
                          {currentProject.services.map((service, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-red-500 mr-2">•</span>
                              <span className="text-zinc-300">{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevProject();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors z-10"
                aria-label="Previous project"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNextProject();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors z-10"
                aria-label="Next project"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectModal;