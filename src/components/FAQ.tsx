import * as React from "react";
import { Plus, Minus } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

// The English Q&As are exactly the FAQPage structured data in index.html. Keep both in sync.
export const FAQ_ITEMS = [
  {
    "q": "Is Orion Residence freehold?",
    "a": "Yes. Orion Residence on Jalan Gading, Bukit Bintang is a freehold development on a 0.56-acre site in Kuala Lumpur's golden triangle."
  },
  {
    "q": "Who is the developer of Orion Residence?",
    "a": "Orion Tower Sdn Bhd, part of the Welton Group of Companies. This independent website is managed by Yee Woei Shyan (REN 46305) of IQI Realty Sdn Bhd."
  },
  {
    "q": "How many units and storeys does Orion Residence have?",
    "a": "298 residences across 46 storeys, with 10 units per floor on levels 11 to 31 and 9 units per floor on levels 32 to 39."
  },
  {
    "q": "What unit sizes are available?",
    "a": "From 491 sq ft studios to 1,329 sq ft units, including studios with terraces, 2-bedroom and dual-key layouts. Units are fully furnished with designer-brand appliances."
  },
  {
    "q": "What is the starting price at Orion Residence?",
    "a": "From RM 1.58 million. Contact us for the current price list and availability."
  },
  {
    "q": "What facilities and services does Orion Residence offer?",
    "a": "Rooftop Sky Lounge, Moon Bar and fine dining with panoramic city views, an infinity pool, 5-star hotel-style hospitality services, automated concierge parking and a private security vault service managed by a Swiss security firm."
  },
  {
    "q": "When is Orion Residence expected to complete?",
    "a": "Completion is scheduled for 2025 according to the developer's materials. Ask us for the latest construction status."
  },
  {
    "q": "How do I arrange a viewing or get the latest floor plans?",
    "a": "WhatsApp Yee Woei Shyan (REN 46305, IQI Realty Sdn Bhd) at +60 10-827 8932, or use the enquiry form on this page."
  }
];

export function FAQ({ t }: { t: (text: string) => string }) {
  const [open, setOpen] = React.useState<number | null>(0);
  return (
    <section id="faq" className="py-20 md:py-28 relative bg-[#F8F7F4] border-b border-[#E5E2DC]">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal direction="up" className="text-center mb-14">
          <div className="mono text-[#B8860B] mb-3">{t("Answers for buyers")}</div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1A1A1A] mb-4">{t("Frequently Asked Questions")}</h2>
          <p className="text-[#666666] text-xs sm:text-sm md:text-base font-light">{t("Questions buyers ask about Orion Residence, answered from the developer's materials.")}</p>
        </ScrollReveal>
        <div className="divide-y divide-[#E5E2DC] border-y border-[#E5E2DC]">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div key={idx}>
                <button type="button" onClick={() => setOpen(isOpen ? null : idx)} aria-expanded={isOpen} aria-controls={`faq-answer-${idx}`} className="w-full flex items-center justify-between gap-6 py-6 text-left group">
                  <h3 className="font-serif text-lg md:text-xl font-light text-[#1A1A1A] group-hover:text-[#B8860B] transition-colors">{t(item.q)}</h3>
                  <span className="shrink-0 w-8 h-8 border border-[#E5E2DC] flex items-center justify-center text-[#B8860B] group-hover:border-[#B8860B] transition-colors">{isOpen ? <Minus size={14} /> : <Plus size={14} />}</span>
                </button>
                <div id={`faq-answer-${idx}`} hidden={!isOpen} className="pb-7 pr-10">
                  <p className="text-[#666666] text-sm md:text-base font-light leading-relaxed">{t(item.a)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
