"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGsap, gsap, ScrollTrigger } from "@/components/motion/useGsap";
import { SectionHeader } from "@/components/SectionHeader";
import { PORTFOLIO } from "@/lib/data";

export function Portfolio() {
  const root = useRef<HTMLElement>(null);

  useGsap(() => {
    if (!root.current) return;

    gsap.fromTo(
      document.body,
      { backgroundColor: "var(--ink-0)" },
      {
        backgroundColor: "var(--paper)",
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top 60%",
          end: "top 20%",
          scrub: 0.6,
          onEnter: () => root.current?.classList.add("inverted-active"),
          onLeaveBack: () => root.current?.classList.remove("inverted-active")
        }
      }
    );

    gsap.to(document.body, {
      backgroundColor: "var(--ink-0)",
      ease: "none",
      scrollTrigger: {
        trigger: root.current,
        start: "bottom 80%",
        end: "bottom 30%",
        scrub: 0.6
      }
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      id="work"
      ref={root}
      className="section-inverted relative w-full py-24 transition-colors md:py-32"
    >
      <div className="mx-auto max-w-site px-6 md:px-10">
        <SectionHeader number="04" label="Selected work" />
        <h2 className="mt-6 max-w-3xl text-display-l text-balance">
          Brands that grew on our watch.
        </h2>
      </div>

      <div className="mx-auto mt-20 flex max-w-site flex-col gap-24 px-6 md:gap-32 md:px-10">
        {PORTFOLIO.map((item, i) => {
          const isEven = i % 2 === 0;
          return (
            <article
              key={item.client}
              className="group grid grid-cols-12 items-end gap-4 md:gap-6"
            >
              <div
                className={`col-span-12 md:col-span-8 ${
                  isEven ? "md:col-start-1" : "md:col-start-5"
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 768px) 66vw, 100vw"
                    className="object-cover grayscale contrast-[1.05] transition-transform duration-[1200ms] ease-out-quint group-hover:scale-[1.03]"
                  />
                </div>
              </div>
              <div
                className={`col-span-12 md:col-span-4 ${
                  isEven ? "md:col-start-9" : "md:col-start-1 md:row-start-1"
                }`}
              >
                <div className="font-mono text-mono-label uppercase opacity-60">
                  {String(i + 1).padStart(2, "0")} / Case study
                </div>
                <h3 className="mt-3 text-heading-1 text-balance transition-transform duration-700 ease-out-quint group-hover:-translate-x-1">
                  {item.client}
                </h3>
                <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-2 font-mono text-mono-label uppercase opacity-70">
                  {item.disciplines.map((d) => (
                    <li
                      key={d}
                      className="rounded-full border border-current px-3 py-1"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mx-auto mt-24 flex max-w-site items-center justify-between border-t border-line-inv px-6 pt-8 md:px-10">
        <div className="font-mono text-mono-label uppercase opacity-60">
          More work on request
        </div>
        <a
          href="#contact"
          className="font-mono text-mono-label uppercase underline-offset-4 hover:underline"
        >
          Request the deck ↗
        </a>
      </div>
    </section>
  );
}
