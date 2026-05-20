import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/data";
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
  if (!s) return { title: "Service — Djitugo" };
  return {
    title: `${s.en.short} — Djitugo`,
    description: s.en.tagline
  };
}

export default async function ServicePage({
  params
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();
  return <ServiceDetail slug={slug} />;
}
