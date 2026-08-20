import * as React from "react";
import { Maximize2, ArrowRight } from "lucide-react";
import { exteriorImg } from "../data";

interface HeroProps {
  t: (text: string) => string;
  scrollY: number;
}

export function Hero({ t, scrollY }: HeroProps) {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-between overflow-hidden text-white bg-[#1A1A1A] pt-24 pb-8 px-6 sm:px-12 md:px-16"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.58)), url('${exteriorImg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
      }}
    >
      {/* Top spacer for navbar balance */}
      <div className="w-full max-w-7xl mx-auto pt-6 flex justify-between items-center opacity-0 pointer-events-none">
        <span className="mono">Orion Residence</span>
      </div>

      {/* Main Editorial Hero Center */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center my-auto py-12">
        <div className="mono text-[#D4AF37] mb-4 tracking-[0.25em] font-medium text-xs sm:text-sm">
          {t("Ultra-Luxury Living in Bukit Bintang")}
        </div>

        <h1 className="font-serif text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-white mb-6 leading-[0.92] uppercase">
          ORION<br />
          <span className="italic font-normal font-serif text-[#D4AF37]">RESIDENCE</span>
        </h1>

        <p className="text-white/80 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-light tracking-wide leading-relaxed mb-8">
          {t("An architectural celestial jewel rising 46 storeys above Bukit Bintang, Kuala Lumpur. Distinctive freehold serviced residences curated for the discerning elite.")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
          <button
            onClick={() => {
              const element = document.getElementById("layouts");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="cta-btn w-full sm:w-auto text-[11px] py-3.5 px-8 cursor-pointer flex items-center justify-center gap-2"
          >
            {t("Explore Floor Plans")} <Maximize2 className="w-3.5 h-3.5" />
          </button>
          
          <button
            onClick={() => {
              const element = document.getElementById("inquire");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto px-8 py-3.5 border border-white/40 hover:border-white bg-black/30 hover:bg-white/10 text-white text-[11px] font-mono font-semibold uppercase tracking-[0.15em] transition-all duration-300 cursor-pointer backdrop-blur-sm"
          >
            {t("Request Viewing")}
          </button>
        </div>
      </div>

      {/* Hero Bottom Meta Strip */}
      <div className="relative z-10 w-full max-w-7xl mx-auto border-t border-white/20 pt-6 pb-2">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center sm:text-left">
          <div className="mono text-white/90">
            <span className="text-[#D4AF37] block text-[9px] mb-0.5">{t("Location")}</span>
            Bukit Bintang, Kuala Lumpur
          </div>
          <div className="mono text-white/90">
            <span className="text-[#D4AF37] block text-[9px] mb-0.5">{t("Scale")}</span>
            46 Storeys / 298 Units
          </div>
          <div className="mono text-white/90">
            <span className="text-[#D4AF37] block text-[9px] mb-0.5">{t("Prestige Status")}</span>
            From RM 1.2M
          </div>
          <div className="mono text-white/90 hidden md:block text-right">
            <span className="text-[#D4AF37] block text-[9px] mb-0.5">{t("Developer")}</span>
            Welton Group (REN46306)
          </div>
        </div>
      </div>
    </section>
  );
}
