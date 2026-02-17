import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import SectionHeader from '../components/shared/SectionHeader';
import { Building2, FileText, MessageSquare, Gavel, Landmark, Shield, Home, ArrowLeft } from 'lucide-react';
import { services } from '@/content/ar/services';

const icons = {
  'commercial-companies': Building2,
  'legal-drafting': FileText,
  'legal-consulting': MessageSquare,
  litigation: Gavel,
  'waqf-wills': Landmark,
  'commercial-ip': Shield,
  'notarization-realestate': Home
};

export default function Services() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #2c1d13, #a97c50, #2c1d13)' }}>
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            خدماتنا القانونية
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg"
          >
            نقدم مجموعة شاملة من الخدمات القانونية لخدمة عملائنا
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 pattern-overlay" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  to={createPageUrl(`ServiceDetail?service=${service.slug}`)}
                  className="group flex gap-5 bg-white rounded-2xl p-6 md:p-8 border border-transparent hover:border-[#99141e]/30 shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all group-hover:scale-110" style={{ background: '#a97c5010' }}>
                    {React.createElement(icons[service.slug] || FileText, { className: 'w-7 h-7', style: { color: '#a97c50' } })}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-[#a97c50] transition-colors">{service.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">{service.desc}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium transition-all group-hover:gap-2" style={{ color: '#99141e' }}>
                      تفاصيل الخدمة
                      <ArrowLeft className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}