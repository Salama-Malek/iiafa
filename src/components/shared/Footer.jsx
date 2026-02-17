import { Link } from 'react-router-dom';
import { siteContent } from '../../content/ar/site';

export default function Footer() {
  return (
    <footer className="bg-[#1f1314] text-white mt-16">
      <div className="container-page py-10 grid md:grid-cols-3 gap-6">
        <div><h3 className="font-bold mb-2">{siteContent.brand.name}</h3><p className="text-sm text-gray-300">{siteContent.footer.copy}</p></div>
        <div><h4 className="font-semibold mb-2">{siteContent.footer.quickTitle}</h4><div className="flex flex-col gap-1">{siteContent.nav.map((n) => <Link key={n.path} to={n.path} className="text-gray-300 text-sm">{n.label}</Link>)}</div></div>
        <div><h4 className="font-semibold mb-2">{siteContent.footer.contactTitle}</h4><p className="text-sm text-gray-300">{siteContent.brand.phone}</p><p className="text-sm text-gray-300">{siteContent.brand.email}</p></div>
      </div>
    </footer>
  );
}
