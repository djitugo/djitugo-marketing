"use client";

import { useRef } from "react";
import { useGsap, gsap } from "./useGsap";
import { cn } from "@/lib/cn";

type Tag = "h1" | "h2" | "h3" | "p" | "div";

type Props = {
  as?: Tag;
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  delay?: number;
  stagger?: number;
};

export function LineReveal({
  as: Tag = "h2",
  children,
  className,
  delay = 0,
  stagger = 0.08
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useGsap(() => {
    const el = ref.current;
    if (!el) return;
    const lines = el.querySelectorAll<HTMLElement>("[data-line] > span");
    if (!lines.length) return;
    gsap.set(lines, { yPercent: 110 });
    const tween = gsap.to(lines, {
      yPercent: 0,
      duration: 0.9,
      stagger,
      delay,
      ease: "expo.out",
      paused: true
    });
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            tween.play();
            obs.disconnect();
            return;
          }
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const items = Array.isArray(children) ? children : [children];
  const content = items.map((item, i) => (
    <span key={i} data-line className="line-mask">
      <span>{item}</span>
    </span>
  ));

  const sharedProps = {
    ref: ref as React.Ref<HTMLHeadingElement & HTMLParagraphElement & HTMLDivElement>,
    className: cn(className)
  };

  if (Tag === "h1") return <h1 {...sharedProps}>{content}</h1>;
  if (Tag === "h2") return <h2 {...sharedProps}>{content}</h2>;
  if (Tag === "h3") return <h3 {...sharedProps}>{content}</h3>;
  if (Tag === "p") return <p {...sharedProps}>{content}</p>;
  return <div {...sharedProps}>{content}</div>;
}
