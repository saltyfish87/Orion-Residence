import * as React from "react";
import { ScrollReveal } from "./ScrollReveal";
import { interiorImg, skypoolImg } from "../data";

interface OverviewProps {
  t: (text: string) => string;
}

export function Overview({ t }: OverviewProps) {
  return (
    <section id="overview" className="py-20 md:py-28 relative bg-[#F8F7F4] border-b border-[#E5E2DC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative Content */}
          <ScrollReveal direction="up" className="flex flex-col justify-center">
            <div className="mono text-[#B8860B] mb-3">
              {t("The Overview")}
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#1A1A1A] mb-6 leading-[1.08]">
              {t("Celestial Prestige")}<br />
              <span className="italic font-normal">{t("Metropolitan Soul")}</span>
            </h2>
            <p className="text-[#666666] text-xs sm:text-sm md:text-base leading-relaxed mb-6 font-light">
              {t("Orion Residence stands as a timeless modern monolith directly behind the majestic Starhill Gallery and Pavilion Kuala Lumpur. Designed with the architectural pedigree of tomorrow, it commands unblocked skyline vistas and a level of absolute privacy and service designed specifically for royal lifestyles.")}
            </p>
            <p className="text-[#666666] text-xs sm:text-sm leading-relaxed mb-8 font-light">
              {t("From hand-selected Greek marble slabs to custom parallel German Bulthaup kitchen systems, every millimetre is curated to manifest an aesthetic of raw, understated opulence.")}
            </p>
            
            <div className="border-l border-[#B8860B] pl-6 py-2 bg-white card !p-5">
              <p className="font-serif text-base sm:text-lg italic text-[#1A1A1A]">
                {t("\"We did not build another tower. We crafted a private celestial cloud above Bukit Bintang.\"")}
              </p>
              <div className="mono text-[#666666] mt-2">
                {t("— Lead Architect, Welton Design Partners")}
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Cards & Imagery */}
          <div className="space-y-6">
            <ScrollReveal direction="left" delay={150}>
              <div className="card overflow-hidden !p-0">
                <div className="overflow-hidden aspect-[16/10]">
                  <img
                    src={interiorImg}
                    alt="Show Unit Interior"
                    className="w-full h-full object-cover hover:scale-102 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="mono text-[#B8860B] mb-1">
                    {t("Show Unit Interior")}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1A1A1A]">
                    {t("Classic Elegance & Modern Framing")}
                  </h3>
                  <p className="text-[#666666] text-xs mt-2 font-light leading-relaxed">
                    {t("Engineered timber flooring, imported natural stone vanities, and floor-to-ceiling acoustic double glazing.")}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
