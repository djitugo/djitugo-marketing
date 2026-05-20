"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { NAV, SERVICES, SITE } from "@/lib/data";
import { Logo } from "@/components/Logo";
import { LangToggle } from "@/components/LangToggle";
import { useLang } from "@/components/LangProvider";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [inverted, setInverted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const { lang, t } = useLang();
  const servicesTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
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

  const openServices = () => {
    if (servicesTimer.current) window.clearTimeout(servicesTimer.current);
    setServicesOpen(true);
  };
  const scheduleCloseServices = () => {
    if (servicesTimer.current) window.clearTimeout(servicesTimer.current);
    servicesTimer.current = window.setTimeout(() => setServicesOpen(false), 140);
  };

  const navLabel = (k: string) =>
    ({
      about: t.nav.about,
      services: t.nav.services,
      work: t.nav.work,
      contact: t.nav.contact
    }[k] as string);

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
          <Logo className="h-8 w-8" />
          <span className="sr-only">{SITE.name}</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            const isServices = item.key === "services";
            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={isServices ? openServices : undefined}
                onMouseLeave={isServices ? scheduleCloseServices : undefined}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-1 font-mono text-mono-label uppercase transition",
                    active ? "opacity-100" : "opacity-70 hover:opacity-100"
                  )}
                  aria-haspopup={isServices ? "true" : undefined}
                  aria-expanded={isServices ? servicesOpen : undefined}
                >
                  {navLabel(item.key)}
                  {isServices ? (
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      aria-hidden
                      className={cn(
                        "transition-transform",
                        servicesOpen && "rotate-180"
                      )}
                    >
                      <path
                        d="M1 2.5L4 5.5L7 2.5"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  ) : null}
                </Link>

                {isServices ? (
                  <div
                    className={cn(
                      "absolute right-0 top-full mt-3 w-[20rem] origin-top-right transition-all duration-300 ease-out-quint",
                      servicesOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-1 opacity-0"
                    )}
                  >
                    <div
                      className={cn(
                        "rounded-md border bg-ink-1/95 p-1.5 backdrop-blur-md shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]",
                        inverted && !menuOpen
                          ? "border-line-inv"
                          : "border-line"
                      )}
                    >
                      <Link
                        href="/services"
                        className="flex items-center justify-between rounded px-4 py-3 text-paper transition hover:bg-ink-2/60"
                      >
                        <div>
                          <div className="font-mono text-mono-label uppercase opacity-60">
                            00
                          </div>
                          <div className="mt-1 text-body">
                            {t.nav.services}
                          </div>
                        </div>
                        <span aria-hidden className="opacity-50">
                          ↗
                        </span>
                      </Link>
                      <div className="my-1 h-px bg-line" aria-hidden />
                      {SERVICES.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="flex items-center justify-between rounded px-4 py-3 text-paper transition hover:bg-ink-2/60"
                        >
                          <div>
                            <div className="font-mono text-mono-label uppercase opacity-60">
                              {s.number}
                            </div>
                            <div className="mt-1 text-body">{s[lang].short}</div>
                          </div>
                          <span
                            aria-hidden
                            className="opacity-40 transition group-hover:translate-x-0.5"
                          >
                            ↗
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <LangToggle className="hidden opacity-70 hover:opacity-100 md:inline-flex" />
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
            {t.nav.scheduleCall}
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
          <nav className="flex flex-col gap-3 border-t border-line bg-ink-0 px-6 py-6">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-heading-1 text-paper opacity-90 transition hover:opacity-100"
              >
                {navLabel(item.key)}
              </Link>
            ))}
            <div className="mt-4 flex items-center justify-between">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-paper px-4 py-2 font-mono text-mono-label uppercase text-paper"
              >
                {t.nav.scheduleCall}
                <span aria-hidden>↗</span>
              </Link>
              <LangToggle className="opacity-90" />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
