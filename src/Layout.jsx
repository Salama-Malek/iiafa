import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import MobileNav from './components/shared/MobileNav';
import FloatingButtons from './components/shared/FloatingButtons';

export default function Layout({ currentPageName }) {
  return (
    <div dir="rtl" className="min-h-screen mobile-app-shell" style={{ fontFamily: "'Saudi', 'Tajawal', sans-serif" }}>
      <Header currentPage={currentPageName} />
      <main className="pt-16 md:pt-20 pb-24 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileNav currentPage={currentPageName} />
      <FloatingButtons />
    </div>
  );
}
