import React, { useState, useRef, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const LazyLoading = ({ 
  children, 
  fallback = null, 
  threshold = 0.1, 
  rootMargin = '50px',
  className = '',
  delay = 0,
  animation = 'fade',
  once = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Add a small delay for smooth loading
          setTimeout(() => setIsLoaded(true), delay);
          
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
          setIsLoaded(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, delay, once]);

  const getAnimationVariants = () => {
    switch (animation) {
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1, 
            transition: { duration: 0.6, ease: "easeOut" } 
          }
        };
      case 'slideUp':
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.8, ease: "easeOut" } 
          }
        };
      case 'slideDown':
        return {
          hidden: { opacity: 0, y: -50 },
          visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.8, ease: "easeOut" } 
          }
        };
      case 'slideLeft':
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { 
            opacity: 1, 
            x: 0, 
            transition: { duration: 0.8, ease: "easeOut" } 
          }
        };
      case 'slideRight':
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { 
            opacity: 1, 
            x: 0, 
            transition: { duration: 0.8, ease: "easeOut" } 
          }
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { 
            opacity: 1, 
            scale: 1, 
            transition: { 
              duration: 0.8, 
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            } 
          }
        };
      case 'blur':
        return {
          hidden: { opacity: 0, filter: 'blur(10px)' },
          visible: { 
            opacity: 1, 
            filter: 'blur(0px)', 
            transition: { duration: 1, ease: "easeOut" } 
          }
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1, 
            transition: { duration: 0.6, ease: "easeOut" } 
          }
        };
    }
  };

  const variants = getAnimationVariants();

  return (
    <div ref={elementRef} className={className}>
      <AnimatePresence mode="wait">
        {!isVisible && fallback && (
          <motion.div
            key="fallback"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {fallback}
          </motion.div>
        )}
        {isLoaded && (
          <motion.div
            key="content"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LazyLoading;
