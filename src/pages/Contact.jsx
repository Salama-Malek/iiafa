import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageCircle, ShieldCheck, Clock3, Scale } from 'lucide-react';
import { services } from '@/content/ar/services';
import { toast } from 'sonner';

const serviceOptions = [...services.map((service) => service.title), 'أخرى'];

const contactChannels = [
  { icon: Phone, label: 'الهاتف', value: '0533393367', hint: 'اتصال مباشر', href: 'tel:0533393367', ltr: true },
  { icon: Mail, label: 'البريد الإلكتروني', value: 'm@iiafa.info', hint: 'استقبال الطلبات', href: 'mailto:m@iiafa.info', ltr: true },
  { icon: MapPin, label: 'الموقع', value: 'الرياض، المملكة العربية السعودية', hint: 'خدمة محلية ووطنية', href: null },
];

const trustPoints = [
  { icon: ShieldCheck, title: 'سرية تامة', text: 'نحافظ على بياناتك وخصوصيتك في جميع مراحل التواصل.' },
  { icon: Clock3, title: 'استجابة سريعة', text: 'نراجع طلبك في أقرب وقت ونعود إليك بخطوات واضحة.' },
  { icon: Scale, title: 'حلول قانونية دقيقة', text: 'نوجهك للخدمة الأنسب بحسب نوع قضيتك واحتياجك.' },
];

export default function Contact() {
  const [form, setForm] = useState({ full_name: '', phone: '', email: '', service_type: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.full_name.trim() || !form.phone.trim() || !form.message.trim()) {
      toast.error('يرجى تعبئة الحقول المطلوبة');
      setLoading(false);
      return;
    }

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success('تم إرسال طلبك بنجاح');
      setForm({ full_name: '', phone: '', email: '', service_type: '', message: '' });
    }, 500);
  };

  return (
    <div className="overflow-hidden">
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(120% 120% at 70% 0%, rgba(169,124,80,0.28) 0%, rgba(153,20,30,0.22) 35%, rgba(26,10,12,0.94) 85%), linear-gradient(130deg, #14070a 0%, #6e0f16 45%, #14070a 100%)',
          }}
        />
        <div className="absolute inset-0 pattern-overlay opacity-30" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
              <span
                className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-5"
                style={{ background: 'rgba(169,124,80,0.24)', color: 'var(--gold-light)' }}
              >
                يسعدنا تواصلكم
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">ابدأ استشارتك القانونية بثقة</h1>
              <p className="text-white/80 text-lg md:text-xl max-w-xl">
                فريق إعفاء جاهز للاستماع إلى تفاصيل طلبك وتقديم توجيه قانوني مهني يتوافق مع احتياجك.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="rounded-3xl p-6 md:p-7 border border-white/10 backdrop-blur-sm"
              style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))' }}
            >
              <p className="text-white/75 mb-4">قنوات التواصل المباشرة</p>
              <div className="space-y-3">
                {contactChannels.map((item) => (
                  <a
                    key={item.label}
                    href={item.href || undefined}
                    className="group flex items-center gap-4 rounded-2xl p-4 border border-white/10 bg-white/5 transition-all hover:bg-white/10"
                  >
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: 'rgba(169,124,80,0.24)' }}>
                      <item.icon className="w-5 h-5" style={{ color: 'var(--gold-light)' }} />
                    </div>
                    <div>
                      <p className="text-xs text-white/60">{item.label}</p>
                      <p className="font-bold text-white group-hover:text-[var(--gold-light)]" dir={item.ltr ? 'ltr' : 'rtl'}>
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 pattern-overlay" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            <div className="space-y-5">
              {trustPoints.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl p-5 border shadow-sm"
                  style={{ background: '#fff', borderColor: 'rgba(169,124,80,0.22)' }}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3" style={{ background: 'rgba(153,20,30,0.09)' }}>
                    <point.icon className="w-5 h-5" style={{ color: 'var(--burgundy)' }} />
                  </div>
                  <h3 className="font-bold text-lg mb-1.5" style={{ color: 'var(--burgundy)' }}>
                    {point.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-7">{point.text}</p>
                </motion.div>
              ))}

              <motion.a
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                href="https://wa.me/message/35TT3ASVVP7GF1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl p-5 text-white transition-all hover:scale-[1.02] shadow-sm"
                style={{ background: 'linear-gradient(135deg, #25D366, #1cad52)' }}
              >
                <MessageCircle className="w-8 h-8" />
                <div>
                  <p className="font-bold text-lg">تواصل عبر واتساب</p>
                  <p className="text-white/85 text-sm">ردود سريعة ومتابعة فورية لطلبك</p>
                </div>
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="rounded-3xl p-8 md:p-10 shadow-lg border bg-white" style={{ borderColor: 'rgba(169,124,80,0.25)' }}>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'rgba(153,20,30,0.1)' }}>
                      <CheckCircle2 className="w-8 h-8" style={{ color: 'var(--burgundy)' }} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--burgundy)' }}>
                      تم إرسال رسالتك بنجاح
                    </h3>
                    <p className="text-gray-500">سنتواصل معك في أقرب وقت ممكن</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--burgundy)' }}>
                        أرسل لنا تفاصيل طلبك
                      </h2>
                      <span className="text-sm px-3 py-1.5 rounded-full" style={{ color: 'var(--burgundy)', background: 'rgba(153,20,30,0.08)' }}>
                        * الحقول الإلزامية
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <Label className="text-gray-700 mb-1.5 block">الاسم الكامل *</Label>
                        <Input
                          required
                          value={form.full_name}
                          onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                          className="bg-[#fcfbf9] border-[#e6ded3] rounded-xl h-12"
                          placeholder="أدخل اسمك الكامل"
                        />
                      </div>
                      <div>
                        <Label className="text-gray-700 mb-1.5 block">رقم الجوال *</Label>
                        <Input
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="bg-[#fcfbf9] border-[#e6ded3] rounded-xl h-12"
                          placeholder="05XXXXXXXX"
                          dir="ltr"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <Label className="text-gray-700 mb-1.5 block">البريد الإلكتروني</Label>
                        <Input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="bg-[#fcfbf9] border-[#e6ded3] rounded-xl h-12"
                          placeholder="example@email.com"
                          dir="ltr"
                        />
                      </div>
                      <div>
                        <Label className="text-gray-700 mb-1.5 block">نوع الخدمة</Label>
                        <Select value={form.service_type} onValueChange={(v) => setForm({ ...form, service_type: v })}>
                          <SelectTrigger className="bg-[#fcfbf9] border-[#e6ded3] rounded-xl h-12">
                            <SelectValue placeholder="اختر نوع الخدمة" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceOptions.map((s) => (
                              <SelectItem key={s} value={s}>
                                {s}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label className="text-gray-700 mb-1.5 block">رسالتك *</Label>
                      <Textarea
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="bg-[#fcfbf9] border-[#e6ded3] rounded-xl min-h-[150px]"
                        placeholder="اكتب رسالتك هنا..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full py-6 rounded-xl text-lg font-bold text-white transition-all hover:opacity-95"
                      style={{ background: 'linear-gradient(130deg, var(--burgundy), #7f121a)' }}
                    >
                      {loading ? (
                        'جارٍ الإرسال...'
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Send className="w-5 h-5" />
                          إرسال الرسالة
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
