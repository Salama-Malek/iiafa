import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '../content/ar/services';

export default function ServicesPage() {
  return <div className="container-page py-12"><h1 className="text-3xl text-[#99141e] font-bold mb-6">الخدمات</h1><div className="grid md:grid-cols-2 gap-4">{services.map((service, i) => <motion.div key={service.slug} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.07}} className="bg-white rounded-xl p-6"><h2 className="font-bold">{service.title}</h2><p className="text-sm text-gray-600 my-3">{service.excerpt}</p><Link to={`/الخدمات/${service.slug}`} className="text-[#a97c50]">تفاصيل الخدمة</Link></motion.div>)}</div></div>;
}
