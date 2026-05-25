import type { Metadata } from "next";
import { WorkContent } from "./WorkContent";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/work",
  title: "Work — Djitugo Marketing Case Studies Bali",
  description:
    "Selected case studies from Djitugo across hospitality, healthcare, mobility, beauty, and recruitment-tech. Brands that grew on our watch in Bali and across Indonesia.",
  ogTitle: "Djitugo Work — Bali Marketing Case Studies",
  ogDescription:
    "Hospitality, healthcare, mobility, beauty, recruitment. Selected case studies from our Bali studio."
});

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" }
        ])}
      />
      <WorkContent />
    </>
  );
}
