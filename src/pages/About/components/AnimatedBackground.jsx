import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Forest-themed floating elements */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, rgba(21, 128, 61, 0.08) 50%, transparent 70%)',
          top: '-20%',
          right: '-10%',
          filter: 'blur(60px)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.04) 0%, rgba(21, 128, 61, 0.02) 40%, transparent 60%)',
          bottom: '-10%',
          left: '-5%'
        }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -45, 0],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Animated dots pattern */}
      <div className="absolute inset-0" style={{ opacity: 0.03 }}>
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #22c55e 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating leafy elements */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-16 h-16"
          style={{
            background: `radial-gradient(circle, rgba(34, 197, 94, ${0.02 + index * 0.01}) 0%, transparent 70%)`,
            left: `${15 + index * 20}%`,
            top: `${10 + index * 15}%`
          }}
          animate={{
            y: [0, 30, 0],
            x: [0, index % 2 === 0 ? 20 : -20, 0],
            rotate: [0, index % 2 === 0 ? 45 : -45, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5
          }}
        />
      ))}

      {/* Bottom decorative wave */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to top, rgba(34, 197, 94, 0.03), transparent)'
        }}
        animate={{
          y: [0, 10, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Optional light rays effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(45deg, transparent 65%, rgba(34, 197, 94, 0.03) 100%)'
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
