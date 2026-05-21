import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-card__top">
        <span className="discount">Best Discount</span>
        <span aria-hidden="true">+</span>
      </div>
      <Link className="service-card__image" href={service.href}>
        <Image src={service.image} alt={service.title} width={420} height={315} sizes="(max-width: 768px) 100vw, 33vw" />
      </Link>
      <div className="service-card__body">
        <h3><Link href={service.href}>{service.title}</Link></h3>
        <p>{service.text}</p>
      </div>
    </article>
  );
}
