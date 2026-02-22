import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { Scale, ArrowLeft } from "lucide-react";
import logo1 from "/logo-1.webp";
import { t } from "@/i18n";

const LOGO_URL = logo1;

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(145deg, #2c1d13 0%, #a97c50 45%, #8b643f 75%, #2c1d13 100%)",
        }}
      />
      <div className="absolute inset-0 pattern-overlay opacity-30" />
      <div
        className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #99141e, transparent)" }}
      />
      <div
        className="absolute bottom-20 left-20 w-72 h-72 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #99141e, transparent)" }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background:
            "linear-gradient(to left, transparent, #99141e, transparent)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center py-24 md:py-0">
        <div className="animate-scale-in">
          <picture>
            <source srcSet="/logo-1.avif" type="image/avif" />
            <img
              src={LOGO_URL}
              alt={t("hero.logoAlt")}
              className="w-24 h-24 md:w-32 md:h-32 object-contain mx-auto mb-8 rounded-3xl shadow-2xl"
              width="128"
              height="128"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
          </picture>
        </div>

        <div className="animate-fade-up [animation-delay:120ms] [animation-fill-mode:both]">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div
              className="h-px w-16 md:w-24"
              style={{ background: "rgba(153,20,30,0.5)" }}
            />
            <Scale className="w-5 h-5" style={{ color: "#99141e" }} aria-hidden="true" />
            <div
              className="h-px w-16 md:w-24"
              style={{ background: "rgba(153,20,30,0.5)" }}
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            {t("hero.title")}
          </h1>
          <p
            className="text-xl md:text-3xl font-medium mb-2"
            style={{ color: "#99141e" }}
          >
            {t("hero.subtitle")}
          </p>
        </div>

        <p className="text-white/85 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed mt-6 mb-10 animate-fade-up [animation-delay:240ms] [animation-fill-mode:both]">
          {t("hero.description")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up [animation-delay:360ms] [animation-fill-mode:both]">
          <Link
            to={createPageUrl("Contact")}
            className="px-8 py-4 rounded-2xl text-white font-bold text-lg md:text-xl transition-all hover:shadow-2xl hover:scale-105 flex items-center gap-2"
            style={{ background: "#a97c50" }}
          >
            {t("hero.primaryCta")}
            <ArrowLeft className="w-5 h-5" aria-hidden="true" />
          </Link>
          <Link
            to={createPageUrl("Services")}
            className="px-8 py-4 rounded-2xl font-bold text-lg md:text-xl border-2 transition-all hover:bg-white/10"
            style={{ borderColor: "#99141e", color: "#99141e" }}
          >
            {t("hero.secondaryCta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
