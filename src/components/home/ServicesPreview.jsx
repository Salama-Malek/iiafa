import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { motion } from 'framer-motion';
import SectionHeader from '../shared/SectionHeader';
import { Building2, FileText, MessageSquare, Gavel, Landmark, Shield, Home, ArrowLeft, Scale } from 'lucide-react';
import { t } from '@/i18n';

const services = [
  { title: t('home.services.items.commercial.title'), icon: Building2, slug: 'commercial-companies', desc: t('home.services.items.commercial.desc') },
  { title: t('home.services.items.governance.title'), icon: Scale, slug: 'corporate-governance', desc: t('home.services.items.governance.desc') },
  { title: t('home.services.items.drafting.title'), icon: FileText, slug: 'legal-drafting', desc: t('home.services.items.drafting.desc') },
  { title: t('home.services.items.consulting.title'), icon: MessageSquare, slug: 'legal-consulting', desc: t('home.services.items.consulting.desc') },
  { title: t('home.services.items.litigation.title'), icon: Gavel, slug: 'litigation', desc: t('home.services.items.litigation.desc') },
  { title: t('home.services.items.waqf.title'), icon: Landmark, slug: 'waqf-wills', desc: t('home.services.items.waqf.desc') },
  { title: t('home.services.items.ip.title'), icon: Shield, slug: 'commercial-ip', desc: t('home.services.items.ip.desc') },
  { title: t('home.services.items.realEstate.title'), icon: Home, slug: 'notarization-realestate', desc: t('home.services.items.realEstate.desc') },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 md:py-28 pattern-overlay" style={{ background: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader
          title={t('home.services.title')}
          subtitle={t('home.services.subtitle')}
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
                className="group block bg-white rounded-3xl p-6 md:p-8 border border-transparent hover:border-[#99141e]/40 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all group-hover:scale-110" style={{ background: '#a97c5010' }}>
                  <service.icon className="w-6 h-6" style={{ color: '#a97c50' }} />
                </div>
                <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-[#a97c50] transition-colors">{service.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed mb-4">{service.desc}</p>
                <span className="inline-flex items-center gap-1 text-base font-medium transition-all group-hover:gap-2" style={{ color: '#99141e' }}>
                  {t('home.services.more')}
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
            style={{ background: '#a97c50' }}
          >
            {t('home.services.allServices')}
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
