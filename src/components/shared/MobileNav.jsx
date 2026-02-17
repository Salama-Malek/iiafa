import { NavLink } from 'react-router-dom';
import { siteContent } from '../../content/ar/site';

export default function MobileNav() {
  const tabs = siteContent.nav.filter((item) => ['/', '/الخدمات', '/المقالات', '/المحامي', '/تواصل'].includes(item.path));
  return (
    <nav className="md:hidden fixed bottom-0 right-0 left-0 z-40 bg-white border-t pb-[calc(env(safe-area-inset-bottom)+0.35rem)] pt-2">
      <div className="grid grid-cols-5 text-center text-xs">
        {tabs.map((tab) => <NavLink key={tab.path} to={tab.path} className={({isActive}) => `py-1 ${isActive ? 'text-[#99141e] font-semibold' : 'text-gray-500'}`}>{tab.label}</NavLink>)}
      </div>
    </nav>
  );
}
