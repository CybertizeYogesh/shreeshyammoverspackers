import Image from "next/image";
import Link from "next/link";
import { cityLinks, navLinks, services, site } from "@/data/siteData";
import { slugify } from "@/utils/slug";

export default function Footer() {
  return (
    <footer className="footer" style={{ backgroundImage: "url('/images/common/assets/img/bg/footer_bg_2.webp')" }}>
      <div className="container footer-grid">
        <div>
          <Image className="footer-logo" src="/images/common/assets/img/logo.webp" alt="Shree Shyam Movers & Packers logo" width={160} height={48} style={{ width: "160px", height: "auto" }} />
          <p>Shree Shyam Movers & Packers Is The Trusted Source for All Your Moving & Logistical Needs. Get in touch with us today!!</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            {navLinks.filter((item) => !item.children).slice(0, 6).map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label === "Contact" ? "Contact Us" : item.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Our Services</h3>
          <ul>
            {services.map((service) => (
              <li key={service.href}><Link href={service.href}>{service.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Contact Us</h3>
          <h4>Head Office</h4>
          <p>{site.headOffice}</p>
          <p><a href={`tel:${site.phone.replace(/[^0-9+]/g, '')}`}>{site.phone}</a></p>
          <h4>Office</h4>
          <p>{site.office}</p>
          <p><a href={`tel:${site.phoneAlt.replace(/[^0-9+]/g, '')}`}>{site.phoneAlt}</a></p>
          <h4>Email Us</h4>
          <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
        </div>
      </div>
      <div className="container section-bottom">
        <h3>Packers and Movers in All India</h3>
        <ul className="link-cloud">
          {cityLinks.map((city) => (
            <li key={city}><Link href={`/packers-and-movers-${slugify(city)}`}>Packers and Movers {city}</Link></li>
          ))}
        </ul>
      </div>
      <div className="copyright">
        <div className="container">Copyright {new Date().getFullYear()} <Link href="/">Shree Shyam Movers & Packers</Link>. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
