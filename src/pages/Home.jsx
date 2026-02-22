import React, { Suspense, lazy, useEffect, useState } from 'react';
import HeroSection from '../components/home/HeroSection';

const ServicesPreview = lazy(() => import('../components/home/ServicesPreview'));
const WhyUsSection = lazy(() => import('../components/home/WhyUsSection'));
const CTASection = lazy(() => import('../components/home/CTASection'));

export default function Home() {
  const [showDeferredSections, setShowDeferredSections] = useState(false);

  useEffect(() => {
    let timeoutId;
    let idleId;

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(() => setShowDeferredSections(true), { timeout: 1200 });
    } else {
      timeoutId = window.setTimeout(() => setShowDeferredSections(true), 400);
    }

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
      if (idleId && 'cancelIdleCallback' in window) window.cancelIdleCallback(idleId);
    };
  }, []);

  return (
    <div>
      <HeroSection />
      {showDeferredSections ? (
        <Suspense fallback={null}>
          <ServicesPreview />
          <WhyUsSection />
          <CTASection />
        </Suspense>
      ) : (
        <div aria-hidden="true" className="h-px" />
      )}
    </div>
  );
}
