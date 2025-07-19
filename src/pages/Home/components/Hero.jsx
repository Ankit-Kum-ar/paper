import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { SlideInLeft, SlideInRight, FadeInUp, ScaleIn } from '../../../components/SmoothTransition';

const Hero = () => {
  // Button variants
  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Text variants with reduced motion
  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-8, 8, -8],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Flipper text animation with reduced motion
  const flipperVariants = {
    hidden: { 
      rotateX: -90,
      opacity: 0
    },
    visible: (i) => ({
      rotateX: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  // Enhanced image animations with reduced motion
  const paperStackVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const floatingBadgeVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        delay: 1,
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="hero min-h-screen bg-base-100 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Paper Elements */}
        <motion.div
          className="absolute top-20 left-10 w-12 h-16 bg-green-100 rounded-lg shadow-sm opacity-60"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-40 right-20 w-10 h-14 bg-green-50 rounded-lg shadow-sm opacity-60"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '1s' }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-8 h-12 bg-green-100 rounded-lg shadow-sm opacity-60"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="hero-content flex-col-reverse lg:flex-row-reverse max-w-7xl mx-auto px-4 sm:px-6 relative z-10 gap-8 lg:gap-16">
        {/* Enhanced Hero Image */}
        <SlideInRight delay={0.2} duration={1} className="lg:w-1/2 flex justify-center items-center mb-4 lg:mb-0 mt-8 sm:mt-12">
          <motion.div
            className="relative w-full max-w-md lg:max-w-lg"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Enhanced Main Hero Image */}
            <motion.div
              className="relative overflow-hidden rounded-3xl shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(34, 197, 94, 0.2)'
              }}
              variants={paperStackVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ 
                boxShadow: "0 35px 60px rgba(45, 80, 22, 0.25)",
                y: -8,
                scale: 1.02
              }}
              transition={{ duration: 0.5 }}
            >
              {/* Enhanced Paper Stack with Better UX */}
              <div className="relative p-10 h-96 flex items-center justify-center">
                {/* Interactive Paper Stack */}
                <div className="relative">
                  {/* Back Papers with Enhanced Animations */}
                  <motion.div
                    className="absolute w-52 h-64 bg-white rounded-xl shadow-xl border-2 border-green-50"
                    style={{ 
                      transform: 'rotate(-6deg) translate(-12px, 12px)',
                      zIndex: 1
                    }}
                    animate={{ 
                      rotate: [-6, -4, -6],
                      x: [-12, -10, -12],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ scale: 1.05, rotate: -2 }}
                  >
                    <div className="p-4 h-full flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="h-3 bg-green-100 rounded-full w-3/4"></div>
                        <div className="h-2 bg-green-50 rounded-full w-full"></div>
                        <div className="h-2 bg-green-50 rounded-full w-5/6"></div>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-green-200 rounded-full mx-auto"></div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="absolute w-52 h-64 bg-white rounded-xl shadow-xl border-2 border-green-50"
                    style={{ 
                      transform: 'rotate(4deg) translate(10px, 6px)',
                      zIndex: 2
                    }}
                    animate={{ 
                      rotate: [4, 6, 4],
                      x: [10, 12, 10],
                      scale: [1, 1.01, 1]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    whileHover={{ scale: 1.05, rotate: 8 }}
                  >
                    <div className="p-4 h-full flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="h-3 bg-green-150 rounded-full w-4/5"></div>
                        <div className="h-2 bg-green-75 rounded-full w-full"></div>
                        <div className="h-2 bg-green-75 rounded-full w-3/4"></div>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-green-300 rounded-full mx-auto"></div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Enhanced Front Main Paper */}
                  <motion.div
                    className="relative w-52 h-64 bg-white rounded-xl shadow-2xl border-2 border-green-100"
                    style={{ zIndex: 3 }}
                    animate={{ 
                      y: [0, -4, 0],
                      rotate: [0, 1, 0],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ 
                      scale: 1.08, 
                      y: -5,
                      boxShadow: "0 20px 40px rgba(45, 80, 22, 0.3)"
                    }}
                  >
                    {/* Enhanced Paper Content */}
                    <div className="p-6 h-full flex flex-col justify-between">
                      <div className="space-y-3">
                        <motion.div 
                          className="h-3 bg-green-200 rounded-full w-3/4"
                          initial={{ width: 0 }}
                          animate={{ width: '75%' }}
                          transition={{ delay: 2, duration: 1 }}
                        />
                        <motion.div 
                          className="h-2 bg-green-100 rounded-full w-full"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ delay: 2.2, duration: 1 }}
                        />
                        <motion.div 
                          className="h-2 bg-green-100 rounded-full w-5/6"
                          initial={{ width: 0 }}
                          animate={{ width: '83%' }}
                          transition={{ delay: 2.4, duration: 1 }}
                        />
                        <motion.div 
                          className="h-2 bg-green-50 rounded-full w-2/3"
                          initial={{ width: 0 }}
                          animate={{ width: '66%' }}
                          transition={{ delay: 2.6, duration: 1 }}
                        />
                      </div>
                      
                      {/* Enhanced Logo/Brand Area */}
                      <div className="flex items-center justify-center">
                        <motion.div
                          className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg"
                          whileHover={{ 
                            scale: 1.2, 
                            rotate: 360,
                            boxShadow: "0 0 30px rgba(34, 197, 94, 0.6)"
                          }}
                          transition={{ duration: 0.8 }}
                          animate={{
                            boxShadow: [
                              "0 0 0 0 rgba(34, 197, 94, 0.7)",
                              "0 0 0 10px rgba(34, 197, 94, 0)",
                              "0 0 0 0 rgba(34, 197, 94, 0)"
                            ]
                          }}
                        >
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </motion.div>
                      </div>
                      
                      <div className="text-center mt-4">
                        <motion.div 
                          className="h-2 bg-green-700 rounded-full w-24 mx-auto"
                          initial={{ width: 0 }}
                          animate={{ width: '6rem' }}
                          transition={{ delay: 3, duration: 0.8 }}
                        />
                        <motion.div 
                          className="h-1 bg-green-300 rounded-full w-20 mx-auto mt-2"
                          initial={{ width: 0 }}
                          animate={{ width: '5rem' }}
                          transition={{ delay: 3.2, duration: 0.8 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Enhanced Floating Elements */}
                <motion.div
                  className="absolute top-6 right-6 w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-full opacity-70 shadow-lg"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 0.9, 0.7],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  whileHover={{ scale: 1.5, opacity: 1 }}
                />
                
                <motion.div
                  className="absolute bottom-8 left-6 w-8 h-8 bg-gradient-to-br from-green-300 to-green-400 rounded-full opacity-60 shadow-lg"
                  animate={{ 
                    scale: [1, 1.4, 1],
                    opacity: [0.6, 0.8, 0.6],
                    rotate: [0, -180, -360]
                  }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                  whileHover={{ scale: 1.6, opacity: 1 }}
                />

                {/* New Interactive Element */}
                <motion.div
                  className="absolute top-1/2 left-2 w-6 h-6 bg-gradient-to-br from-green-200 to-green-300 rounded-full opacity-50"
                  animate={{ 
                    x: [0, 10, 0],
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                />
              </div>
            </motion.div>

            {/* Enhanced Floating Quality Badge */}
            <motion.div
              className="absolute -top-6 -right-6 bg-gradient-to-br from-green-700 to-green-800 text-white rounded-full px-5 py-3 text-sm font-bold shadow-xl z-10 border-2 border-white"
              variants={floatingBadgeVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <motion.span
                animate={{ 
                  textShadow: [
                    "0 0 0 rgba(255,255,255,0)",
                    "0 0 10px rgba(255,255,255,0.5)",
                    "0 0 0 rgba(255,255,255,0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Premium
              </motion.span>
            </motion.div>

            {/* Enhanced Floating Stats Badge */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white border-2 border-green-200 rounded-full px-5 py-3 text-sm font-bold shadow-xl z-10"
              initial={{ scale: 0, x: -20, rotate: -45 }}
              animate={{ scale: 1, x: 0, rotate: 0 }}
              transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.15, 
                y: -3,
                boxShadow: "0 15px 30px rgba(45, 80, 22, 0.2)"
              }}
            >
              <motion.span 
                className="text-green-700"
                animate={{ 
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                1000+
              </motion.span>
              <span className="text-gray-600 ml-1">Products</span>
            </motion.div>

            {/* New Achievement Badge */}
            <motion.div
              className="absolute top-1/2 -left-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full px-3 py-2 text-xs font-semibold shadow-lg z-10 transform -rotate-12"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 2, duration: 0.6 }}
              whileHover={{ scale: 1.1, rotate: 0 }}
            >
              Trusted
            </motion.div>
          </motion.div>
        </SlideInRight>

        {/* Hero Content */}
        <SlideInLeft delay={0.4} duration={1} className="lg:w-1/2 text-center lg:text-left px-4 sm:px-6 lg:px-0">
          <FadeInUp delay={0.6}>
            <motion.div
              className="badge bg-green-100 text-green-800 border-green-200 mb-4 mt-4 sm:mt-6 lg:mt-0"
              variants={textVariants}
            >
              Chaudhary Paper Mart
            </motion.div>
          </FadeInUp>

          <ScaleIn delay={0.8}>
            <motion.h1
              className="text-4xl lg:text-5xl font-bold mb-6 text-base-content"
              variants={textVariants}
            >
              {/* Flipper Text Effect */}
              <div className="inline-block">
                {['Your', 'Premium'].map((word, wordIndex) => (
                  <span key={wordIndex} className="inline-block mr-4">
                    {word.split('').map((char, charIndex) => (
                      <motion.span
                        key={charIndex}
                        className="inline-block"
                        custom={wordIndex * 10 + charIndex}
                        variants={flipperVariants}
                        initial="hidden"
                        animate="visible"
                        style={{
                          transformOrigin: 'center center',
                          perspective: '1000px'
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </div>
              <br />
              <motion.span
                className="text-green-700 inline-block"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(45, 80, 22, 0.5)"
                }}
              >
                Paper
              </motion.span>{' '}
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.6 }}
              >
                Destination
              </motion.span>
            </motion.h1>
          </ScaleIn>

          <FadeInUp delay={1}>
            <motion.p
              className="text-lg text-base-content/80 mb-8 max-w-lg"
              variants={textVariants}
            >
              Discover high-quality papers, stationery, and office supplies. 
              From premium printing to creative materials - everything you need.
            </motion.p>
          </FadeInUp>

          {/* Action Buttons */}
          <FadeInUp delay={1.2}>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              variants={textVariants}
            >
              <motion.button
                className="btn text-white border-none shadow-lg"
                style={{ backgroundColor: '#2D5016' }}
                variants={buttonVariants}
                whileHover={{ 
                  backgroundColor: '#3F6B26',
                  scale: 1.05,
                  boxShadow: "0 8px 25px rgba(45, 80, 22, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Shop Now
              </motion.button>

              <motion.button
                className="btn btn-outline border-2"
                style={{ 
                  borderColor: '#2D5016',
                  color: '#2D5016'
                }}
                variants={buttonVariants}
                whileHover={{
                  backgroundColor: '#2D5016',
                  color: '#ffffff',
                  scale: 1.05
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Catalog
              </motion.button>
            </motion.div>
          </FadeInUp>
        </SlideInLeft>
      </div>
    </div>
  );
};

export default Hero;
