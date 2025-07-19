import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FadeInUp } from '../../../components/SmoothTransition';

const ValueCard = ({ title, description, icon, color, delay }) => (
  <FadeInUp delay={delay}>
    <motion.div
      className="relative p-1 rounded-2xl bg-[#1a1a1a] h-full group overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Animated border effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        initial={{ opacity: 0.3 }}
        whileHover={{ opacity: 1 }}
      >
        <motion.div
          className="w-[200%] h-[200%] absolute -left-1/2 -top-1/2"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            background: `conic-gradient(from 0deg, transparent 0%, ${color.includes('purple') ? '#A855F7' : 
              color.includes('blue') ? '#3B82F6' : 
              color.includes('yellow') ? '#EAB308' : 
              '#EF4444'} 25%, transparent 25%)`
          }}
        />
      </motion.div>
      
      {/* Content container */}
      <div className="relative bg-[#1a1a1a] rounded-xl p-6 h-full z-10">
        <motion.div
          className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${color}`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8 }}
        >
          {icon}
        </motion.div>
        <h3 className={`text-xl font-bold mb-3 ${color}`}>{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  </FadeInUp>
);

const CoreValues = () => {
  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries and explore new possibilities to create cutting-edge solutions.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "text-purple-500",
      delay: 0.2
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and diverse perspectives to achieve extraordinary results.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: "text-blue-500",
      delay: 0.4
    },
    {
      title: "Excellence",
      description: "We strive for perfection in everything we do, consistently delivering high-quality work.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      color: "text-yellow-500",
      delay: 0.6
    },
    {
      title: "Impact",
      description: "We measure our success by the positive difference we make in people's lives and businesses.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: "text-red-500",
      delay: 0.8
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-base-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <FadeInUp>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>
        </FadeInUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
