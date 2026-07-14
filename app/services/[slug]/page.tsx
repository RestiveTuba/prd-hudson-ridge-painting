import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, CheckCircle2 } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import siteConfig from "@/src/site.config";
import { config, phoneHref, primaryTown, serviceArea, serviceBySlug, slugify } from "@/src/site.helpers";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return siteConfig.services.map((svc) => ({ slug: slugify(svc) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  const detail = siteConfig.serviceDetails?.[service];
  return {
    title: `${service} in ${primaryTown()}, NY | ${config.businessName}`,
    description:
      detail?.blurb ??
      `Professional ${service.toLowerCase()} across ${serviceArea()}. Licensed and insured.`,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const detail = siteConfig.serviceDetails?.[service];
  const images = siteConfig.serviceImages?.[service] ?? [];
  const heroImage = images[0] ?? siteConfig.pexelsImages?.[0] ?? "";

  return (
    <>
      <Nav />
      <main className="flex-1 bg-white">
        {/* Header */}
        <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${heroImage}')` }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(15,13,12,0.92) 0%, rgba(15,13,12,0.75) 60%, rgba(15,13,12,0.55) 100%)",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
            <nav className="font-body text-sm text-white/50 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/services" className="hover:text-white transition-colors">
                Services
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">{service}</span>
            </nav>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl uppercase text-white leading-none tracking-tight max-w-3xl">
              {service}
            </h1>
            <p className="mt-6 font-body text-white/80 text-base sm:text-lg max-w-xl leading-relaxed">
              {detail?.blurb ??
                `Professional ${service.toLowerCase()} across ${serviceArea()}.`}
            </p>
            <a
              href={phoneHref()}
              className="mt-8 inline-flex items-center gap-3 bg-brand hover:bg-brand-dark text-white font-display font-bold uppercase tracking-wide text-base px-7 py-4 transition-colors duration-200"
            >
              <Phone size={18} strokeWidth={2.5} />
              Call Now — {config.phone}
            </a>
          </div>
        </section>

        {/* Included / Materials */}
        <section className="py-20 sm:py-28 bg-page">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-charcoal tracking-tight mb-8">
                What&apos;s Included
              </h2>
              <ul className="space-y-4">
                {(detail?.included ?? []).map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={20} strokeWidth={2} className="text-brand mt-0.5 shrink-0" />
                    <span className="font-body text-warm-gray leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-charcoal tracking-tight mb-8">
                Materials We Trust
              </h2>
              <ul className="space-y-4">
                {(detail?.materials ?? []).map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={20} strokeWidth={2} className="text-brand mt-0.5 shrink-0" />
                    <span className="font-body text-warm-gray leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Gallery */}
        {images.length > 0 && (
          <section className="pb-20 sm:pb-28 bg-page">
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-charcoal tracking-tight mb-8">
                Recent {service} Work
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {images.map((img) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={img}
                    src={img}
                    alt={`${service} example`}
                    className="w-full h-48 object-cover"
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-charcoal-deep">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-white tracking-tight">
              Let&apos;s Talk About Your Project.
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
