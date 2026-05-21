import fs from "node:fs";
import path from "node:path";

const sourceDir = path.join(process.cwd(), "public", "source", "pages");

const explicitFiles = {
  about: "about.html",
  house: "house.html",
  transport: "transport.html",
  packing: "packing.html",
  domestic: "domestic.html",
  car: "car.html",
  warehousing: "warehousing.html",
  office: "office.html",
  air: "air.html",
  sea: "sea.html",
  branches: "branches.html",
  gallery: "gallery.html",
  faq: "faq.html",
  contact: "contact.html",
  payment: "payment.html",
  "packers-and-movers-jaipur": "packers-and-movers-jaipur.html",
  "bike-transport-jaipur": "bike-transport-jaipur.html",
  "car-transport-jaipur": "car-transport-jaipur.html",
};

export const originalServiceSlugs = ["house", "transport", "packing", "domestic", "car", "warehousing", "office", "air", "sea"];

export const originalPageSlugs = [
  "about",
  "services",
  "branches",
  "gallery",
  "faq",
  "contact",
  "payment",
  "blog",
  "bike-transport-jaipur",
  "car-transport-jaipur",
  "packers-and-movers-jaipur",
  ...originalServiceSlugs,
];

export const originalLocationSlugs = [
  "packers-and-movers-abu-road",
  "packers-and-movers-abu",
  "packers-and-movers-agra",
  "packers-and-movers-ahmedabad",
  "packers-and-movers-ajmer-road-jaipur",
  "packers-and-movers-ajmer",
  "packers-and-movers-aklera",
  "packers-and-movers-allahabad",
  "packers-and-movers-alwar",
  "packers-and-movers-amritsar",
  "packers-and-movers-bagru-jaipur",
  "packers-and-movers-bangalore",
  "packers-and-movers-bani-park-jaipur",
  "packers-and-movers-basi",
  "packers-and-movers-bayana",
  "packers-and-movers-behror",
  "packers-and-movers-bhadasar",
  "packers-and-movers-bhakrota-jaipur",
  "packers-and-movers-bharatpur",
  "packers-and-movers-bhilwara",
  "packers-and-movers-bhiwadi",
  "packers-and-movers-bhopal",
  "packers-and-movers-bikaner",
  "packers-and-movers-c-scheme-jaipur",
  "packers-and-movers-chandigarh",
  "packers-and-movers-chennai",
  "packers-and-movers-chitrakut-jaipur",
  "packers-and-movers-chittaurgarh",
  "packers-and-movers-churu",
  "packers-and-movers-civil-lines-jaipur",
  "packers-and-movers-coimbatore",
  "packers-and-movers-dausa",
  "packers-and-movers-delhi",
  "packers-and-movers-deoli",
  "packers-and-movers-dhaulpur",
  "packers-and-movers-ganganagar",
  "packers-and-movers-ghaziabad",
  "packers-and-movers-gwalior",
  "packers-and-movers-hanumangarh",
  "packers-and-movers-hindaun",
  "packers-and-movers-hirapura-jaipur",
  "packers-and-movers-hyderabad",
  "packers-and-movers-indore",
  "packers-and-movers-jagatpura-jaipur",
  "packers-and-movers-jaisalmer",
  "packers-and-movers-jalore",
  "packers-and-movers-jhalawar",
  "packers-and-movers-jhotwara-jaipur",
  "packers-and-movers-jhunjhunu",
  "packers-and-movers-jodhpur",
  "packers-and-movers-kalwar-road-jaipur",
  "packers-and-movers-kanakpura-jaipur",
  "packers-and-movers-karauli",
  "packers-and-movers-kishangarh",
  "packers-and-movers-kolkata",
  "packers-and-movers-kota",
  "packers-and-movers-kotputli",
  "packers-and-movers-lucknow",
  "packers-and-movers-mahapura-jaipur",
  "packers-and-movers-malviya-nagar-jaipur",
  "packers-and-movers-mansarovar-jaipur",
  "packers-and-movers-mumbai",
  "packers-and-movers-mysore",
  "packers-and-movers-nagaur",
  "packers-and-movers-nagpur",
  "packers-and-movers-naraina",
  "packers-and-movers-nashik",
  "packers-and-movers-nathdwara",
  "packers-and-movers-navi-mumbai",
  "packers-and-movers-neem-ka-thana",
  "packers-and-movers-niwai",
  "packers-and-movers-pali",
  "packers-and-movers-panchyawala-jaipur",
  "packers-and-movers-patna",
  "packers-and-movers-patrakar-colony-jaipur",
  "packers-and-movers-pilani",
  "packers-and-movers-pratap-nagar-jaipur",
  "packers-and-movers-pratapgarh",
  "packers-and-movers-pune",
  "packers-and-movers-pushkar",
  "packers-and-movers-raja-park-jaipur",
  "packers-and-movers-rajkot",
  "packers-and-movers-ramgarh",
  "packers-and-movers-ranchi",
  "packers-and-movers-ratangarh",
  "packers-and-movers-sanganer-jaipur",
  "packers-and-movers-sawai-madhopur",
  "packers-and-movers-shahpura",
  "packers-and-movers-sikar",
  "packers-and-movers-sirohi",
  "packers-and-movers-sri-madhopur",
  "packers-and-movers-srinagar",
  "packers-and-movers-sujangarh",
  "packers-and-movers-surat",
  "packers-and-movers-tilaknagar-jaipur",
  "packers-and-movers-tonk-road-jaipur",
  "packers-and-movers-tonk",
  "packers-and-movers-udaipur",
  "packers-and-movers-vaishali-jaipur",
  "packers-and-movers-varanasi",
  "packers-and-movers-vidhyadhar-nagar-jaipur",
  "packers-and-movers-vijayawada",
  "packers-and-movers-visakhapatnam",
];

export function titleFromSlug(slug) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
    .replace(/\bAnd\b/g, "and")
    .replace(/\bIn\b/g, "in");
}

function readSource(file) {
  const filePath = path.join(sourceDir, file);
  if (!fs.existsSync(filePath)) return "";
  return fs.readFileSync(filePath, "utf8");
}

function sourceFileForSlug(slug) {
  if (explicitFiles[slug]) return explicitFiles[slug];
  if (originalLocationSlugs.includes(slug)) return "packers-and-movers-jaipur.html";
  return "";
}

function extractMain(html) {
  const start = html.indexOf('<div class="breadcumb-wrapper"');
  const footer = html.indexOf("<footer", start);
  if (start === -1 || footer === -1) return "";
  return html.slice(start, footer);
}

function extractHome(html) {
  const start = html.indexOf('<div class="th-hero-wrapper');
  const footer = html.indexOf("<footer", start);
  if (start === -1 || footer === -1) return "";
  return html.slice(start, footer);
}

function replaceLocationTemplate(html, slug) {
  if (!originalLocationSlugs.includes(slug) || slug === "packers-and-movers-jaipur") return html;
  const title = titleFromSlug(slug);
  return html
    .replace(/Packers and Movers Jaipur/g, title)
    .replace(/Packers And Movers Jaipur/g, title)
    .replace(/Packers and movers Jaipur/g, title)
    .replace(/Jaipur/g, title.replace(/^Packers and Movers /, ""));
}

export function transformOriginalHtml(html, slug) {
  return replaceLocationTemplate(html, slug)
    .replace(/href="index\.html"/g, 'href="/"')
    .replace(/href="([^"]+)\.html"/g, (_, href) => `href="/${href}"`)
    .replace(/data-bg-src="([^"]+)"/g, (_, src) => `style="background-image:url('/${src}')"`)
    .replace(/src="(assets\/[^"]+)"/g, 'src="/$1"')
    .replace(/src="(img\/[^"]+)"/g, 'src="/$1"')
    .replace(/url\(&quot;([^&]+)&quot;\)/g, "url('/$1')")
    .replace(/<video([^>]*)>/g, '<video$1 muted playsinline>')
    .replace(/<form([^>]*)action="[^"]*"([^>]*)>/g, "<form$1action=\"#\"$2>")
    .replace(/<script[\s\S]*?<\/script>/g, "");
}

export function getOriginalHtml(slug) {
  const file = sourceFileForSlug(slug);
  if (!file) return "";
  const html = readSource(file);
  return transformOriginalHtml(extractMain(html), slug);
}

export function getOriginalHomeHtml() {
  const html = fs.readFileSync(path.join(process.cwd(), "public", "source", "index.html"), "utf8");
  return transformOriginalHtml(extractHome(html), "home");
}

export function getOriginalHeaderHtml() {
  const html = fs.readFileSync(path.join(process.cwd(), "public", "source", "index.html"), "utf8");
  const body = html.indexOf("<body");
  const bodyStart = html.indexOf(">", body) + 1;
  const hero = html.indexOf('<div class="th-hero-wrapper', bodyStart);
  if (bodyStart === 0 || hero === -1) return "";
  return transformOriginalHtml(html.slice(bodyStart, hero), "header");
}

export function getOriginalFooterHtml() {
  const html = fs.readFileSync(path.join(process.cwd(), "public", "source", "index.html"), "utf8");
  const start = html.indexOf("<footer");
  const scripts = html.indexOf('<script src="assets/js/vendor/jquery-3.6.0.min.js"', start);
  if (start === -1 || scripts === -1) return "";
  return transformOriginalHtml(html.slice(start, scripts), "footer");
}

export function getOriginalTitle(slug) {
  const file = sourceFileForSlug(slug);
  const html = file ? readSource(file) : "";
  const match = html.match(/<h1 class="breadcumb-title">([\s\S]*?)<\/h1>/);
  if (match) {
    return titleFromSlug(slug).startsWith("Packers and Movers") && slug !== "packers-and-movers-jaipur"
      ? titleFromSlug(slug)
      : match[1].replace(/<[^>]+>/g, "").trim();
  }
  return titleFromSlug(slug);
}
