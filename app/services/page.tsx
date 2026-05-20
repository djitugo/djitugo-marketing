import type { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services — Djitugo",
  description:
    "Six disciplines under one accountable team. Digital marketing automation, social media, performance, web, branding, and commercial photography."
};

export default function ServicesPage() {
  return <ServicesContent />;
}
