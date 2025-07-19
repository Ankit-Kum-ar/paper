import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <div className="py-16 lg:py-24 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-4">
                Send Us a Message
              </h2>
              <p className="text-gray-400">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a]/50 border border-green-900/30 focus:border-green-500/50 text-gray-200 focus:ring-1 focus:ring-green-500/50 transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a]/50 border border-green-900/30 focus:border-green-500/50 text-gray-200 focus:ring-1 focus:ring-green-500/50 transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a]/50 border border-green-900/30 focus:border-green-500/50 text-gray-200 focus:ring-1 focus:ring-green-500/50 transition-colors duration-300"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a]/50 border border-green-900/30 focus:border-green-500/50 text-gray-200 focus:ring-1 focus:ring-green-500/50 transition-colors duration-300"
                  placeholder="Your message here..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg shadow-green-500/20"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Info Cards Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-200 mb-8">Ways to Connect</h3>
            
            {[
              {
                title: "Customer Support",
                description: "Need help with your order or have questions about our products?",
                contact: "+91 852 768 5130",
                hours: "Mon-Sat: 9am - 6pm IST"
              },
              {
                title: "Business Inquiries",
                description: "Interested in bulk orders or business partnerships?",
                contact: "hariram.ram2210@gmail.com",
                hours: "Response within 24 hours"
              },
              {
                title: "Office Address",
                description: "Visit our office:",
                contact: "KH NO.101/20, Ground Floor Gali No.10, PCR TRANSPORT, Alipur, Delhi, 110036",
                hours: "Tours by appointment only"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="p-6 rounded-xl bg-[#1a1a1a]/50 border border-green-900/30 hover:border-green-500/30 transition-colors duration-300"
              >
                <h4 className="text-xl font-semibold text-green-400 mb-2">{item.title}</h4>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <p className="text-gray-300 font-medium">{item.contact}</p>
                <p className="text-sm text-gray-500">{item.hours}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
