import type { Metadata } from "next";
import { WorkContent } from "./WorkContent";

export const metadata: Metadata = {
  title: "Work — Djitugo",
  description:
    "Selected work from the studio: hospitality, healthcare, mobility, beauty, and recruitment-tech case studies from Djitugo, Bali."
};

export default function WorkPage() {
  return <WorkContent />;
}
