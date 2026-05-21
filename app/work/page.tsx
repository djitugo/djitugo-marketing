import type { Metadata } from "next";
import { WorkContent } from "./WorkContent";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/work",
  title: "Work",
  description:
    "Selected work from Djitugo: hospitality, healthcare, mobility, beauty, and recruitment-tech case studies. Brands that grew on our watch.",
  ogTitle: "Djitugo Work — Brands that grew on our watch",
  ogDescription:
    "A short selection of recent engagements. The full deck lives on the studio drive."
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
