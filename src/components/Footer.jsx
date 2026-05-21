import Image from "next/image";
import Link from "next/link";
import { cityLinks, navLinks, services, site } from "@/data/siteData";
import { slugify } from "@/utils/slug";

export default function Footer() {
  return (
    <footer className="footer" style={{ backgroundImage: "url('/images/common/assets/img/bg/footer_bg_2.webp')" }}>
      <div className="container footer-grid">
        <div>
          <Image className="footer-logo" src="/images/common/assets/img/logo.webp" alt="Indian Best Packers & Movers logo" width={190} height={82} />
          <p>Indian Best Packers & Movers Is The Trusted Source for All Your Moving & Logistical Needs. Get in touch with us today!!</p>
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
          <h4>Address</h4>
          <p>{site.address}</p>
          <p><a href="tel:8005746241">{site.phone}</a></p>
          <h4>Branch Jhunjhunu</h4>
          <p>Shop No 12/13, Inderpuri Colony, Loharu Bypass Road Near Tilak School, Pilani District Jhunjhunu Rajasthan 333031</p>
          <p><a href="tel:8094243586">+91 8094243586</a></p>
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
        <div className="container">Copyright 2024 <Link href="/">Indian Best Packers & Movers</Link>. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
