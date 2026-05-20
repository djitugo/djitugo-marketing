"use client";

import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { FadeIn } from "@/components/motion/FadeIn";
import { CTA } from "@/components/CTA";
import { SITE, TEAM, VALUES } from "@/lib/data";
import { useLang } from "@/components/LangProvider";

export function AboutContent() {
  const { lang, t } = useLang();
  return (
    <>
      <PageHeader
        number="08"
        eyebrow={t.about.eyebrow}
        title={[t.about.l1, t.about.l2]}
        description={t.about.lead}
      />

      <section className="relative w-full border-y border-line py-24 md:py-32">
        <div className="mx-auto max-w-site px-6 md:px-10">
          <SectionHeader number="09" label={t.about.believe} />
          <div className="mt-16 grid grid-cols-12 gap-6 md:gap-8">
            {VALUES.map((v, i) => {
              const vx = v[lang];
              return (
                <FadeIn
                  as="article"
                  key={vx.title}
                  delay={i * 0.08}
                  className="col-span-12 border-t border-line pt-8 md:col-span-6 md:pt-10"
                >
                  <div className="font-mono text-mono-label uppercase opacity-60">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-4 text-heading-1 text-balance">{vx.title}</h3>
                  <p className="mt-5 max-w-md text-body text-ink-5">{vx.body}</p>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative w-full py-24 md:py-32">
        <div className="mx-auto max-w-site px-6 md:px-10">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-5">
              <SectionHeader number="10" label={t.about.teamEyebrow} />
              <h2 className="mt-6 text-display-l text-balance">
                {t.about.teamHeading}
              </h2>
              <p className="mt-8 max-w-md text-body text-ink-5">
                {t.about.teamBody}
              </p>
            </div>
            <ul className="col-span-12 mt-12 grid grid-cols-1 gap-2 md:col-span-7 md:mt-0 md:grid-cols-2 md:gap-x-6">
              {TEAM.map((m, i) => (
                <li
                  key={m.name}
                  className={`flex items-baseline justify-between py-3 ${
                    i > 1 ? "border-t border-line" : ""
                  }`}
                >
                  <span className="text-body-l">{m.name}</span>
                  <span className="font-mono text-mono-label uppercase opacity-60">
                    {lang === "id" ? m.roleId : m.role}
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
              <SectionHeader number="11" label={t.about.addressHeading} />
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
                  {t.about.hours}
                </div>
                <p className="mt-3 text-body text-paper">{t.footer.hours}</p>
              </div>
              <div className="mt-8 border-t border-line pt-6">
                <div className="font-mono text-mono-label uppercase opacity-60">
                  {t.about.reachUs}
                </div>
                <p className="mt-3 text-body text-paper">{SITE.email}</p>
                <p className="text-body text-paper">{SITE.phone}</p>
              </div>
              <div className="mt-8 border-t border-line pt-6">
                <div className="font-mono text-mono-label uppercase opacity-60">
                  {t.about.hiring}
                </div>
                <p className="mt-3 max-w-xs text-body text-ink-5">
                  {t.about.hiringBody}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-paper underline-offset-4 hover:underline"
                  >
                    {SITE.email}
                  </a>
                  .
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
