import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/contact",
  title: "Contact",
  description:
    "Schedule a fifteen-minute call with Djitugo, the Bali-based digital marketing studio. WhatsApp +62 813 3732 9381, hello@djitugo.com, or visit the studio in Denpasar.",
  ogTitle: "Contact Djitugo — Let us talk about your growth",
  ogDescription:
    "Schedule a call, send a brief, or drop by the studio in Denpasar, Bali."
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" }
        ])}
      />
      <ContactContent />
    </>
  );
}
