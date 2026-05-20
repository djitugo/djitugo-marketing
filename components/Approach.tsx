"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { useT } from "@/components/LangProvider";

const NUMBERS = ["01", "02", "03", "04"];

export function Approach() {
  const t = useT();
  return (
    <section
      id="approach"
      className="relative w-full border-y border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-site px-6 md:px-10">
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 md:col-span-4">
            <SectionHeader number="03" label={t.approach.eyebrow} />
            <h2 className="mt-6 text-display-l text-balance">
              {t.approach.heading}
            </h2>
            <p className="mt-8 max-w-sm text-body text-ink-5">
              {t.approach.sub}
            </p>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <ol className="flex flex-col">
              {t.approach.steps.map((s, i) => (
                <FadeIn
                  as="li"
                  key={NUMBERS[i]}
                  delay={i * 0.08}
                  className="group border-t border-line py-8 first:border-t-0 first:pt-0 md:py-10"
                >
                  <div className="grid grid-cols-12 items-start gap-4">
                    <div className="col-span-2 mt-2 font-mono text-mono-label uppercase opacity-60">
                      {NUMBERS[i]}
                    </div>
                    <div className="col-span-10">
                      <h3 className="text-heading-1 text-balance transition-transform duration-700 ease-out-quint group-hover:translate-x-1">
                        {s.title}
                      </h3>
                      <p className="mt-5 max-w-xl text-body text-ink-5">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
