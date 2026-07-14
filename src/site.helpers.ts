import siteConfig from "./site.config";
import type { CSSProperties } from "react";

export const config = siteConfig;

export function phoneHref(phone = config.phone) {
  const cleaned = phone.replace(/[^\d+]/g, "");
  return `tel:${cleaned}`;
}

export function serviceArea() {
  return config.towns.length ? config.towns.join(" · ") : "your area";
}

export function primaryTown() {
  return config.towns[0] || "your area";
}

export function primaryCity(): string {
  const loc = config.businessLocation;
  if (loc) {
    const parts = loc.split(",");
    if (parts.length >= 2) {
      const city = parts[1].trim()
        .replace(/\s+[A-Z]{2}\s+\d{5}(-\d{4})?$/, "")
        .replace(/\s+[A-Z]{2}$/, "")
        .trim();
      if (city) return city;
    }
  }
  return config.towns[0] || "your area";
}

export function yearsLabel() {
  const years = String(config.yearsInBusiness || "").trim();
  if (!years) return "Trusted";
  if (years.toLowerCase().includes("year")) return years;
  const numeric = Number.parseInt(years.replace(/[^\d]/g, ""), 10);
  return numeric === 1 ? `${years} Year` : `${years} Years`;
}

export function establishedLabel() {
  const years = String(config.yearsInBusiness || "").trim();
  if (!years) return "Licensed & Insured";
  const numeric = Number.parseInt(years.replace(/[^\d]/g, ""), 10);
  if (!Number.isNaN(numeric) && numeric > 0) {
    return `Licensed & Insured · ${yearsLabel()} in Business`;
  }
  return `Licensed & Insured · ${yearsLabel()}`;
}

export function brandNameParts() {
  const [first, ...rest] = config.businessName.split(/\s+/).filter(Boolean);
  return {
    first: first || config.businessName,
    rest: rest.join(" "),
  };
}

export function hoursLines() {
  return String(config.hours || "")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
}

export function hexToRgb(hex: string) {
  const normalized = hex.replace("#", "").trim();
  if (!/^[0-9a-f]{6}$/i.test(normalized)) {
    return { r: 200, g: 75, b: 17 };
  }
  return {
    r: Number.parseInt(normalized.slice(0, 2), 16),
    g: Number.parseInt(normalized.slice(2, 4), 16),
    b: Number.parseInt(normalized.slice(4, 6), 16),
  };
}

export function brandCssVariables() {
  const { r, g, b } = hexToRgb(config.brandColor || "#C84B11");
  const dark = {
    r: Math.round(r * 0.78),
    g: Math.round(g * 0.78),
    b: Math.round(b * 0.78),
  };
  const light = {
    r: Math.min(255, Math.round(r * 1.12)),
    g: Math.min(255, Math.round(g * 1.12)),
    b: Math.min(255, Math.round(b * 1.12)),
  };
  return {
    "--brand": `rgb(${r} ${g} ${b})`,
    "--brand-dark": `rgb(${dark.r} ${dark.g} ${dark.b})`,
    "--brand-light": `rgb(${light.r} ${light.g} ${light.b})`,
    "--primary": `rgb(${r} ${g} ${b})`,
    "--ring": `rgb(${r} ${g} ${b})`,
    "--sidebar-primary": `rgb(${r} ${g} ${b})`,
  } as CSSProperties;
}

export function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function serviceBySlug(slug: string) {
  return config.services.find((s) => slugify(s) === slug);
}

export function siteDescription() {
  const services = config.services.slice(0, 4).join(", ");
  const area = primaryTown();
  const years = yearsLabel();
  return `${config.businessName} serves ${area}${services ? ` with ${services}` : ""}. ${years} in business. Call for a free estimate.`;
}
