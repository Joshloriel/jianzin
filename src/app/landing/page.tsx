'use client';

import React from "react";
import Image from "next/image";
import ImgPlaceholder from "../../../public/img/placeholder.jpg";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { routes } from "@/network/routes";
import { JIANZIN_TEAM } from "@/components/dummy/team";
import { projects } from "@/components/dummy/projects";
import { reviews } from "@/components/dummy/review";
import { services } from "@/components/dummy/services";
import { ArrowRight, Flame, Linkedin, Mail, Phone, ShieldCheck, Star, StarHalf } from "lucide-react";

function Landing() {
  const router = useRouter();


  return (
    <div className="w-full bg-zinc-900 text-gray-100 overflow-hidden">
      {/* Hero Section - Enhanced Version */}
        <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/30 z-10" />
        
        {/* Background Image */}
        <Image
            src={ImgPlaceholder}
            alt="Fire Safety Systems Installation"
            fill
            className="object-cover"
            priority
            quality={100}
        />
        

        {/* Content */}
        <div className="relative z-30 text-center px-4 max-w-6xl mx-auto">
            <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center px-6 py-3 bg-red-900/40 backdrop-blur-sm rounded-full mb-6 border border-red-900/50"
            >
            <Flame className="w-6 h-6 mr-3 text-red-400" />
            <span className="text-red-200 font-medium tracking-wider">SAFETY & TECHNOLOGY SOLUTIONS</span>
            </motion.div>
            
            <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                JIANZIN
            </span>{' '}
            <span className="text-white">FIRE & TECH</span>
            </motion.h1>
            
            <motion.p 
            className="text-xl md:text-3xl mb-8 max-w-3xl mx-auto font-medium text-zinc-200 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            >
            Comprehensive <span className="text-red-400">fire safety</span> and <span className="text-blue-400">surveillance systems</span> for businesses, private homes, and LGUs
            </motion.p>

            <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            >
            <button 
                onClick={() => router.push(routes.contact)}
                className="px-10 py-4 bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
            </button>
            <button 
                onClick={() => router.push(routes.solutions)}
                className="px-10 py-4 bg-zinc-800/80 hover:bg-zinc-700/80 backdrop-blur-sm rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300 border border-zinc-700 hover:border-zinc-600 shadow-lg hover:shadow-xl hover:scale-105"
            >
                <span>View Products</span>
            </button>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
            className="mt-16 bg-zinc-900/80 backdrop-blur-md rounded-xl p-4 max-w-4xl mx-auto border border-zinc-800"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                { value: "100+", label: "Projects Completed" },
                { value: "50+", label: "Satisfied Clients" },
                { value: "24/7", label: "Support Available" },
                { value: "10+", label: "Years Experience" }
                ].map((stat, i) => (
                <div key={i} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-red-500">{stat.value}</div>
                    <div className="text-xs md:text-sm text-zinc-400 uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
                ))}
            </div>
            </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
        >
            <div className="w-8 h-12 border-2 border-red-500 rounded-full flex justify-center">
            <motion.div
                className="w-1 h-2 bg-red-500 rounded-full mt-2"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
            </div>
        </motion.div>
        </section>

      {/* Services Section */}
      <section className="py-20 bg-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Specialized Services</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              End-to-end solutions for comprehensive property protection
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-zinc-900 p-8 rounded-xl hover:bg-zinc-800 transition-colors border border-zinc-800 hover:border-red-900/50"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-red-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-zinc-400">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Image 
                src={ImgPlaceholder} 
                alt="Our Team at Work" 
                fill
                className="object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-red-900/20 rounded-full mb-6">
                <ShieldCheck className="w-5 h-5 mr-2 text-red-500" />
                <span className="text-red-500">About Us</span>
              </div>
              
              <h2 className="text-3xl font-bold mb-6">Your Trusted Safety Partner</h2>
              
              <div className="space-y-4 text-zinc-300 mb-8">
                <p>
                  Jianzin combines technical expertise with innovative solutions to protect what matters most. 
                  Our integrated approach ensures comprehensive protection for homes, businesses, and government facilities.
                </p>
                <p>
                  Specializing in fire safety systems, surveillance technology, and solar lighting solutions, 
                  we deliver tailored protection that meets your specific requirements.
                </p>
                <p>
                  With years of experience serving LGUs and private clients alike, we've established ourselves 
                  as leaders in safety technology implementation.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => router.push(routes.about)}
                  className="px-6 py-2 bg-red-700 hover:bg-red-600 rounded-lg font-medium"
                >
                  Learn More
                </button>
                <button
                  onClick={() => router.push(routes.contact)}
                  className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg font-medium"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Recent Projects</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Explore our successful implementations across various sectors
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-[20rem]">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                  <button className="mt-4 self-start bg-red-800 hover:bg-red-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors duration-300">
                    View Details
                  </button>
                </div>
                {/* <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="cursor-pointer animate-pulse"
                    // onClick={() => router.push(`/projects/${project.id}`)}
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 3, delay: 3 }}
                  >
                    <Pointer  className="w-20 h-20 text-red-800 opacity-40 group-hover:opacity-0" />
                  </motion.div>
                </motion.div> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* our team */}
      <div className="w-full py-20 bg-zinc-900 border-t border-zinc-800">
  <div className="max-w-7xl mx-auto px-6">
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
          Our Leadership
        </span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-red-900 to-red-600 mx-auto mb-6 rounded-full"></div>
      <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
        Meet the experts behind our safety solutions with years of combined experience
      </p>
    </motion.div>
    
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      {JIANZIN_TEAM.slice(0, 4).map((member, index) => (
        <motion.div
          key={index}
          className="group relative bg-zinc-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-red-900/20 transition-all duration-300"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          whileHover={{ y: -10 }}
        >
          {/* Profile Image with Hover Effect */}
          <div className="relative h-72 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10" />
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          {/* Profile Content */}
          <div className="p-6 relative z-20">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-red-500 font-medium mt-1">{member.role}</p>
              
              {/* Social Links - Appear on hover */}
              <div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href={`mailto:${member.email}`} className="p-2 bg-zinc-700 hover:bg-red-700 rounded-full transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-zinc-700 hover:bg-blue-700 rounded-full transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-900/10 transition-all duration-500" />
          </div>
        </motion.div>
      ))}
    </motion.div>
    
    <motion.div 
      className="flex justify-center mt-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
    >
      <button
        onClick={() => router.push(routes.teamMembers)}
        className="flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-red-800 to-red-700 hover:from-red-700 hover:to-red-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-900/30"
      >
        <span>Meet the Full Team</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </motion.div>
  </div>
</div>

      {/* Testimonials */}
      <section className="py-20 bg-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              What our clients say about our services
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="bg-zinc-900 p-8 rounded-xl border border-zinc-800"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(review.stars) ? "text-yellow-500 fill-yellow-500" : "text-zinc-600"}`}
                    />
                  ))}
                  {review.stars % 1 !== 0 && (
                    <StarHalf className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  )}
                </div>
                <p className="text-zinc-300 italic mb-6">"{review.feedback}"</p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{review.name}</h4>
                    <p className="text-sm text-zinc-500">Satisfied Client</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zinc-900 to-red-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Property?</h2>
            <p className="text-xl text-zinc-300 mb-8">
              Contact us today for a free consultation on fire safety, CCTV, or solar lighting solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => router.push(routes.contact)}
                className="px-8 py-3 bg-red-700 hover:bg-red-600 rounded-lg font-bold flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" /> Get In Touch
              </button>
              <button
                onClick={() => router.push(routes.solutions)}
                className="px-8 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg font-bold flex items-center justify-center gap-2"
              >
                View Products
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Landing;