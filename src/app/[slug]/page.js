import { notFound } from "next/navigation";
import OriginalPage from "@/components/OriginalPage";
import { getOriginalTitle, originalLocationSlugs, originalPageSlugs } from "@/utils/originalPage";

const locationGurugramVariants = originalLocationSlugs
  .filter((slug) => slug.endsWith("-jaipur"))
  .map((slug) => slug.replace(/-jaipur$/, "-gurugram"));

const validSlugs = new Set([...originalPageSlugs, ...originalLocationSlugs, ...locationGurugramVariants]);

export async function generateMetadata({ params }) {
  const { slug } = await params;
  if (!validSlugs.has(slug)) {
    return {};
  }
  const title = getOriginalTitle(slug);
  return {
    title,
    description: `${title} by Shree Shyam Movers & Packers. Professional packing, moving, transport and relocation services with safe handling and timely delivery.`,
    alternates: { canonical: `/${slug}` },
    openGraph: { title },
  };
}

export function generateStaticParams() {
  return [...validSlugs]
    .filter((slug) => !["about", "branches", "gallery", "faq", "contact", "services", "blog"].includes(slug))
    .map((slug) => ({ slug }));
}

export default async function DynamicPage({ params }) {
  const { slug } = await params;
  if (!validSlugs.has(slug)) {
    notFound();
  }
  return <OriginalPage slug={slug} />;
}
