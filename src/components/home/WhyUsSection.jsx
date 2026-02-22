import React from 'react';
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
    <section className="py-20 md:py-28 relative overflow-hidden cv-auto" style={{ background: 'linear-gradient(135deg, #2c1d13 0%, #a97c50 50%, #2c1d13 100%)' }}>
      <div className="absolute inset-0 pattern-overlay opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader title={t('home.whyUs.title')} subtitle={t('home.whyUs.subtitle')} light />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="text-center p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all animate-fade-up [animation-fill-mode:both]" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center" style={{ background: 'rgba(153,20,30,0.15)' }}>
                <f.icon className="w-8 h-8" style={{ color: '#99141e' }} aria-hidden="true" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">{f.title}</h3>
              <p className="text-white/70 text-base leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
