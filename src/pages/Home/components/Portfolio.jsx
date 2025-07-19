import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FadeInUp, SlideInLeft } from '../../../components/SmoothTransition';

const Portfolio = () => {
  const products = [
    {
      title: "Premium Writing Paper",
      category: "Stationery",
      image: "/paper-1.jpg", // You'll need to add these images
      description: "High-quality writing papers for professional correspondence",
      specs: ["100 GSM", "Bright White", "Smooth Texture"]
    },
    {
      title: "Kraft Paper Rolls",
      category: "Packaging",
      image: "/paper-2.jpg",
      description: "Eco-friendly packaging solutions for businesses",
      specs: ["80-200 GSM", "Natural Brown", "High Strength"]
    },
    {
      title: "Art Paper Collection",
      category: "Creative",
      image: "/paper-3.jpg",
      description: "Premium papers for artistic projects and printing",
      specs: ["170 GSM", "Matte Finish", "Color Accurate"]
    },
    {
      title: "Office Paper Bundle",
      category: "Office",
      image: "/paper-4.jpg",
      description: "Everyday paper solutions for business needs",
      specs: ["75 GSM", "Multi-Purpose", "Cost-Effective"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  return (
    <div className="min-h-screen bg-base-100 py-20 relative overflow-hidden">
      {/* Enhanced Paper-themed Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large Decorative Ring */}
        <motion.div
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] border-[60px] border-green-600/5 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            rotate: { duration: 60, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        {/* Stacked Paper Effect - Left */}
        <motion.div
          className="absolute -left-20 top-1/4 w-72 h-96"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-green-600/5 rounded-lg"
              style={{
                top: i * 10,
                left: i * 10,
                right: -i * 10,
                bottom: -i * 10,
                transform: `rotate(${i * 2}deg)`
              }}
              animate={{
                rotate: [i * 2, i * 2 + 1, i * 2],
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>

        {/* Stacked Paper Effect - Right */}
        <motion.div
          className="absolute -right-20 bottom-1/4 w-72 h-96"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-green-600/5 rounded-lg"
              style={{
                top: i * 10,
                left: i * 10,
                right: -i * 10,
                bottom: -i * 10,
                transform: `rotate(${-i * 2}deg)`
              }}
              animate={{
                rotate: [-i * 2, -i * 2 - 1, -i * 2],
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>

        {/* Abstract Lines */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-green-600/10 to-transparent w-full"
              style={{ top: `${25 + i * 25}%` }}
              animate={{
                scaleX: [1, 1.5, 1],
                opacity: [0.1, 0.2, 0.1],
                x: [-100, 100, -100]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2
              }}
            />
          ))}
        </div>

        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{
            backgroundImage: `linear-gradient(#2D5016 1px, transparent 1px),
                            linear-gradient(90deg, #2D5016 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <FadeInUp>
          <div className="text-center mb-16">
            <motion.div 
              className="badge bg-green-100 text-green-800 border-green-200 mb-4"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Our Portfolio
            </motion.div>
            <motion.h2
              className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Paper Excellence
            </motion.h2>
            <motion.p
              className="text-lg text-base-content/70 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Explore our diverse collection of premium paper products crafted for various needs.
            </motion.p>
          </div>
        </FadeInUp>

        {/* Portfolio Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-green-900/30"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="relative h-64 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-green-600/20"
                  whileHover={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Placeholder for image - replace with actual image */}
                <div className="h-full bg-gradient-to-br from-green-800/20 to-green-600/20 flex items-center justify-center">
                  <svg 
                    className="w-24 h-24 text-green-500/50" 
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
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-green-400 mb-2">{product.title}</h3>
                    <span className="inline-block bg-green-900/30 text-green-400 text-sm px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <motion.button
                    className="text-green-400 hover:text-green-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </motion.button>
                </div>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-2">
                  {product.specs.map((spec, i) => (
                    <span 
                      key={i}
                      className="text-sm text-green-400/80 bg-green-900/20 px-2 py-1 rounded"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            className="btn btn-outline border-2 px-8"
            style={{ 
              borderColor: '#2D5016',
              color: '#2D5016'
            }}
            whileHover={{
              backgroundColor: '#2D5016',
              color: '#ffffff',
              scale: 1.05
            }}
            whileTap={{ scale: 0.95 }}
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
