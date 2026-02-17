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
    <nav className="md:hidden fixed bottom-0 right-0 left-0 z-40 bg-white border-t pb-[calc(env(safe-area-inset-bottom)+0.35rem)] pt-2">
      <div className="grid grid-cols-5 text-center text-xs">
        {tabs.map((tab) => <NavLink key={tab.path} to={tab.path} className={({isActive}) => `py-1 ${isActive ? 'text-[#99141e] font-semibold' : 'text-gray-500'}`}>{tab.label}</NavLink>)}
      </div>
    </nav>
  );
}
