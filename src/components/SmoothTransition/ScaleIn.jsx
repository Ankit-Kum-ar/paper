import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const ScaleIn = ({ 
  children, 
  delay = 0, 
  duration = 0.6,
  className = '',
  viewport = { once: true, amount: 0.3 }
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: "easeOut",
        type: "spring",
        stiffness: 120,
        damping: 15
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

export default ScaleIn;
