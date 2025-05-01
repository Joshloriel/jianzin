'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { projects } from '@/components/dummy/projects';
import { clients } from '@/components/dummy/clients';
import ProjectModal from '@/components/modals/projects';
import ImgPlaceholder from "../../../public/img/placeholder.jpg";
import { ExternalLink, ArrowRight, ChevronRight, ChevronLeft, Quote, Star } from 'lucide-react';

const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'projects' | 'clients'>('projects');
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navigateProject = (direction: 'prev' | 'next') => {
    setCurrentIndex((prev) => {
      if (direction === 'prev') {
        return prev === 0 ? projects.length - 1 : prev - 1;
      } else {
        return prev === projects.length - 1 ? 0 : prev + 1;
      }
    });
  };

  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 bg-zinc-800 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-red-900/20 z-10" />
        <Image 
          src={ImgPlaceholder}
          alt="Our Projects"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects & Clients</h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto flex items-center justify-center gap-2">
            <span>Discover our successful implementations</span>
            <ArrowRight className="h-5 w-5 mt-1" />
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex border-b border-zinc-700">
          <button
            className={`px-6 py-3 font-medium flex items-center gap-2 ${activeTab === 'projects' ? 'text-red-500 border-b-2 border-red-500' : 'text-zinc-400 hover:text-white'}`}
            onClick={() => setActiveTab('projects')}
          >
            {activeTab === 'projects' && (
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            )}
            Projects
          </button>
          <button
            className={`px-6 py-3 font-medium flex items-center gap-2 ${activeTab === 'clients' ? 'text-red-500 border-b-2 border-red-500' : 'text-zinc-400 hover:text-white'}`}
            onClick={() => setActiveTab('clients')}
          >
            {activeTab === 'clients' && (
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            )}
            Clients
          </button>
        </div>
      </div>

      {/* Projects Tab */}
      {activeTab === 'projects' && (
        <section className="py-20 bg-gradient-to-br from-zinc-900 to-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative inline-block">
                <span className="text-sm font-medium text-red-600 mb-3 tracking-widest uppercase flex items-center justify-center gap-2">
                  <Star className="h-4 w-4" />
                  Implementations
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight bg-clip-text">
                  Our Creative <span className='text-red-700'>Work</span>
                </h2>
                <motion.div 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-red-700 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </div>
              <p className="text-lg text-zinc-400 max-w-3xl mx-auto mt-6 leading-relaxed">
                Explore our portfolio of innovative solutions that transform ideas into digital experiences.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div 
                    className="relative cursor-pointer overflow-hidden rounded-xl bg-zinc-800 border border-zinc-700/50 hover:border-zinc-600 transition-all duration-300 h-full flex flex-col"
                    onClick={() => openModal(index)}
                  >
                    <div className="relative h-60 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/30 to-transparent" />
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="inline-block w-3 h-3 rounded-full bg-red-700"></span>
                          <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                            {project.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-zinc-400 text-sm mb-5 line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="flex justify-between items-center mt-auto pt-4 border-t border-zinc-700/50">
                        <div className="flex space-x-2">
                          {project.tags?.slice(0, 3).map((tag, i) => (
                            <span key={i} className="text-xs px-2 py-1 bg-zinc-700/50 rounded-full text-zinc-300 flex items-center justify-start whitespace-nowrap w-[5rem]">
                              {tag.length > 8 ? `${tag.slice(0, 9)}...` : tag}
                            </span>
                          ))}
                        </div>
                        <button 
                          className="text-sm font-medium text-red-600 hover:text-red-500 flex items-center transition-colors cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            openModal(index);
                          }}
                        >
                          View case
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      <div className="absolute -inset-1 bg-red-700/20 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Clients Tab */}
      {activeTab === 'clients' && (
        <section className="py-20 bg-gradient-to-b from-zinc-950 to-zinc-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-64 h-64 bg-red-700 rounded-full mix-blend-screen filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-800 rounded-full mix-blend-screen filter blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div 
              className="mb-16 text-center relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex flex-col items-center">
                <span className="text-sm font-medium text-red-600 mb-3 tracking-widest uppercase flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  Partnerships
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Trusted By <span className="text-red-600">Innovators</span>
                </h2>
                <div className="relative w-32 h-1.5 mb-6">
                  <div className="absolute inset-0 bg-zinc-700 rounded-full"></div>
                  <motion.div 
                    className="absolute inset-y-0 left-0 bg-red-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                </div>
              </div>
              <p className="text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                We collaborate with visionary organizations across industries to create transformative digital experiences.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {clients.map((client, index) => (
                <motion.div
                  key={client.id}
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="h-full bg-zinc-800/50 backdrop-blur-sm rounded-xl border border-zinc-700/50 p-6 transition-all duration-300 group-hover:border-red-600/50 group-hover:bg-zinc-800/70 group-hover:shadow-lg group-hover:shadow-red-900/10 overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute -inset-4 bg-red-700/10 rounded-xl blur-md"></div>
                    </div>

                    <div className="relative flex items-center justify-center h-20 mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/20 to-transparent rounded-lg"></div>
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={160}
                        height={80}
                        className="object-contain h-full w-auto grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>

                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-red-500 transition-colors">
                        {client.name}
                      </h3>
                      <span className="inline-block text-xs font-medium text-red-600/90 mb-3 px-2 py-1 bg-red-900/20 rounded-full">
                        {client.sector}
                      </span>
                      <p className="text-sm text-zinc-400 mb-4 line-clamp-2">
                        {client.description}
                      </p>
                      
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-20 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="inline-flex flex-col items-center max-w-2xl mx-auto bg-zinc-800/50 border border-zinc-700/50 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-sm font-medium text-red-600 mb-2 flex items-center gap-2">
                  <Quote className="h-4 w-4" />
                  Client Voices
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">What Our Partners Say</h3>
                <p className="text-zinc-400 mb-6">
                  "Working with this team transformed our digital presence and exceeded all our expectations."
                </p>
                <button className="px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 rounded-lg text-white font-medium transition-all duration-300 group">
                  <span className="relative z-10 flex items-center gap-2">
                    Read All Testimonials
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        projects={projects}
        currentIndex={currentIndex}
        navigateProject={navigateProject}
      />
    </main>
  );
};

export default page;