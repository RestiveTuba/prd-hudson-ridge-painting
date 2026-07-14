import { ShieldCheck, Calendar, Star, Zap } from "lucide-react";
import { config, yearsLabel } from "@/src/site.helpers";

const items = [
  {
    icon: ShieldCheck,
    label: "Licensed & Insured",
    /* REPLACE: License number if desired */
    sub: "Fully bonded",
  },
  {
    icon: Calendar,
    label: "Years in Business",
    sub: yearsLabel(),
  },
  {
    icon: Star,
    label: "Google Rating",
    sub: config.review1Text ? "5 Stars · 3 Reviews" : "5-Star Service",
  },
  {
    icon: Zap,
    label: "Response Time",
    sub: "Same-Day Service Available",
  },
];

export function TrustBar() {
  return (
    <section className="bg-surface border-y border-warm-border" aria-label="Trust signals">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 sm:py-7">
        <ul className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-0 flex-1">
              {/* Divider (not before first) */}
              {i > 0 && (
                <div className="hidden sm:block w-px h-10 bg-warm-border mr-8 shrink-0" />
              )}

              <div className="flex items-center gap-3">
                <item.icon
                  size={22}
                  strokeWidth={1.75}
                  className="text-brand shrink-0"
                />
                <div className="flex flex-col leading-tight">
                  <span className="font-display font-bold text-base sm:text-lg uppercase text-charcoal tracking-wide">
                    {item.sub}
                  </span>
                  <span className="font-body text-xs text-warm-gray tracking-wide">
                    {item.label}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
