import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { SlideInLeft, SlideInRight, FadeInUp, ScaleIn } from '../../../components/SmoothTransition';

const WhyChooseUs = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Quality Assurance",
      description: "Premium paper products with strict quality control and international standards."
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Fast Delivery",
      description: "Swift and reliable delivery service ensuring your orders reach you on time."
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Expert Support",
      description: "Dedicated team of paper experts to assist with your specific requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-base-100 py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-green-600/10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-40 h-40 bg-green-500/10 rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <FadeInUp>
          <div className="text-center mb-16">
            <motion.div 
              className="badge bg-green-100 text-green-800 border-green-200 mb-4"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Why Choose Us
            </motion.div>
            <motion.h2
              className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Excellence in Every Sheet
            </motion.h2>
            <motion.p
              className="text-lg text-base-content/70 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Discover why thousands of businesses trust us for their paper needs.
              Premium quality, exceptional service, and sustainable practices.
            </motion.p>
          </div>
        </FadeInUp>

        {/* Feature Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1a1a] rounded-2xl p-8 shadow-lg border border-green-900/30"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center text-white mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.7 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-4 text-green-400">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <SlideInRight>
          <motion.div 
            className="bg-[#1a1a1a] rounded-3xl p-10 shadow-xl border border-green-900/30"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { number: "1000+", label: "Products", delay: 0 },
                { number: "5000+", label: "Customers", delay: 0.2 },
                { number: "10+", label: "Years", delay: 0.4 }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={statsVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: stat.delay }}
                >
                  <motion.div
                    className="text-4xl font-bold bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent mb-2"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-base-content/70">{stat.label}</div>
                  <motion.div
                    className="w-16 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto mt-4 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: 64 }}
                    transition={{ duration: 1, delay: stat.delay + 0.5 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </SlideInRight>

        {/* Call to Action */}
        <FadeInUp>
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <motion.button
              className="btn btn-lg text-white shadow-lg"
              style={{ backgroundColor: '#2D5016' }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(45, 80, 22, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </FadeInUp>
      </div>
    </div>
  );
};

export default WhyChooseUs;
