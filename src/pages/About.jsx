import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/shared/SectionHeader';
import { Target, Eye, Star, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import logo1 from '@/assets/logo-1.jpg';

const LOGO_URL = logo1;


export default function About() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0a0c, #99141e, #1a0a0c)' }}>
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            من نحن
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="h-px w-16" style={{ background: 'rgba(169,124,80,0.5)' }} />
            <div className="w-2 h-2 rotate-45" style={{ background: '#a97c50' }} />
            <div className="h-px w-16" style={{ background: 'rgba(169,124,80,0.5)' }} />
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 md:py-28 pattern-overlay" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <div className="w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border-4" style={{ borderColor: '#a97c50' }}>
                  <img src={LOGO_URL} alt="شركة إعفاء" className="w-full h-full object-contain p-12" style={{ background: '#a97c50' }} />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl opacity-20" style={{ background: '#99141e' }} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#99141e' }}>
                شركة إعفاء للمحاماة والاستشارات القانونية
              </h2>
              <div className="w-20 h-1 rounded-full mb-6" style={{ background: '#a97c50' }} />
              <p className="text-gray-700 text-lg leading-loose mb-4">
                انطلاقاً من الخبرات المتكاملة والمتنوعة، نشأت شركة إعفاء للمحاماة والاستشارات القانونية لتكون شريكك في النجاح بعون الله وتوفيقه.
              </p>
              <p className="text-gray-600 text-base leading-loose">
                نسعى من خلال تقديم خبراتنا واستشاراتنا القانونية لتحقيق أهداف عملائنا وخدمتهم بكل مهنية واحترافية، مستندين إلى قاعدة معرفية واسعة في مختلف فروع القانون السعودي.
              </p>
            </motion.div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: 'رسالتنا', desc: 'تقديم خدمات قانونية متكاملة واحترافية تسهم في تحقيق أهداف عملائنا وحماية حقوقهم بأعلى معايير المهنية والجودة.' },
              { icon: Eye, title: 'رؤيتنا', desc: 'أن نكون الخيار الأول والأمثل في تقديم الخدمات القانونية بالمملكة العربية السعودية، معتمدين على التميز والابتكار.' },
              { icon: Star, title: 'قيمنا', desc: 'النزاهة والأمانة والسرية التامة في التعامل مع قضايا عملائنا، مع الالتزام بأعلى المعايير المهنية والأخلاقية.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#a97c50]/20 transition-all"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5" style={{ background: '#99141e10' }}>
                  <item.icon className="w-7 h-7" style={{ color: '#99141e' }} />
                </div>
                <h3 className="font-bold text-xl mb-3" style={{ color: '#99141e' }}>{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{ background: 'var(--warm-gray)' }}>
        <Link
          to={createPageUrl('Contact')}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg transition-all hover:opacity-90 hover:scale-105"
          style={{ background: '#99141e' }}
        >
          تواصل معنا
          <ArrowLeft className="w-5 h-5" />
        </Link>
      </section>
    </div>
  );
}
