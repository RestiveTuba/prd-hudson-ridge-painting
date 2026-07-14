"use client";
import { FadeIn } from "./FadeIn";
import { ServiceCard } from "./ServiceCard";
import siteConfig from "@/src/site.config";
import { slugify } from "@/src/site.helpers";

export function Services() {
  const serviceImages = (siteConfig as unknown as { serviceImages?: Record<string, string[]> }).serviceImages ?? {};

  return (
    <section className="py-20 sm:py-28 bg-page">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <FadeIn>
          <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
            <div>
              <p className="font-body text-sm uppercase tracking-[0.2em] text-brand font-medium mb-3">
                What We Do
              </p>
              <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl uppercase text-charcoal leading-none tracking-tight">
                Our Services
              </h2>
            </div>
            <p className="font-body text-warm-gray text-base sm:text-lg max-w-sm leading-relaxed">
              Every trade, one phone number.{" "}
              <span className="text-charcoal font-medium">
                Licensed, insured, and background-checked.
              </span>
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((svc, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <ServiceCard
                title={svc}
                description={`Professional ${svc.toLowerCase()} services — licensed, insured, and done right the first time.`}
                images={serviceImages[svc] ?? []}
                slug={slugify(svc)}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
