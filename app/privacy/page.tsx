import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { SITE } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/privacy",
  title: "Privacy Policy — Djitugo",
  description:
    "How Djitugo (PT Djitu Solusi Digital) collects, uses, and protects information across djitugomarketing.com and our engagements."
});

const UPDATED = "20 May 2026";

const SECTIONS = [
  {
    title: "Who we are",
    body: `${SITE.legalName} operates the website at djitugomarketing.com and provides digital marketing services from Denpasar, Bali. References to "Djitugo", "we", or "us" mean the same company.`
  },
  {
    title: "What we collect",
    body:
      "When you browse this site we receive standard server logs such as IP address, browser type, language, and pages visited. When you submit a form, call us, or message us on WhatsApp, we receive what you send: your name, contact details, and the content of your message. We do not collect special-category personal data and we do not knowingly process information from anyone under sixteen."
  },
  {
    title: "Cookies and analytics",
    body:
      "We use first-party cookies to remember your consent choice and to read aggregate traffic patterns through privacy-respecting analytics. You can decline cookies on first visit, clear them anytime in your browser, or set your browser to refuse them altogether. The site works either way."
  },
  {
    title: "How we use information",
    body:
      "We use what you send us to reply, to scope a possible engagement, to provide ongoing services, and to keep records that local accounting and tax law requires us to keep. We do not sell your information, and we do not use it to train third-party AI models."
  },
  {
    title: "Sharing with vendors",
    body:
      "To run the studio we use vetted third parties: hosting (Vercel), email (Google Workspace), accounting software, and analytics. Each is contractually bound to handle data with at least the same care described here, and each is on a need-to-know basis."
  },
  {
    title: "International transfers",
    body:
      "Some of our vendors store data outside Indonesia (commonly in Singapore, the United States, or the EU). Where required, we rely on standard data-transfer safeguards published by the receiving region."
  },
  {
    title: "Retention",
    body:
      "We keep enquiry data for up to twenty-four months after our last contact, and engagement data for as long as the law requires us to. We delete or anonymise after that, on request or on the next quarterly clean-up, whichever comes first."
  },
  {
    title: "Your rights",
    body: `Wherever the law gives you the right to access, correct, port, or delete your data, you can exercise it by writing to ${SITE.email}. We will respond within thirty days. You also have the right to complain to the Indonesian Personal Data Protection Authority (Lembaga Pelindungan Data Pribadi).`
  },
  {
    title: "Security",
    body:
      "We use industry-standard transport encryption, restricted internal access, and modern password hygiene. No system is perfectly secure, but if we ever became aware of a breach affecting you, we would tell you without delay."
  },
  {
    title: "Updates",
    body: `We may update this policy as our services or the law changes. The "Last updated" date at the top of this page tells you when we last revised it. Significant changes will be highlighted on the homepage for at least thirty days.`
  },
  {
    title: "Contact",
    body: `Privacy questions: ${SITE.email}. Postal: ${SITE.address}.`
  }
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        number="A"
        title="Privacy Policy."
        description={`How we handle information across djitugomarketing.com and our engagements. Last updated ${UPDATED}.`}
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
