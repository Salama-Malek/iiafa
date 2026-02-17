import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../shared/SectionHeader';
import { Award, Users, Clock, Shield } from 'lucide-react';
import { t } from '@/i18n';

const features = [
  { icon: Award, title: t('home.whyUs.items.experience.title'), desc: t('home.whyUs.items.experience.desc') },
  { icon: Users, title: t('home.whyUs.items.service.title'), desc: t('home.whyUs.items.service.desc') },
  { icon: Clock, title: t('home.whyUs.items.speed.title'), desc: t('home.whyUs.items.speed.desc') },
  { icon: Shield, title: t('home.whyUs.items.confidentiality.title'), desc: t('home.whyUs.items.confidentiality.desc') },
];

export default function WhyUsSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0a0c 0%, #99141e 50%, #1a0a0c 100%)' }}>
      <div className="absolute inset-0 pattern-overlay opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader title={t('home.whyUs.title')} subtitle={t('home.whyUs.subtitle')} light />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
              <div className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center" style={{ background: 'rgba(169,124,80,0.15)' }}>
                <f.icon className="w-8 h-8" style={{ color: '#a97c50' }} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
