import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/siteData";

export default function FloatingActions() {
  return (
    <>
      <div className="feedback-tab">
        <Link href="/contact">Get FREE Quote</Link>
      </div>
      <div className="floating-buttons">
        <a href="tel:8005746241" aria-label="Call Indian Best Packers & Movers">
          <Image src="/images/common/img/floating-call.webp" alt="Floating Call" width={50} height={50} />
        </a>
        <a href={`https://wa.me/${site.whatsapp}`} aria-label="WhatsApp Indian Best Packers & Movers">
          <Image src="/images/common/img/whatsapp.webp" alt="WhatsApp" width={50} height={50} />
        </a>
      </div>
    </>
  );
}
