"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SITE } from "@/lib/data";
import { useT } from "@/components/LangProvider";

export function FloatingCTA() {
  const [show, setShow] = useState(false);
  const t = useT();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 280);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={SITE.whatsapp}
          target="_blank"
          rel="noreferrer noopener"
          initial={{ opacity: 0, y: 24, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.92 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="group fixed bottom-5 right-5 z-[55] flex items-center gap-3 rounded-full bg-paper px-5 py-3.5 text-ink-0 shadow-[0_18px_60px_-10px_rgba(0,0,0,0.55)] md:bottom-8 md:right-8 md:px-6 md:py-4"
          aria-label={t.fab.chat}
        >
          <span className="relative flex size-2.5" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink-0 opacity-60" />
            <span className="relative inline-flex size-2.5 rounded-full bg-ink-0" />
          </span>
          <span className="font-mono text-mono-label uppercase">{t.fab.chat}</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden
            className="opacity-70 transition group-hover:translate-x-0.5 group-hover:opacity-100"
          >
            <path
              d="M1 7h12M8 2l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
