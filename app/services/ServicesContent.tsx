"use client";

import Link from "next/link";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Approach } from "@/components/Approach";
import { CTA } from "@/components/CTA";
import { FadeIn } from "@/components/motion/FadeIn";
import { Placeholder } from "@/components/Placeholder";
import { SERVICES } from "@/lib/data";
import { useLang } from "@/components/LangProvider";

export function ServicesContent() {
  const { lang, t } = useLang();
  return (
    <>
      <PageHeader
        number="02"
        eyebrow={t.services.eyebrow}
        title={[t.services.heading]}
        description={t.services.lead}
      />

      <section className="relative w-full">
        <div className="mx-auto max-w-site px-6 md:px-10">
          <ol className="flex flex-col">
            {SERVICES.map((s, i) => {
              const sx = s[lang];
              return (
                <FadeIn
                  as="li"
                  key={s.slug}
                  delay={i * 0.05}
                  className="border-t border-line py-12 first:border-t-0 first:pt-0 md:py-16"
                >
                  <Link
                    href={`/services/${s.slug}`}
                    className="group block focus:outline-none"
                  >
                    <div className="grid grid-cols-12 items-center gap-6 md:gap-8">
                      <div className="col-span-12 md:col-span-5">
                        <div className="relative aspect-[5/4] w-full overflow-hidden">
                          <div className="absolute inset-0 transition-transform duration-[1200ms] ease-out-quint group-hover:scale-[1.04]">
                            <Placeholder kind={s.slug} label={s.alt} />
                          </div>
                        </div>
                      </div>
                      <div className="col-span-12 md:col-span-6 md:col-start-7">
                        <div className="font-mono text-mono-label uppercase opacity-60">
                          {s.number} / {t.services.eyebrow}
                        </div>
                        <h2 className="mt-4 text-display-l text-balance transition-transform duration-700 ease-out-quint group-hover:translate-x-1">
                          {sx.short}
                        </h2>
                        <p className="mt-5 max-w-lg text-body-l text-ink-5">
                          {sx.tagline}
                        </p>
                        <span className="mt-8 inline-flex items-center gap-2 font-mono text-mono-label uppercase opacity-70 transition group-hover:opacity-100">
                          {t.services.cta}
                          <span aria-hidden>↗</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </ol>
        </div>
      </section>

      <Approach />
      <CTA />
      <Footer />
    </>
  );
}
