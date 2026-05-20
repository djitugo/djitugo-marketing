"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { NAV, SITE } from "@/lib/data";
import { Logo } from "@/components/Logo";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [inverted, setInverted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") {
      setInverted(false);
      return;
    }
    const target = document.getElementById("work");
    if (!target) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          setInverted(e.isIntersecting);
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    obs.observe(target);
    return () => {
      obs.disconnect();
      setInverted(false);
    };
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,color,backdrop-filter] duration-500 ease-out-quint",
        scrolled || menuOpen
          ? inverted && !menuOpen
            ? "bg-paper/70 backdrop-blur-md text-ink-0 border-b border-line-inv"
            : "bg-ink-0/80 backdrop-blur-md text-paper border-b border-line"
          : "bg-transparent",
        inverted && !menuOpen ? "text-ink-0" : "text-paper"
      )}
    >
      <div className="mx-auto flex h-16 max-w-site items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          aria-label={`${SITE.name} home`}
          className="inline-flex items-center gap-2"
        >
          <Logo className="h-7 w-7" />
          <span className="sr-only">{SITE.name}</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-mono text-mono-label uppercase transition",
                  active ? "opacity-100" : "opacity-70 hover:opacity-100"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className={cn(
              "group hidden items-center gap-2 rounded-full border px-4 py-2 font-mono text-mono-label uppercase transition md:inline-flex",
              inverted && !menuOpen
                ? "border-ink-0 hover:bg-ink-0 hover:text-paper"
                : "border-paper hover:bg-paper hover:text-ink-0"
            )}
          >
            <span className="size-1.5 rounded-full bg-current opacity-90" />
            Schedule a call
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex size-9 items-center justify-center md:hidden"
          >
            <span className="relative block size-5">
              <span
                className={cn(
                  "absolute inset-x-0 top-1 h-px bg-current transition",
                  menuOpen && "translate-y-1.5 rotate-45"
                )}
              />
              <span
                className={cn(
                  "absolute inset-x-0 bottom-1 h-px bg-current transition",
                  menuOpen && "-translate-y-1.5 -rotate-45"
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out-quint md:hidden",
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0">
          <nav className="flex flex-col gap-2 border-t border-line bg-ink-0 px-6 py-6">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-heading-1 text-paper opacity-90 transition hover:opacity-100"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-paper px-4 py-2 font-mono text-mono-label uppercase text-paper"
            >
              Schedule a call
              <span aria-hidden>↗</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
