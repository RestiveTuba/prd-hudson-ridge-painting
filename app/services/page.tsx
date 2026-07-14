import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { config, primaryTown, serviceArea, siteDescription, slugify } from "@/src/site.helpers";
import siteConfig from "@/src/site.config";

export const metadata: Metadata = {
  title: `Painting Services in ${primaryTown()}, NY | ${config.businessName}`,
  description: `Interior, exterior, and cabinet painting across ${serviceArea()}. Licensed and insured. ${siteDescription()}`,
};

export default function ServicesPage() {
  const serviceImages = siteConfig.serviceImages ?? {};

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
              <span className="text-white">Services</span>
            </nav>
            <p className="font-body text-sm uppercase tracking-[0.2em] text-brand font-medium mb-3">
              What We Do
            </p>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl uppercase text-white leading-none tracking-tight max-w-3xl">
              Painting Services
            </h1>
            <p className="mt-6 font-body text-white/70 text-base sm:text-lg max-w-xl leading-relaxed">
              Every job starts with real prep and ends with a clean site. Pick a
              service below to see exactly what&apos;s included.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="py-20 sm:py-28 bg-page">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {siteConfig.services.map((svc) => (
                <ServiceCard
                  key={svc}
                  title={svc}
                  description={`Professional ${svc.toLowerCase()} services — licensed, insured, and done right the first time.`}
                  images={serviceImages[svc] ?? []}
                  slug={slugify(svc)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
