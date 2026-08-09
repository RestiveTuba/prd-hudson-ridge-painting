import { MapPin, Phone } from "lucide-react";
import { brandNameParts, config, phoneHref, yearsLabel } from "@/src/site.helpers";

/* lucide-react ships no brand icons — inlined instead of adding a dependency */
function FacebookIcon({ size = 18, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.14 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.8 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}
function InstagramIcon({ size = 18, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={1.75} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* REPLACE: Social links — wire up to real profiles when the client has them */
const socialLinks = [
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
];

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

          {/* Phone + social */}
          <div className="flex flex-col items-start sm:items-end gap-4">
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
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-white/40 hover:text-brand transition-colors"
                  aria-label={label}
                >
                  <Icon size={18} strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>
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
