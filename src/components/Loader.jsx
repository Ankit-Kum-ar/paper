// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a1a1a]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        {/* Animated paper sheets */}
        <div className="flex items-center justify-center space-x-2">
          {[...Array(5)].map((_, index) => (
            <motion.div
              key={index}
              className="w-4 h-16 rounded-sm bg-gradient-to-b from-green-400 to-green-600"
              animate={{
                scaleY: [0.6, 1.2, 0.6],
                translateY: ['0%', '-20%', '0%'],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.1,
              }}
            />
          ))}
        </div>
        
        {/* Company name with typewriter effect */}
        <motion.div 
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.h2 
            className="text-xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent"
          >
            {[..."Chaudhary Paper Mart"].map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.8 + index * 0.05,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute -z-10 w-32 h-32 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(34,197,94,0.1) 0%, rgba(34,197,94,0) 70%)"
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
};

export default Loader;
