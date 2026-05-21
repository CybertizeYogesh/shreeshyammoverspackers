import OriginalPage from "@/components/OriginalPage";

export const metadata = {
  title: "Gallery",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return <OriginalPage slug="gallery" />;
}
