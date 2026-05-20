"use client";

import { useRef } from "react";
import { LineReveal } from "@/components/motion/LineReveal";
import { useGsap, gsap } from "@/components/motion/useGsap";
import { SITE } from "@/lib/data";
import { useT } from "@/components/LangProvider";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const t = useT();

  useGsap(() => {
    const ticker = root.current?.querySelectorAll<HTMLElement>("[data-ticker] span");
    if (ticker?.length) {
      gsap.from(ticker, {
        opacity: 0,
        y: 8,
        duration: 0.8,
        stagger: 0.06,
        delay: 0.6,
        ease: "expo.out"
      });
    }

    const cursor = root.current?.querySelector<HTMLElement>("[data-cursor]");
    if (cursor) {
      gsap.to(cursor, {
        opacity: 0.25,
        repeat: -1,
        yoyo: true,
        duration: 0.6,
        ease: "power1.inOut"
      });
    }
  }, []);

  return (
    <section
      ref={root}
      className="relative min-h-svh w-full overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 size-[80vw] -translate-x-1/2 rounded-full bg-paper/[0.03] blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-site grid-cols-12 gap-4 px-6 md:px-10">
        <div className="col-span-12 mb-16 flex items-center justify-between md:col-span-12">
          <div
            className="font-mono text-mono-label uppercase opacity-70"
            data-ticker
          >
            {t.hero.ticker.map((item, i) => (
              <span key={i}>
                <span>{item}</span>
                {i < t.hero.ticker.length - 1 ? (
                  <span className="mx-3 opacity-40">/</span>
                ) : null}
              </span>
            ))}
          </div>
          <div className="hidden font-mono text-mono-label uppercase opacity-70 md:flex md:items-center md:gap-3">
            <span className="size-1.5 rounded-full bg-paper" data-cursor />
            <span>{t.hero.availability}</span>
          </div>
        </div>

        <div className="col-span-12">
          <LineReveal
            as="h1"
            className="text-display-xl text-balance"
            stagger={0.1}
            delay={0.1}
          >
            {t.hero.l1}
            {t.hero.l2}
          </LineReveal>
        </div>

        <div className="col-span-12 mt-16 grid grid-cols-12 gap-4 md:mt-24">
          <p className="col-span-12 text-body-l text-ink-5 md:col-span-5 md:col-start-1">
            {t.hero.body}
          </p>
          <div className="col-span-12 flex flex-col gap-3 md:col-span-5 md:col-start-8 md:items-end">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-3 font-sans text-heading-2 transition hover:opacity-80"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-full border border-paper transition group-hover:bg-paper group-hover:text-ink-0">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition group-hover:translate-x-0.5"
                  aria-hidden
                >
                  <path
                    d="M1 7h12M8 2l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                </svg>
              </span>
              <span className="underline-offset-4 group-hover:underline">
                {t.hero.primary}
              </span>
            </a>
            <a
              href="#services"
              className="font-mono text-mono-label uppercase opacity-70 underline-offset-4 transition hover:opacity-100 hover:underline"
            >
              {t.hero.secondary}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-site px-6 md:mt-32 md:px-10">
        <div className="flex items-end justify-between border-t border-line pt-8">
          <div className="font-mono text-mono-label uppercase opacity-60">
            {t.hero.tagline}
          </div>
          <div className="font-mono text-mono-label uppercase opacity-60">
            {t.hero.scroll} <span className="ml-2 opacity-60">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
