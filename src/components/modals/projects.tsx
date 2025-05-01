'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { ProjectType } from '@/utils/types/project';

type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  projects: ProjectType[];
  currentIndex: number;
  navigateProject: (direction: 'prev' | 'next') => void;
};

const ProjectModal = ({
  isOpen,
  onClose,
  projects,
  currentIndex,
  navigateProject,
}: ProjectModalProps) => {
  const selectedProject = projects[currentIndex];

  return (
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
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative bg-zinc-900 rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-zinc-800 shadow-2xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
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
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none"
                />
              </div>

              {/* Project Details */}
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {selectedProject.client && (
                    <div>
                      <h4 className="text-sm text-zinc-500">Client</h4>
                      <p className="text-zinc-300">{selectedProject.client}</p>
                    </div>
                  )}
                  {selectedProject.date && (
                    <div>
                      <h4 className="text-sm text-zinc-500">Date</h4>
                      <p className="text-zinc-300">{selectedProject.date}</p>
                    </div>
                  )}
                  {selectedProject.location && (
                    <div>
                      <h4 className="text-sm text-zinc-500">Location</h4>
                      <p className="text-zinc-300">{selectedProject.location}</p>
                    </div>
                  )}
                </div>

                <div className="prose prose-invert max-w-none">
                  <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
                  <p className="text-zinc-300 mb-6">
                    {selectedProject.details || selectedProject.description}
                  </p>

                  {selectedProject.services && (
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3">Services Provided</h3>
                      <ul className="space-y-2">
                        {selectedProject.services.map((service, i) => (
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
                navigateProject('prev');
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors z-10"
              aria-label="Previous project"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateProject('next');
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
  );
};

export default ProjectModal;