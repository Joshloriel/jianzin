'use client';

import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { db } from '@/network/firebase/firebase';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, 'contactMessages'), {
        ...formData,
        timestamp: new Date(),
        status: 'unread'
      });

      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    {
      icon: <Phone className="w-6 h-6 text-red-600" />,
      title: "Phone",
      content: "+63 956 763 6471"
    },
    {
      icon: <Mail className="w-6 h-6 text-red-600" />,
      title: "Email",
      content: "jianzinsafetygears@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-600" />,
      title: "Address",
      content: [
        "Marcelo, H. Del Pilar St., Molo, Iloilo City, Philippines",
        "San Jose, Antique, Philippines"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-950 text-white px-4 sm:px-6 py-12">
      <section className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <motion.div 
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            <span className='text-red-600'>Contact</span> Us
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            We're ready to assist you with your fire safety needs. Reach out to us anytime!
          </p>
        </motion.div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-8">
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-700/50 hover:border-red-600/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-zinc-700 rounded-full">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                {Array.isArray(item.content) ? (
                  <div className="space-y-1">
                    {item.content.map((line, i) => (
                      <p key={i} className="text-zinc-400 text-sm">{line}</p>
                    ))}
                  </div>
                ) : (
                  <p className="text-zinc-400 text-sm">{item.content}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          className="bg-zinc-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-zinc-700/50 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg bg-zinc-700/50 border border-zinc-600 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg bg-zinc-700/50 border border-zinc-600 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-zinc-700/50 border border-zinc-600 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-zinc-700/50 border border-zinc-600 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all min-h-[150px]"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-6 rounded-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-5 h-5" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>

        {/* Map */}
        <motion.div
          className="mt-12 rounded-2xl overflow-hidden border border-zinc-700/50 shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1745809389331!6m8!1m7!1s5Qq4iB6QX7bJVF9q2SOU2Q!2m2!1d10.69664662048229!2d122.545508202675!3f331.6199603094959!4f-4.774099280336657!5f0.7820865974627469"
            width="100%"
            height="450"
            className="border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </section>
    </main>
  );
};

export default ContactUs;