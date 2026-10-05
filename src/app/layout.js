import "./globals.css";
import { site } from "@/data/siteData";
import StructuredData from "@/components/StructuredData";
import OriginalHeader from "@/components/OriginalHeader";
import OriginalFooter from "@/components/OriginalFooter";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Shree Shyam Movers & Packers",
    template: "%s | Shree Shyam Movers & Packers",
  },
  description: "Shree Shyam Movers & Packers provides domestic and international packing, moving, car transport, warehousing, and relocation services.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    title: "Shree Shyam Movers & Packers",
    description: "Trusted packers and movers for household, office, vehicle, cargo, and warehouse services.",
    siteName: site.name,
    images: ["/images/common/assets/img/logo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shree Shyam Movers & Packers",
    description: "Trusted packers and movers.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/source/app.min.css" />
        <link rel="stylesheet" href="/source/fontawesome.min.css" />
        <link rel="stylesheet" href="/source/style.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `if(typeof window!=="undefined"&&"serviceWorker"in navigator){navigator.serviceWorker.getRegistrations().then(function(r){for(var i=0;i<r.length;i++){r[i].unregister();}});}`,
          }}
        />
        <script src="/assets/js/vendor/jquery-3.6.0.min.js" defer></script>
        <script src="/assets/js/app.min.js" defer></script>
        <script src="/assets/js/main.js" defer></script>
      </head>
      <body>
        <OriginalHeader />
        {children}
        <OriginalFooter />
        <StructuredData />
      </body>
    </html>
  );
}
