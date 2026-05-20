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
