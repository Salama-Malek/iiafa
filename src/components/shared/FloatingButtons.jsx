import React, { useState, useEffect } from 'react';
import { ChevronUp, MessageCircle } from 'lucide-react';
import { t } from '@/i18n';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* WhatsApp Button */}
      <a
        aria-label={t("nav.whatsappAria")}
        href="https://wa.me/message/35TT3ASVVP7GF1"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 md:bottom-8 left-4 md:left-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-200 hover:scale-110 active:scale-95 animate-pop-in"
        style={{ background: '#25D366' }}
      >
        <MessageCircle className="w-7 h-7 text-white" aria-hidden="true" />
      </a>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          type="button"
          aria-label={t("nav.scrollTopAria")}
          onClick={scrollToTop}
          className="fixed bottom-24 md:bottom-8 right-4 md:right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-xl border transition-all duration-200 hover:scale-110 active:scale-95 animate-fade-up"
          style={{ background: '#a97c50', borderColor: '#99141e' }}
        >
          <ChevronUp className="w-6 h-6 text-white" aria-hidden="true" />
        </button>
      )}
    </>
  );
}
