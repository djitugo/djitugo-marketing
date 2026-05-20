import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Approach } from "@/components/Approach";
import { CTA } from "@/components/CTA";
import { SectionHeader } from "@/components/SectionHeader";
import { FadeIn } from "@/components/motion/FadeIn";
import { Placeholder } from "@/components/Placeholder";
import { SERVICES, PORTFOLIO, type Service } from "@/lib/data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) return { title: "Service — Djitugo" };
  return {
    title: `${s.short} — Djitugo`,
    description: s.tagline
  };
}

function getNeighbours(slug: string): { prev: Service; next: Service } {
  const idx = SERVICES.findIndex((s) => s.slug === slug);
  const prev = SERVICES[(idx - 1 + SERVICES.length) % SERVICES.length];
  const next = SERVICES[(idx + 1) % SERVICES.length];
  return { prev, next };
}

function getSampleCase(slug: string) {
  const map: Record<string, string> = {
    "digital-marketing": "the-mesare-resort",
    "social-media": "jobstreet-express",
    "web-development": "bali-family-dental",
    "performance-marketing": "love-scooter-bali",
    "branding-design": "sunhwa-beauty",
    "commercial-photography": "the-mesare-resort"
  };
  const id = map[slug];
  return PORTFOLIO.find((p) => p.slug === id) ?? PORTFOLIO[0];
}

export default async function ServicePage({
  params
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const { prev, next } = getNeighbours(service.slug);
  const sample = getSampleCase(service.slug);

  return (
    <>
      <PageHeader
        number={service.number}
        eyebrow={service.short}
        title={service.title}
        description={service.tagline}
      />

      <section className="relative w-full">
        <div className="mx-auto max-w-site px-6 md:px-10">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Placeholder kind={service.slug} label={service.detailAlt} />
          </div>
        </div>
      </section>

      <section className="relative w-full py-24 md:py-32">
        <div className="mx-auto max-w-site px-6 md:px-10">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-5">
              <SectionHeader number={service.number} label="The brief" />
              <h2 className="mt-6 text-heading-1 text-balance">
                {service.tagline}
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <p className="text-body-l text-paper">{service.body}</p>
              <p className="mt-6 text-body text-ink-5">{service.body2}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full border-y border-line py-24 md:py-32">
        <div className="mx-auto max-w-site px-6 md:px-10">
          <SectionHeader number={service.number} label="What is included" />
          <ul className="mt-12 grid grid-cols-12 gap-x-6 gap-y-6 md:mt-16">
            {service.deliverables.map((d, i) => (
              <FadeIn
                as="li"
                key={d}
                delay={i * 0.06}
                className="col-span-12 border-t border-line pt-6 md:col-span-6"
              >
                <div className="font-mono text-mono-label uppercase opacity-60">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="mt-4 text-heading-2 text-balance">{d}</p>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      <Approach />

      <section className="relative w-full py-24 md:py-32">
        <div className="mx-auto max-w-site px-6 md:px-10">
          <SectionHeader number={service.number} label="Sample case" />
          <Link
            href={`/work#${sample.slug}`}
            className="group mt-12 grid grid-cols-12 items-end gap-6 md:gap-8"
          >
            <div className="col-span-12 md:col-span-7">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <div className="absolute inset-0 transition-transform duration-[1200ms] ease-out-quint group-hover:scale-[1.03]">
                  <Placeholder kind={sample.kind} label={sample.alt} />
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5">
              <div className="font-mono text-mono-label uppercase opacity-60">
                Case study
              </div>
              <h3 className="mt-3 text-display-l text-balance transition-transform duration-700 ease-out-quint group-hover:-translate-x-1">
                {sample.client}
              </h3>
              <p className="mt-4 max-w-md text-body text-ink-5">
                {sample.summary}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-mono text-mono-label uppercase opacity-70 group-hover:opacity-100">
                See in context ↗
              </span>
            </div>
          </Link>
        </div>
      </section>

      <CTA />

      <section className="relative w-full border-t border-line">
        <div className="mx-auto grid max-w-site grid-cols-12 gap-6 px-6 py-16 md:px-10">
          <Link
            href={`/services/${prev.slug}`}
            className="group col-span-12 flex items-center justify-between md:col-span-6"
          >
            <div>
              <div className="font-mono text-mono-label uppercase opacity-60">
                ← Previous
              </div>
              <div className="mt-2 text-heading-2 text-balance transition group-hover:translate-x-[-2px]">
                {prev.short}
              </div>
            </div>
          </Link>
          <Link
            href={`/services/${next.slug}`}
            className="group col-span-12 flex items-center justify-between md:col-span-6 md:justify-end md:text-right"
          >
            <div>
              <div className="font-mono text-mono-label uppercase opacity-60">
                Next →
              </div>
              <div className="mt-2 text-heading-2 text-balance transition group-hover:translate-x-[2px]">
                {next.short}
              </div>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
