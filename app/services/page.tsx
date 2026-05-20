import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Approach } from "@/components/Approach";
import { CTA } from "@/components/CTA";
import { FadeIn } from "@/components/motion/FadeIn";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services — Djitugo",
  description:
    "Six disciplines under one accountable team. Digital marketing automation, social media, performance, web, branding, and commercial photography."
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        number="02"
        eyebrow="Services"
        title={["Six disciplines,", "one accountable team."]}
        description="From the first strategy session to the monthly readout, the same studio runs everything. Pick the discipline you need, or the full operating system."
      />

      <section className="relative w-full">
        <div className="mx-auto max-w-site px-6 md:px-10">
          <ol className="flex flex-col">
            {SERVICES.map((s, i) => (
              <FadeIn
                as="li"
                key={s.slug}
                delay={i * 0.05}
                className="border-t border-line py-12 first:border-t-0 first:pt-0 md:py-16"
              >
                <Link
                  href={`/services/${s.slug}`}
                  className="group block focus:outline-none"
                >
                  <div className="grid grid-cols-12 items-center gap-6 md:gap-8">
                    <div className="col-span-12 md:col-span-5">
                      <div className="relative aspect-[5/4] w-full overflow-hidden">
                        <Image
                          src={s.image}
                          alt={s.alt}
                          fill
                          sizes="(min-width: 768px) 40vw, 100vw"
                          className="object-cover grayscale contrast-[1.05] transition-transform duration-[1200ms] ease-out-quint group-hover:scale-[1.04]"
                        />
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 md:col-start-7">
                      <div className="font-mono text-mono-label uppercase opacity-60">
                        {s.number} / Service
                      </div>
                      <h2 className="mt-4 text-display-l text-balance transition-transform duration-700 ease-out-quint group-hover:translate-x-1">
                        {s.short}
                      </h2>
                      <p className="mt-5 max-w-lg text-body-l text-ink-5">
                        {s.tagline}
                      </p>
                      <span className="mt-8 inline-flex items-center gap-2 font-mono text-mono-label uppercase opacity-70 transition group-hover:opacity-100">
                        Open the file
                        <span aria-hidden>↗</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      <Approach />
      <CTA />
      <Footer />
    </>
  );
}
