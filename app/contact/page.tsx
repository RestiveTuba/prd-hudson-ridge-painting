import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { config, primaryTown, serviceArea } from "@/src/site.helpers";

export const metadata: Metadata = {
  title: `Contact Us | ${config.businessName}`,
  description: `Get a free painting estimate in ${primaryTown()}, NY. Serving ${serviceArea()}. Call or send a request online.`,
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 bg-white">
        <section className="bg-charcoal-deep pt-32 sm:pt-40 pb-12 sm:pb-16">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <nav className="font-body text-sm text-white/50 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Contact</span>
            </nav>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl uppercase text-white leading-none tracking-tight max-w-3xl">
              Let&apos;s Talk About Your Project.
            </h1>
          </div>
        </section>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
