"use client";

import { useEffect } from "react";

export default function CopyrightYearUpdater() {
  useEffect(() => {
    try {
      const y = new Date().getFullYear();
      const els = document.querySelectorAll(".copyright-text, .copyright");
      for (let i = 0; i < els.length; i++) {
        els[i].innerHTML = els[i].innerHTML.replace(/\b20\d{2}\b/, y);
      }
    } catch (e) {}
  }, []);

  return null;
}
