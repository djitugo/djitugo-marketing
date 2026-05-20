"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { useT } from "@/components/LangProvider";

export function Industries() {
  const t = useT();
  return (
    <section
      id="industries"
      className="relative w-full overflow-hidden py-24 md:py-32"
    >
      <div className="mx-auto max-w-site px-6 md:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionHeader number="05" label={t.industries.eyebrow} />
            <h2 className="mt-6 max-w-xl text-display-l text-balance">
              {t.industries.heading}
            </h2>
          </div>
          <p className="max-w-xs text-body text-ink-5 md:text-right">
            {t.industries.body}
          </p>
        </div>

        <FadeIn className="mt-16 md:mt-20" y={16}>
          <ul className="industry-list flex flex-wrap gap-x-5 gap-y-1 md:gap-x-8">
            {t.industries.list.map((ind, i) => (
              <li
                key={ind}
                className="industry-item flex items-center text-[clamp(2.25rem,5.5vw,4.75rem)] font-medium tracking-[-0.035em] leading-[1.05]"
              >
                <span dangerouslySetInnerHTML={{ __html: ind }} />
                {i < t.industries.list.length - 1 && (
                  <span className="ml-5 text-paper/30 md:ml-8">·</span>
                )}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
