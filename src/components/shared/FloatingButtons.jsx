import { useEffect, useState } from 'react';
import { siteContent } from '../../content/ar/site';

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="fixed left-4 bottom-24 md:bottom-6 z-40 flex flex-col gap-3">
      <a href={siteContent.brand.whatsappUrl} target="_blank" rel="noreferrer" className="bg-green-500 text-white rounded-full px-4 py-2 shadow">واتساب</a>
      {showTop && <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#a97c50] text-white rounded-full px-4 py-2 shadow">أعلى</button>}
    </div>
  );
}
