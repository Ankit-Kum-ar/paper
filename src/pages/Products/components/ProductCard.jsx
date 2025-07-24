import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Star, FileText, Zap, Layers } from 'lucide-react';

const ProductCard = ({
  title = "Premium Paper",
  subtitle = "High Quality Paper Solution",
  description = "Premium quality paper perfect for all your business and personal needs. Manufactured with eco-friendly processes and superior materials.",
  price = "₹ 42",
  unit = "Kg",
  minOrder = "500 Kg",
  gsm = "100 GSM",
  size = "11 x 17 Inch",
  usage = "Packaging",
  color = "Brown",
  material = "Kraft Paper",
  packType = "Roll",
  features = [
    "Eco-friendly Material",
    "High Strength & Durability", 
    "Cost Effective Solution",
    "Quick Delivery Available"
  ],
  image = "/public/Section.png",
  category = "Packaging"
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="group relative h-[420px] w-full max-w-[320px] mx-auto [perspective:2000px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div
        className={`relative h-full w-full [transform-style:preserve-3d] transition-all duration-700 ${
          isFlipped ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'
        }`}
      >
        {/* Front of card */}
        <div
          className={`absolute inset-0 h-full w-full [transform:rotateY(0deg)] [backface-visibility:hidden] 
            overflow-hidden rounded-2xl bg-base-100 border border-success/20 shadow-lg 
            transition-all duration-700 group-hover:shadow-xl group-hover:border-success/40
            ${isFlipped ? 'opacity-0' : 'opacity-100'}`}
        >
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-success/5 via-transparent to-success/10" />

          {/* Product Image */}
          <div className="relative h-48 overflow-hidden">
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="badge badge-success badge-sm text-white font-medium">
                {category}
              </span>
            </div>

            {/* Price Badge */}
            <div className="absolute top-4 right-4 bg-success text-white px-3 py-1 rounded-lg font-bold text-sm">
              {price}/{unit}
            </div>
          </div>

          {/* Product Info */}
          <div className="p-5 space-y-3">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-base-content group-hover:text-success transition-colors duration-300">
                {title}
              </h3>
              <p className="text-sm text-base-content/70 line-clamp-2">
                {subtitle}
              </p>
            </div>

            {/* Key Specs */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-base-200 rounded-lg p-2">
                <span className="text-base-content/60">GSM:</span>
                <span className="font-semibold ml-1">{gsm}</span>
              </div>
              <div className="bg-base-200 rounded-lg p-2">
                <span className="text-base-content/60">Size:</span>
                <span className="font-semibold ml-1">{size}</span>
              </div>
            </div>

            {/* Minimum Order */}
            <div className="text-center pt-2">
              <span className="text-xs text-base-content/60">
                Min Order: <span className="font-semibold text-success">{minOrder}</span>
              </span>
            </div>

            {/* Hover Indicator */}
            <div className="text-center text-xs text-base-content/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Hover for details →
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={`absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden] 
            rounded-2xl p-5 bg-base-100 border border-success/20 shadow-lg flex flex-col
            transition-all duration-700 group-hover:shadow-xl group-hover:border-success/40
            ${!isFlipped ? 'opacity-0' : 'opacity-100'}`}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-success/5 via-transparent to-success/10" />

          <div className="relative z-10 flex-1 space-y-4">
            {/* Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-success text-white">
                  <FileText className="h-4 w-4" />
                </div>
                <h3 className="text-lg font-bold text-base-content">
                  {title}
                </h3>
              </div>
              <p className="text-sm text-base-content/70 line-clamp-2">
                {description}
              </p>
            </div>

            {/* Product Specifications */}
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-success">Specifications:</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-base-content/60">Usage:</span>
                  <span className="font-medium ml-1">{usage}</span>
                </div>
                <div>
                  <span className="text-base-content/60">Color:</span>
                  <span className="font-medium ml-1">{color}</span>
                </div>
                <div>
                  <span className="text-base-content/60">Material:</span>
                  <span className="font-medium ml-1">{material}</span>
                </div>
                <div>
                  <span className="text-base-content/60">Type:</span>
                  <span className="font-medium ml-1">{packType}</span>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-success">Key Features:</h4>
              <div className="space-y-1.5">
                {features.slice(0, 3).map((feature, index) => {
                  const icons = [Zap, Layers, Package];
                  const IconComponent = icons[index % icons.length];

                  return (
                    <motion.div
                      key={feature}
                      className="flex items-center gap-2 text-xs text-base-content/80"
                      style={{
                        transform: isFlipped ? 'translateX(0)' : 'translateX(-10px)',
                        opacity: isFlipped ? 1 : 0,
                        transitionDelay: `${index * 100 + 200}ms`,
                      }}
                    >
                      <div className="bg-success/20 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-md">
                        <IconComponent className="text-success h-2.5 w-2.5" />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>


        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard; 