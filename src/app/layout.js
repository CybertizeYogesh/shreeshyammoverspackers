import "./globals.css";
import Script from "next/script";
import { site } from "@/data/siteData";
import StructuredData from "@/components/StructuredData";
import OriginalHeader from "@/components/OriginalHeader";
import OriginalFooter from "@/components/OriginalFooter";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Indian Best Packers & Movers",
    template: "%s | Indian Best Packers & Movers",
  },
  description: "Indian Best Packers & Movers provides domestic and international packing, moving, car transport, warehousing, and relocation services from Jaipur.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    title: "Indian Best Packers & Movers",
    description: "Trusted packers and movers in Jaipur for household, office, vehicle, cargo, and warehouse services.",
    siteName: site.name,
    images: ["/images/common/assets/img/logo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indian Best Packers & Movers",
    description: "Trusted packers and movers in Jaipur.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/source/app.min.css" />
        <link rel="stylesheet" href="/source/fontawesome.min.css" />
        <link rel="stylesheet" href="/source/style.css" />
      </head>
      <body>
        <OriginalHeader />
        {children}
        <OriginalFooter />
        <StructuredData />
        <Script src="/assets/js/vendor/jquery-3.6.0.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/app.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
