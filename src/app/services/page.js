import InnerPage from "@/components/InnerPage";

export const metadata = {
  title: "Services",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <InnerPage title="Our Services" eyebrow="Our Services" />;
}
