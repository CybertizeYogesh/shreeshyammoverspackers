import OriginalPage from "@/components/OriginalPage";

export const metadata = {
  title: "About Us",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <OriginalPage slug="about" />;
}
