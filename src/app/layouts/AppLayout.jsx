import React, { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/shared/Header';
import { usePageMeta } from '@/hooks/usePageMeta';

const Footer = lazy(() => import('@/components/shared/Footer'));
const MobileNav = lazy(() => import('@/components/shared/MobileNav'));
const FloatingButtons = lazy(() => import('@/components/shared/FloatingButtons'));

const META_BY_PAGE = {
  Home: 'home',
  About: 'about',
  Services: 'services',
  ServiceDetail: 'serviceDetail',
  Lawyer: 'lawyer',
  Articles: 'articles',
  ArticleDetail: 'articleDetail',
  Contact: 'contact'
};

export default function Layout({ currentPageName }) {
  usePageMeta(META_BY_PAGE[currentPageName] ?? 'home');

  return (
    <div dir="rtl" className="min-h-screen mobile-app-shell" style={{ fontFamily: "'Saudi', 'Tajawal', sans-serif" }}>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:right-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black">
        الانتقال إلى المحتوى الرئيسي
      </a>
      <Header currentPage={currentPageName} />
      <main id="main-content" className="pt-16 md:pt-20 pb-24 md:pb-0" tabIndex={-1}>
        <Outlet />
      </main>
      <Suspense fallback={null}>
        <Footer />
        <MobileNav currentPage={currentPageName} />
        <FloatingButtons />
      </Suspense>
    </div>
  );
}
