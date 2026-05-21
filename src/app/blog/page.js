import InnerPage from "@/components/InnerPage";

export const metadata = {
  title: "Blog",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return <InnerPage title="Blog" eyebrow="Blog" />;
}
