"use client";

import { useRef } from "react";
import { useGsap, gsap, ScrollTrigger } from "@/components/motion/useGsap";
import { SectionHeader } from "@/components/SectionHeader";
import { STATS } from "@/lib/data";
import { useT } from "@/components/LangProvider";

export function Stats() {
  const root = useRef<HTMLDivElement>(null);
  const t = useT();

  useGsap(() => {
    const nodes = root.current?.querySelectorAll<HTMLElement>("[data-count]");
    if (!nodes) return;
    nodes.forEach((node) => {
      const target = Number(node.dataset.count);
      const proxy = { val: 0 };
      gsap.to(proxy, {
        val: target,
        duration: 1.6,
        ease: "expo.out",
        snap: { val: 1 },
        onUpdate: () => {
          node.textContent = String(proxy.val);
        },
        scrollTrigger: {
          trigger: node,
          start: "top 80%",
          once: true
        }
      });
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section className="relative w-full border-y border-line py-24 md:py-32">
      <div className="mx-auto max-w-site px-6 md:px-10">
        <SectionHeader number="01" label={t.stats.eyebrow} />

        <div
          ref={root}
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-16 md:mt-20 md:grid-cols-4"
        >
          {STATS.map((s, i) => (
            <div key={i} className="flex flex-col items-start gap-3">
              <div className="flex items-baseline gap-1 font-mono text-paper">
                <span
                  data-count={s.value}
                  className="text-[clamp(3.5rem,7vw,6rem)] font-medium tracking-[-0.04em] tabular-nums"
                >
                  0
                </span>
                {s.suffix ? (
                  <span className="text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.02em] opacity-80">
                    {s.suffix}
                  </span>
                ) : null}
              </div>
              <div className="font-mono text-mono-label uppercase text-ink-5">
                {t.stats.labels[i]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
