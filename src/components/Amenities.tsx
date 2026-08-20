import * as React from "react";
import { Sparkles, Building, Shield } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface AmenitiesProps {
  t: (text: string) => string;
}

export function Amenities({ t }: AmenitiesProps) {
  return (
    <section id="amenities" className="py-20 md:py-28 relative bg-[#F0EEEA] border-b border-[#E5E2DC]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-16">
          <div className="mono text-[#B8860B] mb-3">
            {t("Elevated Lifestyle")}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1A1A1A] mb-4">
            {t("Signature Amenities")}
          </h2>
          <p className="text-[#666666] text-xs sm:text-sm md:text-base font-light">
            {t("Explore the exclusive levels curated with wellness clubs, cigar salons, and bespoke services.")}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Level 40 */}
          <ScrollReveal direction="up" delay={0} className="card group relative flex flex-col hover:border-[#B8860B] transition-all duration-300">
            <div className="absolute top-0 right-0 px-3.5 py-1 bg-[#F8F7F4] text-[#B8860B] border-l border-b border-[#E5E2DC] font-mono text-[9px] uppercase tracking-[0.16em] font-semibold">
              Level 40
            </div>
            <div className="w-10 h-10 rounded border border-[#E5E2DC] group-hover:border-[#B8860B] bg-[#F8F7F4] flex items-center justify-center mb-6 text-[#B8860B] transition-colors duration-300 shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-2xl text-[#1A1A1A] mb-4 group-hover:text-[#B8860B] transition-colors font-medium">
              {t("The Sky Zenith Club")}
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-[#666666] font-light flex-1">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] mt-2 shrink-0" />
                <span><strong className="text-[#1A1A1A] font-medium">Sky Infinity Pool:</strong> Heated crystal water pool with direct vistas of the Twin Towers and TRX skyscraper.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] mt-2 shrink-0" />
                <span><strong className="text-[#1A1A1A] font-medium">Whiskey & Cigar Lounge:</strong> Exclusive private sanctuary with customized humidor cabinets.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] mt-2 shrink-0" />
                <span><strong className="text-[#1A1A1A] font-medium">Stargazing Pavilion:</strong> Outfitted with high-power astronomical telescopes.</span>
              </li>
            </ul>
          </ScrollReveal>

          {/* Level 10 */}
          <ScrollReveal direction="up" delay={150} className="card group relative flex flex-col hover:border-[#B8860B] transition-all duration-300">
            <div className="absolute top-0 right-0 px-3.5 py-1 bg-[#F8F7F4] text-[#B8860B] border-l border-b border-[#E5E2DC] font-mono text-[9px] uppercase tracking-[0.16em] font-semibold">
              Level 10
            </div>
            <div className="w-10 h-10 rounded border border-[#E5E2DC] group-hover:border-[#B8860B] bg-[#F8F7F4] flex items-center justify-center mb-6 text-[#B8860B] transition-colors duration-300 shrink-0">
              <Building className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-2xl text-[#1A1A1A] mb-4 group-hover:text-[#B8860B] transition-colors font-medium">
              {t("The Oasis Wellness Deck")}
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-[#666666] font-light flex-1">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] mt-2 shrink-0" />
                <span><strong className="text-[#1A1A1A] font-medium">Hydrotherapy Spa:</strong> Onsen-style stone dipping pools, herbal saunas, and steam rooms.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] mt-2 shrink-0" />
                <span><strong className="text-[#1A1A1A] font-medium">Urban Garden Deck:</strong> Sensory tree-lined walkways featuring local flora and running waters.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] mt-2 shrink-0" />
                <span><strong className="text-[#1A1A1A] font-medium">Private Banquet Hall:</strong> Multi-functional space with fully equipped chef kitchen.</span>
              </li>
            </ul>
          </ScrollReveal>

          {/* Ground Floor */}
          <ScrollReveal direction="up" delay={300} className="card group relative flex flex-col hover:border-[#B8860B] transition-all duration-300">
            <div className="absolute top-0 right-0 px-3.5 py-1 bg-[#F8F7F4] text-[#B8860B] border-l border-b border-[#E5E2DC] font-mono text-[9px] uppercase tracking-[0.16em] font-semibold">
              Ground Floor
            </div>
            <div className="w-10 h-10 rounded border border-[#E5E2DC] group-hover:border-[#B8860B] bg-[#F8F7F4] flex items-center justify-center mb-6 text-[#B8860B] transition-colors duration-300 shrink-0">
              <Shield className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-2xl text-[#1A1A1A] mb-4 group-hover:text-[#B8860B] transition-colors font-medium">
              {t("Sovereign VIP Services")}
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-[#666666] font-light flex-1">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] mt-2 shrink-0" />
                <span><strong className="text-[#1A1A1A] font-medium">24/7 Sovereign Concierge:</strong> Expert concierge to manage transport, travel bookings, and home requests.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] mt-2 shrink-0" />
                <span><strong className="text-[#1A1A1A] font-medium">3-Tier Sovereign Shield:</strong> Secure biometric scanning, 24/7 active guard force, and security loops.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] mt-2 shrink-0" />
                <span><strong className="text-[#1A1A1A] font-medium">Limousine Drop-off:</strong> Dedicated driveways with personal valet luggage assistants.</span>
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
