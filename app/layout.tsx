import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"]
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"]
});

export const metadata: Metadata = {
  title: "Djitugo — Where Creativity Meets Technology",
  description:
    "Djitugo is a Bali-based digital marketing agency. We build automation-led growth systems for ambitious businesses across hospitality, retail, healthcare, and beyond.",
  openGraph: {
    title: "Djitugo — Where Creativity Meets Technology",
    description:
      "Bali-based digital marketing agency. Automation-led growth for ambitious businesses.",
    type: "website",
    locale: "en_US"
  },
  metadataBase: new URL("https://djitugomarketing.com")
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bricolage.variable} ${jetbrains.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-paper focus:text-ink-0 focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
