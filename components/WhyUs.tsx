"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { config, primaryTown, serviceArea, yearsLabel } from "@/src/site.helpers";
import { FadeIn } from "./FadeIn";

/*
  REPLACE: Update bullet points with real differentiators
*/
const points = [
  {
    title: "We answer the phone",
    /* REPLACE: Bullet 1 detail */
    body: "Call and a real person picks up. Every time.",
  },
  {
    title: "Upfront pricing, no surprises",
    /* REPLACE: Bullet 2 detail */
    body: "We quote before we start. The number we give you is the number on your invoice.",
  },
  {
    title: `${yearsLabel()} in the area`,
    /* REPLACE: Bullet 3 detail — years, service area */
    body: `We serve ${serviceArea()}. Our reputation is built on repeat customers and referrals.`,
  },
  {
    title: "We clean up after ourselves",
    /* REPLACE: Bullet 4 detail */
    body: "Your home leaves cleaner than we found it. Drop cloths, shoe covers, full haul-away. Standard.",
  },
];

export function WhyUs() {
  return (
    <section className="py-20 sm:py-28 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20 items-center">

          {/* Left: Photo with callout overlay */}
          <FadeIn direction="left" className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Photo — driven by siteConfig.whyUsImage */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={config.whyUsImage || config.pexelsImages?.[1] || ""}
                alt="Our team at work"
                className="w-full h-[480px] sm:h-[580px] object-cover"
              />

              {/* Dark overlay stripe at bottom */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(15,13,12,0.75) 0%, transparent 50%)",
                }}
                aria-hidden="true"
              />

              {/* Years callout — bottom left corner */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="border-l-4 border-brand pl-5">
                  <div className="font-display font-black text-6xl text-white leading-none">
                    {yearsLabel().replace(/\s*years?/i, "")}
                  </div>
                  <div className="font-body text-white/70 text-sm mt-1 tracking-wide uppercase">
                    Years serving{" "}
                    {primaryTown()}
                  </div>
                </div>
              </div>
            </div>

            {/* Accent element — hangs outside the image on the right */}
            <div
              className="absolute top-8 -right-4 w-1 h-32 bg-brand hidden lg:block"
              aria-hidden="true"
            />
          </FadeIn>

          {/* Right: Copy */}
          <div className="order-1 lg:order-2">
            <FadeIn direction="right">
              <p className="font-body text-sm uppercase tracking-[0.2em] text-brand font-medium mb-4">
                Why Homeowners Choose Us
              </p>
              {/* REPLACE: Why Us heading */}
              <h2 className="font-display font-black text-5xl sm:text-6xl uppercase text-charcoal leading-none tracking-tight mb-8">
                Different<br />by Design
              </h2>
            </FadeIn>

            <div className="space-y-7">
              {points.map((point, i) => (
                <FadeIn key={i} delay={0.08 + i * 0.08}>
                  <div className="flex items-start gap-4">
                    <CheckCircle2
                      size={22}
                      strokeWidth={2}
                      className="text-brand mt-0.5 shrink-0"
                    />
                    <div>
                      <h3 className="font-display font-bold text-xl uppercase text-charcoal tracking-wide mb-1">
                        {/* REPLACE: Bullet title */}
                        {point.title}
                      </h3>
                      <p className="font-body text-warm-gray leading-relaxed text-sm sm:text-base">
                        {/* REPLACE: Bullet detail */}
                        {point.body}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.4}>
              <Link
                href="/contact"
                className="mt-10 inline-flex items-center gap-2 bg-charcoal text-white font-display font-bold uppercase tracking-wide text-base px-7 py-4 hover:bg-brand transition-colors duration-200"
              >
                Get a Free Estimate
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
