"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

const KEY = "djitugo_cookie_consent_v1";

export function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(KEY);
    if (stored) return;
    const t = window.setTimeout(() => setOpen(true), 1800);
    return () => window.clearTimeout(t);
  }, []);

  const decide = (choice: "accept" | "decline") => {
    try {
      window.localStorage.setItem(
        KEY,
        JSON.stringify({ choice, at: new Date().toISOString() })
      );
    } catch {}
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 z-[58] mx-auto max-w-md rounded-md border border-line bg-ink-1/95 p-5 backdrop-blur-md md:bottom-5 md:left-5 md:right-auto"
          role="dialog"
          aria-labelledby="cookie-heading"
        >
          <div
            id="cookie-heading"
            className="font-mono text-mono-label uppercase opacity-70"
          >
            Cookies, briefly
          </div>
          <p className="mt-3 text-body text-paper">
            We use cookies to remember preferences and read aggregate traffic.
            Nothing personal leaves this site.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
            <button
              type="button"
              onClick={() => decide("accept")}
              className="rounded-full bg-paper px-4 py-2 font-mono text-mono-label uppercase text-ink-0 transition hover:bg-ink-5"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={() => decide("decline")}
              className="font-mono text-mono-label uppercase opacity-70 underline-offset-4 transition hover:opacity-100 hover:underline"
            >
              Decline
            </button>
            <Link
              href="/privacy"
              className="ml-auto font-mono text-mono-label uppercase opacity-70 underline-offset-4 transition hover:opacity-100 hover:underline"
            >
              Policy ↗
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
