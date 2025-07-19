import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const FadeInUp = ({ 
  children, 
  delay = 0, 
  duration = 0.6,
  className = '',
  viewport = { once: true, amount: 0.3 }
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut"
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

export default FadeInUp;
