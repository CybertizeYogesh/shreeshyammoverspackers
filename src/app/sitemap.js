import { cityLinks, jaipurAreas, navLinks, services, site } from "@/data/siteData";
import { slugify } from "@/utils/slug";
import { originalLocationSlugs, originalPageSlugs } from "@/utils/originalPage";

export default function sitemap() {
  const staticRoutes = ["/", "/about", "/services", "/contact", "/blog", "/branches", "/gallery", "/faq"];
  const serviceRoutes = services.map((service) => service.href);
  const navRoutes = navLinks.flatMap((item) => item.children ? item.children.map((child) => child.href) : item.href);
  const cityRoutes = cityLinks.map((city) => `/packers-and-movers-${slugify(city)}`);
  const areaRoutes = jaipurAreas.map((area) => `/packers-and-movers-in-${slugify(area)}`);
  const originalRoutes = [...originalPageSlugs, ...originalLocationSlugs].map((slug) => `/${slug}`);
  return [...new Set([...staticRoutes, ...serviceRoutes, ...navRoutes, ...cityRoutes, ...areaRoutes, ...originalRoutes])].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
