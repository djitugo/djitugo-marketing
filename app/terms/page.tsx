import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Use — Djitugo",
  description:
    "Terms that govern your use of the Djitugo marketing site and our engagements."
};

const UPDATED = "20 May 2026";

const SECTIONS = [
  {
    title: "About these terms",
    body: `These terms govern your access to djitugomarketing.com and any informational use of the materials on it. ${SITE.legalName} (referred to here as "Djitugo") makes the site available subject to these terms, and to the Privacy Policy linked from the footer.`
  },
  {
    title: "Who can use this site",
    body:
      "You may use this site if you are at least sixteen years old and if doing so does not violate the laws that apply to you. We reserve the right to refuse access to anyone who misuses the site or our services."
  },
  {
    title: "Intellectual property",
    body:
      "The site, its design, its copy, the wordmark, our logo system, and the case-study imagery are owned by Djitugo or licensed to us. You may share short excerpts with attribution and a link, but you may not republish the work as your own, train AI on it without permission, or use our marks to imply an endorsement we have not given."
  },
  {
    title: "Engagements and proposals",
    body:
      "A page on this site, an Instagram caption, a quote we send by email, or a chat message is informational, not a binding offer. An engagement only begins when we both sign a written scope. That scope, along with our standard engagement terms, governs the work itself."
  },
  {
    title: "Linked third parties",
    body:
      "We link to client sites, vendor sites, and social platforms. We do not control those services and we are not responsible for what they say or do. If a linked service collects data from you, their terms and privacy policy apply."
  },
  {
    title: "Acceptable use",
    body:
      "Do not attempt to disrupt the site, probe it for vulnerabilities outside a responsible-disclosure program, scrape it at volume, or use it to deliver malware. Do not impersonate our team or our clients. Do not use any forms or contact channels to send spam, unlawful content, or anything you do not have the right to share."
  },
  {
    title: "No warranties",
    body:
      "The site is provided as is. We try to keep it accurate and available, but we make no warranty that it will be uninterrupted, error-free, or that any case-study outcome will repeat for your business. Marketing depends on inputs we do not always control."
  },
  {
    title: "Limitation of liability",
    body:
      "To the maximum extent allowed by law, Djitugo is not liable for indirect, incidental, or consequential damages arising from your use of this site. Where local law gives you a right we cannot disclaim, this clause does not affect that right."
  },
  {
    title: "Governing law",
    body:
      "These terms are governed by the laws of the Republic of Indonesia. Any dispute is to be resolved in the courts of Denpasar, Bali, unless local consumer-protection law requires otherwise."
  },
  {
    title: "Updates",
    body: `We may update these terms as our services or the law changes. The "Last updated" date at the top reflects the latest revision. Continued use after a change means you accept the revised terms.`
  },
  {
    title: "Contact",
    body: `Questions about these terms: ${SITE.email}. Postal: ${SITE.address}.`
  }
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        number="B"
        title="Terms of Use."
        description={`Plain-language terms that govern your use of this site. Last updated ${UPDATED}.`}
      />

      <section className="relative w-full pb-24 md:pb-32">
        <div className="mx-auto max-w-site px-6 md:px-10">
          <ol className="grid grid-cols-12 gap-x-6 gap-y-12">
            {SECTIONS.map((s, i) => (
              <li
                key={s.title}
                className="col-span-12 grid grid-cols-12 items-start gap-x-6 border-t border-line pt-8 md:gap-x-8"
              >
                <div className="col-span-12 font-mono text-mono-label uppercase opacity-60 md:col-span-2">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="col-span-12 md:col-span-10">
                  <h2 className="text-heading-1 text-balance">{s.title}</h2>
                  <p className="mt-5 max-w-2xl text-body text-ink-5">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Footer />
    </>
  );
}
