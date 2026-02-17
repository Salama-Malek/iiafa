import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { GraduationCap, Award, Briefcase, FileCheck, ArrowLeft } from 'lucide-react';

export default function Lawyer() {
  const qualifications = [
    'بكالوريوس من جامعة الإمام محمد بن سعود الإسلامية — كلية الشريعة، تخصص الشريعة',
    'ماجستير من المعهد العالي للقضاء بجامعة الإمام محمد بن سعود الإسلامية، تخصص السياسة الشرعية (أنظمة/قانون)',
  ];

  const programs = [
    'برنامج فقه الوقف — مركز واقف خبراء الوصايا والأوقاف',
    'أكثر من 200 ساعة تدريبية في المجال القانوني والعقاري والمالي',
  ];

  const certifications = [
    'زمالة المستشار الشرعي في فقه المالية الإسلامية وتسوية المنازعات — الجمعية العلمية القضائية السعودية',
    'شهادة التأهيل المهني لوكيل الملكية الفكرية',
    'اجتاز المستوى الأول والثاني من زمالة التحكيم التجاري الدولي — المعهد البريطاني الملكي بالتعاون مع مركز التحكيم التجاري السعودي',
    'يدرس في برنامج شهادة الاعتماد المهني للقانونيين — الهيئة السعودية للمحامين',
  ];

  const licenses = [
    'ترخيص مزاولة مهنة المحاماة',
    'ترخيص وكيل ملكية فكرية — الهيئة السعودية للملكية الفكرية',
    'ترخيص مزاولة أعمال التوثيق',
    'ترخيص وسيط امتياز تجاري معتمد — الهيئة العامة للمنشآت الصغيرة والمتوسطة "منشآت"',
    'ترخيص مستشار استشارات عمالية — وزارة الموارد البشرية',
    'ترخيص مسجل عقاري — الهيئة العامة للعقار',
    'ترخيص الوساطة العقارية (فال) — الهيئة العامة للعقار',
  ];

  const sections = [
    { title: 'المؤهلات العلمية', icon: GraduationCap, items: qualifications },
    { title: 'البرامج العلمية والتدريبية', icon: Award, items: programs },
    { title: 'الشهادات المهنية', icon: Award, items: certifications },
    { title: 'التراخيص', icon: FileCheck, items: licenses },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--surface-darker), var(--primary-solid), var(--surface-darker))' }}>
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            المحامي
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-medium" style={{ color: 'var(--primary-solid)' }}
          >
            محمد بن حمد السلمان
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 pattern-overlay" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Briefcase className="w-7 h-7" style={{ color: 'var(--primary-solid)' }} />
              <h2 className="text-2xl font-bold" style={{ color: 'var(--primary-solid)' }}>الخبرة العملية</h2>
            </div>
            <p className="text-gray-700 text-base leading-loose">
              يعمل المحامي محمد بن حمد السلمان في المجال القانوني منذ عام 1438هـ، قام خلال هذه الفترة بالتدرب لدى مكاتب المحاماة وإدارة الشؤون القانونية. تخلل هذه الفترة تمثيل العملاء أمام المحاكم التجارية والعمالية والعامة والإدارية، كما قام بتقديم العديد من الاستشارات وصياغة العقود والمذكرات ومراجعتها ودراسة القضايا وتحديد الجدوى، وغيرها من الأعمال القانونية.
            </p>
          </motion.div>

          {/* Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((section, si) => (
              <motion.div
                key={si}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: si * 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--primary-solid)10' }}>
                    <section.icon className="w-5 h-5" style={{ color: 'var(--primary-solid)' }} />
                  </div>
                  <h3 className="font-bold text-lg" style={{ color: 'var(--primary-solid)' }}>{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, ii) => (
                    <li key={ii} className="flex gap-3 items-start">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2.5" style={{ background: 'var(--primary-solid)' }} />
                      <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <a
              href="https://www.linkedin.com/in/%D9%85%D8%AD%D9%85%D8%AF-%D8%A7%D9%84%D8%B3%D9%84%D9%85%D8%A7%D9%86-272173225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium border-2 transition-all hover:bg-gray-50"
              style={{ borderColor: 'var(--primary-solid)', color: 'var(--primary-solid)' }}
            >
              الملف الشخصي على LinkedIn
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}