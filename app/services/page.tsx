import type { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/services",
  title: "Services",
  description:
    "Six disciplines under one accountable team: digital marketing automation, social media, performance ads, web development, branding and design, and commercial photography.",
  ogTitle: "Djitugo Services — Six disciplines, one accountable team",
  ogDescription:
    "From the first strategy session to the monthly readout, the same studio runs everything."
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
