import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowLeft } from 'lucide-react';
import { t } from '@/i18n';

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 pattern-overlay" style={{ background: 'var(--warm-gray)' }}>
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12" style={{ background: 'var(--primary-solid)' }} />
            <div className="w-2 h-2 rotate-45" style={{ background: 'var(--primary-solid)' }} />
            <div className="h-px w-12" style={{ background: 'var(--primary-solid)' }} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: 'var(--secondary-solid)' }}>{t('home.cta.title')}</h2>
          <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed">{t('home.cta.subtitle')}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/message/35TT3ASVVP7GF1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg transition-all hover:scale-105" style={{ background: '#25D366' }}>
              <MessageCircle className="w-6 h-6" />
              {t('home.cta.whatsapp')}
            </a>
            <Link to={createPageUrl('Contact')} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg transition-all hover:opacity-90 hover:scale-105" style={{ background: 'var(--primary-solid)' }}>
              {t('home.cta.form')}
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
