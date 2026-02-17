import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'sonner';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Lawyer from './pages/Lawyer';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import Contact from './pages/Contact';
import PageNotFound from './lib/PageNotFound';

export default function App() {
  return (
    <BrowserRouter>
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
        <Route path="/About" element={<Navigate to="/من-نحن" replace />} />
        <Route path="/Services" element={<Navigate to="/الخدمات" replace />} />
        <Route path="/ServiceDetail" element={<Navigate to="/الخدمات" replace />} />
        <Route path="/Lawyer" element={<Navigate to="/المحامي" replace />} />
        <Route path="/Articles" element={<Navigate to="/المقالات" replace />} />
        <Route path="/ArticleDetail" element={<Navigate to="/المقالات" replace />} />
        <Route path="/Contact" element={<Navigate to="/تواصل" replace />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster richColors />
    </BrowserRouter>
  );
}
