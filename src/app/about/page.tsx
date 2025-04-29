'use client';

import React from 'react';
import Image from 'next/image';
import PicturePlaceholder from '../../../public/img/placeholder.jpg';
import { Flame, ShieldCheck, Target, Gauge, HeartHandshake, Users } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { routes } from '@/network/routes';

export default function AboutPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      {/* Hero Section */}
      {/* <section className="relative h-[50vh] bg-zinc-800 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image 
          src={PicturePlaceholder} 
          alt="About Jianzin" 
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Story</h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto">
            Building safer communities through innovative protection solutions
          </p>
        </div>
      </section> */}
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
                  <HeartHandshake className="w-5 h-5 mr-2" />
                  <span>About Jianzin</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
                <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
                  Building safer communities through innovative protection solutions
                </p>
              </div>
            </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold">Who We Are</h2>
            <div className="w-32 h-1 bg-red-600 ms-16 mb-6"></div>
            <p className="text-zinc-300 leading-relaxed">
              Founded in 2023, Jianzin has established itself as a trusted provider of specialized safety systems. We combine technical expertise with practical solutions to protect businesses, homes, and public spaces.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Our team of certified professionals brings together years of experience in fire safety, surveillance technology, and sustainable lighting solutions.
            </p>
            <div onClick={() => router.push(routes.teamMembers)} className="inline-block mt-4 px-6 py-3 bg-red-700 hover:bg-red-600 rounded-lg font-medium">
              Meet Our Team
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <Image 
              src={PicturePlaceholder} 
              alt="Our Office" 
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-zinc-800 p-8 rounded-2xl border border-zinc-700">
            <div className="flex items-center mb-6">
              <Target className="w-10 h-10 text-red-500 mr-4" />
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-zinc-300">
              To deliver reliable, innovative safety solutions that protect lives and property. We commit to excellence in every installation, maintenance service, and client interaction.
            </p>
          </div>
          <div className="bg-zinc-800 p-8 rounded-2xl border border-zinc-700">
            <div className="flex items-center mb-6">
              <Gauge className="w-10 h-10 text-red-500 mr-4" />
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-zinc-300">
              To be the foremost provider of integrated safety systems in the region, recognized for our technical expertise, reliability, and commitment to community safety.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <HeartHandshake className="w-8 h-8 mx-auto" />, title: "Integrity", desc: "Honest dealings in all aspects of our business" },
              { icon: <Flame className="w-8 h-8 mx-auto" />, title: "Expertise", desc: "Deep technical knowledge in our specialty areas" },
              { icon: <ShieldCheck className="w-8 h-8 mx-auto" />, title: "Reliability", desc: "Systems you can count on when it matters most" },
            ].map((value, i) => (
              <div key={i} className="bg-zinc-800 p-6 rounded-xl">
                <div className="text-red-500 mb-3">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-zinc-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to protect what matters?</h3>
          <div 
            onClick={() => router.push(routes.solutions)}
            className="inline-block px-8 py-3 bg-red-700 hover:bg-red-600 rounded-lg font-medium text-lg"
          >
            Explore Our Solutions
          </div>
        </div>
      </section>
    </main>
  );
}