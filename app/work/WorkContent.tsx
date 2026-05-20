"use client";

import Link from "next/link";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { CTA } from "@/components/CTA";
import { Testimonials } from "@/components/Testimonials";
import { FadeIn } from "@/components/motion/FadeIn";
import { Placeholder } from "@/components/Placeholder";
import { PORTFOLIO } from "@/lib/data";
import { useLang } from "@/components/LangProvider";

export function WorkContent() {
  const { lang, t } = useLang();
  return (
    <>
      <PageHeader
        number="04"
        eyebrow={t.workPage.eyebrow}
        title={[t.workPage.l1, t.workPage.l2]}
        description={t.workPage.lead}
      />

      <section className="relative w-full">
        <div className="mx-auto flex max-w-site flex-col gap-24 px-6 md:gap-32 md:px-10">
          {PORTFOLIO.map((item, i) => {
            const isEven = i % 2 === 0;
            const disciplines =
              lang === "id" ? item.disciplinesId : item.disciplines;
            const summary = lang === "id" ? item.summaryId : item.summary;
            return (
              <FadeIn
                as="article"
                id={item.slug}
                key={item.slug}
                delay={0.05}
                className="group grid grid-cols-12 items-end gap-4 scroll-mt-32 md:gap-6"
              >
                <div
                  className={`col-span-12 md:col-span-8 ${
                    isEven ? "md:col-start-1" : "md:col-start-5"
                  }`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <div className="absolute inset-0 transition-transform duration-[1200ms] ease-out-quint group-hover:scale-[1.03]">
                      <Placeholder kind={item.kind} label={item.alt} />
                    </div>
                  </div>
                </div>
                <div
                  className={`col-span-12 md:col-span-4 ${
                    isEven ? "md:col-start-9" : "md:col-start-1 md:row-start-1"
                  }`}
                >
                  <div className="font-mono text-mono-label uppercase opacity-60">
                    {String(i + 1).padStart(2, "0")} / {t.portfolio.caseStudy}
                  </div>
                  <h2 className="mt-3 text-display-l text-balance transition-transform duration-700 ease-out-quint group-hover:-translate-x-1">
                    {item.client}
                  </h2>
                  <div className="mt-3 font-mono text-mono-label uppercase opacity-60">
                    {lang === "id" ? item.industryId : item.industry}
                  </div>
                  <p className="mt-5 max-w-md text-body text-ink-5">{summary}</p>
                  <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-2 font-mono text-mono-label uppercase opacity-70">
                    {disciplines.map((d) => (
                      <li
                        key={d}
                        className="rounded-full border border-line px-3 py-1"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <div className="mt-24 md:mt-32">
        <div className="mx-auto flex max-w-site items-center justify-between border-t border-line px-6 py-8 md:px-10">
          <div className="font-mono text-mono-label uppercase opacity-60">
            {t.portfolio.more}
          </div>
          <Link
            href="/contact"
            className="font-mono text-mono-label uppercase underline-offset-4 hover:underline"
          >
            {t.workPage.requestDeck} ↗
          </Link>
        </div>
      </div>

      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
