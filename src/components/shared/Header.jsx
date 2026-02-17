import { Link, NavLink } from 'react-router-dom';
import { siteContent } from '../../content/ar/site';

export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur sticky top-0 z-40 border-b">
      <div className="container-page h-16 flex items-center justify-between">
        <Link to="/" className="font-bold text-[#99141e]">{siteContent.brand.shortName}</Link>
        <nav className="hidden md:flex gap-6">
          {siteContent.nav.map((item) => (
            <NavLink key={item.path} to={item.path} className={({isActive}) => isActive ? 'text-[#99141e] font-semibold' : 'text-gray-600'}>{item.label}</NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
