import React, { useState, useRef, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const LazyContent = ({ 
  children, 
  className = '',
  threshold = 0.1,
  rootMargin = '50px',
  placeholder = null,
  loadingComponent = null,
  errorComponent = null,
  retryButton = true,
  maxRetries = 3,
  retryDelay = 1000
}) => {
  const [loadingState, setLoadingState] = useState('idle'); // idle, loading, loaded, error
  const [retryCount, setRetryCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setLoadingState('loading');
          observer.disconnect();
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
  }, [threshold, rootMargin]);

  useEffect(() => {
    if (isVisible && loadingState === 'loading') {
      // Simulate content loading
      const timer = setTimeout(() => {
        if (Math.random() > 0.1) { // 90% success rate
          setLoadingState('loaded');
        } else {
          setLoadingState('error');
        }
      }, 500 + Math.random() * 1000); // Random delay between 500-1500ms

      return () => clearTimeout(timer);
    }
  }, [isVisible, loadingState]);

  const handleRetry = () => {
    if (retryCount < maxRetries) {
      setRetryCount(prev => prev + 1);
      setLoadingState('loading');
      
      setTimeout(() => {
        setLoadingState('loaded');
      }, retryDelay);
    }
  };

  const DefaultPlaceholder = () => (
    <div className="w-full h-32 bg-gray-100 rounded-lg animate-pulse"></div>
  );

  const DefaultLoadingComponent = () => (
    <motion.div
      className="w-full h-32 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-lg flex items-center justify-center"
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{
        backgroundSize: "200% 100%"
      }}
    >
      <div className="flex items-center space-x-2">
        <motion.div
          className="w-2 h-2 bg-green-500 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="w-2 h-2 bg-green-500 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
        />
        <motion.div
          className="w-2 h-2 bg-green-500 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
        />
      </div>
    </motion.div>
  );

  const DefaultErrorComponent = () => (
    <motion.div
      className="w-full h-32 bg-red-50 border border-red-200 rounded-lg flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center">
        <div className="text-red-500 mb-2">⚠️ Failed to load content</div>
        {retryButton && retryCount < maxRetries && (
          <button
            onClick={handleRetry}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Retry ({maxRetries - retryCount} left)
          </button>
        )}
      </div>
    </motion.div>
  );

  const contentVariants = {
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

  return (
    <div ref={elementRef} className={className}>
      <AnimatePresence mode="wait">
        {loadingState === 'idle' && (
          <motion.div
            key="placeholder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {placeholder || <DefaultPlaceholder />}
          </motion.div>
        )}
        
        {loadingState === 'loading' && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {loadingComponent || <DefaultLoadingComponent />}
          </motion.div>
        )}
        
        {loadingState === 'error' && (
          <motion.div
            key="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {errorComponent || <DefaultErrorComponent />}
          </motion.div>
        )}
        
        {loadingState === 'loaded' && (
          <motion.div
            key="content"
            variants={contentVariants}
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

export default LazyContent;
