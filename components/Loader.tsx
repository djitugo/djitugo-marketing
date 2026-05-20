"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "@/components/Logo";
import { useT } from "@/components/LangProvider";

export function Loader() {
  const t = useT();
  const PHRASES = t.loader.phrases;
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";

    let p = 0;
    const tick = setInterval(() => {
      p += Math.random() * 7 + 4;
      if (p > 92) p = 92;
      setProgress(Math.floor(p));
    }, 75);

    const finish = () => {
      clearInterval(tick);
      setProgress(100);
      window.setTimeout(() => {
        setHidden(true);
        document.documentElement.style.overflow = "";
      }, 450);
    };

    const minHold = window.setTimeout(() => {
      if (document.readyState === "complete") finish();
      else window.addEventListener("load", finish, { once: true });
    }, 800);

    return () => {
      clearInterval(tick);
      window.clearTimeout(minHold);
      document.documentElement.style.overflow = "";
    };
  }, []);

  const phraseIdx = Math.min(
    PHRASES.length - 1,
    Math.floor((progress / 100) * PHRASES.length)
  );

  const arcCircumference = 2 * Math.PI * 38;
  const arcOffset = arcCircumference * (1 - progress / 100);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-101%" }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[300] flex flex-col bg-ink-0"
          aria-hidden
        >
          <div className="flex items-start justify-between p-6 font-mono text-mono-label uppercase opacity-70 md:p-8">
            <motion.span
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 0.7 }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Djitugo / Bali, Indonesia
            </motion.span>
            <motion.span
              className="tabular-nums"
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 0.7 }}
              transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {String(progress).padStart(3, "0")} / 100
            </motion.span>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center gap-6">
            <motion.div
              className="relative size-20 md:size-24"
              animate={{ rotate: 360 }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
            >
              <svg viewBox="0 0 80 80" className="size-full" fill="none">
                <circle
                  cx="40"
                  cy="40"
                  r="38"
                  stroke="var(--line)"
                  strokeWidth="1"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="38"
                  stroke="var(--paper)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray={arcCircumference}
                  strokeDashoffset={arcOffset}
                  transform="rotate(-90 40 40)"
                  style={{
                    transition: "stroke-dashoffset 220ms cubic-bezier(0.16,1,0.3,1)"
                  }}
                />
              </svg>
              <motion.div
                className="pointer-events-none absolute inset-0 flex items-center justify-center font-mono text-[0.7rem] uppercase opacity-80 tabular-nums"
                animate={{ rotate: -360 }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
              >
                {String(progress).padStart(2, "0")}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <Logo className="size-16 md:size-20" />
              <div className="mt-5 h-5 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={phraseIdx}
                    initial={{ y: 18, opacity: 0 }}
                    animate={{ y: 0, opacity: 0.7 }}
                    exit={{ y: -18, opacity: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="font-mono text-mono-label uppercase"
                  >
                    {PHRASES[phraseIdx]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          <div className="relative overflow-hidden border-t border-line">
            <div className="flex w-max animate-marquee gap-12 whitespace-nowrap py-3 font-mono text-mono-label uppercase opacity-70 md:py-4">
              {Array.from({ length: 14 }).map((_, i) => (
                <span key={i} className="flex items-center gap-12">
                  {t.hero.tagline}
                  <span className="opacity-40">·</span>
                  Bali, Indonesia
                  <span className="opacity-40">·</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
