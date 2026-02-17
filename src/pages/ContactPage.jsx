import { useState } from 'react';
import { services } from '../content/ar/services';
import Input from '../components/ui/input';
import Select from '../components/ui/select';
import Textarea from '../components/ui/textarea';
import Button from '../components/ui/button';
import { Toast } from '../components/ui/toast';

const initialState = { fullName: '', phone: '', email: '', service: '', message: '' };

export default function ContactPage() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.fullName.trim()) next.fullName = 'الاسم الكامل مطلوب';
    if (!form.phone.trim()) next.phone = 'رقم الجوال مطلوب';
    if (!form.service.trim()) next.service = 'نوع الخدمة مطلوب';
    if (!form.message.trim()) next.message = 'الرسالة مطلوبة';
    setErrors(next);
    if (Object.keys(next).length) return;
    setToast(true);
    setForm(initialState);
    setTimeout(() => setToast(false), 1800);
  };

  return <div className="container-page py-12"><Toast show={toast} message="تم إرسال طلبك بنجاح" /><h1 className="text-3xl text-[#99141e] font-bold mb-6">تواصل معنا</h1><form onSubmit={submit} className="bg-white rounded-xl p-6 grid gap-4"><div><label>الاسم الكامل</label><Input value={form.fullName} onChange={(e)=>setForm({...form, fullName:e.target.value})} />{errors.fullName && <p className="text-red-600 text-sm">{errors.fullName}</p>}</div><div><label>رقم الجوال</label><Input value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} />{errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}</div><div><label>البريد الإلكتروني (اختياري)</label><Input value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} /></div><div><label>نوع الخدمة</label><Select value={form.service} onChange={(e)=>setForm({...form, service:e.target.value})}><option value="">اختر الخدمة</option>{services.map((service)=><option key={service.slug} value={service.title}>{service.title}</option>)}</Select>{errors.service && <p className="text-red-600 text-sm">{errors.service}</p>}</div><div><label>رسالتك</label><Textarea rows={5} value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} />{errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}</div><Button type="submit" className="bg-[#99141e] text-white">إرسال</Button></form></div>;
}
