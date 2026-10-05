import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/siteData";

export default function FloatingActions() {
  const phoneDigits = site.phone.replace(/[^0-9+]/g, "");

  return (
    <>
      <div id="feedback" className="feedback-tab">
        <Link href="/contact">Get FREE Quote</Link>
      </div>
      <div className="floating_buttons">
        <div className="call_btn bounce">
          <a href={`tel:${phoneDigits}`} aria-label={`Call ${site.name}`}>
            <Image
              src="/img/floating-call.webp"
              alt="Floating Call"
              width={50}
              height={50}
              className="img-fluid"
            />
          </a>
        </div>
        <div className="whatsapp_btn bounce">
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Chat with ${site.name} on WhatsApp`}
          >
            <Image
              src="/img/whatsapp.webp"
              alt="WhatsApp"
              width={50}
              height={50}
              className="img-fluid"
            />
          </a>
        </div>
      </div>
    </>
  );
}
