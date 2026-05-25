import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/contact",
  title: "Contact Djitugo — Digital Marketing Agency in Bali",
  description:
    "Schedule a fifteen-minute call with Djitugo, the Bali-based digital marketing agency. WhatsApp +62 813 3732 9381, hello@djitugo.com, or visit our studio in Denpasar.",
  ogTitle: "Contact Djitugo — Schedule a Call",
  ogDescription:
    "WhatsApp, email, or studio visit. Most discovery calls last fifteen minutes."
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
