import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FadeInUp } from '../../../components/SmoothTransition';
import { Package, FileText, Layers } from 'lucide-react';

const ProductsHero = () => {
  return (
    <div className="relative min-h-[70vh] my-5 bg-base-100 flex items-center overflow-hidden">
      {/* Enhanced Paper-themed Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large Decorative Ring */}
        <motion.div
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] border-[60px] border-success/5 rounded-full"
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
              className="absolute bg-success/5 rounded-lg"
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

        {/* Floating Paper Icons */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => {
            const icons = [Package, FileText, Layers];
            const IconComponent = icons[i % icons.length];
            return (
              <motion.div
                key={i}
                className="absolute text-success/10"
                style={{
                  top: `${20 + (i * 15)}%`,
                  left: `${10 + (i * 15)}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  rotate: [0, 5, -5, 0],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
              >
                <IconComponent size={40 + i * 5} />
              </motion.div>
            );
          })}
        </div>

        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `linear-gradient(#16a34a 1px, transparent 1px),
                            linear-gradient(90deg, #16a34a 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <FadeInUp>
            <div className="space-y-6">
              <motion.div 
                className="badge badge-success badge-lg text-white"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Our Products
              </motion.div>
              
              <motion.h1
                className="text-4xl lg:text-6xl font-bold leading-tight"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-success to-success/70 bg-clip-text text-transparent">
                  Premium Paper
                </span>
                <br />
                <span className="text-base-content">
                  Solutions
                </span>
              </motion.h1>

              <motion.p
                className="text-lg lg:text-xl text-base-content/70 max-w-xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Discover our comprehensive range of high-quality paper products designed for packaging, 
                printing, and industrial applications. From kraft paper to specialty papers, 
                we deliver excellence in every roll.
              </motion.p>

              {/* Stats */}
              <motion.div
                className="flex flex-wrap gap-6 pt-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-success">50+</div>
                  <div className="text-sm text-base-content/60">Product Varieties</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-success">100%</div>
                  <div className="text-sm text-base-content/60">Quality Assured</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-success">24/7</div>
                  <div className="text-sm text-base-content/60">Support Available</div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4 pt-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                <motion.button
                  className="btn btn-success text-white px-8"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Browse Products
                </motion.button>
                <motion.button
                  className="btn btn-outline btn-success px-8"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Quote
                </motion.button>
              </motion.div>
            </div>
          </FadeInUp>

          {/* Right Content - Featured Product Showcase */}
          <FadeInUp delay={0.3}>
            <div className="relative">
              <motion.div
                className="relative bg-base-200 rounded-3xl p-8 border border-success/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Featured Product */}
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto bg-success/10 rounded-2xl flex items-center justify-center">
                    <Package className="w-16 h-16 text-success" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-base-content mb-2">
                      100 GSM Kraft Paper
                    </h3>
                    <p className="text-base-content/70 text-sm mb-4">
                      Our best-selling packaging solution with superior strength and eco-friendly materials.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="bg-base-100 rounded-lg p-2">
                        <span className="text-base-content/60">GSM:</span>
                        <span className="font-semibold ml-1">100 GSM</span>
                      </div>
                      <div className="bg-base-100 rounded-lg p-2">
                        <span className="text-base-content/60">Size:</span>
                        <span className="font-semibold ml-1">11×17 Inch</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <span className="bg-success text-white px-4 py-2 rounded-lg font-bold">
                      ₹ 42/Kg
                    </span>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-success/20 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-success/30 rounded-full"></div>
              </motion.div>

              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-success/5 to-transparent rounded-3xl -z-10"></div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </div>
  );
};

export default ProductsHero; 