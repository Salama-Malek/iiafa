import React, { useMemo, useState } from "react";
import { LazyMotion, domAnimation, motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  Clock3,
  Scale,
  User,
  Smartphone,
  AtSign,
  Briefcase,
  MessageSquareText,
} from "lucide-react";
import { services } from "@/content/ar/services";
import { toast } from "sonner";

const CONTACT_EMAIL = "m@iiafa.info";
const INITIAL_FORM = {
  full_name: "",
  phone: "",
  email: "",
  service_type: "",
  message: "",
};

function buildMailtoLink(form) {
  const selectedService = form.service_type || "Other";
  const subject = `Legal Consultation Request - ${selectedService}`;
  const body = [
    "New consultation request details:",
    `Full Name: ${form.full_name}`,
    `Phone: ${form.phone}`,
    `Email: ${form.email || "-"}`,
    `Requested Service: ${selectedService}`,
    "",
    "Message:",
    form.message,
  ].join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const contactChannels = [
  {
    icon: Phone,
    label: "الهاتف",
    value: "0533393367",
    hint: "اتصال مباشر",
    href: "tel:0533393367",
    ltr: true,
  },
  {
    icon: Mail,
    label: "البريد الإلكتروني",
    value: CONTACT_EMAIL,
    hint: "استقبال الطلبات",
    href: `mailto:${CONTACT_EMAIL}`,
    ltr: true,
  },
  {
    icon: MapPin,
    label: "الموقع",
    value: "الرياض، المملكة العربية السعودية",
    hint: "خدمة محلية ووطنية",
    href: null,
    ltr: false,
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "سرية تامة",
    text: "نحافظ على بياناتك وخصوصيتك في جميع مراحل التواصل.",
  },
  {
    icon: Clock3,
    title: "استجابة سريعة",
    text: "نراجع طلبك في أقرب وقت ونعود إليك بخطوات واضحة.",
  },
  {
    icon: Scale,
    title: "حلول قانونية دقيقة",
    text: "نوجهك للخدمة الأنسب بحسب نوع قضيتك واحتياجك.",
  },
];

function RequiredMark() {
  return <span className="text-red-600">*</span>;
}

function Field({ label, required, hint, icon: Icon, children }) {
  return (
    <div className="space-y-2 w-full min-w-0">
      <div className="flex items-start justify-between gap-3 w-full">
        <Label className="text-sm font-semibold text-gray-800 text-right inline-flex items-center gap-2">
          {Icon ? (
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[rgba(169,124,80,0.07)] border border-[rgba(169,124,80,0.12)]">
              <Icon className="h-4 w-4 text-[var(--gold)]" />
            </span>
          ) : null}
          <span>
            {label} {required ? <RequiredMark /> : null}
          </span>
        </Label>

        {hint ? (
          <span className="text-xs text-gray-500 mt-1 text-left whitespace-nowrap">
            {hint}
          </span>
        ) : null}
      </div>

      {children}
    </div>
  );
}

function InputShell({ dir, children }) {
  return (
    <div
      dir={dir}
      className={[
        "w-full min-w-0",
        "group relative rounded-2xl border bg-white shadow-sm transition-all",
        "border-[rgba(169,124,80,0.25)]",
        "focus-within:ring-2 focus-within:ring-[rgba(169,124,80,0.18)] focus-within:border-[rgba(169,124,80,0.35)]",
        "hover:border-[rgba(169,124,80,0.32)]",
      ].join(" ")}
    >
      <div className="relative w-full">{children}</div>
    </div>
  );
}

export default function Contact() {
  const serviceOptions = useMemo(
    () => [...services.map((s) => s.title), "أخرى"],
    []
  );

  const [form, setForm] = useState(INITIAL_FORM);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const isValid = useMemo(() => {
    return (
      form.full_name.trim().length > 0 &&
      form.phone.trim().length > 0 &&
      form.service_type.trim().length > 0 &&
      form.message.trim().length > 0
    );
  }, [form.full_name, form.phone, form.service_type, form.message]);

  const updateForm = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;

    if (!isValid) {
      toast.error("يرجى تعبئة الحقول المطلوبة");
      return;
    }

    setLoading(true);
    try {
      window.location.href = buildMailtoLink(form);
      setSubmitted(true);
      toast.success("تم تجهيز الرسالة. يرجى تأكيد الإرسال من تطبيق البريد.");
      setForm(INITIAL_FORM);
    } catch (error) {
      toast.error("لم نتمكن من فتح تطبيق البريد.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 120% at 70% 0%, rgba(169,124,80,0.34) 0%, rgba(153,20,30,0.22) 35%, rgba(44,29,19,0.94) 85%), linear-gradient(130deg, #25180f 0%, #8b643f 45%, #25180f 100%)",
          }}
        />
        <div className="absolute inset-0 pattern-overlay opacity-30" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <LazyMotion features={domAnimation}>
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
              >
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-5 border border-white/10"
                  style={{
                    background: "rgba(169,124,80,0.18)",
                    color: "var(--gold-light)",
                  }}
                >
                  <span className="h-2 w-2 rounded-full bg-[var(--gold-light)]/80" />
                  يسعدنا تواصلكم
                </span>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                  ابدأ استشارتك القانونية بثقة
                </h1>

                <p className="text-white/80 text-lg md:text-xl max-w-xl leading-8">
                  فريق إعفاء جاهز للاستماع إلى تفاصيل طلبك وتقديم توجيه قانوني
                  مهني يتوافق مع احتياجك.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm border border-white/10 bg-white/5 text-white/80">
                    <ShieldCheck className="h-4 w-4 text-[var(--gold-light)]" />
                    سرية تامة
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm border border-white/10 bg-white/5 text-white/80">
                    <Clock3 className="h-4 w-4 text-[var(--gold-light)]" />
                    استجابة سريعة
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm border border-white/10 bg-white/5 text-white/80">
                    <Scale className="h-4 w-4 text-[var(--gold-light)]" />
                    حلول دقيقة
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12 }}
                className="rounded-3xl p-6 md:p-7 border border-white/10 backdrop-blur-sm"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
                }}
              >
                <div className="flex items-center justify-between gap-4 mb-4">
                  <p className="text-white/80 font-semibold">قنوات التواصل</p>
                  <span className="text-xs text-white/60">
                    نرد خلال أوقات العمل
                  </span>
                </div>

                <div className="space-y-3">
                  {contactChannels.map((item) => (
                    <a
                      key={item.label}
                      href={item.href || undefined}
                      className="group flex items-center gap-4 rounded-2xl p-4 border border-white/10 bg-white/5 transition-all hover:bg-white/10 hover:border-white/20"
                      {...(item.href
                        ? {
                            target: item.href.startsWith("http")
                              ? "_blank"
                              : undefined,
                          }
                        : {})}
                      rel={
                        item.href && item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/10"
                        style={{ background: "rgba(169,124,80,0.18)" }}
                      >
                        <item.icon
                          className="w-5 h-5"
                          style={{ color: "var(--gold-light)" }}
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs text-white/60">{item.label}</p>
                        <p
                          className="font-bold text-white group-hover:text-[var(--gold-light)] truncate"
                          dir={item.ltr ? "ltr" : "rtl"}
                        >
                          {item.value}
                        </p>
                        <p className="text-xs text-white/55 mt-0.5">
                          {item.hint}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            </LazyMotion>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section
        className="py-16 md:py-24 pattern-overlay"
        style={{ background: "var(--cream)" }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Trust cards */}
            <div className="space-y-5">
              <LazyMotion features={domAnimation}>
                {trustPoints.map((point, i) => (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.35 }}
                    className="rounded-2xl p-5 border shadow-sm bg-white"
                    style={{ borderColor: "rgba(169,124,80,0.22)" }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 border"
                      style={{
                        background: "rgba(169,124,80,0.08)",
                        borderColor: "rgba(169,124,80,0.14)",
                      }}
                    >
                      <point.icon
                        className="w-5 h-5"
                        style={{ color: "var(--gold)" }}
                      />
                    </div>

                    <h3
                      className="font-bold text-lg mb-1.5"
                      style={{ color: "var(--gold)" }}
                    >
                      {point.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-7">
                      {point.text}
                    </p>
                  </motion.div>
                ))}

                <motion.a
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.28, duration: 0.35 }}
                  href="https://wa.me/message/35TT3ASVVP7GF1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl p-5 text-white transition-all hover:scale-[1.02] shadow-sm border border-white/10"
                  style={{
                    background: "linear-gradient(135deg, #25D366, #1cad52)",
                  }}
                >
                  <MessageCircle className="w-8 h-8" />
                  <div>
                    <p className="font-bold text-lg">تواصل عبر واتساب</p>
                    <p className="text-white/85 text-sm">
                      ردود سريعة ومتابعة فورية لطلبك
                    </p>
                  </div>
                </motion.a>
              </LazyMotion>
            </div>

            {/* Form */}
            <LazyMotion features={domAnimation}>
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="lg:col-span-2 min-w-0"
              >
                <div
                  className="rounded-3xl p-6 md:p-10 shadow-xl border bg-white w-full min-w-0"
                  style={{ borderColor: "rgba(169,124,80,0.22)" }}
                >
                  {submitted ? (
                    <div className="text-center py-12" dir="rtl">
                      <div
                        className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center border"
                        style={{
                          background: "rgba(169,124,80,0.09)",
                          borderColor: "rgba(169,124,80,0.16)",
                        }}
                      >
                        <CheckCircle2
                          className="w-8 h-8"
                          style={{ color: "var(--gold)" }}
                        />
                      </div>

                      <h3
                        className="text-2xl font-bold mb-2"
                        style={{ color: "var(--gold)" }}
                      >
                        تم إرسال رسالتك بنجاح
                      </h3>

                      <p className="text-gray-500 leading-7">
                        سنتواصل معك في أقرب وقت ممكن
                      </p>

                      <div className="mt-8">
                        <Button
                          type="button"
                          onClick={() => setSubmitted(false)}
                          className="rounded-xl px-6"
                          style={{
                            background:
                              "linear-gradient(130deg, var(--gold), #8b643f)",
                          }}
                        >
                          إرسال طلب جديد
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-6 w-full"
                      dir="rtl"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-4 w-full">
                        <div className="min-w-0">
                          <h2
                            className="text-2xl md:text-3xl font-bold"
                            style={{ color: "var(--gold)" }}
                          >
                            أرسل لنا تفاصيل طلبك
                          </h2>
                          <p className="text-sm text-gray-500 mt-1 leading-7">
                            املأ البيانات الأساسية وسنعود إليك بخطوات واضحة.
                          </p>
                        </div>

                        <span
                          className="text-sm px-3 py-1.5 rounded-full border shrink-0"
                          style={{
                            color: "var(--gold)",
                            background: "rgba(169,124,80,0.06)",
                            borderColor: "rgba(169,124,80,0.14)",
                          }}
                        >
                          <RequiredMark /> الحقول الإلزامية
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                        <Field label="الاسم الكامل" required icon={User}>
                          <InputShell dir="rtl">
                            <Input
                              required
                              autoComplete="name"
                              value={form.full_name}
                              onChange={(e) =>
                                updateForm("full_name", e.target.value)
                              }
                              className="w-full h-12 rounded-2xl border-0 bg-transparent px-4 text-right placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                              placeholder="أدخل اسمك الكامل"
                            />
                          </InputShell>
                        </Field>

                        <Field
                          label="رقم الجوال"
                          required
                          icon={Smartphone}
                          hint="مثال: 05XXXXXXXX"
                        >
                          <InputShell dir="ltr">
                            <Input
                              required
                              inputMode="tel"
                              autoComplete="tel"
                              value={form.phone}
                              onChange={(e) =>
                                updateForm("phone", e.target.value)
                              }
                              className="w-full h-12 rounded-2xl border-0 bg-transparent px-4 text-left placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                              placeholder="05XXXXXXXX"
                              dir="ltr"
                            />
                          </InputShell>
                        </Field>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                        <Field label="البريد الإلكتروني" icon={AtSign} hint="اختياري">
                          <InputShell dir="ltr">
                            <Input
                              type="email"
                              autoComplete="email"
                              value={form.email}
                              onChange={(e) =>
                                updateForm("email", e.target.value)
                              }
                              className="w-full h-12 rounded-2xl border-0 bg-transparent px-4 text-left placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                              placeholder="example@email.com"
                              dir="ltr"
                            />
                          </InputShell>
                        </Field>
                        <Field label="نوع الخدمة المطلوبة" required icon={Briefcase}>
                          <InputShell dir="rtl">
                            <Select
                              value={form.service_type}
                              onValueChange={(value) =>
                                updateForm("service_type", value)
                              }
                            >
                              <SelectTrigger className="w-full h-12 rounded-2xl border-0 bg-transparent px-4 text-right focus-visible:ring-0 focus-visible:ring-offset-0">
                                <SelectValue placeholder="اختر نوع الخدمة" />
                                <SelectContent>
                                  {serviceOptions.map((option) => (
                                    <SelectItem key={option} value={option}>
                                      {option}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </SelectTrigger>
                            </Select>
                          </InputShell>
                        </Field>

                      </div>

                      <Field label="رسالتك" required icon={MessageSquareText}>
                        <InputShell dir="rtl">
                          <Textarea
                            required
                            value={form.message}
                            onChange={(e) =>
                              updateForm("message", e.target.value)
                            }
                            className="w-full min-h-[160px] rounded-2xl border-0 bg-transparent px-4 py-3 text-right placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
                            placeholder="اكتب رسالتك هنا... (اذكر نوع القضية وأي تفاصيل مهمة)"
                          />
                        </InputShell>
                      </Field>

                      <div className="rounded-2xl border bg-[rgba(169,124,80,0.03)] p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 w-full">
                        <div className="text-sm text-gray-600 leading-7">
                          بالضغط على <span className="font-semibold">إرسال الرسالة</span> أنت توافق على مشاركة البيانات
                          لأغراض التواصل فقط.
                        </div>
                        <div className="text-xs text-gray-500">
                          الحقول المطلوبة: الاسم + الجوال + نوع الخدمة + الرسالة
                        </div>
                      </div>

                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full h-14 rounded-2xl text-lg font-bold text-white transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
                        style={{
                          background:
                            "linear-gradient(130deg, var(--gold), #8b643f)",
                        }}
                      >
                        {loading ? (
                          "جارٍ الإرسال..."
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
            </LazyMotion>
          </div>
        </div>
      </section>
    </div>
  );
}
