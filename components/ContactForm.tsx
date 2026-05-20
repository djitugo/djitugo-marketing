"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useT } from "@/components/LangProvider";
import { SITE } from "@/lib/data";
import { cn } from "@/lib/cn";

type FormState = {
  name: string;
  email: string;
  company: string;
  project: string;
  message: string;
};

const EMPTY: FormState = {
  name: "",
  email: "",
  company: "",
  project: "",
  message: ""
};

export function ContactForm() {
  const t = useT();
  const [state, setState] = useState<FormState>(EMPTY);
  const [sent, setSent] = useState(false);

  const update = (k: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setState((s) => ({ ...s, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      state.project
        ? `New brief: ${state.project} — ${state.name || state.company || "Djitugo lead"}`
        : `New brief from ${state.name || "Djitugo lead"}`
    );
    const lines = [
      `Name: ${state.name}`,
      `Email: ${state.email}`,
      state.company ? `Company: ${state.company}` : null,
      state.project ? `Project: ${state.project}` : null,
      "",
      state.message
    ].filter(Boolean);
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const field =
    "w-full appearance-none border-b border-line bg-transparent py-4 text-body-l text-paper outline-none transition placeholder:text-ink-4 focus:border-paper";

  return (
    <div className="relative">
      <div className="font-mono text-mono-label uppercase opacity-60">
        08 / {t.contact.formHeading}
      </div>
      <h2 className="mt-4 text-display-l text-balance">
        {t.contact.formHeading}
      </h2>
      <p className="mt-5 max-w-lg text-body text-ink-5">{t.contact.formSub}</p>

      <form onSubmit={onSubmit} className="mt-12 grid grid-cols-12 gap-x-6 gap-y-2">
        <div className="col-span-12 md:col-span-6">
          <label className="block py-1 font-mono text-mono-label uppercase opacity-60">
            {t.contact.name}
          </label>
          <input
            type="text"
            required
            autoComplete="name"
            value={state.name}
            onChange={update("name")}
            placeholder="—"
            className={field}
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <label className="block py-1 font-mono text-mono-label uppercase opacity-60">
            {t.contact.emailField}
          </label>
          <input
            type="email"
            required
            autoComplete="email"
            value={state.email}
            onChange={update("email")}
            placeholder="—"
            className={field}
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <label className="block py-1 font-mono text-mono-label uppercase opacity-60">
            {t.contact.company}
          </label>
          <input
            type="text"
            autoComplete="organization"
            value={state.company}
            onChange={update("company")}
            placeholder="—"
            className={field}
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <label className="block py-1 font-mono text-mono-label uppercase opacity-60">
            {t.contact.project}
          </label>
          <select
            value={state.project}
            onChange={update("project")}
            className={cn(field, "cursor-pointer pr-8")}
          >
            <option value="" className="bg-ink-1 text-ink-4">
              —
            </option>
            {t.contact.projectOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-ink-1 text-paper">
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-12">
          <label className="block py-1 font-mono text-mono-label uppercase opacity-60">
            {t.contact.message}
          </label>
          <textarea
            required
            rows={4}
            value={state.message}
            onChange={update("message")}
            placeholder="—"
            className={cn(field, "resize-none py-3")}
          />
        </div>
        <div className="col-span-12 mt-8 flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
          <button
            type="submit"
            className="group inline-flex items-center gap-3 rounded-full bg-paper px-6 py-4 text-ink-0 transition hover:bg-ink-5"
          >
            <span className="font-mono text-mono-label uppercase">
              {t.contact.submit}
            </span>
            <span className="inline-flex size-8 items-center justify-center rounded-full bg-ink-0 text-paper transition group-hover:rotate-45">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden
              >
                <path
                  d="M3 9L9 3M9 3H4M9 3v5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </svg>
            </span>
          </button>
          <p className="max-w-sm font-mono text-mono-label uppercase opacity-60">
            {t.contact.formSub}
          </p>
        </div>
      </form>

      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 rounded-md border border-line bg-ink-1/80 p-5"
            role="status"
          >
            <div className="font-mono text-mono-label uppercase opacity-70">
              {t.contact.sentTitle}
            </div>
            <p className="mt-2 text-body text-paper">{t.contact.sentBody}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
