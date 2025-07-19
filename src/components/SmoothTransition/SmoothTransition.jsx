import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const SmoothTransition = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.8,
  className = '',
  viewport = { once: true, amount: 0.3 }
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
      scale: direction === 'scale' ? 0.9 : 1,
      rotateX: direction === 'flip' ? -90 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
};

export default SmoothTransition;
