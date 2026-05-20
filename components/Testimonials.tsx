"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="studio" className="relative w-full py-24 md:py-32">
      <div className="mx-auto max-w-site px-6 md:px-10">
        <SectionHeader number="06" label="What our partners say" />

        <div className="mt-20 grid grid-cols-12 gap-4 md:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn
              as="article"
              delay={i * 0.1}
              key={t.author + t.org}
              className={`col-span-12 md:col-span-4 ${
                i === 1 ? "md:translate-y-12" : ""
              }`}
            >
              <div className="font-mono text-mono-label uppercase opacity-60">
                {String(i + 1).padStart(2, "0")}
              </div>
              <blockquote className="mt-6 text-heading-2 text-balance">
                <span aria-hidden className="mr-1 opacity-50">
                  &ldquo;
                </span>
                {t.quote}
                <span aria-hidden className="ml-1 opacity-50">
                  &rdquo;
                </span>
              </blockquote>
              <footer className="mt-8 border-t border-line pt-4">
                <div className="font-mono text-mono-label uppercase">
                  {t.author}
                </div>
                <div className="mt-1 text-caption text-ink-5">{t.org}</div>
              </footer>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
