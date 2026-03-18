import React from 'react';
import Hero from './components/Hero';
import ForWhom from './components/ForWhom';
import Program from './components/Program';
import WhyUs from './components/WhyUs';
import Details from './components/Details';
import CTABanner from './components/CTABanner';
import Divider from './components/Divider';

export default function App() {
  return (
    <>
      <Hero />
      <ForWhom />
      <Divider />
      <Program />
      <Divider />
      <WhyUs />
      <Divider />
      <Details />
      <CTABanner />
    </>
  );
}
