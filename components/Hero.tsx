"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ChevronDown } from "lucide-react";
import { brandNameParts, config, establishedLabel, phoneHref, primaryCity, primaryTown, yearsLabel } from "@/src/site.helpers";

export function Hero() {
  const name = brandNameParts();

  return (
    <section
      className="relative min-h-screen flex flex-col justify-end pb-16 sm:pb-24 overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image — driven by siteConfig.heroImage */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${config.heroImage || config.pexelsImages?.[0] || ""}')`,
        }}
        aria-hidden="true"
      />

      {/* Layered overlay: heavy at bottom for text, lighter at top for image */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(15,13,12,0.92) 0%, rgba(15,13,12,0.65) 45%, rgba(15,13,12,0.30) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5"
        >
          <span
            className="inline-block font-body text-sm uppercase tracking-[0.2em] text-white font-medium px-4 py-1.5"
            style={{
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            {establishedLabel()}
          </span>
        </motion.div>

        {/* Business name — the centerpiece */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-black uppercase text-white leading-none tracking-tight"
          style={{ fontSize: "clamp(58px, 10vw, 140px)" }}
        >
          {name.first}
          {name.rest && (
            <>
              <br />
              <span className="text-brand">{name.rest}</span>
            </>
          )}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 font-body italic text-white/75 text-lg sm:text-xl md:text-2xl max-w-xl leading-snug"
        >
          {primaryCity()}'s trusted contractor&nbsp;—
          <br className="hidden sm:block" /> doing it right with {yearsLabel().toLowerCase()} in business.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          {/* Primary CTA — tel link */}
          <a
            href={phoneHref()}
            className="inline-flex items-center gap-3 bg-brand hover:bg-brand-dark text-white font-display font-bold uppercase tracking-wide text-base sm:text-lg px-7 py-4 transition-colors duration-200 group"
          >
            <Phone size={18} strokeWidth={2.5} className="group-hover:scale-110 transition-transform" />
            Call Now — {config.phone}
          </a>

          {/* Secondary CTA — link to contact page */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-white/50 hover:border-white text-white hover:bg-white/5 font-display font-bold uppercase tracking-wide text-base sm:text-lg px-7 py-4 transition-all duration-200"
          >
            Get a Free Quote
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40"
        aria-hidden="true"
      >
        <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
