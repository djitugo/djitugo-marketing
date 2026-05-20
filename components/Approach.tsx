"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";

const STEPS = [
  {
    n: "01",
    title: "Diagnose",
    body:
      "We start with a clear-eyed read of where you are. The funnel, the spend, the brand, the operations behind the scenes. No assumptions, no template plans."
  },
  {
    n: "02",
    title: "Plan",
    body:
      "We write the playbook. Channel mix, content calendar, automation surface, measurement plan. Reviewed with you, not at you. Locked before we spend."
  },
  {
    n: "03",
    title: "Run",
    body:
      "Daily execution by the same people who planned it. Production studio, ads team, web team, all in one room on Bukit Sari Utara. One Slack channel, one weekly stand-up."
  },
  {
    n: "04",
    title: "Compound",
    body:
      "Monthly readouts. Ruthless on what is working, on the table for what is not. Each quarter starts from a higher floor than the last."
  }
];

export function Approach() {
  return (
    <section
      id="approach"
      className="relative w-full border-y border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-site px-6 md:px-10">
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 md:col-span-4">
            <SectionHeader number="03" label="How we work" />
            <h2 className="mt-6 text-display-l text-balance">
              A studio operating system.
            </h2>
            <p className="mt-8 max-w-sm text-body text-ink-5">
              Same four phases on every engagement. Run by the same team. The
              only variable is your brand.
            </p>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <ol className="flex flex-col">
              {STEPS.map((s, i) => (
                <FadeIn
                  as="li"
                  key={s.n}
                  delay={i * 0.08}
                  className="group border-t border-line py-8 first:border-t-0 first:pt-0 md:py-10"
                >
                  <div className="grid grid-cols-12 items-start gap-4">
                    <div className="col-span-2 mt-2 font-mono text-mono-label uppercase opacity-60">
                      {s.n}
                    </div>
                    <div className="col-span-10">
                      <h3 className="text-heading-1 text-balance transition-transform duration-700 ease-out-quint group-hover:translate-x-1">
                        {s.title}
                      </h3>
                      <p className="mt-5 max-w-xl text-body text-ink-5">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
