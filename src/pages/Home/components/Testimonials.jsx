import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FadeInUp } from '../../../components/SmoothTransition';

const VerifiedIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="h-4 w-4 text-green-400"
    fill="currentColor"
  >
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const TestimonialCard = ({
  authorName,
  authorRole,
  authorImage,
  content,
  isVerified,
  timestamp,
  reply
}) => {
  return (
    <motion.div
      className="relative w-full overflow-hidden rounded-2xl"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="p-4 sm:p-5 md:p-6 bg-[#1a1a1a] border border-green-900/30 rounded-2xl">
        <div className="flex gap-3 sm:gap-4">
          <div className="shrink-0">
            <div className="h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-full bg-gradient-to-br from-green-700 to-green-900">
              <img
                src={authorImage}
                alt={authorName}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-green-400">
                    {authorName}
                  </span>
                  {isVerified && <VerifiedIcon />}
                </div>
                <span className="text-sm text-green-400/60">
                  {authorRole}
                </span>
              </div>
              <span className="text-sm text-green-400/40">
                {timestamp}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-base text-gray-300">
            {content}
          </p>
        </div>

        {reply && (
          <div className="mt-4 pt-4 border-t border-green-900/30">
            <div className="flex gap-3">
              <div className="shrink-0">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-green-700 to-green-900">
                  <img
                    src={reply.authorImage}
                    alt={reply.authorName}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-green-400">
                    {reply.authorName}
                  </span>
                  {reply.isVerified && <VerifiedIcon />}
                  <span className="text-sm text-green-400/60 ml-2">
                    {reply.timestamp}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-400">
                  {reply.content}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      authorName: "Sarah Chen",
      authorRole: "Creative Director",
      authorImage: "https://i.pravatar.cc/150?img=1",
      content: "The premium writing paper from PaperCo has completely transformed our brand's stationery. The quality and texture are unmatched, and our clients constantly compliment us on our letterheads. Absolutely worth the investment! 🌟",
      isVerified: true,
      timestamp: "2 days ago",
      reply: {
        authorName: "PaperCo Support",
        authorRole: "Customer Service",
        authorImage: "https://i.pravatar.cc/150?img=2",
        content: "Thank you for your kind words, Sarah! We're thrilled to hear that our premium paper has enhanced your brand's image.",
        isVerified: true,
        timestamp: "1 day ago"
      }
    },
    {
      authorName: "Michael Rodriguez",
      authorRole: "Packaging Designer",
      authorImage: "https://i.pravatar.cc/150?img=3",
      content: "Been using PaperCo's kraft paper rolls for our eco-friendly packaging designs. The consistency in quality and the natural texture is exactly what we needed. Plus, their commitment to sustainability aligns perfectly with our values. 🌿",
      isVerified: true,
      timestamp: "1 week ago"
    },
    {
      authorName: "Emma Thompson",
      authorRole: "Art Director",
      authorImage: "https://i.pravatar.cc/150?img=4",
      content: "The art paper collection is a game-changer for our print projects. The color accuracy and finish quality are exceptional. It's rare to find a supplier that understands the specific needs of creative professionals so well. 🎨",
      isVerified: true,
      timestamp: "2 weeks ago"
    },
    {
      authorName: "David Park",
      authorRole: "Print Production Manager",
      authorImage: "https://i.pravatar.cc/150?img=5",
      content: "Outstanding paper quality and excellent customer service. PaperCo has been our trusted supplier for all our premium printing needs. Their attention to detail is remarkable! 📄✨",
      isVerified: true,
      timestamp: "3 weeks ago"
    }
  ];

  // Duplicate testimonials for infinite loop effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="min-h-screen bg-base-100 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #2D5016 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
        {/* Decorative Corner */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-600/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-600/5 rounded-full blur-3xl" />
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
              Testimonials
            </motion.div>
            <motion.h2
              className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              className="text-lg text-base-content/70 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Don't just take our word for it - hear from some of our satisfied customers
            </motion.p>
          </div>
        </FadeInUp>

        <div className="relative overflow-hidden">
          {/* Gradient Overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-base-100 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-base-100 to-transparent z-10"></div>

          <motion.div
            className="flex gap-4 sm:gap-6 py-4"
            animate={{
              x: [0, -50 * duplicatedTestimonials.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 10,
                ease: "linear",
              },
            }}
            style={{
              width: `calc(${duplicatedTestimonials.length} * (300px + 1rem))`,
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="w-[300px] sm:w-[350px] md:w-[400px] flex-shrink-0"
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
