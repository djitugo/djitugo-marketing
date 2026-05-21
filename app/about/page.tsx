import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/about",
  title: "About",
  description:
    "Djitugo is a digital marketing studio in Denpasar, Bali, founded in 2020 by Gustu Adi and Komang Joni. 700+ clients across hospitality, healthcare, mobility, and beyond.",
  ogTitle: "About Djitugo — A studio in Bali, Indonesia",
  ogDescription:
    "Founded 2020. 18 in-house creatives, engineers, and strategists. One accountable team, six disciplines."
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" }
        ])}
      />
      <AboutContent />
    </>
  );
}
