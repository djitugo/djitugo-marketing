"use client";

import { useRef } from "react";
import { useGsap, gsap } from "@/components/motion/useGsap";
import { SITE } from "@/lib/data";

export function CTA() {
  const root = useRef<HTMLElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useGsap(() => {
    const underline = root.current?.querySelector<HTMLElement>("[data-underline]");
    if (underline) {
      gsap.fromTo(
        underline,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: root.current!, start: "top 70%", once: true }
        }
      );
    }

    const btn = btnRef.current;
    if (!btn) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    const onMove = (e: MouseEvent) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      const dist = Math.hypot(x, y);
      const max = 120;
      if (dist > max) {
        tx = 0;
        ty = 0;
      } else {
        const strength = 1 - dist / max;
        tx = x * 0.35 * strength;
        ty = y * 0.35 * strength;
      }
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
    };

    const tick = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      btn.style.transform = `translate(${cx}px, ${cy}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const area = root.current;
    area?.addEventListener("mousemove", onMove);
    area?.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      area?.removeEventListener("mousemove", onMove);
      area?.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section
      id="contact"
      ref={root}
      className="relative w-full overflow-hidden py-32 md:py-48"
    >
      <div className="mx-auto max-w-site px-6 md:px-10">
        <div className="font-mono text-mono-label uppercase opacity-60">
          05 / Let&apos;s work together
        </div>

        <h2 className="mt-8 text-display-xl text-balance">
          <span className="inline-block">Ready to grow</span>
          <br />
          <span className="relative inline-block">
            smarter?
            <span
              data-underline
              className="absolute -bottom-2 left-0 h-[6px] w-full origin-left bg-paper md:h-[10px]"
            />
          </span>
        </h2>

        <div className="mt-16 grid grid-cols-12 gap-4 md:mt-24 md:gap-6">
          <div className="col-span-12 md:col-span-7">
            <p className="max-w-xl text-body-l text-ink-5">
              Tell us what you want to grow. We will tell you what it takes,
              who from the studio will run it, and how soon we can start. Most
              calls last fifteen minutes.
            </p>
            <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
              <a
                ref={btnRef}
                href={SITE.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-4 rounded-full bg-paper px-6 py-5 text-ink-0 transition will-change-transform hover:bg-ink-5 md:px-8 md:py-6"
              >
                <span className="font-sans text-heading-2">Schedule a call</span>
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-ink-0 text-paper transition group-hover:rotate-45">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M3 11L11 3M11 3H4M11 3v7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="square"
                    />
                  </svg>
                </span>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="font-mono text-mono-label uppercase opacity-70 underline-offset-4 hover:underline"
              >
                or email {SITE.email}
              </a>
            </div>
          </div>

          <aside className="col-span-12 md:col-span-4 md:col-start-9">
            <div className="border-t border-paper/15 pt-6">
              <div className="font-mono text-mono-label uppercase opacity-60">
                Studio
              </div>
              <p className="mt-3 text-body text-paper">{SITE.address}</p>
            </div>
            <div className="mt-8 border-t border-paper/15 pt-6">
              <div className="font-mono text-mono-label uppercase opacity-60">
                Direct
              </div>
              <p className="mt-3 text-body text-paper">{SITE.phone}</p>
              <p className="text-body text-paper">{SITE.email}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
