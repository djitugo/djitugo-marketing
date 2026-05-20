import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About — Djitugo Studio in Bali",
  description:
    "Djitugo is a digital marketing studio in Denpasar, Bali. Founded 2020 by Gustu Adi and Komang Joni. 700+ clients, one accountable team."
};

export default function AboutPage() {
  return <AboutContent />;
}
