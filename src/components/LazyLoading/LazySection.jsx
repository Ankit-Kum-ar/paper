import React, { useState, useRef, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const LazySection = ({ 
  children, 
  className = '',
  threshold = 0.1,
  rootMargin = '100px',
  fallback = null,
  animation = 'fadeUp',
  delay = 0,
  staggerChildren = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, delay]);

  const getAnimationVariants = () => {
    const baseVariants = {
      fadeUp: {
        hidden: { opacity: 0, y: 60 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.8,
            ease: "easeOut",
            staggerChildren,
            delayChildren: 0.2
          }
        }
      },
      fadeIn: {
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: {
            duration: 0.6,
            ease: "easeOut",
            staggerChildren,
            delayChildren: 0.2
          }
        }
      },
      slideLeft: {
        hidden: { opacity: 0, x: -100 },
        visible: { 
          opacity: 1, 
          x: 0,
          transition: {
            duration: 0.8,
            ease: "easeOut",
            staggerChildren,
            delayChildren: 0.2
          }
        }
      },
      slideRight: {
        hidden: { opacity: 0, x: 100 },
        visible: { 
          opacity: 1, 
          x: 0,
          transition: {
            duration: 0.8,
            ease: "easeOut",
            staggerChildren,
            delayChildren: 0.2
          }
        }
      },
      scale: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
          opacity: 1, 
          scale: 1,
          transition: {
            duration: 0.8,
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
            staggerChildren,
            delayChildren: 0.2
          }
        }
      }
    };

    return baseVariants[animation] || baseVariants.fadeUp;
  };

  const variants = getAnimationVariants();

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const DefaultFallback = () => (
    <div className="w-full h-64 bg-gray-100 animate-pulse rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto mb-2 animate-bounce"></div>
        <div className="text-gray-400 text-sm">Loading...</div>
      </div>
    </div>
  );

  return (
    <div ref={sectionRef} className={className}>
      {!isVisible && fallback && fallback}
      {!isVisible && !fallback && <DefaultFallback />}
      
      {isVisible && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          {React.Children.map(children, (child, index) => (
            <motion.div
              key={index}
              variants={childVariants}
            >
              {child}
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default LazySection;
