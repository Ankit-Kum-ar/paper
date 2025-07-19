import React from 'react';
import { AboutHero, Mission, CoreValues, Founder } from './components';
import AnimatedBackground from './components/AnimatedBackground';

const About = () => {
  return (
    <div className="bg-base-100 relative min-h-screen">
      <AnimatedBackground />
      <div className="relative z-10">
        <AboutHero />
        <Founder />
        <Mission />
        <CoreValues />
      </div>
    </div>
  );
};

export default About;
