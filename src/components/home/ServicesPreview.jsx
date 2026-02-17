import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { motion } from 'framer-motion';
import SectionHeader from '../shared/SectionHeader';
import { Building2, FileText, MessageSquare, Gavel, Landmark, Shield, Home, ArrowLeft } from 'lucide-react';

const services = [
  { title: 'أعمال الشركات التجارية', icon: Building2, slug: 'commercial-companies', desc: 'تأسيس الشركات وصياغة العقود التجارية بكافة أنواعها' },
  { title: 'الصياغة القانونية', icon: FileText, slug: 'legal-drafting', desc: 'صياغة العقود واللوائح والخطابات القانونية' },
  { title: 'الاستشارات القانونية', icon: MessageSquare, slug: 'legal-consulting', desc: 'استشارات قانونية شفوية وكتابية شاملة' },
  { title: 'الأعمال القضائية', icon: Gavel, slug: 'litigation', desc: 'الترافع والتمثيل القانوني أمام المحاكم' },
  { title: 'الأوقاف والوصايا', icon: Landmark, slug: 'waqf-wills', desc: 'صياغة الوصايا وصكوك الأوقاف وإدارتها' },
  { title: 'الوكالات التجارية والملكية الفكرية', icon: Shield, slug: 'commercial-ip', desc: 'حماية العلامات التجارية وبراءات الاختراع' },
  { title: 'أعمال التوثيق والتسجيل العقاري', icon: Home, slug: 'notarization-realestate', desc: 'إفراغ العقارات والتوثيق والتسجيل العقاري' },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 md:py-28 pattern-overlay" style={{ background: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader
          title="خدماتنا القانونية"
          subtitle="نقدم مجموعة شاملة من الخدمات القانونية المتكاملة لخدمة عملائنا بأعلى معايير المهنية"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                to={createPageUrl(`ServiceDetail?service=${service.slug}`)}
                className="group block bg-white rounded-3xl p-6 md:p-8 border border-transparent hover:border-[#a97c50]/40 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all group-hover:scale-110" style={{ background: '#99141e10' }}>
                  <service.icon className="w-6 h-6" style={{ color: '#99141e' }} />
                </div>
                <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-[#99141e] transition-colors">{service.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed mb-4">{service.desc}</p>
                <span className="inline-flex items-center gap-1 text-base font-medium transition-all group-hover:gap-2" style={{ color: '#a97c50' }}>
                  المزيد
                  <ArrowLeft className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to={createPageUrl('Services')}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-white transition-all hover:opacity-90 hover:scale-105"
            style={{ background: '#99141e' }}
          >
            جميع الخدمات
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}