import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { Phone, Mail, MapPin } from "lucide-react";
import logo1 from "/logo-1.webp";
import { siteContent } from "@/content/ar/site";
import { t } from "@/i18n";

const LOGO_URL = logo1;
const socialLinks = siteContent.socialLinks;
const navLinks = siteContent.navLinks;

export default function Footer() {
  return (
    <footer
      className="relative pattern-overlay pb-20 md:pb-0"
      style={{ background: "#2c1d13" }}
    >
      <div
        className="h-1 w-full"
        style={{
          background: "linear-gradient(to left, #a97c50, #99141e, #a97c50)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          <div className="text-center md:text-right">
            <img
              src={LOGO_URL}
              alt={t("app.siteName")}
              className="w-20 h-20 object-contain rounded-lg mx-auto md:mx-0 md:mr-0 mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[#99141e] transition-all text-xs"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="text-center md:text-right">
            <h3
              className="text-white font-bold text-lg mb-4"
              style={{ color: "#99141e" }}
            >
              {t("footer.quickLinks")}
            </h3>
            <nav className="space-y-2">
              {navLinks.map((l) => (
                <Link
                  key={l.page}
                  to={createPageUrl(l.page)}
                  className="block text-white/60 hover:text-white transition-colors text-sm"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="text-center md:text-right">
            <h3
              className="text-white font-bold text-lg mb-4"
              style={{ color: "#99141e" }}
            >
              {t("footer.contactTitle")}
            </h3>
            <div className="space-y-4">
              <a
                href={`tel:${siteContent.contact.phone}`}
                className="flex items-center justify-center md:justify-start gap-3 text-white/60 hover:text-white transition-colors text-sm"
              >
                <Phone className="w-4 h-4" style={{ color: "#99141e" }} />
                <span dir="ltr">{siteContent.contact.phone}</span>
              </a>
              <a
                href={`mailto:${siteContent.contact.email}`}
                className="flex items-center justify-center md:justify-start gap-3 text-white/60 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4" style={{ color: "#99141e" }} />
                <span>{siteContent.contact.email}</span>
              </a>
              <div className="flex items-center justify-center md:justify-start gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4" style={{ color: "#99141e" }} />
                <span>{siteContent.contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
