import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Products",
      links: [
        { label: "Writing Paper", href: "/products/writing" },
        { label: "Packaging Solutions", href: "/products/packaging" },
        { label: "Art Paper", href: "/products/art" },
        { label: "Office Supplies", href: "/products/office" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Sustainability", href: "/sustainability" },
        { label: "Our Process", href: "/process" },
        { label: "Careers", href: "/careers" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Contact Us", href: "/contact" },
        { label: "FAQ", href: "/faq" },
        { label: "Shipping", href: "/shipping" },
        { label: "Returns", href: "/returns" }
      ]
    }
  ];

  const socialLinks = [
    {
      name: "Twitter",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
      href: "https://twitter.com"
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      href: "https://linkedin.com"
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      href: "https://instagram.com"
    }
  ];

  return (
    <motion.footer
      className="bg-[#1a1a1a] text-base-content relative overflow-hidden"
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #4ADE80 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />

        {/* Glowing Orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full"
            style={{
              background: `radial-gradient(circle at center, rgba(74, 222, 128, 0.2) 0%, rgba(74, 222, 128, 0.1) 40%, transparent 70%)`,
              left: `${20 + i * 25}%`,
              top: `${30 + i * 20}%`,
              filter: 'blur(10px)'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
              y: [-20, 20, -20]
            }}
            transition={{
              duration: 5 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Animated Lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[2px]"
            style={{
              background: 'linear-gradient(90deg, transparent, #4ADE80, transparent)',
              width: '100%',
              top: `${15 + i * 20}%`,
              opacity: 0.15
            }}
            animate={{
              x: [-1000, 1000],
              opacity: [0, 0.15, 0]
            }}
            transition={{
              x: {
                duration: 8 + i,
                repeat: Infinity,
                ease: "linear"
              },
              opacity: {
                duration: 8 + i,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }
            }}
          />
        ))}

        {/* Floating Paper Elements */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${i * 30}%`,
              top: `${20 + i * 15}%`
            }}
          >
            <motion.div
              className="w-20 h-20 bg-gradient-to-br from-green-400/20 to-green-600/5 rounded-lg"
              animate={{
                y: [-20, 20],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                y: {
                  duration: 6 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "reverse"
                },
                rotate: {
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                scale: {
                  duration: 8 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "reverse"
                }
              }}
              style={{
                boxShadow: '0 0 20px rgba(74, 222, 128, 0.1)',
                backdropFilter: 'blur(5px)'
              }}
            />
          </motion.div>
        ))}

        {/* Glowing Corner Accent */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96"
          style={{
            background: 'radial-gradient(circle at center, rgba(74, 222, 128, 0.15) 0%, transparent 70%)',
            filter: 'blur(40px)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <motion.div variants={itemVariants}>
            <Link to="/" className="text-2xl font-bold text-green-400 mb-4 block">
              PaperCo
            </Link>
            <p className="text-base-content/70 mb-6 max-w-xs">
              Crafting premium paper solutions for all your needs. Sustainable, innovative, and quality-driven since 1995.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Columns */}
          {footerSections.map((section, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h3 className="text-green-400 font-semibold mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-base-content/70 hover:text-green-400 transition-colors inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="pt-8 mt-8 border-t border-base-content/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-base-content/60 text-sm">
            © {currentYear} Chaudhary Paper Mart. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-base-content/60">
            <Link to="/privacy" className="hover:text-green-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-green-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-green-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
