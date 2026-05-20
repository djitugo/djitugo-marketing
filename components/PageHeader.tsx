"use client";

import { LineReveal } from "@/components/motion/LineReveal";
import { SectionHeader } from "@/components/SectionHeader";

type Props = {
  number?: string;
  eyebrow: string;
  title: string | string[];
  description?: string;
};

export function PageHeader({ number, eyebrow, title, description }: Props) {
  const lines = Array.isArray(title) ? title : [title];
  return (
    <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-site px-6 md:px-10">
        <SectionHeader number={number ?? "00"} label={eyebrow} />
        <LineReveal
          as="h1"
          className="mt-8 text-display-l text-balance"
          stagger={0.09}
          delay={0.05}
        >
          {lines}
        </LineReveal>
        {description ? (
          <p className="mt-10 max-w-2xl text-body-l text-ink-5">{description}</p>
        ) : null}
      </div>
    </section>
  );
}
