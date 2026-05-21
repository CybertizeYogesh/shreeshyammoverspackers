import Link from "next/link";

export default function CTASection() {
  return (
    <section className="branch-buttons">
      <div className="container grid grid-3">
        <Link href="/car-transport-jaipur">Car Transport Jaipur</Link>
        <Link href="/packers-and-movers-jaipur" className="accent">Packers and Movers Jaipur</Link>
        <Link href="/bike-transport-jaipur">Bike Transport Jaipur</Link>
      </div>
    </section>
  );
}
