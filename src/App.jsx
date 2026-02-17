import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'sonner';
import Layout from './Layout';
import PageNotFound from './lib/PageNotFound';

// Lazy-loaded pages (code splitting)
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Lawyer = lazy(() => import('./pages/Lawyer'));
const Articles = lazy(() => import('./pages/Articles'));
const ArticleDetail = lazy(() => import('./pages/ArticleDetail'));
const Contact = lazy(() => import('./pages/Contact'));

function LoadingFallback() {
  return (
    <div className="min-h-[40vh] flex items-center justify-center">
      <div className="text-center">
        <div className="text-sm opacity-70">جارٍ التحميل...</div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route element={<Layout currentPageName="Home" />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route element={<Layout currentPageName="About" />}>
            <Route path="/من-نحن" element={<About />} />
          </Route>

          <Route element={<Layout currentPageName="Services" />}>
            <Route path="/الخدمات" element={<Services />} />
          </Route>

          <Route element={<Layout currentPageName="ServiceDetail" />}>
            <Route path="/الخدمات/:slug" element={<ServiceDetail />} />
          </Route>

          <Route element={<Layout currentPageName="Lawyer" />}>
            <Route path="/المحامي" element={<Lawyer />} />
          </Route>

          <Route element={<Layout currentPageName="Articles" />}>
            <Route path="/المقالات" element={<Articles />} />
          </Route>

          <Route element={<Layout currentPageName="ArticleDetail" />}>
            <Route path="/المقالات/:slug" element={<ArticleDetail />} />
          </Route>

          <Route element={<Layout currentPageName="Contact" />}>
            <Route path="/تواصل" element={<Contact />} />
          </Route>

          {/* Legacy redirects */}
          <Route path="/About" element={<Navigate to="/من-نحن" replace />} />
          <Route path="/Services" element={<Navigate to="/الخدمات" replace />} />
          <Route path="/ServiceDetail" element={<Navigate to="/الخدمات" replace />} />
          <Route path="/Lawyer" element={<Navigate to="/المحامي" replace />} />
          <Route path="/Articles" element={<Navigate to="/المقالات" replace />} />
          <Route path="/ArticleDetail" element={<Navigate to="/المقالات" replace />} />
          <Route path="/Contact" element={<Navigate to="/تواصل" replace />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>

      <Toaster richColors />
    </BrowserRouter>
  );
}
