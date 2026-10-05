"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { navLinks, site } from "@/data/siteData";
import Button from "./Button";

function NavItems() {
  return (
    <ul>
      {navLinks.map((item) => (
        <li key={item.label}>
          <Link href={item.href}>
            {item.strong ? <strong>{item.label}</strong> : item.label}
          </Link>
          {item.children ? (
            <ul className="submenu">
              {item.children.map((child) => (
                <li key={child.href}>
                  <Link href={child.href}>{child.label}</Link>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <ul className="topbar__links">
            <li className="hphone"><a href={`tel:${site.phone.replace(/[^0-9+]/g, '')}`}><Phone size={14} /> {site.phone}</a> / <a href={`tel:${site.phoneAlt.replace(/[^0-9+]/g, '')}`}>{site.phoneAlt}</a></li>
            <li className="hmail"><a href={`mailto:${site.email}`}><Mail size={14} /> {site.email}</a></li>
          </ul>
          <ul className="topbar__social" aria-label="Social links">
            <li><a href="#" aria-label="Facebook">f</a></li>
            <li><a href="#" aria-label="Instagram">ig</a></li>
            <li><a href="#" aria-label="YouTube">yt</a></li>
          </ul>
        </div>
      </div>
      <header className="site-header">
        <div className="container navrow">
          <Link className="logo" href="/" aria-label="Shree Shyam Movers & Packers home">
            <Image src="/images/common/assets/img/logo.webp" alt="Shree Shyam Movers & Packers logo" width={160} height={48} style={{ width: "160px", height: "auto" }} priority />
          </Link>
          <nav className="main-nav" aria-label="Primary navigation">
            <NavItems />
          </nav>
          <Button href="/contact" yellow className="quote-btn shadow-none">Get A Quote</Button>
          <button className="menu-toggle" type="button" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu size={26} />
          </button>
        </div>
      </header>
      <div className={`mobile-panel ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="mobile-panel__body">
          <button className="mobile-close" type="button" onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={22} />
          </button>
          <Link className="logo" href="/" onClick={() => setOpen(false)}>
            <Image src="/images/common/assets/img/logo.webp" alt="Shree Shyam Movers & Packers logo" width={160} height={48} style={{ width: "160px", height: "auto" }} />
          </Link>
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <ul>
              {navLinks.map((item) => (
                <li key={item.label}>
                  {item.children ? (
                    <>
                      <button type="button" onClick={() => setServicesOpen((value) => !value)}>
                        {item.label} <ChevronDown size={18} />
                      </button>
                      {servicesOpen ? (
                        <ul className="mobile-submenu">
                          {item.children.map((child) => (
                            <li key={child.href}><Link href={child.href} onClick={() => setOpen(false)}>{child.label}</Link></li>
                          ))}
                        </ul>
                      ) : null}
                    </>
                  ) : (
                    <Link href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
