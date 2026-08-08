import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import {
  config,
  establishedLabel,
  primaryTown,
  serviceArea,
  yearsLabel,
} from "@/src/site.helpers";
import siteConfig from "@/src/site.config";

export const metadata: Metadata = {
  title: `About Us | ${config.businessName}`,
  description: `${config.businessName} has served ${serviceArea()} for ${yearsLabel().toLowerCase()}. Licensed, insured, and locally owned.`,
};

const points = [
  {
    title: "Locally owned, locally accountable",
    body: `We live and work in ${primaryTown()}. Our name is on every job, so we don't cut corners.`,
  },
  {
    title: "Real prep, every time",
    body: "Sanding, patching, and caulking happen before a single coat goes on. It's the difference between a paint job that lasts and one that peels in a year.",
  },
  {
    title: "Upfront, written estimates",
    body: "You get a number before we start, and that's the number on your invoice. No change orders, no surprises.",
  },
  {
    title: "Clean job sites",
    body: "Drop cloths, shoe covers, and daily cleanup are standard, not an upcharge.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 bg-white">
        {/* Header */}
        <section className="bg-charcoal-deep pt-32 sm:pt-40 pb-16 sm:pb-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <nav className="font-body text-sm text-white/50 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">About</span>
            </nav>
            <p className="font-body text-sm uppercase tracking-[0.2em] text-brand font-medium mb-3">
              {establishedLabel()}
            </p>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl uppercase text-white leading-none tracking-tight max-w-3xl">
              About {config.businessName}
            </h1>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 sm:py-28 bg-page">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <p className="font-body text-warm-gray text-lg leading-relaxed">
              {config.businessName} has been painting homes across {serviceArea()} for{" "}
              {yearsLabel().toLowerCase()}. What started as a single crew doing interior
              work for neighbors has grown into a full-service painting company,
              handling interior, exterior, and cabinet refinishing, without losing the
              show-up-when-we-say-we-will reputation that got us here.
            </p>
            <p className="mt-6 font-body text-warm-gray text-lg leading-relaxed">
              Every estimate is written by {config.ownerFirstName || "our team"} or a
              member of our crew who's actually seen the job, not a call center. And every project
              gets the same prep-first approach, whether it's one room or a full
              exterior repaint.
            </p>
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-20 sm:py-28 bg-surface">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <h2 className="font-display font-black text-4xl sm:text-5xl uppercase text-charcoal tracking-tight mb-12">
              Why {serviceArea().split(" · ")[0]} Homeowners Choose Us
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
              {points.map((point) => (
                <div key={point.title} className="flex items-start gap-4">
                  <CheckCircle2 size={22} strokeWidth={2} className="text-brand mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-display font-bold text-xl uppercase text-charcoal tracking-wide mb-1">
                      {point.title}
                    </h3>
                    <p className="font-body text-warm-gray leading-relaxed text-sm sm:text-base">
                      {point.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service area */}
        <section className="py-16 sm:py-20 bg-charcoal-deep">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-white tracking-tight">
                Serving {serviceArea()}
              </h2>
              <p className="mt-2 font-body text-white/60 text-base">
                {siteConfig.services.join(" · ")}
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-display font-bold uppercase tracking-wide text-base px-7 py-4 transition-colors duration-200 whitespace-nowrap"
            >
              Get a Free Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
