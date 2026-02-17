import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import LawyerPage from './pages/LawyerPage';
import ArticlesPage from './pages/ArticlesPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import ContactPage from './pages/ContactPage';
import PageNotFound from './pages/PageNotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/من-نحن" element={<AboutPage />} />
        <Route path="/الخدمات" element={<ServicesPage />} />
        <Route path="/الخدمات/:slug" element={<ServiceDetailPage />} />
        <Route path="/المحامي" element={<LawyerPage />} />
        <Route path="/المقالات" element={<ArticlesPage />} />
        <Route path="/المقالات/:slug" element={<ArticleDetailPage />} />
        <Route path="/تواصل" element={<ContactPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}
