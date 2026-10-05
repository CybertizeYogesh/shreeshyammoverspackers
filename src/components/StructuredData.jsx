import { faqs, site } from "@/data/siteData";

export default function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: site.name,
    url: site.url,
    image: `${site.url}/images/common/assets/img/logo.webp`,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No. 1, Near Bhart Tower, Gosala Road, Krishna Chowk, Palam Vihar",
      addressLocality: "Gurugram",
      postalCode: "122017",
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
