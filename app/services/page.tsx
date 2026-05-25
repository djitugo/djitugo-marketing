import type { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/services",
  title: "Services — Djitugo Digital Marketing Agency Bali",
  description:
    "Six disciplines under one accountable team: digital marketing automation, social media, performance ads, web development, branding, and commercial photography. Run from our Bali studio.",
  ogTitle: "Djitugo Services — Marketing, Ads, Web, Branding in Bali",
  ogDescription:
    "Six disciplines, one accountable team. From strategy session to monthly readout, same studio runs everything."
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" }
        ])}
      />
      <ServicesContent />
    </>
  );
}
