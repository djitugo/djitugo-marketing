import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Approach } from "@/components/Approach";
import { Portfolio } from "@/components/Portfolio";
import { Industries } from "@/components/Industries";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/",
  title: undefined,
  ogTitle: "Djitugo — Digital Marketing Agency in Bali, Indonesia",
  ogDescription:
    "Strategy, social media, ads, web, branding, and photography for ambitious brands across Indonesia. Studio in Denpasar since 2020."
});

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <Stats />
      <Services />
      <Approach />
      <Portfolio />
      <Industries />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
