import type { Metadata } from "next";
import { SITE } from "./data";

export const SITE_URL = "https://djitugomarketing.com";
export const SITE_NAME = SITE.name;
export const DEFAULT_TITLE = `${SITE.name} — Where Creativity Meets Technology`;
export const DEFAULT_DESCRIPTION =
  "Djitugo is a Bali-based digital marketing studio. We build automation-led growth systems for ambitious brands across hospitality, retail, healthcare, and beyond. Strategy, creative, and engineering, under one roof.";

export const KEYWORDS = [
  "Djitugo",
  "digital marketing agency Bali",
  "marketing agency Indonesia",
  "social media agency Bali",
  "web development Bali",
  "performance marketing Indonesia",
  "branding agency Bali",
  "commercial photography Bali",
  "marketing automation Indonesia",
  "AI marketing agency",
  "hospitality marketing Bali",
  "resort marketing Indonesia",
  "Denpasar marketing studio",
  "agency Padangsambian",
  "PT Djitu Solusi Digital"
];

type Args = {
  title?: string;
  description?: string;
  path?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  noIndex?: boolean;
};

export function pageMetadata({
  title,
  description,
  path = "/",
  ogTitle,
  ogDescription,
  ogImage,
  noIndex
}: Args): Metadata {
  const url = `${SITE_URL}${path}`;
  const finalTitle = title ?? DEFAULT_TITLE;
  const finalDescription = description ?? DEFAULT_DESCRIPTION;
  return {
    title,
    description: finalDescription,
    alternates: {
      canonical: url,
      languages: {
        "en-US": url,
        "id-ID": url,
        "x-default": url
      }
    },
    openGraph: {
      title: ogTitle ?? finalTitle,
      description: ogDescription ?? finalDescription,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      alternateLocale: "id_ID",
      type: "website",
      images: ogImage
        ? [{ url: ogImage, width: 1200, height: 630, alt: finalTitle }]
        : undefined
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? finalTitle,
      description: ogDescription ?? finalDescription,
      images: ogImage ? [ogImage] : undefined
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1
          }
        }
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    foundingDate: "2020",
    description: DEFAULT_DESCRIPTION,
    email: SITE.email,
    telephone: SITE.phone,
    sameAs: [
      SITE.social.instagram,
      SITE.social.linkedin,
      SITE.social.facebook
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Bukit Sari Utara No.88X",
      addressLocality: "Denpasar",
      addressRegion: "Bali",
      postalCode: "80117",
      addressCountry: "ID"
    }
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}#localbusiness`,
    name: SITE.name,
    image: `${SITE_URL}/logo.png`,
    url: SITE_URL,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Bukit Sari Utara No.88X",
      addressLocality: "Denpasar",
      addressRegion: "Bali",
      postalCode: "80117",
      addressCountry: "ID"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -8.6586,
      longitude: 115.1791
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00"
    },
    areaServed: { "@type": "Country", name: "Indonesia" }
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE_URL,
    inLanguage: ["en", "id"],
    publisher: {
      "@type": "Organization",
      name: SITE.legalName,
      logo: `${SITE_URL}/logo.png`
    }
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`
    }))
  };
}

export function serviceSchema(args: {
  name: string;
  description: string;
  slug: string;
  deliverables: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: args.name,
    description: args.description,
    url: `${SITE_URL}/services/${args.slug}`,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE_URL
    },
    areaServed: { "@type": "Country", name: "Indonesia" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: args.name,
      itemListElement: args.deliverables.map((d, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: { "@type": "Service", name: d }
      }))
    }
  };
}
