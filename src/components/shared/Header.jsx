import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { Menu, X } from "lucide-react";
import logo2 from "/logo-2.webp";
import { siteContent } from "@/content/ar/site";
import { t } from "@/i18n";

const LOGO_URL = logo2;
const navLinks = siteContent.navLinks;

export default function Header({ currentPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#f7efe4]/95 backdrop-blur-xl shadow-lg border-b border-[#99141e]/30"
            : "bg-gradient-to-b from-[#7f5938]/95 to-[#8b643f]/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link
              to={createPageUrl("Home")}
              className="flex items-center gap-3"
              aria-label={t("nav.homeAria")}
            >
              <picture>
                <source srcSet="/logo-2.avif" type="image/avif" />
                <img
                  src={LOGO_URL}
                  alt={t("app.siteName")}
                  className="w-11 h-11 md:w-12 md:h-12 object-contain rounded-xl"
                  loading="eager"
                  decoding="async"
                  width="48"
                  height="48"
                />
              </picture>
              <div className="hidden sm:block">
                <div
                  className={`font-bold text-lg transition-colors ${scrolled ? "text-[#a97c50]" : "text-white"}`}
                >
                  {t("hero.title")}
                </div>
                <p
                  className={`text-sm font-bold transition-colors ${scrolled ? "text-gray-600" : "text-white/80"}`}
                >
                  {t("hero.subtitle")}
                </p>
              </div>
            </Link>

            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label={t("nav.mainNav")}
            >
              {navLinks.map((l) => {
                const isActive = currentPage === l.page;
                return (
                  <Link
                    key={l.page}
                    to={createPageUrl(l.page)}
                    className={`relative px-4 py-2 rounded-xl text-lg font-bold transition-all ${
                      isActive
                        ? scrolled
                          ? "text-[#a97c50]"
                          : "text-white"
                        : scrolled
                          ? "text-gray-700 hover:text-[#a97c50]"
                          : "text-white/85 hover:text-white"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {l.label}
                    {isActive && (
                      <span
                        className="absolute bottom-0 right-4 left-4 h-0.5 rounded-full"
                        style={{ background: "#99141e" }}
                      />
                    )}
                  </Link>
                );
              })}
              <Link
                to={createPageUrl("Contact")}
                className="mr-2 px-5 py-2 rounded-xl text-base font-bold text-white transition-all hover:opacity-90"
                style={{ background: "#a97c50" }}
              >
                {t("nav.freeConsultation")}
              </Link>
            </nav>

            <button
              type="button"
              className="lg:hidden p-2 rounded-lg"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={t("nav.mobileToggle")}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? (
                <X
                  className={`w-6 h-6 ${scrolled ? "text-gray-800" : "text-white"}`}
                  aria-hidden="true"
                />
              ) : (
                <Menu
                  className={`w-6 h-6 ${scrolled ? "text-gray-800" : "text-white"}`}
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 pt-20 bg-[#f7efe4] lg:hidden animate-fade-down">
          <nav
            id="mobile-menu"
            className="flex flex-col items-center gap-2 pt-8"
            aria-label={t("nav.mobileNav")}
          >
            {navLinks.map((l) => (
              <Link
                key={l.page}
                to={createPageUrl(l.page)}
                onClick={() => setMobileOpen(false)}
                className="px-8 py-3 text-2xl font-bold text-gray-700 hover:text-[#a97c50] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
