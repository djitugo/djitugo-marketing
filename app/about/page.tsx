import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { FadeIn } from "@/components/motion/FadeIn";
import { CTA } from "@/components/CTA";
import { SITE, TEAM, VALUES } from "@/lib/data";

export const metadata: Metadata = {
  title: "About — Djitugo Studio in Bali",
  description:
    "Djitugo is a digital marketing studio in Denpasar, Bali. Founded 2020 by Gustu Adi and Komang Joni. 700+ clients, one accountable team."
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        number="08"
        eyebrow="Studio"
        title={["Built on", "Bukit Sari Utara."]}
        description="Djitugo is a digital marketing studio in Denpasar, Bali. We started in 2020 with two founders and a single rule: ship work people stop to look at, on a schedule. Six years later that has put us in front of seven hundred brands across hospitality, healthcare, mobility, and beyond."
      />

      <section className="relative w-full border-y border-line py-24 md:py-32">
        <div className="mx-auto max-w-site px-6 md:px-10">
          <SectionHeader number="09" label="What we believe" />
          <div className="mt-16 grid grid-cols-12 gap-6 md:gap-8">
            {VALUES.map((v, i) => (
              <FadeIn
                as="article"
                key={v.title}
                delay={i * 0.08}
                className="col-span-12 border-t border-line pt-8 md:col-span-6 md:pt-10"
              >
                <div className="font-mono text-mono-label uppercase opacity-60">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 text-heading-1 text-balance">{v.title}</h3>
                <p className="mt-5 max-w-md text-body text-ink-5">{v.body}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full py-24 md:py-32">
        <div className="mx-auto max-w-site px-6 md:px-10">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-5">
              <SectionHeader number="10" label="The team" />
              <h2 className="mt-6 text-display-l text-balance">
                Eighteen people, one room.
              </h2>
              <p className="mt-8 max-w-md text-body text-ink-5">
                Strategy, creative, engineering, photo, and ops, working side
                by side from the studio in Padangsambian. No outsource layer,
                no account handoff between sales and delivery.
              </p>
            </div>
            <ul className="col-span-12 mt-12 grid grid-cols-1 gap-2 md:col-span-7 md:mt-0 md:grid-cols-2 md:gap-x-6">
              {TEAM.map((m, i) => (
                <li
                  key={m.name}
                  className="flex items-baseline justify-between border-t border-line py-3 first:border-t-0 md:first:border-t md:[&:nth-child(2)]:border-t-0"
                >
                  <span className="text-body-l">{m.name}</span>
                  <span className="font-mono text-mono-label uppercase opacity-60">
                    {m.role}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative w-full border-y border-line py-24 md:py-32">
        <div className="mx-auto max-w-site px-6 md:px-10">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-7">
              <SectionHeader number="11" label="Studio address" />
              <p className="mt-8 text-display-l leading-[1] text-balance">
                {SITE.address.split(",").map((line, i, arr) => (
                  <span key={i} className="block">
                    {line.trim()}
                    {i < arr.length - 1 ? "," : ""}
                  </span>
                ))}
              </p>
            </div>
            <aside className="col-span-12 md:col-span-4 md:col-start-9">
              <div className="border-t border-line pt-6">
                <div className="font-mono text-mono-label uppercase opacity-60">
                  Hours
                </div>
                <p className="mt-3 text-body text-paper">{SITE.hours}</p>
              </div>
              <div className="mt-8 border-t border-line pt-6">
                <div className="font-mono text-mono-label uppercase opacity-60">
                  Reach us
                </div>
                <p className="mt-3 text-body text-paper">{SITE.email}</p>
                <p className="text-body text-paper">{SITE.phone}</p>
              </div>
              <div className="mt-8 border-t border-line pt-6">
                <div className="font-mono text-mono-label uppercase opacity-60">
                  Hiring
                </div>
                <p className="mt-3 max-w-xs text-body text-ink-5">
                  We are always reading portfolios. Send yours to {SITE.email}.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}
