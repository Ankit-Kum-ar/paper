import React from 'react';
import { ProductsHero, ProductsGrid } from './components';
import { LazySection } from '../../components/LazyLoading';

const Products = () => {
  return (
    <LazySection 
      animation="slideUp" 
      threshold={0.1} 
      duration={0.6}
      className="min-h-screen"
    >
      <ProductsHero />
      <ProductsGrid />
    </LazySection>
  );
};

export default Products;