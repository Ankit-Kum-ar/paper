import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FadeInUp } from '../../../components/SmoothTransition';

const MissionVisionCard = ({ title, description, icon, color }) => (
  <motion.div
    className="flex flex-col items-center p-6 rounded-2xl bg-[#1a1a1a] border border-green-900/30"
    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
  >
    <motion.div
      className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${color}`}
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.8 }}
    >
      {icon}
    </motion.div>
    <h3 className={`text-2xl font-bold mb-4 ${color}`}>{title}</h3>
    <p className="text-gray-400 text-center">{description}</p>
  </motion.div>
);

const Mission = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-base-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <FadeInUp delay={0.2}>
            <MissionVisionCard
              title="Our Mission"
              description="Our mission is to revolutionize the paper industry by providing high-quality, sustainable paper products while maintaining environmental responsibility and exceeding customer expectations."
              icon={
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              color="text-red-500"
            />
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <MissionVisionCard
              title="Our Vision"
              description="We envision a future where sustainable paper products become the industry standard, fostering environmental conservation while meeting the diverse needs of our global customers."
              icon={
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              }
              color="text-blue-500"
            />
          </FadeInUp>
        </div>
      </div>
    </div>
  );
};

export default Mission;
