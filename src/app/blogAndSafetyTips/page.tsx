'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { articles, safetyTips } from '../../components/dummy/blogAndSafetyTips';
import { Search, BookOpen, ShieldAlert, Flame, Droplets, ArrowRight } from 'lucide-react';
import ImgPlacehonder from '../../../public/img/placeholder.jpg';


const page = () => {
  const [activeTab, setActiveTab] = useState<'blog' | 'safety-tips'>('blog');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter((article: { title: string; content: string; }) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTips = safetyTips.filter((tip: { title: string; content: string; }) =>
    tip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tip.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 bg-zinc-800 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-red-900/20 z-10" />
        <Image 
          src={ImgPlacehonder} // Replace with your image
          alt="Safety Tips & Blog"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Safety Resources</h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto">
            Expert advice and latest updates on fire safety and prevention
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex border-b border-zinc-700 mb-8">
          <button
            className={`flex items-center px-6 py-3 font-medium ${activeTab === 'blog' ? 'text-red-500 border-b-2 border-red-500' : 'text-zinc-400 hover:text-white'}`}
            onClick={() => setActiveTab('blog')}
          >
            <BookOpen className="w-5 h-5 mr-2" /> Blog
          </button>
          <button
            className={`flex items-center px-6 py-3 font-medium ${activeTab === 'safety-tips' ? 'text-red-500 border-b-2 border-red-500' : 'text-zinc-400 hover:text-white'}`}
            onClick={() => setActiveTab('safety-tips')}
          >
            <ShieldAlert className="w-5 h-5 mr-2" /> Safety Tips
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-12 max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-zinc-500" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
            placeholder="Search articles and tips..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Blog Articles */}
      {activeTab === 'blog' && (
        <section className="py-12 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
              <div className="w-20 h-1 bg-red-600 mb-6"></div>
              <p className="text-zinc-400 max-w-3xl">
                Stay informed with our expert insights on fire safety and technology
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={index}
                  className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative h-48">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 bg-red-700 text-white px-3 py-1 text-sm font-medium">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-zinc-400 text-sm mb-3">
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime} read</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                    <p className="text-zinc-400 mb-4 line-clamp-3">{article.content}</p>
                    <button className="text-red-500 hover:text-red-400 font-medium flex items-center">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Safety Tips */}
      {activeTab === 'safety-tips' && (
        <section className="py-12 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Essential Safety Tips</h2>
              <div className="w-20 h-1 bg-red-600 mb-6"></div>
              <p className="text-zinc-400 max-w-3xl">
                Practical advice to keep your home and workplace safe from fire hazards
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredTips.map((tip, index) => (
                <motion.div
                  key={index}
                  className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      {tip.category === 'Fire Prevention' && (
                        <Flame className="w-8 h-8 text-red-500 mr-3" />
                      )}
                      {tip.category === 'Emergency Preparedness' && (
                        <Droplets className="w-8 h-8 text-red-500 mr-3" />
                      )}
                      <span className="bg-red-900/30 text-red-500 px-3 py-1 rounded-full text-sm font-medium">
                        {tip.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{tip.title}</h3>
                    <div className="prose prose-invert max-w-none">
                      {tip.content.split('\n').map((paragraph, i) => (
                        <p key={i} className="text-zinc-400 mb-4">{paragraph}</p>
                      ))}
                    </div>
                    {tip.additionalInfo && (
                      <div className="bg-zinc-700/50 p-4 rounded-lg mt-4">
                        <h4 className="font-bold text-red-400 mb-2">Important Note:</h4>
                        <p className="text-zinc-300">{tip.additionalInfo}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default page;