'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import PicturePlaceholder from '../../../../public/img/placeholder.jpg';
import { JIANZIN_TEAM, OTHERTEAM } from '@/components/dummy/team';
import { Users, Award, Phone, ChevronRight, Mail, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const TeamMembers = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 bg-zinc-800 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-red-900/20 z-10" />
        <Image
          src={PicturePlaceholder}
          alt="Team Background"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-6">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-4">
            <Users className="w-5 h-5 mr-2" />
            <span>Our Team</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet the Jianzin Team</h1>
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
            Dedicated professionals committed to safety and excellence
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Leadership Team</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Our experienced leaders guiding the company's vision and operations
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {JIANZIN_TEAM.map((member, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-red-500 mb-3">{member.role}</p>
                <p className="text-zinc-400 text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <button className="p-2 bg-zinc-700 rounded-full hover:bg-red-600 transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-zinc-700 rounded-full hover:bg-blue-600 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Operations Team */}
      <section className="bg-zinc-800 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Operations Team</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              The skilled professionals who bring our solutions to life
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
          >
            {OTHERTEAM.map((member, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group text-center"
              >
                <div className="relative h-40 w-40 mx-auto mb-4 rounded-full overflow-hidden border-2 border-zinc-700 group-hover:border-red-600 transition-colors">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-medium text-lg">{member.name}</h4>
                <p className="text-sm text-zinc-400">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-red-900/40 to-zinc-800 rounded-2xl p-8 md:p-12 text-center">
          <Award className="w-12 h-12 mx-auto text-red-500 mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Growing Team</h2>
          <p className="text-zinc-300 max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals passionate about safety and technology
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex items-center justify-center px-6 py-3 bg-red-700 hover:bg-red-600 rounded-lg font-medium transition-colors">
              <Phone className="w-5 h-5 mr-2" />
              Contact HR
            </button>
            <button className="flex items-center justify-center px-6 py-3 bg-zinc-700 hover:bg-zinc-600 rounded-lg font-medium transition-colors">
              View Openings
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TeamMembers;