import * as React from "react";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { GALLERY_ITEMS } from "../data";

interface GalleryProps {
  t: (text: string) => string;
}

export function Gallery({ t }: GalleryProps) {
  const [activeGalleryTab, setActiveGalleryTab] = useState<"all" | "architecture" | "facilities" | "residences">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_ITEMS.map((item, idx) => ({ ...item, originalIndex: idx }))
    .filter(item => activeGalleryTab === "all" || item.category === activeGalleryTab);

  return (
    <section id="visuals" className="py-20 md:py-28 relative bg-[#F8F7F4] border-b border-[#E5E2DC]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-12">
          <div className="mono text-[#B8860B] mb-3">
            {t("Immersive Gallery")}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1A1A1A] mb-4">
            {t("The Crafted Estate")}
          </h2>
          <p className="text-[#666666] text-xs sm:text-sm md:text-base font-light">
            {t("Experience the spaces designed to exceed the high standards of luxury living in Southeast Asia. Filter through our premium facility spaces below.")}
          </p>
        </ScrollReveal>

        {/* Filter Tabs */}
        <ScrollReveal direction="up" delay={100} className="flex flex-wrap justify-center gap-2.5 mb-12 max-w-3xl mx-auto">
          {[
            { id: "all", label: "All Spaces" },
            { id: "architecture", label: "Architecture" },
            { id: "facilities", label: "Facilities & Amenities" },
            { id: "residences", label: "Residences" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveGalleryTab(tab.id as any)}
              className={`px-4 sm:px-5 py-2 text-[10px] font-mono uppercase tracking-[0.14em] transition-all duration-300 rounded border cursor-pointer ${
                activeGalleryTab === tab.id
                  ? "bg-[#B8860B] text-white border-[#B8860B] font-semibold shadow-sm"
                  : "border-[#E5E2DC] bg-[#FFFFFF] text-[#666666] hover:text-[#1A1A1A] hover:border-[#B8860B]"
              }`}
            >
              {t(tab.label)}
            </button>
          ))}
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div key={item.originalIndex} className="h-full">
              <ScrollReveal
                direction="up"
                delay={idx % 3 * 100}
                className="card h-full !p-0 flex flex-col group hover:border-[#B8860B] transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div 
                  onClick={() => setLightboxIndex(item.originalIndex)}
                  className="relative overflow-hidden aspect-[16/10]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-[#FFFFFF]/90 backdrop-blur-md rounded border border-[#E5E2DC]">
                    <span className="mono text-[#B8860B] font-semibold text-[9px]">
                      {item.tag}
                    </span>
                  </div>
                </div>

                <div 
                  onClick={() => setLightboxIndex(item.originalIndex)}
                  className="p-6 flex-1 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-serif text-xl text-[#1A1A1A] mb-2 group-hover:text-[#B8860B] transition-colors font-medium">
                      {item.title}
                    </h3>
                    <p className="text-[#666666] text-xs sm:text-sm leading-relaxed font-light mb-4">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#E5E2DC] flex justify-between items-center mono text-[#B8860B] font-semibold">
                    <span>{item.tag}</span>
                    <span>{item.subtag}</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div id="gallery-lightbox" className="fixed inset-0 z-50 bg-[#1A1A1A]/98 backdrop-blur-md flex flex-col justify-between p-6 animate-fade-in text-white">
          {/* Header Controls */}
          <div className="flex justify-between items-center max-w-7xl mx-auto w-full pt-4">
            <div className="flex flex-col">
              <span className="mono text-[#D4AF37] mb-1">
                Orion Immersive Portfolio
              </span>
              <span className="text-white font-serif text-xl">
                {GALLERY_ITEMS[lightboxIndex].title}
              </span>
            </div>
            <button
              onClick={() => setLightboxIndex(null)}
              className="w-10 h-10 rounded border border-white/20 bg-white/10 flex items-center justify-center text-white hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Stage with Arrows */}
          <div className="flex-1 flex items-center justify-center max-w-7xl mx-auto w-full gap-4 py-8 relative">
            <button
              onClick={() => setLightboxIndex((lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length)}
              className="absolute left-2 md:static w-10 h-10 md:w-12 md:h-12 rounded border border-white/20 bg-white/10 flex items-center justify-center text-gray-300 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 shrink-0 z-10 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <div className="relative max-h-[65vh] max-w-[90vw] md:max-w-[70vw] flex items-center justify-center overflow-hidden rounded border border-white/10 shadow-2xl bg-black">
              <img
                src={GALLERY_ITEMS[lightboxIndex].image}
                alt={GALLERY_ITEMS[lightboxIndex].title}
                className="max-h-[65vh] object-contain transition-all duration-500"
              />
            </div>

            <button
              onClick={() => setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length)}
              className="absolute right-2 md:static w-10 h-10 md:w-12 md:h-12 rounded border border-white/20 bg-white/10 flex items-center justify-center text-gray-300 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 shrink-0 z-10 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Footer Captions */}
          <div className="max-w-3xl mx-auto w-full text-center pb-6">
            <p className="text-gray-300 text-sm font-light leading-relaxed mb-4">
              {GALLERY_ITEMS[lightboxIndex].description}
            </p>
            <div className="flex justify-center items-center gap-6 mono text-[#D4AF37]">
              <span>Tag: {GALLERY_ITEMS[lightboxIndex].tag}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>Zone: {GALLERY_ITEMS[lightboxIndex].subtag}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>Image {lightboxIndex + 1} of {GALLERY_ITEMS.length}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
