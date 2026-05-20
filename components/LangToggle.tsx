"use client";

import { useLang } from "@/components/LangProvider";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
};

export function LangToggle({ className }: Props) {
  const { lang, setLang } = useLang();
  return (
    <button
      type="button"
      onClick={() => setLang(lang === "en" ? "id" : "en")}
      aria-label={lang === "en" ? "Ganti ke Bahasa Indonesia" : "Switch to English"}
      className={cn(
        "group inline-flex items-center font-mono text-mono-label uppercase",
        className
      )}
    >
      <span
        className={cn(
          "transition",
          lang === "en" ? "opacity-100" : "opacity-40"
        )}
      >
        EN
      </span>
      <span className="mx-1.5 opacity-30">/</span>
      <span
        className={cn(
          "transition",
          lang === "id" ? "opacity-100" : "opacity-40"
        )}
      >
        ID
      </span>
    </button>
  );
}
