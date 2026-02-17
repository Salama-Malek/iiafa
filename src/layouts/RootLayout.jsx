import { Outlet } from 'react-router-dom';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import MobileNav from '../components/shared/MobileNav';
import FloatingButtons from '../components/shared/FloatingButtons';

export default function RootLayout() {
  return (
    <div className="min-h-screen safe-bottom">
      <Header />
      <main><Outlet /></main>
      <Footer />
      <MobileNav />
      <FloatingButtons />
    </div>
  );
}
