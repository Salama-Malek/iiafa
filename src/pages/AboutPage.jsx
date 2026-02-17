import { motion } from 'framer-motion';
import { siteContent } from '../content/ar/site';

export default function AboutPage() {
  return <motion.div initial={{opacity:0}} animate={{opacity:1}} className="container-page py-12"><h1 className="text-3xl text-[#99141e] font-bold mb-4">من نحن</h1><p className="bg-white rounded-xl p-6">{siteContent.brand.name} مكتب قانوني متخصص يقدم خدمات قانونية متكاملة للأفراد والشركات داخل المملكة.</p></motion.div>;
}
