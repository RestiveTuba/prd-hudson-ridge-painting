import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Reviews } from "@/components/Reviews";
import { Footer } from "@/components/Footer";
import { config } from "@/src/site.helpers";
import siteConfig from "@/src/site.config";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyUs />
        <Reviews />
        <section className="relative py-16 sm:py-20 bg-charcoal-deep overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={config.pexelsImages?.[1] || siteConfig.heroImage || ""}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-45"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(15,13,12,0.9) 0%, rgba(15,13,12,0.55) 100%)",
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-white tracking-tight">
              Ready to get started?
            </h2>
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
