import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/about",
  title: "About Djitugo — Digital Marketing Studio in Bali Since 2020",
  description:
    "Founded 2020 in Denpasar, Bali by Gustu Adi and Komang Joni. Eighteen-person studio across strategy, creative, engineering, photo, and ops. 700+ clients across hospitality, healthcare, mobility, beauty, and more.",
  ogTitle: "About Djitugo — Bali Digital Marketing Studio Since 2020",
  ogDescription:
    "Eighteen in-house creatives, engineers, and strategists. One accountable team across six disciplines."
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
