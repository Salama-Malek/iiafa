import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo2 from "/logo-2.webp";
import { siteContent } from "@/content/ar/site";
import { t } from "@/i18n";

const LOGO_URL = logo2;
const navLinks = siteContent.navLinks;

export default function Header({ currentPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              <img
                src={LOGO_URL}
                alt={t("app.siteName")}
                className="w-11 h-11 md:w-12 md:h-12 object-contain rounded-xl"
                loading="eager"
                decoding="async"
                width="48"
                height="48"
              />
              <div className="hidden sm:block">
                <div
                  className={`font-bold text-base transition-colors ${scrolled ? "text-[#a97c50]" : "text-white"}`}
                >
                  {t("hero.title")}
                </div>
                <p
                  className={`text-xs transition-colors ${scrolled ? "text-gray-600" : "text-white/75"}`}
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
                    className={`relative px-4 py-2 rounded-xl text-base font-medium transition-all ${
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
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 right-4 left-4 h-0.5 rounded-full"
                        style={{ background: "#99141e" }}
                      />
                    )}
                  </Link>
                );
              })}
              <Link
                to={createPageUrl("Contact")}
                className="mr-2 px-5 py-2 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
                style={{ background: "#a97c50" }}
              >
                {t("nav.freeConsultation")}
              </Link>
            </nav>

            <button
              className="lg:hidden p-2 rounded-lg"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={t("nav.mobileToggle")}
            >
              {mobileOpen ? (
                <X
                  className={`w-6 h-6 ${scrolled ? "text-gray-800" : "text-white"}`}
                />
              ) : (
                <Menu
                  className={`w-6 h-6 ${scrolled ? "text-gray-800" : "text-white"}`}
                />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 pt-20 bg-[#f7efe4] lg:hidden"
          >
            <nav
              className="flex flex-col items-center gap-2 pt-8"
              aria-label={t("nav.mobileNav")}
            >
              {navLinks.map((l) => (
                <Link
                  key={l.page}
                  to={createPageUrl(l.page)}
                  onClick={() => setMobileOpen(false)}
                  className="px-8 py-3 text-xl font-medium text-gray-700 hover:text-[#a97c50] transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
