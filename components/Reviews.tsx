"use client";

import Link from "next/link";
import { config, primaryTown } from "@/src/site.helpers";
import { FadeIn } from "./FadeIn";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-brand"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ text, author }: { text: string; author: string }) {
  return (
    <div className="h-full flex flex-col border border-warm-border bg-white p-7 hover:border-brand/30 hover:shadow-md transition-all duration-300">
      <Stars count={5} />
      <blockquote className="mt-4 flex-1">
        <p className="font-body italic text-charcoal/80 leading-relaxed text-[0.95rem] sm:text-base">
          &ldquo;{text}&rdquo;
        </p>
      </blockquote>
      <div className="mt-6 pt-5 border-t border-warm-border flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-surface flex items-center justify-center shrink-0">
          <span className="font-display font-black text-sm text-brand">
            {author.charAt(0)}
          </span>
        </div>
        <div>
          <div className="font-display font-bold text-sm uppercase tracking-wide text-charcoal">
            {author}
          </div>
          <div className="font-body text-xs text-warm-gray">
            {primaryTown()}
          </div>
        </div>
        <div className="ml-auto">
          <svg width="18" height="18" viewBox="0 0 24 24" aria-label="Google review">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export function Reviews() {
  return (
    <section className="py-20 sm:py-28 bg-page">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <FadeIn>
          <div className="mb-14">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-brand font-medium mb-3">
              Customer Reviews
            </p>
            <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl uppercase text-charcoal leading-none tracking-tight">
              What People
              <br />
              Are Saying
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FadeIn delay={0}>
            <ReviewCard text={config.review1Text} author={config.review1Author} />
          </FadeIn>
          <FadeIn delay={0.1}>
            <ReviewCard text={config.review2Text} author={config.review2Author} />
          </FadeIn>
          <FadeIn delay={0.2}>
            <ReviewCard text={config.review3Text} author={config.review3Author} />
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-12 text-center">
            <p className="font-body text-warm-gray text-sm mb-4">
              5-star service across {primaryTown()} and nearby towns
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand text-white font-display font-bold uppercase tracking-wide text-base px-8 py-4 hover:bg-brand-dark transition-colors duration-200"
            >
              Join Our Happy Customers
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
