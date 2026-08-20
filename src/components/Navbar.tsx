import * as React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Lang } from "../translations";

interface NavbarProps {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (text: string) => string;
  isScrolled: boolean;
}

export function Navbar({ lang, setLang, t, isScrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-[#F8F7F4]/95 backdrop-blur-md py-3.5 border-[#E5E2DC] shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
          : "bg-black/30 backdrop-blur-md py-4 border-white/15"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className={`relative w-8 h-8 flex items-center justify-center rounded border transition-colors ${
            isScrolled
              ? "border-[#B8860B]/40 bg-[#FFFFFF]"
              : "border-white/30 bg-white/10"
          }`}>
            <span className={`font-serif text-base font-bold ${isScrolled ? "text-[#B8860B]" : "text-white"}`}>O</span>
          </div>
          <div className="flex flex-col">
            <span className={`font-serif tracking-[0.2em] text-lg font-semibold uppercase leading-none transition-colors ${
              isScrolled ? "text-[#1A1A1A]" : "text-white"
            }`}>
              Orion
            </span>
            <span className={`text-[8px] font-mono uppercase tracking-[0.35em] mt-1 font-medium ${
              isScrolled ? "text-[#B8860B]" : "text-[#D4AF37]"
            }`}>
              Residence
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className={`hidden lg:flex items-center gap-7 text-[10px] uppercase font-mono tracking-[0.16em] font-medium transition-colors ${
          isScrolled ? "text-[#666666]" : "text-white/80"
        }`}>
          <a href="#overview" className={`transition-colors duration-300 ${isScrolled ? "hover:text-[#B8860B]" : "hover:text-white"}`}>{t("Overview")}</a>
          <a href="#features" className={`transition-colors duration-300 ${isScrolled ? "hover:text-[#B8860B]" : "hover:text-white"}`}>{t("Features")}</a>
          <a href="#amenities" className={`transition-colors duration-300 ${isScrolled ? "hover:text-[#B8860B]" : "hover:text-white"}`}>{t("Amenities")}</a>
          <a href="#layouts" className={`transition-colors duration-300 ${isScrolled ? "hover:text-[#B8860B]" : "hover:text-white"}`}>{t("Floor Plans")}</a>
          <a href="#vrtour" className={`transition-colors duration-300 flex items-center gap-1.5 font-semibold ${
            isScrolled ? "text-[#B8860B] hover:text-[#996F08]" : "text-[#D4AF37] hover:text-white"
          }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] animate-ping shrink-0" />
            {t("360° VR Tour")}
          </a>
          <a href="#visuals" className={`transition-colors duration-300 ${isScrolled ? "hover:text-[#B8860B]" : "hover:text-white"}`}>{t("Gallery")}</a>
          <a href="#location" className={`transition-colors duration-300 ${isScrolled ? "hover:text-[#B8860B]" : "hover:text-white"}`}>{t("Location")}</a>
        </div>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Selector */}
          <div className={`flex items-center gap-1 border rounded p-1 text-[9px] font-mono tracking-wider transition-colors ${
            isScrolled
              ? "bg-[#F0EEEA] border-[#E5E2DC]"
              : "bg-black/40 border-white/20"
          }`}>
            {(["ENG", "简体", "繁体", "JPN"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-0.5 rounded transition-all duration-300 uppercase ${
                  lang === l
                    ? "bg-[#B8860B] text-white font-semibold shadow-sm"
                    : isScrolled
                    ? "text-[#666666] hover:text-[#1A1A1A]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* CTA Link */}
          <a
            href="https://wa.me/60108278932?text=%5BORBK%5D%20Hello%20Yee%2C%20I%20am%20interested%20in%20requesting%20the%20Private%20Portfolio%20for%20Orion%20Residence."
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn text-[9px] py-2 px-4 shadow-sm"
          >
            {t("Private Portfolio")}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 transition-colors ${isScrolled ? "text-[#1A1A1A]" : "text-white"}`}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F8F7F4] border-b border-[#E5E2DC] px-6 py-6 flex flex-col gap-4 text-xs uppercase tracking-wider text-[#1A1A1A] shadow-lg animate-fade-in font-mono">
          <div className="flex items-center justify-between border-b border-[#E5E2DC] pb-3">
            <span className="text-[#666666] font-mono text-[10px] uppercase tracking-wider">{t("Preferred Language")}</span>
            <div className="flex items-center gap-1 bg-[#F0EEEA] border border-[#E5E2DC] rounded p-0.5 text-[9px] font-mono">
              {(["ENG", "简体", "繁体", "JPN"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-1 rounded transition-all duration-300 uppercase ${
                    lang === l
                      ? "bg-[#B8860B] text-white font-bold"
                      : "text-[#666666] hover:text-[#1A1A1A]"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <a href="#overview" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-[#E5E2DC] hover:text-[#B8860B]">{t("Overview")}</a>
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-[#E5E2DC] hover:text-[#B8860B]">{t("Features")}</a>
          <a href="#amenities" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-[#E5E2DC] hover:text-[#B8860B]">{t("Amenities")}</a>
          <a href="#layouts" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-[#E5E2DC] hover:text-[#B8860B]">{t("Floor Plans")}</a>
          <a href="#vrtour" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-[#E5E2DC] text-[#B8860B] font-semibold flex items-center justify-between">
            {t("360° VR Tour")} <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] animate-ping" />
          </a>
          <a href="#visuals" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-[#E5E2DC] hover:text-[#B8860B]">{t("Gallery")}</a>
          <a href="#location" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-[#E5E2DC] hover:text-[#B8860B]">{t("Location")}</a>
          
          <a
            href="https://wa.me/60108278932?text=%5BORBK%5D%20Hello%20Yee%2C%20I%20am%20interested%20in%20requesting%20the%20Private%20Portfolio%20for%20Orion%20Residence."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-3 bg-[#B8860B] text-white font-mono font-semibold text-[11px] uppercase tracking-[0.2em] block mt-2"
          >
            {t("Private Portfolio")}
          </a>
        </div>
      )}
    </nav>
  );
}
