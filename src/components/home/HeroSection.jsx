import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { motion } from 'framer-motion';
import { Scale, ArrowLeft } from 'lucide-react';
import logo1 from '@/assets/logo-1.jpg';

const LOGO_URL = logo1;


export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #1a0a0c 0%, #99141e 40%, #7a1018 70%, #1a0a0c 100%)' }} />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-overlay opacity-30" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #a97c50, transparent)' }} />
      <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #a97c50, transparent)' }} />

      {/* Gold line decorations */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to left, transparent, #a97c50, transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to left, transparent, #a97c50, transparent)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center py-32 md:py-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={LOGO_URL} alt="شركة إعفاء" className="w-24 h-24 md:w-32 md:h-32 object-contain mx-auto mb-8 rounded-2xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 md:w-24" style={{ background: 'rgba(169,124,80,0.5)' }} />
            <Scale className="w-5 h-5" style={{ color: '#a97c50' }} />
            <div className="h-px w-16 md:w-24" style={{ background: 'rgba(169,124,80,0.5)' }} />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            شركة إعفاء
          </h1>
          <p className="text-lg md:text-2xl font-medium mb-2" style={{ color: '#a97c50' }}>
            للمحاماة والاستشارات القانونية ذ.م.م
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/70 text-base md:text-xl max-w-3xl mx-auto leading-relaxed mt-6 mb-10"
        >
          شريكك في النجاح — نقدم خبراتنا واستشاراتنا القانونية لتحقيق أهدافك وخدمتك بكل مهنية واحترافية
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to={createPageUrl('Contact')}
            className="px-8 py-4 rounded-xl text-white font-bold text-base md:text-lg transition-all hover:shadow-2xl hover:scale-105 flex items-center gap-2"
            style={{ background: '#99141e' }}
          >
            اطلب استشارة قانونية
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <Link
            to={createPageUrl('Services')}
            className="px-8 py-4 rounded-xl font-bold text-base md:text-lg border-2 transition-all hover:bg-white/10"
            style={{ borderColor: '#a97c50', color: '#a97c50' }}
          >
            تعرف على خدماتنا
          </Link>
        </motion.div>
      </div>
    </section>
  );
}