import React from 'react';
import Image from 'next/image';
import PicturePlaceholder from '../../../public/img/placeholder.jpg';
import { Flame, Camera, Sun, AlarmSmoke } from 'lucide-react';
import Link from 'next/link';

export default function ProductsPage() {
  const solutions = [
    {
      id: 'fire-safety',
      title: 'Fire Safety Systems',
      icon: <Flame className="w-10 h-10 text-red-600" />,
      description: 'Comprehensive fire detection and suppression solutions',
      items: [
        'Fire Detection and Alarm Systems (FDAS)',
        'Automatic Sprinkler Systems',
        'Smoke Detectors and Alarms',
        'Fire Extinguishers (All Types)',
        'Emergency Lighting'
      ],
      image: PicturePlaceholder
    },
    {
      id: 'surveillance',
      title: 'Surveillance Systems',
      icon: <Camera className="w-10 h-10 text-red-600" />,
      description: 'Advanced security monitoring solutions',
      items: [
        'HD CCTV Camera Systems',
        'IP Network Cameras',
        'NVR/DVR Systems',
        'Remote Monitoring Setup',
        'Night Vision Cameras'
      ],
      image: PicturePlaceholder
    },
    {
      id: 'solar',
      title: 'Solar Solutions',
      icon: <Sun className="w-10 h-10 text-red-600" />,
      description: 'Sustainable lighting for public and private spaces',
      items: [
        'Solar Street Lights',
        'Public Space Lighting',
        'LGU Lighting Projects',
        'Solar Power Systems',
        'Energy Saving Solutions'
      ],
      image: PicturePlaceholder
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      {/* Hero */}
      <section className="relative h-[40vh] bg-zinc-800 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image 
          src={PicturePlaceholder} 
          alt="Our Products" 
          fill
          className="object-cover"
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Products & Solutions</h1>
          <p className="text-xl text-zinc-300">Specialized systems for comprehensive protection</p>
        </div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-0 bg-zinc-800 z-10 border-b border-zinc-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto py-4 gap-6">
            {solutions.map((solution) => (
              <Link 
                key={solution.id}
                href={`#${solution.id}`}
                className="whitespace-nowrap px-4 py-2 bg-zinc-900 hover:bg-zinc-700 rounded-lg transition-colors"
                scroll={true}
              >
                {solution.title}
              </Link>
            ))}
            <Link 
              href="#custom-orders"
              className="whitespace-nowrap px-4 py-2 bg-zinc-900 hover:bg-zinc-700 rounded-lg transition-colors"
              scroll={true}
            >
              Custom Orders
            </Link>
          </div>
        </div>
      </nav>

      {/* Solutions Sections */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {solutions.map((solution) => (
          <div key={solution.id} id={solution.id} className="scroll-mt-20 mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-red-900/20 p-2 rounded-lg mr-4">
                    {solution.icon}
                  </div>
                  <h2 className="text-3xl font-bold">{solution.title}</h2>
                </div>
                <p className="text-zinc-300 text-lg mb-6">{solution.description}</p>
                <ul className="space-y-3 mb-8">
                  {solution.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-zinc-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="px-6 py-2 bg-red-700 hover:bg-red-600 rounded-lg">
                  Request Quote
                </button>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden">
                <Image 
                  src={solution.image} 
                  alt={solution.title} 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Custom Orders */}
        <div id="custom-orders" className="scroll-mt-20 bg-zinc-800 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">Custom Equipment Orders</h2>
          <p className="text-zinc-300 mb-6">
            Can't find what you need in our standard offerings? We specialize in sourcing specialized fire safety and security equipment upon request.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-400">We Can Source:</h3>
              <ul className="space-y-3">
                {[
                  "Specialty fire suppression systems",
                  "Industrial-grade safety equipment",
                  "Bulk orders for LGUs and corporations",
                  "Hard-to-find replacement parts",
                  "International brand equipment"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Request Special Equipment</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white"
                />
                <textarea 
                  placeholder="Describe the equipment you need" 
                  rows={4}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white"
                ></textarea>
                <button 
                  type="submit"
                  className="px-6 py-2 bg-red-700 hover:bg-red-600 rounded-lg w-full"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}