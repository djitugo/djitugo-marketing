import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact — Djitugo",
  description:
    "Schedule a call with Djitugo, the Bali-based digital marketing studio. WhatsApp, email, or studio visit."
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        number="07"
        eyebrow="Contact"
        title={["Let us talk", "about your growth."]}
        description="Tell us what you want to grow. We will tell you what it takes, who from the studio will run it, and how soon we can start. Most calls last fifteen minutes."
      />

      <section className="relative w-full pb-24 md:pb-32">
        <div className="mx-auto max-w-site px-6 md:px-10">
          <div className="grid grid-cols-12 gap-6 md:gap-8">
            <div className="col-span-12 md:col-span-7">
              <SectionHeader number="07" label="Reach us" />
              <div className="mt-10 flex flex-col gap-6">
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center justify-between border-t border-line py-6 transition hover:opacity-90"
                >
                  <div>
                    <div className="font-mono text-mono-label uppercase opacity-60">
                      WhatsApp
                    </div>
                    <div className="mt-2 text-heading-1 text-balance">
                      {SITE.phone}
                    </div>
                  </div>
                  <span
                    aria-hidden
                    className="font-mono text-mono-label uppercase opacity-70 transition group-hover:translate-x-1 group-hover:opacity-100"
                  >
                    ↗
                  </span>
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="group flex items-center justify-between border-t border-line py-6 transition hover:opacity-90"
                >
                  <div>
                    <div className="font-mono text-mono-label uppercase opacity-60">
                      Email
                    </div>
                    <div className="mt-2 text-heading-1 text-balance">{SITE.email}</div>
                  </div>
                  <span
                    aria-hidden
                    className="font-mono text-mono-label uppercase opacity-70 transition group-hover:translate-x-1 group-hover:opacity-100"
                  >
                    ↗
                  </span>
                </a>
                <a
                  href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
                  className="group flex items-center justify-between border-y border-line py-6 transition hover:opacity-90"
                >
                  <div>
                    <div className="font-mono text-mono-label uppercase opacity-60">
                      Call
                    </div>
                    <div className="mt-2 text-heading-1 text-balance">{SITE.phone}</div>
                  </div>
                  <span
                    aria-hidden
                    className="font-mono text-mono-label uppercase opacity-70 transition group-hover:translate-x-1 group-hover:opacity-100"
                  >
                    ↗
                  </span>
                </a>
              </div>
            </div>

            <aside className="col-span-12 md:col-span-4 md:col-start-9">
              <div className="border-t border-line pt-8">
                <div className="font-mono text-mono-label uppercase opacity-60">
                  Studio
                </div>
                <p className="mt-4 text-body-l text-paper">{SITE.address}</p>
              </div>
              <div className="mt-10 border-t border-line pt-8">
                <div className="font-mono text-mono-label uppercase opacity-60">
                  Hours
                </div>
                <p className="mt-4 text-body text-paper">{SITE.hours}</p>
              </div>
              <div className="mt-10 border-t border-line pt-8">
                <div className="font-mono text-mono-label uppercase opacity-60">
                  Social
                </div>
                <ul className="mt-4 space-y-2 text-body">
                  <li>
                    <a
                      href={SITE.social.instagram}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-paper underline-offset-4 hover:underline"
                    >
                      Instagram, @djitugo
                    </a>
                  </li>
                  <li>
                    <a
                      href={SITE.social.linkedin}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-paper underline-offset-4 hover:underline"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href={SITE.social.facebook}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-paper underline-offset-4 hover:underline"
                    >
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="relative w-full">
        <div className="relative aspect-[16/9] w-full overflow-hidden border-y border-line md:aspect-[21/9]">
          <iframe
            title="Djitugo studio location"
            src="https://maps.google.com/maps?q=Jln%20Bukit%20Sari%20Utara%2088X%20Padangsambian%20Kaja%20Denpasar%20Bali&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="absolute inset-0 size-full grayscale contrast-[1.05]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
