import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, MessageCircle, CheckCircle2 } from 'lucide-react';
import { getServiceBySlug } from '@/lib/services';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="text-xl text-gray-500">الخدمة غير موجودة</p>
        <Link to={createPageUrl('Services')} className="mt-4 inline-block text-[#a97c50] font-bold">
          العودة للخدمات
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #2c1d13, #a97c50, #2c1d13)' }}>
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Link to={createPageUrl('Services')} className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-1">
              الخدمات
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            {service.title}
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 pattern-overlay" style={{ background: 'var(--cream)' }}>
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold mb-8" style={{ color: '#a97c50' }}>ما نقدمه في هذه الخدمة</h2>
            <div className="space-y-5">
              {service.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-4 items-start"
                >
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#99141e' }} />
                  <p className="text-gray-700 text-base leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 bg-gradient-to-l rounded-2xl p-8 text-center"
            style={{ background: 'linear-gradient(to left, #a97c50, #8b643f)' }}
          >
            <h3 className="text-2xl font-bold text-white mb-3">هل تحتاج هذه الخدمة؟</h3>
            <p className="text-white/70 mb-6">تواصل معنا اليوم للحصول على استشارة قانونية</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/message/35TT3ASVVP7GF1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
                style={{ background: '#25D366' }}
              >
                <MessageCircle className="w-5 h-5" />
                اطلب استشارة عبر واتساب
              </a>
              <Link
                to={createPageUrl('Contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold border-2 border-white/30 text-white hover:bg-white/10 transition-all"
              >
                نموذج التواصل
              </Link>
            </div>
          </motion.div>

          {/* Back */}
          <div className="mt-8 text-center">
            <Link
              to={createPageUrl('Services')}
              className="inline-flex items-center gap-2 text-gray-500 hover:text-[#a97c50] transition-colors font-medium"
            >
              <ArrowRight className="w-5 h-5" />
              العودة لجميع الخدمات
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
