import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, Briefcase, FileCheck, GraduationCap, Scale } from 'lucide-react';
import { createPageUrl } from '../utils';
import lawyerPhoto from '../assets/Images/lawyer.jpeg';

export default function Lawyer() {
  const qualifications = [
    'بكالوريوس من جامعة الإمام محمد بن سعود الإسلامية — كلية الشريعة، تخصص الشريعة',
    'ماجستير من المعهد العالي للقضاء بجامعة الإمام محمد بن سعود الإسلامية، تخصص السياسة الشرعية (أنظمة/قانون)',
    'دبلوم من جامعة الملك خالد، تخصص الحوكمة',
  ];

  const programs = [
    'برنامج فقه الوقف — مركز واقف خبراء الوصايا والأوقاف',
    'أكثر من 200 ساعة تدريبية في المجال القانوني والعقاري والمالي',
  ];

  const certifications = [
    "AGRC's International Certified Corporate Governance Officer — The Association of Governance, Risk & Compliance (AGRC)",
    'زمالة المستشار الشرعي في فقه المالية الإسلامية وتسوية المنازعات — الجمعية العلمية القضائية السعودية',
    'شهادة التأهيل المهني لوكيل الملكية الفكرية',
    'اجتاز المستوى الأول والثاني ويدرس في المستوى الثالث والأخير من زمالة التحكيم التجاري الدولي — المعهد البريطاني الملكي (Ciarb) بالتعاون مع مركز التحكيم التجاري السعودي',
    'يدرس في برنامج شهادة الاعتماد المهني للقانونيين — الهيئة السعودية للمحامين',
  ];

  const licenses = [
    'ترخيص مزاولة مهنة المحاماة — مرخص بتاريخ 7/7/1442هـ',
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

  const highlights = [
    { value: '1438هـ', label: 'بداية الخبرة العملية' },
    { value: '200+', label: 'ساعة تدريبية متخصصة' },
    { value: '7', label: 'تراخيص واعتمادات مهنية' },
  ];

  return (
    <div className="bg-[var(--cream)]">
      <section
        className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
        style={{ background: 'linear-gradient(120deg, #2c1d13 0%, #52351f 35%, #a97c50 100%)' }}
      >
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute -top-28 -left-14 w-72 h-72 rounded-full bg-[#ffffff10] blur-3xl" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex px-4 py-2 rounded-full text-sm font-bold text-white/95 bg-white/10 border border-white/20 mb-5">
                المحامي والمستشار القانوني
              </span>
              <h1 className="text-4xl md:text-6xl leading-tight font-bold text-white mb-3">محمد بن حمد السلمان</h1>
              <p className="text-white/85 text-lg leading-loose mb-8 max-w-2xl">
                خبرة قانونية متراكمة في الترافع والاستشارات وصياغة العقود وتمثيل العملاء أمام الجهات القضائية، مع
                التزام كامل بالدقة والسرية وحماية المصالح.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to={createPageUrl('Contact')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all hover:opacity-90"
                  style={{ background: '#99141e' }}
                >
                  احجز استشارة
                  <ArrowLeft className="w-4 h-4" />
                </Link>
                <a
                  href="https://www.linkedin.com/in/%D9%85%D8%AD%D9%85%D8%AF-%D8%A7%D9%84%D8%B3%D9%84%D9%85%D8%A7%D9%86-272173225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white border border-white/40 hover:bg-white/10 transition-all"
                >
                  الملف الشخصي على LinkedIn
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative mx-auto w-full max-w-md"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-t from-[#99141e]/30 to-[#a97c50]/20 blur-xl" />
              <div className="relative bg-white/90 rounded-[2rem] p-4 border border-white/60 shadow-2xl">
                <div className="overflow-hidden rounded-[1.5rem]">
                  <img
                    src={lawyerPhoto}
                    alt="المحامي محمد بن حمد السلمان"
                    className="w-full h-[440px] object-cover object-top"
                  />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  {highlights.map((item) => (
                    <div key={item.label} className="rounded-xl bg-white p-3 border border-[#e8dfd5]">
                      <p className="font-bold text-lg" style={{ color: '#99141e' }}>
                        {item.value}
                      </p>
                      <p className="text-xs text-gray-600 leading-relaxed">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-7 md:p-10 border border-[#ece4dc] shadow-sm"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#a97c5015]">
                <Briefcase className="w-5 h-5" style={{ color: '#a97c50' }} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#a97c50' }}>
                الخبرة العملية
              </h2>
            </div>
            <p className="text-gray-700 text-base md:text-lg leading-loose">
              يعمل المحامي محمد بن حمد السلمان في المجال القانوني منذ عام 1438هـ، قام خلال هذه الفترة بالتدرب لدى
              مكاتب المحاماة وإدارة الشؤون القانونية لشركة نظارات السلمان حتى الآن. تخلل هذه الفترة تمثيل العملاء
              أمام المحاكم التجارية والعمالية والعامة والإدارية، كما قام بتقديم العديد من الاستشارات وصياغة العقود
              والمذكرات ومراجعتها ودراسة القضايا وتحديد الجدوى، وغيرها من الأعمال القانونية.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#ece4dc]"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#a97c5015]">
                    <section.icon className="w-5 h-5" style={{ color: '#a97c50' }} />
                  </div>
                  <h3 className="font-bold text-lg md:text-xl" style={{ color: '#a97c50' }}>
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2.5 bg-[#99141e]" />
                      <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-7 md:p-10 border bg-[#2c1d13] text-white"
          >
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-5 h-5 text-[#d6b693]" />
              <h3 className="text-2xl font-bold">مجالات الممارسة</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {['القضايا التجارية', 'القضايا العمالية', 'القضايا الإدارية', 'صياغة العقود والمذكرات'].map((item) => (
                <div key={item} className="rounded-xl px-4 py-3 bg-white/10 border border-white/15 text-sm font-medium">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
