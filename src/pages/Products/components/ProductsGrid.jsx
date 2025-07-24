import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FadeInUp } from '../../../components/SmoothTransition';
import ProductCard from './ProductCard';
import { Search, Filter, Grid, List } from 'lucide-react';

const ProductsGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');

  // Product data based on the provided product images
  const products = [
    {
      title: "250 GSM SBS Paper Roll",
      subtitle: "Premium packaging solution for luxury applications",
      description: "High-quality stiff and coated SBS paper perfect for premium boxes, folding cartons, and pharmaceutical packaging with food-grade safety standards.",
      price: "₹ 65",
      unit: "Kg",
      minOrder: "50 Kg",
      gsm: "250 GSM",
      size: "Roll",
      usage: "Premium boxes & cartons",
      color: "White",
      material: "SBS Paper",
      packType: "Roll",
      features: [
        "Premium coated surface",
        "Pharmaceutical grade",
        "Food-grade certified",
        "Superior stiffness"
      ],
      image: "/public/Section.png",
      category: "SBS Paper"
    },
    {
      title: "250 GSM Coated SBS Paper Sheet",
      subtitle: "Luxury packaging sheets for premium brands",
      description: "Premium coated SBS sheets ideal for luxury product boxes, cosmetic packaging, and high-end applications requiring superior finish.",
      price: "₹ 68",
      unit: "Kg",
      minOrder: "50 Kg",
      gsm: "250 GSM",
      size: "Sheet",
      usage: "Book covers & luxury bags",
      color: "White",
      material: "SBS",
      packType: "Plain",
      features: [
        "Luxury packaging grade",
        "Cosmetic box quality",
        "Premium surface finish",
        "Food-grade safe"
      ],
      image: "/public/Section.png",
      category: "SBS Paper"
    },
    {
      title: "80 GSM Uncoated SBS Paper Sheet",
      subtitle: "Versatile lightweight paper for multiple uses",
      description: "Lightweight, high-brightness SBS paper perfect for printing, stationery, paper plates, and quality documentation needs.",
      price: "₹ 50",
      unit: "Kg",
      minOrder: "50 Kg",
      gsm: "80 GSM",
      size: "Single Side",
      usage: "Paper plates & printing",
      color: "White",
      material: "SBS Paper",
      packType: "Loose",
      features: [
        "High brightness finish",
        "Multi-purpose grade",
        "Food-grade certified",
        "Cost-effective solution"
      ],
      image: "/public/Section.png",
      category: "SBS Paper"
    },
    {
      title: "250 GSM Printed SBS Paper",
      subtitle: "Custom branded packaging solutions",
      description: "Premium printed SBS paper designed for custom packaging, branded boxes, and luxury cartons with superior print quality.",
      price: "₹ 90",
      unit: "Kg",
      minOrder: "50 Kg",
      gsm: "250 GSM",
      size: "Custom",
      usage: "Branded packaging",
      color: "Yellow",
      material: "SBS",
      packType: "Sheet",
      features: [
        "Custom print designs",
        "Premium brand quality",
        "Luxury packaging grade",
        "Vibrant color printing"
      ],
      image: "/public/Section.png",
      category: "SBS Paper"
    },
    {
      title: "200 GSM SBS Paper Roll",
      subtitle: "Versatile medium-weight packaging solution",
      description: "Medium-weight SBS roll with excellent printability and strength, ideal for food containers and retail packaging applications.",
      price: "₹ 58",
      unit: "Kg",
      minOrder: "50 Kg",
      gsm: "200 GSM",
      size: "Roll",
      usage: "Food containers & retail",
      color: "White",
      material: "SBS Paper",
      packType: "Roll",
      features: [
        "Excellent printability",
        "Medium-duty strength",
        "Food-grade quality",
        "Retail packaging ready"
      ],
      image: "/public/Section.png",
      category: "SBS Paper"
    },
    {
      title: "240 GSM Uncoated SBS Paper Sheet",
      subtitle: "Premium heavyweight sheets for quality applications",
      description: "Heavy-duty uncoated SBS sheets with superior stiffness and excellent print quality for book covers and premium stationery.",
      price: "₹ 62",
      unit: "Kg",
      minOrder: "50 Kg",
      gsm: "240 GSM",
      size: "Sheet",
      usage: "Book covers & stationery",
      color: "White",
      material: "SBS Paper",
      packType: "Sheet",
      features: [
        "Superior stiffness",
        "Premium print quality",
        "High-end finish",
        "Professional grade"
      ],
      image: "/public/Section.png",
      category: "SBS Paper"
    },
    {
      title: "60 GSM Uncoated SBS Paper Sheet",
      subtitle: "Economic lightweight solution for daily use",
      description: "Cost-effective lightweight SBS paper perfect for general printing, office documents, and everyday packaging needs.",
      price: "₹ 45",
      unit: "Kg",
      minOrder: "50 Kg",
      gsm: "60 GSM",
      size: "Sheet",
      usage: "Office & general printing",
      color: "White",
      material: "SBS Paper",
      packType: "Sheet",
      features: [
        "Budget-friendly option",
        "Office-grade quality",
        "Lightweight design",
        "Daily use applications"
      ],
      image: "/public/Section.png",
      category: "SBS Paper"
    },
    {
      title: "200 GSM Printed SBS Paper",
      subtitle: "Custom medium-weight branded packaging",
      description: "Medium-weight printed SBS paper combining excellent printability with durability for branded packaging and promotional materials.",
      price: "₹ 75",
      unit: "Kg",
      minOrder: "50 Kg",
      gsm: "200 GSM",
      size: "Custom",
      usage: "Brand packaging & promo",
      color: "Custom Print",
      material: "SBS Paper",
      packType: "Sheet",
      features: [
        "Custom brand printing",
        "Promotional quality",
        "Medium-weight strength",
        "Retail-ready finish"
      ],
      image: "/public/Section.png",
      category: "SBS Paper"
    },
    {
      title: "180 GSM Uncoated SBS Paper",
      subtitle: "Balanced strength for versatile applications",
      description: "Medium-weight uncoated SBS paper offering perfect balance of strength and flexibility for folders, covers, and packaging.",
      price: "₹ 55",
      unit: "Kg",
      minOrder: "50 Kg",
      gsm: "180 GSM",
      size: "Sheet",
      usage: "Folders & covers",
      color: "White",
      material: "SBS Paper",
      packType: "Sheet",
      features: [
        "Balanced strength",
        "Versatile applications",
        "Folder-grade quality",
        "Flexible packaging"
      ],
      image: "/public/Section.png",
      category: "SBS Paper"
    },
    {
      title: "100 GSM Kraft Paper",
      subtitle: "Premium packaging kraft paper for all your needs",
      description: "100 GSM Packaging Kraft Paper is a durable and lightweight paper commonly used for wrapping, packing, and crafting. It offers good strength, flexibility, and tear resistance.",
      price: "₹ 42",
      unit: "Kg",
      minOrder: "500 Kg",
      gsm: "100 GSM",
      size: "11 x 17 Inch",
      usage: "Packaging",
      color: "Brown",
      material: "Kraft Paper",
      packType: "Roll",
      features: [
        "Eco-friendly material",
        "High strength durability",
        "Cost effective solution",
        "Packaging grade quality"
      ],
      image: "/public/Section.png",
      category: "Kraft Paper"
    },
    {
      title: "120 GSM Brown Kraft Paper",
      subtitle: "Heavy-duty industrial grade kraft solution",
      description: "Superior strength brown kraft paper designed for heavy-duty packaging, industrial applications, and protective wrapping needs.",
      price: "₹ 45",
      unit: "Kg",
      minOrder: "300 Kg",
      gsm: "120 GSM",
      size: "Roll",
      usage: "Industrial & heavy wrapping",
      color: "Brown",
      material: "Kraft Paper",
      packType: "Roll",
      features: [
        "Superior strength",
        "Industrial grade",
        "Heavy-duty protection",
        "Tear resistant"
      ],
      image: "/public/Section.png",
      category: "Kraft Paper"
    },
    {
      title: "80 GSM White Kraft Paper",
      subtitle: "Premium printable kraft for branded applications",
      description: "White kraft paper combining excellent printability with natural strength, perfect for branded bags and custom packaging solutions.",
      price: "₹ 48",
      unit: "Kg",
      minOrder: "250 Kg",
      gsm: "80 GSM",
      size: "Sheet/Roll",
      usage: "Branded bags & printing",
      color: "White",
      material: "Kraft Paper",
      packType: "Roll/Sheet",
      features: [
        "Excellent printability",
        "Natural kraft strength",
        "Brand-ready quality",
        "Custom print friendly"
      ],
      image: "/public/Section.png",
      category: "Kraft Paper"
    }
  ];

  const categories = ['All', 'SBS Paper', 'Kraft Paper'];

  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-base-100 py-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `linear-gradient(#16a34a 1px, transparent 1px),
                            linear-gradient(90deg, #16a34a 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <FadeInUp>
          <div className="text-center mb-12">
            <motion.div 
              className="badge badge-success badge-lg text-white mb-4"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Complete Collection
            </motion.div>
            <motion.h2
              className="text-4xl lg:text-5xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-success to-success/70 bg-clip-text text-transparent">
                All Products
              </span>
            </motion.h2>
                         <motion.p
               className="text-lg text-base-content/70 max-w-2xl mx-auto"
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.7, delay: 0.4 }}
             >
               Browse our complete range of premium SBS and Kraft paper products. Each product is carefully crafted 
               to meet industry standards and deliver exceptional quality for packaging and printing applications.
             </motion.p>
          </div>
        </FadeInUp>

        {/* Filters and Search */}
        <FadeInUp delay={0.2}>
          <div className="mb-12 space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/40 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                className="input input-bordered input-success w-full pl-10 bg-base-100"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filters and View Toggle */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`btn btn-sm ${
                      selectedCategory === category 
                        ? 'btn-success text-white' 
                        : 'btn-outline btn-success'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`btn btn-sm ${
                    viewMode === 'grid' ? 'btn-success text-white' : 'btn-outline btn-success'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`btn btn-sm ${
                    viewMode === 'list' ? 'btn-success text-white' : 'btn-outline btn-success'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center">
              <span className="text-base-content/60">
                Showing {filteredProducts.length} of {products.length} products
              </span>
            </div>
          </div>
        </FadeInUp>

        {/* Products Grid */}
        <motion.div
          className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProducts.map((product, index) => (
            <FadeInUp key={index} delay={index * 0.1}>
              <ProductCard {...product} />
            </FadeInUp>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <FadeInUp>
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto bg-base-200 rounded-full flex items-center justify-center mb-6">
                <Search className="w-12 h-12 text-base-content/40" />
              </div>
              <h3 className="text-xl font-bold text-base-content mb-2">No Products Found</h3>
              <p className="text-base-content/60 mb-6">
                Try adjusting your search terms or category filters.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="btn btn-success text-white"
              >
                Clear Filters
              </button>
            </div>
          </FadeInUp>
        )}

        {/* Call to Action */}
        {filteredProducts.length > 0 && (
          <FadeInUp delay={0.6}>
            <div className="text-center mt-16 pt-12 border-t border-base-300">
              <h3 className="text-2xl font-bold text-base-content mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-base-content/70 mb-6 max-w-xl mx-auto">
                Can't find exactly what you're looking for? We offer custom paper solutions 
                tailored to your specific requirements.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  className="btn btn-success text-white px-8"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact for Custom Order
                </motion.button>
                <motion.button
                  className="btn btn-outline btn-success px-8"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Catalog
                </motion.button>
              </div>
            </div>
          </FadeInUp>
        )}
      </div>
    </div>
  );
};

export default ProductsGrid; 