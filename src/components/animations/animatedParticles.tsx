import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Define the type for a particle
interface Particle {
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const AnimatedParticles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles on the client side
    const generatedParticles = Array.from({ length: 10 }, () => ({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
      size: 10 + Math.random() * 20,
      duration: 10 + Math.random() * 20,
      delay: Math.random() * 5,
    }));

    setParticles(generatedParticles);
  }, []);

  return (
    <div className="absolute inset-0 z-20">
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute bg-red-600/20 rounded-full"
            initial={{
              opacity: 0,
              x: 0,
              y: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: [0, 0.3, 0],
              x: particle.x,
              y: particle.y,
              scale: 1.5,
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: "reverse",
              delay: particle.delay,
            }}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedParticles;