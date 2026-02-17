import { NavLink } from 'react-router-dom';
import { Home, Briefcase, FileText, User, Phone } from 'lucide-react';
import { siteContent } from '@/content/ar/site';
import { t } from '@/i18n';

const pickLink = (page) => siteContent.navLinks.find((item) => item.page === page);

const tabs = [
  { ...(pickLink('Home') ?? { label: t('mobileNav.home'), page: 'Home', path: '/' }), Icon: Home },
  { ...(pickLink('Services') ?? { label: t('mobileNav.services'), page: 'Services', path: '/الخدمات' }), Icon: Briefcase },
  { ...(pickLink('Articles') ?? { label: t('mobileNav.articles'), page: 'Articles', path: '/المقالات' }), Icon: FileText },
  { ...(pickLink('Lawyer') ?? { label: t('mobileNav.lawyer'), page: 'Lawyer', path: '/المحامي' }), Icon: User },
  { ...(pickLink('Contact') ?? { label: t('mobileNav.contact'), page: 'Contact', path: '/تواصل' }), Icon: Phone },
].filter((t) => Boolean(t?.path));

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 right-0 left-0 z-40 border-t border-[#99141e]/20 bg-white/95 backdrop-blur-xl pb-[calc(env(safe-area-inset-bottom)+0.4rem)] pt-2 shadow-[0_-8px_30px_rgba(0,0,0,0.09)]">
      <div className="mx-3 rounded-2xl bg-[#faf8f5] border border-[#99141e]/20 grid grid-cols-5 text-center text-xs">
        {tabs.map((tab) => (
          <NavLink
            key={`${tab.page ?? tab.label}-${tab.path}`}
            to={tab.path}
            className={({ isActive }) =>
              `py-2.5 ${isActive ? 'text-[#a97c50] font-bold' : 'text-gray-500'} transition-colors`
            }
          >
            <div className="flex flex-col items-center gap-1">
              {tab.Icon ? <tab.Icon className="w-5 h-5" aria-hidden="true" /> : null}
              <span className="text-[11px]">{tab.label}</span>
            </div>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
