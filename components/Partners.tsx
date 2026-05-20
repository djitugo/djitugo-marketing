"use client";

import { PARTNERS } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";

export function Partners() {
  const doubled = [...PARTNERS, ...PARTNERS];

  return (
    <section className="relative w-full overflow-hidden py-20 md:py-24">
      <div className="mx-auto max-w-site px-6 md:px-10">
        <SectionHeader number="00" label="Trusted by 700+ brands" />
      </div>

      <div className="relative mt-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-0 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-0 to-transparent z-10" />

        <div className="flex w-max animate-marquee gap-16 whitespace-nowrap py-6 will-change-transform">
          {doubled.map((p, i) => (
            <div
              key={`${p}-${i}`}
              className="font-sans text-[2.25rem] font-medium tracking-[-0.03em] text-paper/55 md:text-[3rem]"
            >
              {p}
              <span className="ml-16 inline-block size-1.5 -translate-y-2 rounded-full bg-paper/30 align-middle" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
