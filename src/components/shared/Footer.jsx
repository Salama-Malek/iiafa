import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { Phone, Mail, MapPin } from 'lucide-react';

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_698e3ce1927d8fddb186b684/a8872a89f_logo-1.jpg";

const socialLinks = [
  { name: 'X', url: 'https://x.com/iiafalaw?s=11', icon: '𝕏' },
  { name: 'Instagram', url: 'https://www.instagram.com/m.iiafa?igsh=MWRiemloZHd0dnVzaw%3D%3D&utm_source=qr', icon: 'IG' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/%D8%B4%D8%B1%D9%83%D8%A9-%D8%A5%D8%B9%D9%81%D8%A7%D8%A1-%D9%84%D9%84%D9%85%D8%AD%D8%A7%D9%85%D8%A7%D8%A9-%D9%88%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D9%82%D8%A7%D9%86%D9%88%D9%86%D9%8A%D8%A9/', icon: 'in' },
  { name: 'Snapchat', url: 'https://snapchat.com/t/27Eo3DlG', icon: '👻' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@iiafa.law?_r=1&_t=ZS-93yTFoJurFk', icon: '♪' },
];

const navLinks = [
  { label: 'الرئيسية', page: 'Home' },
  { label: 'من نحن', page: 'About' },
  { label: 'الخدمات', page: 'Services' },
  { label: 'المحامي', page: 'Lawyer' },
  { label: 'المقالات', page: 'Articles' },
  { label: 'تواصل معنا', page: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="relative pattern-overlay pb-20 md:pb-0" style={{ background: '#1a0a0c' }}>
      <div className="h-1 w-full" style={{ background: 'linear-gradient(to left, #99141e, #a97c50, #99141e)' }} />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Logo & About */}
          <div className="text-center md:text-right">
            <img src={LOGO_URL} alt="شركة إعفاء" className="w-20 h-20 object-contain rounded-lg mx-auto md:mx-0 md:mr-0 mb-4" />
            <p className="text-white/60 text-sm leading-relaxed">
              شركة إعفاء للمحاماة والاستشارات القانونية ذ.م.م — شريكك في النجاح القانوني بالمملكة العربية السعودية.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[#a97c50] transition-all text-xs"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-bold text-lg mb-4" style={{ color: '#a97c50' }}>روابط سريعة</h3>
            <nav className="space-y-2">
              {navLinks.map((l) => (
                <Link
                  key={l.page}
                  to={createPageUrl(l.page)}
                  className="block text-white/60 hover:text-white transition-colors text-sm"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-bold text-lg mb-4" style={{ color: '#a97c50' }}>تواصل معنا</h3>
            <div className="space-y-4">
              <a href="tel:0533393367" className="flex items-center justify-center md:justify-start gap-3 text-white/60 hover:text-white transition-colors text-sm">
                <Phone className="w-4 h-4" style={{ color: '#a97c50' }} />
                <span dir="ltr">0533393367</span>
              </a>
              <a href="mailto:m@iiafa.info" className="flex items-center justify-center md:justify-start gap-3 text-white/60 hover:text-white transition-colors text-sm">
                <Mail className="w-4 h-4" style={{ color: '#a97c50' }} />
                <span>m@iiafa.info</span>
              </a>
              <div className="flex items-center justify-center md:justify-start gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4" style={{ color: '#a97c50' }} />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} شركة إعفاء للمحاماة والاستشارات القانونية ذ.م.م — جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}