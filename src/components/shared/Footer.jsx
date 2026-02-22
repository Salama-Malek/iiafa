import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { Phone, Mail, MapPin } from "lucide-react";
import logo1 from "/logo-1.webp";
import { siteContent } from "@/content/ar/site";
import { t } from "@/i18n";

const LOGO_URL = logo1;
const socialLinks = siteContent.socialLinks;
const navLinks = siteContent.navLinks;
const contactItems = [
  {
    key: "phone",
    href: `tel:${siteContent.contact.phone}`,
    icon: Phone,
    value: <span dir="ltr">{siteContent.contact.phone}</span>,
  },
  {
    key: "email",
    href: `mailto:${siteContent.contact.email}`,
    icon: Mail,
    value: <span>{siteContent.contact.email}</span>,
  },
  {
    key: "address",
    href: null,
    icon: MapPin,
    value: <span>{siteContent.contact.address}</span>,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pattern-overlay pb-24 md:pb-0">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #332114 0%, #2c1d13 48%, #24170f 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #a97c50, transparent)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, #99141e, transparent)" }}
      />
      <div
        className="relative z-10 h-1 w-full"
        style={{
          background:
            "linear-gradient(to left, rgba(169,124,80,0.2), #a97c50, #99141e, #a97c50, rgba(169,124,80,0.2))",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center backdrop-blur-sm sm:text-right lg:col-span-5">
            <img
              src={LOGO_URL}
              alt={t("app.siteName")}
              className="mx-auto mb-4 h-20 w-20 rounded-xl object-contain sm:mx-0"
              loading="lazy"
              decoding="async"
              width="80"
              height="80"
            />
            <p className="text-sm leading-relaxed text-white/75 sm:text-base">
              {t("footer.description")}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#a97c50]/45 bg-white/[0.04] text-sm text-[#f3e4d1] transition-all hover:-translate-y-0.5 hover:border-[#99141e] hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center backdrop-blur-sm sm:text-right lg:col-span-3">
            <h3 className="mb-4 text-lg font-bold text-[#d7b38b] sm:text-xl">
              {t("footer.quickLinks")}
            </h3>
            <nav aria-label={t("footer.quickLinks")} className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {navLinks.map((l) => (
                <Link
                  key={l.page}
                  to={createPageUrl(l.page)}
                  className="block rounded-lg px-2 py-1 text-sm text-white/75 transition-colors hover:bg-white/5 hover:text-[#f7efe4] sm:text-base"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center backdrop-blur-sm sm:text-right lg:col-span-4">
            <h3 className="mb-4 text-lg font-bold text-[#d7b38b] sm:text-xl">
              {t("footer.contactTitle")}
            </h3>
            <div className="space-y-3">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start justify-center gap-3 rounded-xl px-2 py-2 text-sm text-white/80 transition-colors sm:justify-start sm:text-base">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#99141e]/20 text-[#d9a56a]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="leading-relaxed">{item.value}</span>
                  </div>
                );

                if (!item.href) return <div key={item.key}>{content}</div>;

                return (
                  <a
                    key={item.key}
                    href={item.href}
                    className="block rounded-xl transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {content}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#a97c50]/20 pt-5 text-center">
          <p className="text-xs text-white/60 sm:text-sm">
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </p>
          <p className="mt-2 text-xs text-[#d8c0a3]/90 sm:text-sm">
            Developed by{" "}
            <a
              href="mailto:salama.malek.dev@gmail.com"
              rel="noopener noreferrer"
              className="font-semibold text-[#d9a56a] transition-colors hover:text-[#f3d5ae]"
            >
              salama.malek.dev@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
