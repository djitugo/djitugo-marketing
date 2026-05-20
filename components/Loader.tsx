"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function Loader() {
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  const [phrase, setPhrase] = useState("Calibrating");

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";

    const phrases = [
      "Calibrating",
      "Sharpening type",
      "Loading the studio",
      "Almost there"
    ];
    let p = 0;
    let phraseIdx = 0;
    const tick = setInterval(() => {
      p += Math.random() * 5 + 3;
      if (p > 92) p = 92;
      setProgress(Math.floor(p));
      const nextPhrase = Math.min(
        phrases.length - 1,
        Math.floor((p / 92) * (phrases.length - 1))
      );
      if (nextPhrase !== phraseIdx) {
        phraseIdx = nextPhrase;
        setPhrase(phrases[phraseIdx]);
      }
    }, 90);

    const finish = () => {
      clearInterval(tick);
      setPhrase("Ready");
      setProgress(100);
      window.setTimeout(() => {
        setHidden(true);
        document.documentElement.style.overflow = "";
      }, 700);
    };

    const minHold = window.setTimeout(() => {
      if (document.readyState === "complete") finish();
      else window.addEventListener("load", finish, { once: true });
    }, 1200);

    return () => {
      clearInterval(tick);
      window.clearTimeout(minHold);
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-101%" }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[300] flex flex-col justify-between bg-ink-0 p-6 md:p-10"
          aria-hidden
        >
          <div className="flex items-start justify-between font-mono text-mono-label uppercase opacity-70">
            <span>Djitugo / Loading</span>
            <span className="tabular-nums">{String(progress).padStart(3, "0")} / 100</span>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-baseline justify-between gap-6">
              <div className="font-sans text-[clamp(4.5rem,15vw,15rem)] font-medium tracking-[-0.04em] leading-[0.85]">
                djitugo<span className="text-focus">.</span>
              </div>
              <div className="hidden font-mono text-mono-label uppercase opacity-70 md:block">
                {phrase}
              </div>
            </div>
            <div className="relative h-px w-full overflow-hidden bg-line">
              <motion.div
                className="absolute inset-y-0 left-0 origin-left bg-paper"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>

          <div className="flex items-end justify-between font-mono text-mono-label uppercase opacity-70">
            <span>Where creativity meets technology</span>
            <span>Bali, Indonesia / {new Date().getFullYear()}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
