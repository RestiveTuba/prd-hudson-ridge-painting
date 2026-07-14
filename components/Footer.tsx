import { MapPin, Phone } from "lucide-react";
import { brandNameParts, config, phoneHref, yearsLabel } from "@/src/site.helpers";

export function Footer() {
  const year = new Date().getFullYear();
  const name = brandNameParts();

  return (
    <footer className="bg-charcoal-deep text-white/60 py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">

          {/* Brand */}
          <div>
            <div className="font-display font-black text-2xl uppercase text-white tracking-wide leading-none mb-2">
              {config.logoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={config.logoUrl} alt={config.businessName} className="h-9 w-auto object-contain" />
              ) : (
                <>
                  <span className="text-brand">{name.first}</span>
                  {name.rest && <> {name.rest}</>}
                </>
              )}
            </div>
            <p className="font-body italic text-sm text-white/40 max-w-xs">
              Doing it right with {yearsLabel().toLowerCase()} in business.
            </p>
            {config.businessLocation && (
              <p className="font-body text-xs text-white/50 mt-1.5 flex items-center gap-1.5">
                <MapPin size={12} strokeWidth={2} className="text-brand shrink-0" />
                {config.businessLocation}
              </p>
            )}
          </div>

          {/* Phone */}
          <a
            href={phoneHref()}
            className="flex items-center gap-2 text-brand hover:text-brand-light transition-colors"
            aria-label="Call us"
          >
            <Phone size={16} strokeWidth={2.5} />
            <span className="font-display font-bold text-xl tracking-wide">
              {config.phone}
            </span>
          </a>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/10" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-body">
          <p>
            &copy; {year} {config.businessName} · All rights reserved
          </p>
          <div className="flex items-center gap-4">
            <p className="text-white/30">Licensed Contractor · Fully Insured</p>
            <a
              href="/privacy"
              className="text-white/30 hover:text-white/50 transition-colors hover:underline underline-offset-2"
            >
              Privacy Policy
            </a>
            <a
              href="https://pearlriverdesign.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/50 transition-colors hover:underline underline-offset-2"
            >
              Built by Pearl River Design
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
