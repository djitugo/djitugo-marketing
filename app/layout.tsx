import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Loader } from "@/components/Loader";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FloatingCTA } from "@/components/FloatingCTA";
import { CookieConsent } from "@/components/CookieConsent";
import { LangProvider } from "@/components/LangProvider";
import { JsonLd } from "@/components/JsonLd";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  KEYWORDS,
  SITE_URL,
  localBusinessSchema,
  organizationSchema,
  websiteSchema
} from "@/lib/seo";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s — Djitugo"
  },
  description: DEFAULT_DESCRIPTION,
  keywords: KEYWORDS,
  applicationName: "Djitugo",
  generator: "Next.js",
  authors: [{ name: "Djitugo", url: SITE_URL }],
  creator: "Djitugo",
  publisher: "PT Djitu Solusi Digital",
  category: "Marketing",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "id-ID": "/",
      "x-default": "/"
    }
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: "Djitugo",
    locale: "en_US",
    alternateLocale: "id_ID",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    creator: "@djitugo"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "128x128" }],
    apple: [{ url: "/icon.png", sizes: "128x128", type: "image/png" }]
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#1a1716" },
    { media: "(prefers-color-scheme: light)", color: "#1a1716" }
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bricolage.variable} ${jetbrains.variable}`}>
      <head>
        <JsonLd
          data={[organizationSchema(), localBusinessSchema(), websiteSchema()]}
        />
      </head>
      <body>
        <LangProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-paper focus:text-ink-0 focus:px-4 focus:py-2 focus:rounded"
          >
            Skip to content
          </a>
          <Loader />
          <ScrollProgress />
          <Nav />
          <main id="main">{children}</main>
          <FloatingCTA />
          <CookieConsent />
          <div className="grain" aria-hidden />
        </LangProvider>
      </body>
    </html>
  );
}
