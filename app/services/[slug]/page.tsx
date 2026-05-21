import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/data";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, pageMetadata, serviceSchema } from "@/lib/seo";
import { ServiceDetail } from "./ServiceDetail";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) return pageMetadata({ path: `/services/${slug}`, title: "Service" });
  return pageMetadata({
    path: `/services/${s.slug}`,
    title: s.en.short,
    description: `${s.en.tagline} ${s.en.body}`,
    ogTitle: `${s.en.short} — Djitugo`,
    ogDescription: s.en.tagline
  });
}

export default async function ServicePage({
  params
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.en.short, path: `/services/${service.slug}` }
          ]),
          serviceSchema({
            name: service.en.title,
            description: service.en.body,
            slug: service.slug,
            deliverables: service.en.deliverables
          })
        ]}
      />
      <ServiceDetail slug={slug} />
    </>
  );
}
