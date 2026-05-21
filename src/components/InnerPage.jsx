import Link from "next/link";
import QuoteForm from "./QuoteForm";
import ServiceCard from "./ServiceCard";
import FAQ from "./FAQ";
import { services, site } from "@/data/siteData";

export default function InnerPage({ title, eyebrow = "Indian Best Packers & Movers", children }) {
  return (
    <main>
      <section className="inner-hero">
        <div className="container">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p><Link href="/">Home</Link> / {title}</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid grid-2">
          <article className="content-copy">
            {children || (
              <>
                <h2>{title}</h2>
                <p>{site.name} provides careful packing, timely transportation, and professional moving support for household, office, vehicle, domestic relocation, cargo, and storage requirements.</p>
                <p>This route is prepared with the global clone layout, metadata-ready structure, breadcrumbs, reusable forms, cards, and footer links so detailed page-by-page pixel matching can continue without changing architecture.</p>
              </>
            )}
          </article>
          <aside>
            <QuoteForm compact />
          </aside>
        </div>
      </section>
      <section className="section bg-smoke">
        <div className="container">
          <div className="section-title text-center">
            <span className="eyebrow">Our Services</span>
            <h2>The Services We Provide For Our Customer</h2>
          </div>
          <div className="grid grid-4">
            {services.slice(0, 4).map((service) => <ServiceCard service={service} key={service.href} />)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-title text-center">
            <span className="eyebrow">FAQS</span>
            <h2>Frequently Asked Questions?</h2>
          </div>
          <FAQ />
        </div>
      </section>
    </main>
  );
}
