import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const SlideInRight = ({ 
  children, 
  delay = 0, 
  duration = 0.8,
  className = '',
  viewport = { once: true, amount: 0.3 }
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: 60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
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

export default SlideInRight;
