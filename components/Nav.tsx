"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { brandNameParts, config, phoneHref } from "@/src/site.helpers";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];
  const name = brandNameParts();

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          "bg-charcoal-deep",
          scrolled ? "shadow-[0_2px_24px_rgba(0,0,0,0.4)]" : ""
        )}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-2xl sm:text-3xl font-black tracking-wide text-white uppercase leading-none"
            aria-label="Home"
          >
            {config.logoUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={config.logoUrl} alt={config.businessName} className="h-10 sm:h-12 w-auto object-contain" />
            ) : (
              <>
                <span className="text-brand">{name.first}</span>
                {name.rest && <span className="text-white ml-1.5">{name.rest}</span>}
              </>
            )}
          </Link>

          {/* Desktop: nav links + phone */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-body text-white/70 hover:text-white transition-colors tracking-wide uppercase font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Phone */}
          <a
            href={phoneHref()}
            className="hidden sm:flex items-center gap-2 text-brand hover:text-brand-light transition-colors group"
            aria-label="Call us"
          >
            <Phone
              size={18}
              className="group-hover:scale-110 transition-transform"
              strokeWidth={2.5}
            />
            <span className="font-display font-bold text-xl sm:text-2xl tracking-wide leading-none">
              {config.phone}
            </span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-white p-1 -mr-1"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-charcoal-deep flex flex-col transition-all duration-300",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="h-16 sm:h-20" /> {/* spacer behind sticky nav */}
        <nav className="flex flex-col items-center justify-center flex-1 gap-8 px-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display font-black text-5xl uppercase text-white hover:text-brand transition-colors tracking-wide"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 border-t border-white/10 pt-8 w-full flex flex-col items-center gap-2">
            <a
              href={phoneHref()}
              className="flex items-center gap-3 text-brand"
            >
              <Phone size={22} strokeWidth={2.5} />
              <span className="font-display font-bold text-3xl">
                {config.phone}
              </span>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
