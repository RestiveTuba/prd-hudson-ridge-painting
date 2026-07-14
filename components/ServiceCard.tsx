"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  images: string[];
  slug: string;
}

export function ServiceCard({ title, description, images, slug }: ServiceCardProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="group relative flex flex-col overflow-hidden border border-warm-border bg-white hover:border-brand transition-all duration-300 hover:shadow-[0_8px_40px_rgba(200,75,17,0.12)] hover:-translate-y-1">
      {/* Image area */}
      <div className="relative overflow-hidden h-44">
        {images.length > 0 ? (
          <>
            {images.map((imgSrc, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={imgSrc}
                alt={title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  i === activeIdx ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </>
        ) : (
          <div className="w-full h-full bg-charcoal" />
        )}

        {/* Brand bar on hover */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                aria-label={`Photo ${i + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIdx ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-display font-black text-2xl uppercase text-charcoal tracking-wide mb-3">
          {title}
        </h3>
        <p className="font-body text-warm-gray leading-relaxed text-sm flex-1">
          {description}
        </p>
        <Link
          href={`/services/${slug}`}
          className="mt-5 inline-flex items-center gap-1.5 font-body text-sm font-medium text-brand hover:text-brand-dark transition-colors group/link"
        >
          Learn more
          <span className="transition-transform group-hover/link:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  );
}
