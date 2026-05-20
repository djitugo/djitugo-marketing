"use client";

import { motion } from "motion/react";
import { Logo } from "@/components/Logo";

export default function Template({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <motion.div
        aria-hidden
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: "top" }}
        className="pointer-events-none fixed inset-0 z-[290] flex items-center justify-center bg-ink-0"
      >
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-4"
        >
          <Logo className="size-12 md:size-14" />
          <span className="font-mono text-mono-label uppercase opacity-60">
            Djitugo
          </span>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.5,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
