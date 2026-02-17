import React, { Suspense, lazy } from 'react';
import HeroSection from '../components/home/HeroSection';

const ServicesPreview = lazy(() => import('../components/home/ServicesPreview'));
const WhyUsSection = lazy(() => import('../components/home/WhyUsSection'));
const CTASection = lazy(() => import('../components/home/CTASection'));

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Suspense fallback={null}>
        <ServicesPreview />
        <WhyUsSection />
        <CTASection />
      </Suspense>
    </div>
  );
}
