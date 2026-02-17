import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { motion } from "framer-motion";
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
            "linear-gradient(145deg, var(--surface-darker) 0%, var(--primary-solid) 42%, var(--secondary-solid) 74%, var(--surface-darker) 100%)",
        }}
      />
      <div className="absolute inset-0 pattern-overlay opacity-30" />
      <div
        className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, var(--primary-solid), transparent)" }}
      />
      <div
        className="absolute bottom-20 left-20 w-72 h-72 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, var(--primary-solid), transparent)" }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background:
            "linear-gradient(to left, transparent, var(--primary-solid), transparent)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center py-24 md:py-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
                    <img
            src={LOGO_URL}
            alt={t("hero.logoAlt")}
            className="w-24 h-24 md:w-32 md:h-32 object-contain mx-auto mb-8 rounded-3xl shadow-2xl"
            width="128"
            height="128"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div
              className="h-px w-16 md:w-24"
              style={{ background: "rgba(169,124,80,0.5)" }}
            />
            <Scale className="w-5 h-5" style={{ color: "var(--primary-solid)" }} />
            <div
              className="h-px w-16 md:w-24"
              style={{ background: "rgba(169,124,80,0.5)" }}
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            {t("hero.title")}
          </h1>
          <p
            className="text-xl md:text-3xl font-medium mb-2"
            style={{ color: "var(--primary-solid)" }}
          >
            {t("hero.subtitle")}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/85 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed mt-6 mb-10"
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to={createPageUrl("Contact")}
            className="px-8 py-4 rounded-2xl text-white font-bold text-lg md:text-xl transition-all hover:shadow-2xl hover:scale-105 flex items-center gap-2"
            style={{ background: "var(--primary-solid)" }}
          >
            {t("hero.primaryCta")}
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <Link
            to={createPageUrl("Services")}
            className="px-8 py-4 rounded-2xl font-bold text-lg md:text-xl border-2 transition-all hover:bg-white/10"
            style={{ borderColor: "var(--primary-solid)", color: "var(--primary-solid)" }}
          >
            {t("hero.secondaryCta")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
