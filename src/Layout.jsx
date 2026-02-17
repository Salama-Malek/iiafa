import React from 'react';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import MobileNav from './components/shared/MobileNav';
import FloatingButtons from './components/shared/FloatingButtons';

export default function Layout({ children, currentPageName }) {
  return (
    <div dir="rtl" className="min-h-screen" style={{ fontFamily: "'Saudi', 'Tajawal', sans-serif" }}>
      <Header currentPage={currentPageName} />
      <main>
        {children}
      </main>
      <Footer />
      <MobileNav currentPage={currentPageName} />
      <FloatingButtons />
    </div>
  );
}