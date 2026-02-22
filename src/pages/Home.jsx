import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import HeroSection from '../components/home/HeroSection';

const ServicesPreview = lazy(() => import('../components/home/ServicesPreview'));
const WhyUsSection = lazy(() => import('../components/home/WhyUsSection'));
const CTASection = lazy(() => import('../components/home/CTASection'));

export default function Home() {
  const [showDeferredSections, setShowDeferredSections] = useState(false);
  const deferredTriggerRef = useRef(null);

  useEffect(() => {
    if (showDeferredSections || typeof window === 'undefined') return undefined;

    const trigger = deferredTriggerRef.current;
    let timeoutId = window.setTimeout(() => setShowDeferredSections(true), 3000);
    let observer;

    if (trigger && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            setShowDeferredSections(true);
          }
        },
        { rootMargin: '280px 0px' }
      );
      observer.observe(trigger);
    }

    return () => {
      window.clearTimeout(timeoutId);
      observer?.disconnect();
    };
  }, [showDeferredSections]);

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
        <div ref={deferredTriggerRef} aria-hidden="true" className="h-px" />
      )}
    </div>
  );
}
