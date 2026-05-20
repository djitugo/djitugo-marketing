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
                    "group/link inline-flex items-center gap-1.5 font-mono text-mono-label uppercase transition",
                    active ? "opacity-100" : "opacity-80 hover:opacity-100"
                  )}
                  aria-haspopup={isServices ? "true" : undefined}
                  aria-expanded={isServices ? servicesOpen : undefined}
                >
                  <span className="relative">
                    {navLabel(item.key)}
                    {isServices ? (
                      <span
                        aria-hidden
                        className="absolute -bottom-1 left-0 right-0 h-px bg-current opacity-40"
                      />
                    ) : null}
                  </span>
                  {isServices ? (
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 10 10"
                      fill="none"
                      aria-hidden
                      className={cn(
                        "transition-transform duration-300 ease-out-quint opacity-90",
                        servicesOpen && "rotate-180"
                      )}
                    >
                      <path
                        d="M1.5 3.5L5 7L8.5 3.5"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : null}
                </Link>

                {isServices ? (
                  <div
                    className={cn(
                      "absolute right-0 top-full mt-4 w-[22rem] origin-top-right transition-all duration-300 ease-out-quint",
                      servicesOpen
                        ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                        : "pointer-events-none -translate-y-2 scale-[0.98] opacity-0"
                    )}
                  >
                    <div
                      className="absolute -top-2 right-7 size-3 rotate-45 border-l border-t border-line bg-ink-0"
                      aria-hidden
                    />
                    <div className="relative rounded-lg border border-line bg-ink-0 p-2 shadow-[0_28px_80px_-20px_rgba(0,0,0,0.75)] ring-1 ring-paper/[0.03]">
                      <Link
                        href="/services"
                        className="group/item flex items-center justify-between rounded-md px-4 py-3 text-paper transition hover:bg-ink-1"
                      >
                        <div>
                          <div className="font-mono text-mono-label uppercase opacity-60">
                            00 / All
                          </div>
                          <div className="mt-1 text-body">
                            {t.nav.services}
                          </div>
                        </div>
                        <span
                          aria-hidden
                          className="opacity-50 transition group-hover/item:translate-x-0.5 group-hover/item:opacity-100"
                        >
                          ↗
                        </span>
                      </Link>
                      <div className="my-1 h-px bg-line" aria-hidden />
                      {SERVICES.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="group/item flex items-center justify-between rounded-md px-4 py-3 text-paper transition hover:bg-ink-1"
                        >
                          <div>
                            <div className="font-mono text-mono-label uppercase opacity-60">
                              {s.number}
                            </div>
                            <div className="mt-1 text-body">{s[lang].short}</div>
                          </div>
                          <span
                            aria-hidden
                            className="opacity-40 transition group-hover/item:translate-x-0.5 group-hover/item:opacity-100"
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
