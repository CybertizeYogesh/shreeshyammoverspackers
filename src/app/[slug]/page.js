import OriginalPage from "@/components/OriginalPage";
import { getOriginalTitle, originalLocationSlugs, originalPageSlugs } from "@/utils/originalPage";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const title = getOriginalTitle(slug);
  return {
    title,
    description: `${title} by Indian Best Packers & Movers. Professional packing, moving, transport and relocation services with safe handling and timely delivery.`,
    alternates: { canonical: `/${slug}` },
    openGraph: { title },
  };
}

export function generateStaticParams() {
  return [...new Set([...originalPageSlugs, ...originalLocationSlugs])]
    .filter((slug) => !["about", "branches", "gallery", "faq", "contact", "payment", "services", "blog"].includes(slug))
    .map((slug) => ({ slug }));
}

export default async function DynamicPage({ params }) {
  const { slug } = await params;
  return <OriginalPage slug={slug} />;
}
