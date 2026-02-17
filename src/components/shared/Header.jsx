import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_698e3ce1927d8fddb186b684/c39fecd20_logo-2.jpg";

const navLinks = [
  { label: 'الرئيسية', page: 'Home' },
  { label: 'من نحن', page: 'About' },
  { label: 'الخدمات', page: 'Services' },
  { label: 'المحامي', page: 'Lawyer' },
  { label: 'المقالات', page: 'Articles' },
  { label: 'تواصل معنا', page: 'Contact' },
];

export default function Header({ currentPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3">
              <img src={LOGO_URL} alt="شركة إعفاء" className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-lg" />
              <div className="hidden sm:block">
                <h1 className={`font-bold text-sm md:text-base transition-colors ${scrolled ? 'text-[#99141e]' : 'text-white'}`}>
                  شركة إعفاء
                </h1>
                <p className={`text-[10px] md:text-xs transition-colors ${scrolled ? 'text-gray-500' : 'text-white/70'}`}>
                  للمحاماة والاستشارات القانونية
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((l) => {
                const isActive = currentPage === l.page;
                return (
                  <Link
                    key={l.page}
                    to={createPageUrl(l.page)}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? (scrolled ? 'text-[#99141e]' : 'text-white')
                        : (scrolled ? 'text-gray-600 hover:text-[#99141e]' : 'text-white/80 hover:text-white')
                    }`}
                  >
                    {l.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 right-4 left-4 h-0.5 rounded-full"
                        style={{ background: '#a97c50' }}
                      />
                    )}
                  </Link>
                );
              })}
              <Link
                to={createPageUrl('Contact')}
                className="mr-2 px-5 py-2 rounded-lg text-sm font-bold text-white transition-all hover:opacity-90"
                style={{ background: '#99141e' }}
              >
                استشارة مجانية
              </Link>
            </nav>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className={`w-6 h-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 pt-16 bg-white/98 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col items-center gap-2 pt-8">
              {navLinks.map((l) => (
                <Link
                  key={l.page}
                  to={createPageUrl(l.page)}
                  onClick={() => setMobileOpen(false)}
                  className="px-8 py-3 text-lg font-medium text-gray-700 hover:text-[#99141e] transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}