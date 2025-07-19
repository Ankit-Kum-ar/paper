import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FadeInUp } from '../../../components/SmoothTransition';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-base-100 py-20 relative overflow-hidden">
      {/* Paper-themed Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated Corner Flourish */}
        <motion.div
          className="absolute -top-20 -right-20 w-[400px] h-[400px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full text-green-600/5">
            <path
              fill="currentColor"
              d="M 100 100 Q 130 70 160 100 T 220 100 L 200 80 Q 170 50 140 80 T 60 100"
            />
          </svg>
        </motion.div>

        {/* Floating Elements */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-green-600/5 rounded-xl"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 30, 0],
              rotate: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <FadeInUp>
          <div className="text-center mb-16">
            <motion.div 
              className="badge bg-green-100 text-green-800 border-green-200 mb-4"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Get in Touch
            </motion.div>
            <motion.h2
              className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Let's Start a Conversation
            </motion.h2>
            <motion.p
              className="text-lg text-base-content/70 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Have questions about our paper products? We're here to help you find the perfect solution.
            </motion.p>
          </div>
        </FadeInUp>

        <div className="max-w-3xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {/* Success Message */}
            <motion.div
              className="absolute top-0 left-0 right-0 flex items-center justify-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: showSuccess ? 1 : 0, y: showSuccess ? 0 : -20 }}
              transition={{ duration: 0.3 }}
            >
              {showSuccess && (
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg shadow-lg">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Input */}
              <motion.div variants={inputVariants} whileFocus="focus">
                <label className="block text-base-content/80 mb-2 text-sm">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-green-900/30 
                           focus:border-green-600 focus:ring-1 focus:ring-green-600 
                           transition-colors duration-200"
                  placeholder="John Doe"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div variants={inputVariants} whileFocus="focus">
                <label className="block text-base-content/80 mb-2 text-sm">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-green-900/30 
                           focus:border-green-600 focus:ring-1 focus:ring-green-600 
                           transition-colors duration-200"
                  placeholder="john@example.com"
                />
              </motion.div>
            </div>

            {/* Subject Input */}
            <motion.div variants={inputVariants} whileFocus="focus">
              <label className="block text-base-content/80 mb-2 text-sm">Subject</label>
              <input
                type="text"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-green-900/30 
                         focus:border-green-600 focus:ring-1 focus:ring-green-600 
                         transition-colors duration-200"
                placeholder="How can we help you?"
              />
            </motion.div>

            {/* Message Input */}
            <motion.div variants={inputVariants} whileFocus="focus">
              <label className="block text-base-content/80 mb-2 text-sm">Your Message</label>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-green-900/30 
                         focus:border-green-600 focus:ring-1 focus:ring-green-600 
                         transition-colors duration-200 resize-none"
                placeholder="Tell us more about your needs..."
              />
            </motion.div>

            {/* Submit Button */}
            <div className="text-center">
              <motion.button
                type="submit"
                className="btn bg-green-700 hover:bg-green-600 text-white border-0 px-8 py-3 rounded-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </div>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="mt-16 grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                title: "Phone",
                info: "+91 852 768 5130"
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Email",
                info: "hariram.ram2210@gmail.com"
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Location",
                info: "KH NO.101/20, Ground Floor Gali No.10, PCR TRANSPORT, Alipur, Delhi, 110036"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#1a1a1a] border border-green-900/30"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 rounded-full bg-green-900/20 flex items-center justify-center text-green-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">{item.title}</h3>
                <p className="text-base-content/70">{item.info}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
