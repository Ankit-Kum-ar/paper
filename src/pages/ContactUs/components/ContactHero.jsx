import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <div className="relative bg-base-100 py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #22c55e 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 right-0 w-1/2 h-1/2"
        style={{
          background: 'radial-gradient(circle at center, rgba(34, 197, 94, 0.15), transparent 70%)',
          filter: 'blur(60px)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-6">
              Get in Touch
            </h1>
            <p className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto">
              Have questions about our products or services? We're here to help and would love to hear from you.
            </p>
          </motion.div>

          {/* Quick Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            {[
              { icon: "📞", text: "+91 852 768 5130", href: "tel:+918527685130" },
              { icon: "✉️", text: "hariram.ram2210@gmail.com", href: "mailto:hariram.ram2210@gmail.com" },
              { icon: "📍", text: "Alipur, Delhi", href: "#location" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#1a1a1a]/50 border border-green-900/30 hover:border-green-500/50 backdrop-blur-sm transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-gray-300">{item.text}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
