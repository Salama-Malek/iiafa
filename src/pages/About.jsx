import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Building2, Eye, Play, ShieldCheck, Sparkles, Star, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import aboutVideoWebm from '../assets/Videos/about.webm';
import aboutVideoMp4 from '../assets/Videos/about.mp4';
import aboutPoster from '../assets/Images/about-poster.webp';
import logo1 from '/logo-1.webp';

const LOGO_URL = logo1;

const values = [
  {
    icon: Target,
    title: 'رسالتنا',
    desc: 'تقديم خدمات قانونية متكاملة واحترافية تسهم في تحقيق أهداف عملائنا وحماية حقوقهم بأعلى معايير المهنية والجودة.',
  },
  {
    icon: Eye,
    title: 'رؤيتنا',
    desc: 'أن نكون الخيار الأول والأمثل في تقديم الخدمات القانونية بالمملكة العربية السعودية، معتمدين على التميز والابتكار.',
  },
  {
    icon: Star,
    title: 'قيمنا',
    desc: 'النزاهة والأمانة والسرية التامة في التعامل مع قضايا عملائنا، مع الالتزام بأعلى المعايير المهنية والأخلاقية.',
  },
];

const strengths = [
  'خبرة متخصصة في الأنظمة السعودية',
  'استجابة سريعة ومتابعة مستمرة للقضايا',
  'حلول قانونية عملية تناسب كل حالة',
  'منهجية واضحة من التقييم حتى التنفيذ',
];

export default function About() {
  return (
    <div className="bg-[var(--cream)]">
      <section
        className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
        style={{ background: 'linear-gradient(120deg, #2c1d13 0%, #654428 40%, #a97c50 100%)' }}
      >
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute -top-24 right-1/3 w-80 h-80 rounded-full bg-[#ffffff10] blur-3xl" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-bold mb-5">
              <Building2 className="w-4 h-4" aria-hidden="true" />
              من نحن
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">شركة إعفاء للمحاماة والاستشارات القانونية</h1>
            <p className="text-white/85 text-lg leading-loose max-w-3xl mx-auto">
              نعمل كشريك قانوني موثوق لرواد الأعمال والشركات والأفراد، ونجمع بين الخبرة النظامية والتمثيل القضائي
              الفعال وصياغة الحلول التي تحقق الأثر الحقيقي.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl p-7 md:p-10 border border-[#e8dfd5] bg-white shadow-sm"
            >
              <div className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full bg-[#a97c5015] text-sm font-bold text-[#6e4e2f] mb-4">
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                لماذا إعفاء
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#a97c50' }}>
                خبرة قانونية تصنع الفرق
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-loose mb-4">
                انطلاقاً من الخبرات المتكاملة والمتنوعة، نشأت شركة إعفاء للمحاماة والاستشارات القانونية لتكون شريكك
                في النجاح بعون الله وتوفيقه.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-loose mb-6">
                نسعى من خلال تقديم خبراتنا واستشاراتنا القانونية لتحقيق أهداف عملائنا وخدمتهم بكل مهنية واحترافية،
                مستندين إلى قاعدة معرفية واسعة في مختلف فروع القانون السعودي.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {strengths.map((item) => (
                  <div key={item} className="rounded-xl border border-[#e9e0d6] bg-[#fcfaf8] px-4 py-3 text-sm font-medium">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl bg-[#2c1d13] p-6 md:p-7 text-white border border-[#5e432c]"
            >
              <div className="rounded-2xl bg-white/10 border border-white/15 p-6">
                <picture>
                  <source srcSet="/logo-1.avif" type="image/avif" />
                  <img
                    src={LOGO_URL}
                    alt="شعار شركة إعفاء"
                    className="w-28 h-28 object-contain mx-auto mb-5"
                    loading="lazy"
                    decoding="async"
                    width="112"
                    height="112"
                  />
                </picture>
                <div className="space-y-4">
                  <div>
                    <p className="text-[#d6b693] text-sm">التخصص</p>
                    <p className="font-bold">المحاماة والاستشارات القانونية</p>
                  </div>
                  <div>
                    <p className="text-[#d6b693] text-sm">المنهج</p>
                    <p className="font-bold">احترافية - التزام - وضوح</p>
                  </div>
                  <div>
                    <p className="text-[#d6b693] text-sm">الهدف</p>
                    <p className="font-bold">حماية المصالح وتحقيق النتائج</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] p-4 md:p-6 border border-[#e5d9cc] bg-white shadow-sm"
          >
            <div className="flex items-center justify-between flex-wrap gap-3 mb-4 px-2">
              <div>
                <p className="text-sm text-[#7c5a37] font-bold">معاينة فيديو الشركة</p>
                <h3 className="text-2xl md:text-3xl font-bold" style={{ color: '#a97c50' }}>
                  نظرة سريعة على هويتنا وخدماتنا
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#99141e] text-white px-4 py-2 text-sm font-bold">
                <Play className="w-4 h-4" aria-hidden="true" />
                فيديو تعريفي
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden border border-[#dccdbd] bg-[#1d130b] shadow-xl">
              <video
                controls
                preload="none"
                poster={aboutPoster}
                playsInline
                width="1280"
                height="720"
                className="w-full h-[280px] md:h-[520px] object-cover"
              >
                <source src={aboutVideoWebm} type="video/webm" />
                <source src={aboutVideoMp4} type="video/mp4" />
                المتصفح الحالي لا يدعم تشغيل الفيديو.
              </video>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="rounded-2xl p-7 bg-white border border-[#e9e0d6] shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[#a97c5015] flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6" style={{ color: '#a97c50' }} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#a97c50' }}>
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-7 md:p-10 bg-[#2c1d13] text-white border border-[#5c3d25]"
          >
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-[#d6b693]" aria-hidden="true" />
              <h3 className="text-2xl font-bold">ماذا نضمن لك</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                'تحليل قانوني دقيق للقضية',
                'مسار عمل واضح وجدول متابعة',
                'شفافية كاملة في التواصل',
                'سرية والتزام بأعلى المعايير',
              ].map((item) => (
                <div key={item} className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 text-center" style={{ background: 'var(--warm-gray)' }}>
        <Link
          to={createPageUrl('Contact')}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg transition-all hover:opacity-90 hover:scale-105"
          style={{ background: '#a97c50' }}
        >
          تواصل معنا
          <ArrowLeft className="w-5 h-5" aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
}
