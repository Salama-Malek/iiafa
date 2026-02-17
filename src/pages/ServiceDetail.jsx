import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, MessageCircle, CheckCircle2 } from 'lucide-react';
import { getServiceBySlug } from '@/lib/services';

const servicesData = {
  'commercial-companies': {
    title: 'أعمال الشركات التجارية',
    items: [
      'صياغة عقود الشركات التجارية بكافة أنواعها',
      'تأسيس الشركات المحدودة، وصياغة قرارات تعديل عقودها وزيادة وتخفيض رأس المال',
      'تشكيل مجالس المديرين وتحديد صلاحيات الإدارة التنفيذية',
      'استكمال كافة إجراءات التوثيق وتعديل السجل التجاري',
      'تأسيس الشركات المساهمة والنظام الأساسي وعقد الجمعيات التأسيسية والعامة',
      'تحويل المؤسسة الفردية إلى شركة',
    ],
  },
  'legal-drafting': {
    title: 'الصياغة القانونية',
    items: [
      'صياغة اللوائح الداخلية للمنشآت التجارية',
      'صياغة اللوائح الاعتراضية على الأحكام القضائية',
      'صياغة العقود: عقود البيع، عقود الإيجار، عقود الاستثمارات العقارية، والمحافظ الاستثمارية، وغيرها',
      'صياغة الخطابات القانونية',
    ],
  },
  'legal-consulting': {
    title: 'الاستشارات القانونية',
    items: [
      'تقديم الاستشارات القانونية الشفوية والكتابية',
      'عقود تقديم الاستشارات السنوية للشركات والمنشآت',
      'التمثيل القانوني في القضايا العمالية والإدارية والتجارية والمالية',
      'صياغة العقود السنوية بما يتوافق مع احتياجات العميل',
    ],
  },
  'litigation': {
    title: 'الأعمال القضائية',
    items: [
      'تسوية المنازعات بالطرق البديلة بما في ذلك الصلح والتوفيق بين أطراف النزاع',
      'الترافع في القضايا التجارية والعقارية والمالية والعمالية والإدارية',
      'الترافع أمام القضاء التجاري والعام والإداري واللجان القضائية',
      'الاعتراض على القرارات الإدارية',
      'قضايا التعويض ومنازعات العقود ضد الجهات الإدارية',
      'تصفية التركات بطريقي التصفية الاختيارية والجبرية وحل نزاعات الورثة',
      'تحكيم القضايا التجارية وتمثيل الأطراف في قضايا التحكيم',
    ],
  },
  'waqf-wills': {
    title: 'الأوقاف والوصايا',
    items: [
      'صياغة الوصايا وهيكلة إدارتها وصلاحياتها ومصارف الوصية',
      'صياغة صكوك الأوقاف الأهلية والخيرية وهيكلة النظارة عليها وصلاحيات النظار',
      'الإشراف القانوني على إدارة الأوقاف',
      'الإشراف القانوني على المؤسسات الخيرية الخاصة',
    ],
  },
  'commercial-ip': {
    title: 'الوكالات التجارية والملكية الفكرية',
    items: [
      'صياغة عقود الوكالات التجارية والامتياز التجاري (الفرنشايز)',
      'تسجيل العلامات التجارية وحمايتها والاعتراض على قرارات رفض التسجيل',
      'أعمال الملكية الفكرية كإيداع براءات الاختراع وحقوق المؤلف وغيرها',
    ],
  },
  'notarization-realestate': {
    title: 'أعمال التوثيق والتسجيل العقاري',
    items: [
      'أعمال التوثيق: إفراغ عقار، رهن عقار، فك رهن عقار، تصحيح رهن عقار',
      'إصدار الوكالات للأفراد والتجار والمنشآت',
      'الإقرارات المالية إصدارها والإقرار بسدادها وتوثيق عقود الشركات',
      'أعمال المسجل العقاري: نقل الملكية (بيع / هبة)',
      'إدارة القيود والحقوق والالتزامات: رهن، نقل الرهن، حق الارتفاق، حق الشفعة',
      'الإيجار وحق سكنى وحق استعمال وتعديل الحق',
      'الوساطة في الامتياز التجاري والتسويق والوساطة العقارية',
    ],
  },
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug) || servicesData[slug || 'commercial-companies'];

  if (!service) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="text-xl text-gray-500">الخدمة غير موجودة</p>
        <Link to={createPageUrl('Services')} className="mt-4 inline-block text-[var(--primary-solid)] font-bold">
          العودة للخدمات
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--surface-darker), var(--primary-solid), var(--surface-darker))' }}>
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
            <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--primary-solid)' }}>ما نقدمه في هذه الخدمة</h2>
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
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: 'var(--primary-solid)' }} />
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
            style={{ background: 'linear-gradient(to left, var(--primary-solid), var(--primary-strong))' }}
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
              className="inline-flex items-center gap-2 text-gray-500 hover:text-[var(--primary-solid)] transition-colors font-medium"
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