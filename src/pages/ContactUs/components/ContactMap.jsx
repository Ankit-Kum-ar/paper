import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const ContactMap = () => {
  return (
    <div className="py-16 lg:py-24 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-4">
            Visit Our Locations
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find us at our offices and warehouses across Uttar Pradesh. We're always ready to serve you.
          </p>
        </motion.div>

        {/* Map Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 border-2 border-green-500/20 rounded-2xl" />
            <iframe
              title="Chaudhary Paper Mart Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.678533932656!2d77.13227937546058!3d28.815543875645837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b1923d82e67%3A0x2b9cc1371bf2e1d4!2sAlipur%2C%20Delhi%2C%20110036!5e0!3m2!1sen!2sin!4v1690051200000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

          {/* Locations List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {[
              {
                title: "Main Office",
                address: "KH NO.101/20, Ground Floor Gali No.10",
                city: "PCR TRANSPORT, Alipur, Delhi, 110036",
                phone: "+91 852 768 5130",
                email: "hariram.ram2210@gmail.com",
                hours: "Monday - Saturday: 9:00 AM - 6:00 PM"
              },
              {
                title: "Business Hours",
                address: "Available for inquiries",
                city: "Delhi NCR Region",
                phone: "+91 852 768 5130",
                email: "hariram.ram2210@gmail.com",
                hours: "Monday - Saturday: 9:00 AM - 6:00 PM"
              },
              {
                title: "Service Area",
                address: "Serving Delhi NCR and",
                city: "surrounding regions",
                phone: "+91 852 768 5130",
                email: "hariram.ram2210@gmail.com",
                hours: "Business Hours: 9:00 AM - 6:00 PM"
              }
            ].map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="p-6 rounded-xl bg-[#1a1a1a]/50 border border-green-900/30 hover:border-green-500/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-green-400 mb-2">{location.title}</h3>
                <div className="space-y-2 text-gray-400">
                  <p>{location.address}</p>
                  <p>{location.city}</p>
                  <p className="text-gray-300">{location.phone}</p>
                  <p className="text-green-500">{location.email}</p>
                  <p className="text-sm text-gray-500">{location.hours}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
