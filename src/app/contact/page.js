import OriginalPage from "@/components/OriginalPage";

export const metadata = {
  title: "Contact Us",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <OriginalPage slug="contact" />;
}
