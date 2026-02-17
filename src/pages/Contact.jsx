import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { services } from '@/content/ar/services';
import { toast } from 'sonner';

const serviceOptions = [...services.map((service) => service.title), 'أخرى'];

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
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0a0c, #99141e, #1a0a0c)' }}>
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            تواصل معنا
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg"
          >
            نسعد بتواصلك ونحرص على خدمتك
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24 pattern-overlay" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {[
                { icon: Phone, label: 'اتصل بنا', value: '0533393367', href: 'tel:0533393367' },
                { icon: Mail, label: 'البريد الإلكتروني', value: 'm@iiafa.info', href: 'mailto:m@iiafa.info' },
                { icon: MapPin, label: 'الموقع', value: 'الرياض، المملكة العربية السعودية', href: null },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: '#99141e10' }}>
                      <item.icon className="w-6 h-6" style={{ color: '#99141e' }} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-bold text-gray-900 hover:text-[#99141e] transition-colors" dir={item.icon === Phone ? 'ltr' : 'rtl'}>
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-bold text-gray-900">{item.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* WhatsApp CTA */}
              <motion.a
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                href="https://wa.me/message/35TT3ASVVP7GF1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl p-6 text-white transition-all hover:scale-[1.02]"
                style={{ background: '#25D366' }}
              >
                <MessageCircle className="w-8 h-8" />
                <div>
                  <p className="font-bold text-lg">تواصل عبر واتساب</p>
                  <p className="text-white/80 text-sm">للردود السريعة والاستشارات</p>
                </div>
              </motion.a>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: '#99141e10' }}>
                      <CheckCircle2 className="w-8 h-8" style={{ color: '#99141e' }} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2" style={{ color: '#99141e' }}>تم إرسال رسالتك بنجاح</h3>
                    <p className="text-gray-500">سنتواصل معك في أقرب وقت ممكن</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="text-2xl font-bold mb-6" style={{ color: '#99141e' }}>أرسل لنا رسالة</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <Label className="text-gray-700 mb-1.5 block">الاسم الكامل *</Label>
                        <Input
                          required
                          value={form.full_name}
                          onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                          className="bg-gray-50 border-gray-200 rounded-xl"
                          placeholder="أدخل اسمك الكامل"
                        />
                      </div>
                      <div>
                        <Label className="text-gray-700 mb-1.5 block">رقم الجوال *</Label>
                        <Input
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="bg-gray-50 border-gray-200 rounded-xl"
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
                          className="bg-gray-50 border-gray-200 rounded-xl"
                          placeholder="example@email.com"
                          dir="ltr"
                        />
                      </div>
                      <div>
                        <Label className="text-gray-700 mb-1.5 block">نوع الخدمة</Label>
                        <Select value={form.service_type} onValueChange={(v) => setForm({ ...form, service_type: v })}>
                          <SelectTrigger className="bg-gray-50 border-gray-200 rounded-xl">
                            <SelectValue placeholder="اختر نوع الخدمة" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceOptions.map(s => (
                              <SelectItem key={s} value={s}>{s}</SelectItem>
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
                        className="bg-gray-50 border-gray-200 rounded-xl min-h-[140px]"
                        placeholder="اكتب رسالتك هنا..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full py-6 rounded-xl text-lg font-bold text-white transition-all hover:opacity-90"
                      style={{ background: '#99141e' }}
                    >
                      {loading ? 'جارٍ الإرسال...' : (
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
