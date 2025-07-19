import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FadeInUp } from '../../../components/SmoothTransition';

const Founder = () => {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-base-100 relative overflow-hidden">
      {/* Elegant Background Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at 20% 30%, rgba(45, 80, 22, 0.15) 0%, transparent 40%)'
        }}
      />
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #2D5016 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Image Section */}
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="relative z-10 rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-[4/5] relative">
                <img
                  src="/profile.jpg"
                  alt="Hari Ram - Founder of Chaudhary Paper Mart"
                  className="w-full h-full object-cover"
                />
                {/* Elegant Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                {/* Founder Label */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="absolute top-6 left-0 bg-green-500/90 py-2 px-6 rounded-r-full shadow-lg backdrop-blur-sm"
                >
                  <p className="text-white font-semibold tracking-wider text-sm">FOUNDER</p>
                </motion.div>
                {/* Year of Establishment */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                  className="absolute top-20 right-0 bg-black/50 py-2 px-6 rounded-l-full shadow-lg backdrop-blur-sm border-l-2 border-green-500"
                >
                  <p className="text-green-400 font-medium text-sm">Since 1995</p>
                </motion.div>
              </div>
              
              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 border-r-2 border-t-2 border-green-500/30 rounded-tr-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-green-500/30 rounded-bl-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              />
            </motion.div>

            {/* Elegant Name Card */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center w-4/5 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-white mb-1">Hari Ram</h3>
              <p className="text-green-400 font-medium">Founder & CEO</p>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h4 className="text-green-400 font-medium mb-2">Our Leadership</h4>
                <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-6">
                  Pioneering Excellence in Paper Industry
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  With over two decades of experience in the paper industry, our founder's vision has been the driving force behind Chaudhary Paper Mart's commitment to excellence and innovation.
                </p>
              </motion.div>

              {/* Vision Cards */}
              <div className="space-y-6 mt-8">
                {[
                  {
                    title: "Sustainability First",
                    description: "Our commitment to environmental responsibility drives every decision we make in our business operations."
                  },
                  {
                    title: "Quality Excellence",
                    description: "We maintain unwavering standards in our products, ensuring premium quality for our valued customers."
                  },
                  {
                    title: "Customer Success",
                    description: "Your success is our priority. We strive to provide solutions that help your business thrive."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="group relative p-6 rounded-xl bg-[#1a1a1a]/50 border border-green-900/30 backdrop-blur-sm overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Animated border effect on hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 rounded-xl overflow-hidden">
                        <div
                          className="absolute -inset-[10px] opacity-50"
                          style={{
                            background: 'conic-gradient(from 0deg at 50% 50%, #22c55e 0%, transparent 60%, #22c55e 100%)',
                            animation: 'spin 4s linear infinite'
                          }}
                        />
                      </div>
                    </motion.div>
                    
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-green-400 mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Signature Section */}
            <motion.div
              className="mt-8 border-t border-green-900/30 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              <div className="flex items-center gap-4">
                <div className="text-gray-400 italic">
                  "Excellence is not a goal; it's a continuous journey of improvement."
                </div>
                <div className="h-12 w-[1px] bg-gradient-to-b from-green-500/50 to-transparent"></div>
                <div className="text-green-400 font-medium text-right">
                  - Hari Ram
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
