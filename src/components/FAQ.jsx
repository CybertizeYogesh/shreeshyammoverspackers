"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/data/siteData";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <div>
      {faqs.map(([question, answer], index) => (
        <div className={`faq-card ${open === index ? "is-open" : ""}`} key={question}>
          <button type="button" onClick={() => setOpen(open === index ? -1 : index)}>
            {question} <Plus size={18} />
          </button>
          <div className="faq-card__text">
            <p>{answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
