"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { NAV, SITE } from "@/lib/data";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [inverted, setInverted] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const target = document.getElementById("work");
    if (!target) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setInverted(true);
          else if (e.boundingClientRect.top > 0) setInverted(false);
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    obs.observe(target);
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,color,backdrop-filter] duration-500 ease-out-quint",
        scrolled
          ? inverted
            ? "bg-paper/70 backdrop-blur-md text-ink-0 border-b border-line-inv"
            : "bg-ink-0/70 backdrop-blur-md text-paper border-b border-line"
          : "bg-transparent",
        inverted ? "text-ink-0" : "text-paper"
      )}
    >
      <div className="mx-auto flex h-16 max-w-site items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="font-sans text-[1.35rem] font-semibold tracking-[-0.04em]"
        >
          {SITE.name.toLowerCase()}
          <span className="text-focus">.</span>
        </Link>
        <nav className="hidden items-center gap-10 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-mono-label uppercase opacity-70 transition hover:opacity-100"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noreferrer noopener"
          className={cn(
            "group relative inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-mono-label uppercase transition",
            inverted
              ? "border-ink-0 hover:bg-ink-0 hover:text-paper"
              : "border-paper hover:bg-paper hover:text-ink-0"
          )}
        >
          <span className="size-1.5 rounded-full bg-current opacity-90 transition group-hover:opacity-100" />
          Schedule a call
        </a>
      </div>
    </header>
  );
}
