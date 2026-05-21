/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },
      { source: "/faq.html", destination: "/faq", permanent: true },
      { source: "/gallery.html", destination: "/gallery", permanent: true },
      { source: "/branches.html", destination: "/branches", permanent: true },
      { source: "/payment.html", destination: "/payment", permanent: true },
    ];
  },
};

export default nextConfig;
