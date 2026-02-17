import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { siteContent } from '../content/ar/site';
import { services } from '../content/ar/services';

export default function HomePage() {
  return (
    <div className="container-page py-12">
      <motion.section initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="bg-white rounded-2xl p-8 shadow-sm mb-10">
        <h1 className="text-3xl font-bold text-[#99141e] mb-3">{siteContent.home.heroTitle}</h1>
        <p className="text-gray-600 mb-6">{siteContent.home.heroSubtitle}</p>
        <div className="flex gap-3"><Link to="/تواصل" className="bg-[#99141e] text-white px-4 py-2 rounded-lg">{siteContent.home.ctaPrimary}</Link><Link to="/الخدمات" className="bg-[#a97c50] text-white px-4 py-2 rounded-lg">{siteContent.home.ctaSecondary}</Link></div>
      </motion.section>
      <section className="grid md:grid-cols-2 gap-4">{services.slice(0,4).map((service, i) => <motion.div key={service.slug} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.08}} className="bg-white p-5 rounded-xl"><h2 className="font-bold text-[#99141e]">{service.title}</h2><p className="text-sm text-gray-600 mt-2">{service.excerpt}</p></motion.div>)}</section>
    </div>
  );
}
