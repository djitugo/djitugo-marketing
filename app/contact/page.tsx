import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact — Djitugo",
  description:
    "Schedule a call with Djitugo, the Bali-based digital marketing studio. WhatsApp, email, or studio visit."
};

export default function ContactPage() {
  return <ContactContent />;
}
