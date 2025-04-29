'use client';

import React from 'react';

const ContactUs = () => {
  return (
    <main className="min-h-screen bg-zinc-900 text-white px-6 py-12">
      <section className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white"><span className='text-red-700'>Contact</span> Us</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            We're ready to assist you with your fire safety needs. Reach out to us anytime!
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Phone</h3>
            {/* <p className="text-zinc-400">+63 966 168 7889</p> */}
            <p className="text-zinc-400">+63 956 763 6471</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Email</h3>
            <p className="text-zinc-400">jianzinsafetygears@gmail.com</p>
            {/* <p className="text-zinc-400">JS_solutions@gmail.com</p> */}
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Address</h3>
            <p className="text-zinc-400">Marcelo, H. Del Pilar St., Molo, Iloilo City, Philippines</p>
            <p className="text-zinc-400">San Jose, Antique, Philippines</p>

          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-zinc-800 p-8 rounded-2xl shadow-md max-w-4xl mx-auto">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-lg bg-zinc-700 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-lg bg-zinc-700 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 rounded-lg bg-zinc-700 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-4 rounded-lg bg-zinc-700 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 min-h-[150px]"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map */}
        <div className="mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1745809389331!6m8!1m7!1s5Qq4iB6QX7bJVF9q2SOU2Q!2m2!1d10.69664662048229!2d122.545508202675!3f331.6199603094959!4f-4.774099280336657!5f0.7820865974627469" // Replace with your real map embed link
            width="100%"
            height="450"
            className="rounded-2xl border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
