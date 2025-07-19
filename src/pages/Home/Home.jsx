import React from 'react'
import { Hero, WhyChooseUs, Portfolio, Contact, Testimonials } from './components'
import { LazySection } from '../../components/LazyLoading'

const Home = () => {
  return (
    <LazySection 
      animation="slideUp" 
      threshold={0.1} 
      duration={0.6}
      className="min-h-screen"
    >
      <Hero />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <Contact />
    </LazySection>
  )
}

export default Home
