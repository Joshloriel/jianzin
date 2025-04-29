import React from "react";
import Image, { StaticImageData } from "next/image";
import ImgPlaceholder from "../../../public/img/placeholder.jpg";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Star, StarHalf, ArrowRight } from "lucide-react";
import { JIANZIN_TEAM } from "../dummy/team";
import { routes } from "@/network/routes";

// Types for Reviews
type Review = {
  name: string;
  feedback: string;
  stars: number; // e.g., 4.5 for half stars
  image: StaticImageData;
};

// Types for Projects
type Project = {
  title: string;
  description: string;
  image: StaticImageData;
};

function Landing() {
  const router = useRouter();
  type TeamMember = {
    name: string;
    role: string;
    email: string;
    image: StaticImageData;
  };

  const reviews: Review[] = [
    {
      name: "John Doe",
      feedback:
        "Jianzin provided excellent service! Their fire safety systems are top-notch, and their team is very professional.",
      stars: 5,
      image: ImgPlaceholder,
    },
    {
      name: "Jane Smith",
      feedback:
        "We feel much safer knowing that Jianzin has installed our fire safety equipment. Highly recommended!",
      stars: 4.5,
      image: ImgPlaceholder,
    },
    {
      name: "Mark Johnson",
      feedback:
        "The team was quick, efficient, and extremely knowledgeable. Jianzin exceeded our expectations!",
      stars: 5,
      image: ImgPlaceholder,
    },
  ];

  const projects: Project[] = [
    {
      title: "Project Alpha",
      description:
        "Installed advanced fire suppression systems for a corporate office.",
      image: ImgPlaceholder,
    },
    {
      title: "Project Beta",
      description: "Deployed CCTV and alarm systems in a residential complex.",
      image: ImgPlaceholder,
    },
    {
      title: "Project Gamma",
      description: "Fire safety training and equipment installation at a school.",
      image: ImgPlaceholder,
    },
  ];

  return (
    <div className="w-full bg-zinc-800 overflow-hidden text-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-zinc-700 via-zinc-500 to-zinc-900 h-[92vh] w-full flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src={ImgPlaceholder}
            alt="Hero Background"
            className="object-cover w-full h-full blur-md opacity-50"
          />
        </div>

        {/* Content */}
        <div className="relative text-center px-4 max-w-6xl mx-auto">
          <motion.h1 
            className="text-3xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-red-600">JIANZIN FIRE</span> & TECH SOLUTIONS
          </motion.h1>
          <motion.h2 
            className="text-xl md:text-2xl mb-8 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Protecting What Matters Most — Fire Safety You Can Trust */}
            Smart Protection for What Matters Most — Fire & Tech Solutions You Can Trust
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Your Partner in Fire Safety Devices, Systems, and Compliance Solutions. */}
            Securing Lives and Infrastructure with Fire Safety and Smart Technologies
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button 
              className="bg-red-800 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => router.push("/contact")}
            >
              Request Quotation
            </button>
            <button 
              className="bg-zinc-700 hover:bg-zinc-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => router.push("/about")}
            >
              Learn More
            </button>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full h-auto flex flex-col md:flex-row items-center justify-center md:gap-8 p-12 pt-16 bg-zinc-800">
        {/* Image on the left */}
        <motion.div 
          className="w-full md:w-1/2 h-64 md:h-96 flex items-center justify-center relative overflow-hidden rounded-xl shadow-2xl"
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image 
            src={ImgPlaceholder} 
            alt="About Jianzin" 
            className="object-cover w-full h-full"
          />
        </motion.div>
        
        {/* Text on the right */}
        <div className="w-full md:w-1/2 px-4 md:px-8 flex flex-col justify-center mt-8 md:mt-0">
          <motion.div 
            className="text-2xl md:text-4xl font-bold leading-tight md:leading-[3.5rem] mb-6"
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8}}
          >
            <span className="text-red-600">Our Vision</span> and Mission
          </motion.div>
         <motion.div 
            className="text-gray-300 mb-6 space-y-4"
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p>
              At Jianzin, we envision a future where communities and organizations thrive in safe, secure, 
              and sustainable environments—powered by smart safety systems and innovative technology.
            </p>
            <p>
              Our mission is to provide end-to-end solutions in fire protection, surveillance, solar energy, 
              and technical infrastructure. From fire alarms and extinguishers to solar panel systems, CCTV, 
              and LGU-targeted street lighting, we deliver tailored systems that protect, empower, and adapt 
              to the unique needs of every client.
            </p>
            <p>
              We are committed to being the region’s most reliable partner for safety and tech solutions—
              driven by innovation, responsiveness, and excellence in execution.
            </p>
          </motion.div>
          <motion.button
            className="self-start bg-red-800 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            onClick={() => router.push("/about")}
          >
            Read More
          </motion.button>
        </div>
      </div>

      {/* Team Section */}
      <div className="w-full py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Meet <span className="text-red-600">Our Team</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our dedicated professionals bring decades of combined experience in fire safety and protection services.
          </motion.p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {JIANZIN_TEAM.slice(0, 4).map((member, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center bg-zinc-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Profile Image */}
                <div className="relative w-32 h-32 mb-4 group">
                  <div className="absolute inset-0 bg-red-800 rounded-full scale-110 -z-10 group-hover:scale-125 transition-transform duration-300"></div>
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="rounded-full object-cover border-2 border-zinc-700 group-hover:border-red-700 transition-colors duration-300"
                    width={128}
                    height={128}
                  />
                </div>

                {/* Name and Role */}
                <h3 className="mt-2 text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-400 mt-1">{member.role}</p>
                
                {/* Email Address */}
                <a
                  href={`mailto:${member.email}`}
                  className="text-sm text-red-600 hover:text-red-500 font-medium mt-3 transition-colors duration-300"
                >
                  {member.email}
                </a>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <button
              onClick={() => router.push(routes.teamMembers)}
              className="flex cursor-pointer items-center gap-2 bg-red-800 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
            >
              View Full Team <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="w-full py-16 bg-zinc-800">
        <div className="max-w-7xl mx-auto px-4 h-[70vh]">
          <motion.div 
            className="text-center mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-3">
              Our <span className="text-red-600">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our recent work and see how we've helped clients enhance their fire safety measures.
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
                {/* <div className="bg-zinc-900 p-4">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{project.description}</p>
                </div> */}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-3">
              Client <span className="text-red-600">Testimonials</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hear what our valued clients have to say about our services.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="bg-zinc-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(review.stars)
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-500"
                        }`}
                      />
                    ))}
                  {review.stars % 1 !== 0 && (
                    <StarHalf className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  )}
                </div>
                <p className="text-gray-300 italic mb-6">"{review.feedback}"</p>
                <div className="flex items-center">
                  <Image
                    src={review.image}
                    alt={review.name}
                    className="rounded-full mr-4"
                    width={48}
                    height={48}
                  />
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-sm text-gray-400">Satisfied Client</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full py-16 bg-gradient-to-r from-zinc-800 to-zinc-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to <span className="text-red-600">Protect</span> Your Property?
          </motion.h2>
          <motion.p 
            className="text-gray-300 mb-8 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Contact us today for a free consultation and let our experts design a fire safety solution tailored to your needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button 
              className="bg-red-800 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => router.push("/contact")}
            >
              Get Started Now
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
export default Landing;