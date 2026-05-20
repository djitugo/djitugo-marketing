"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGsap, gsap, ScrollTrigger } from "@/components/motion/useGsap";
import { SectionHeader } from "@/components/SectionHeader";
import { Placeholder } from "@/components/Placeholder";
import { SERVICES } from "@/lib/data";
import { useLang } from "@/components/LangProvider";

export function Services() {
  const root = useRef<HTMLElement>(null);
  const { lang, t } = useLang();

  useGsap(() => {
    const rows = root.current?.querySelectorAll<HTMLElement>("[data-row]");
    if (!rows) return;
    rows.forEach((row) => {
      const img = row.querySelector("[data-img]");
      if (!img) return;
      gsap.fromTo(
        img,
        { scale: 1.1, yPercent: 6 },
        {
          scale: 1,
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: row,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        }
      );

      const headline = row.querySelector("[data-headline]");
      if (headline) {
        gsap.from(headline, {
          yPercent: 8,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: row,
            start: "top 75%",
            once: true
          }
        });
      }
    });
    return () => ScrollTrigger.getAll().forEach((tr) => tr.kill());
  }, []);

  return (
    <section
      id="services"
      ref={root}
      className="relative w-full py-24 md:py-32"
    >
      <div className="mx-auto max-w-site px-6 md:px-10">
        <SectionHeader number="02" label={t.services.eyebrow} />
        <h2 className="mt-6 max-w-3xl text-display-l text-balance">
          {t.services.heading}
        </h2>
      </div>

      <div className="mt-20 flex flex-col">
        {SERVICES.map((service, i) => {
          const isEven = i % 2 === 0;
          const sx = service[lang];
          return (
            <article
              key={service.number}
              data-row
              className="group relative w-full border-t border-line last:border-b"
            >
              <div className="mx-auto grid max-w-site grid-cols-12 gap-4 px-6 py-16 md:gap-6 md:px-10 md:py-24">
                <div
                  className={`relative col-span-12 md:col-span-6 ${
                    isEven ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[5/6]">
                    <div data-img className="absolute inset-0 will-change-transform">
                      <Placeholder kind={service.slug} label={service.alt} />
                    </div>
                    <div className="absolute left-4 top-4 z-10 font-mono text-mono-label uppercase text-paper/80">
                      <span className="rounded-sm bg-ink-0/60 px-2 py-1 backdrop-blur-sm">
                        {service.number}
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className={`col-span-12 flex flex-col justify-center md:col-span-6 ${
                    isEven ? "md:order-2 md:pl-12" : "md:order-1 md:pr-12"
                  }`}
                >
                  <div
                    data-headline
                    className="text-heading-1 text-balance"
                  >
                    {sx.title}
                  </div>
                  <p className="mt-6 max-w-md text-body-l text-ink-5">
                    {sx.body}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-10 inline-flex w-fit items-center gap-2 font-mono text-mono-label uppercase opacity-70 underline-offset-4 transition hover:opacity-100 hover:underline"
                  >
                    {t.services.cta}
                    <span aria-hidden>↗</span>
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
