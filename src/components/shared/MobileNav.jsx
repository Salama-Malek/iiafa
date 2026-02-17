import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { Home, Briefcase, FileText, User, Phone } from 'lucide-react';
import { siteContent } from '@/content/ar/site';

const tabs = [
  { ...siteContent.navLinks.find((item) => item.page === 'Home'), Icon: Home },
  { ...siteContent.navLinks.find((item) => item.page === 'Services'), Icon: Briefcase },
  { ...siteContent.navLinks.find((item) => item.page === 'Articles'), Icon: FileText },
  { ...siteContent.navLinks.find((item) => item.page === 'Lawyer'), Icon: User },
  { label: 'تواصل', page: 'Contact', Icon: Phone },
];

export default function MobileNav({ currentPage }) {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t pb-safe" style={{ borderColor: '#e8e0d5' }}>
      <div className="flex items-center justify-around px-2 py-2">
        {tabs.map(({ label, page, Icon }) => {
          const isActive = currentPage === page;
          return (
            <Link
              key={page}
              to={createPageUrl(page)}
              className="flex flex-col items-center gap-0.5 py-1 px-2 rounded-lg transition-all"
              style={isActive ? { color: '#99141e' } : { color: '#888' }}
            >
              <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 1.5} />
              <span className="text-[10px] font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}