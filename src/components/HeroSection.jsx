"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "./Button";

const slides = [
  "/images/common/assets/img/hero/hero_bg_2_3.webp",
  "/images/common/assets/img/hero/hero_bg_2_2.webp",
  "/images/common/assets/img/hero/hero_bg_2_1.webp",
];

export default function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((value) => (value + 1) % slides.length), 4600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero__slide" style={{ backgroundImage: `url(${slides[active]})` }}>
        <span className="shape shape--one">
          <Image src="/images/common/assets/img/shape/team-sahpe-1-1.svg" alt="" width={120} height={120} />
        </span>
        <span className="shape shape--two">
          <Image src="/images/common/assets/img/shape/team-sahpe-1-2.svg" alt="" width={130} height={130} />
        </span>
        <div className="container">
          <div className="hero__content">
            <span className="eyebrow">Shree Shyam Movers & Packers</span>
            <h1 className="hero__title">International and Domestic Services</h1>
            <p className="hero__text">As a company that helps you shift your household goods and even your cars and vehicles, we are the best in the business.</p>
            <div className="hero__buttons">
              <Button href="/about">Read More</Button>
              <Button href="/contact" yellow>Booking</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
