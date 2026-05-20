"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  as?: "div" | "section" | "p" | "span" | "li" | "article";
};

export function FadeIn({
  children,
  className,
  id,
  delay = 0,
  y = 24,
  once = true,
  as = "div"
}: Props) {
  const reduce = useReducedMotion();
  const Component = motion[as];
  return (
    <Component
      id={id}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.3 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}
