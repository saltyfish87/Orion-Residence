import * as React from "react";
import { useState } from "react";
import { Maximize2, Bed, Bath, Compass, Sliders, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { UNIT_TYPES, floorPlanImages } from "../data";
import { UnitType } from "../types";

interface FloorPlansProps {
  selectedUnitId: string;
  setSelectedUnitId: (id: string) => void;
  t: (text: string) => string;
}

export function FloorPlans({ selectedUnitId, setSelectedUnitId, t }: FloorPlansProps) {
  const [floorPlanLightboxOpen, setFloorPlanLightboxOpen] = useState(false);
  const [showAllSpecs, setShowAllSpecs] = useState(false);

  const selectedUnit: UnitType = UNIT_TYPES.find((u) => u.id === selectedUnitId) || UNIT_TYPES[0];

  return (
    <section id="layouts" className="py-20 md:py-28 relative bg-[#F8F7F4] border-b border-[#E5E2DC]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-12 text-center lg:text-left">
          <div className="mono text-[#B8860B] mb-3">
            {t("Architectural Precision")}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1A1A1A]">
            {t("Residence Floor Plans")}
          </h2>
          <p className="text-[#666666] text-xs sm:text-sm md:text-base font-light mt-2 max-w-2xl">
            {t("Select a luxury suite below to explore architectural layouts designed for light, space, and panoramic views. Click on any layout to view in high resolution.")}
          </p>
        </div>

        {/* Responsive Unit Selector Segment */}
        <div className="relative w-full mb-10 overflow-hidden">
          <div className="flex overflow-x-auto no-scrollbar gap-3 pb-2 px-6 -mx-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 lg:grid-cols-6 snap-x">
            {UNIT_TYPES.map((unit) => (
              <button
                key={unit.id}
                onClick={() => setSelectedUnitId(unit.id)}
                className={`snap-center px-4 py-3.5 rounded text-[10px] uppercase font-mono tracking-wider transition-all duration-300 whitespace-nowrap md:whitespace-normal text-center shrink-0 border flex flex-col items-center justify-center gap-1 min-w-[140px] md:min-w-0 cursor-pointer ${
                  selectedUnitId === unit.id
                    ? "bg-[#B8860B] text-white font-semibold border-[#B8860B] shadow-sm"
                    : "bg-[#FFFFFF] text-[#666666] border-[#E5E2DC] hover:border-[#B8860B]/50 hover:text-[#1A1A1A]"
                }`}
              >
                <span className="font-semibold tracking-widest">{unit.id.replace("-", " ")}</span>
                <span className={`text-[9px] font-mono ${selectedUnitId === unit.id ? 'text-white/90' : 'text-[#666666]'}`}>
                  {unit.sizeSqFt} SQ FT
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Floor Plan Display Frame */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div 
              onClick={() => setFloorPlanLightboxOpen(true)}
              className="group relative card !p-6 overflow-hidden flex flex-col justify-between cursor-zoom-in transition-all duration-500 hover:border-[#B8860B]"
            >
              <div className="flex justify-between items-center z-10 mb-4 border-b border-[#E5E2DC] pb-3">
                <div className="mono text-[#666666]">
                  Orion Layout Portfolio
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B8860B] animate-pulse" />
                  <span className="mono text-[#B8860B] font-semibold">
                    Interactive Blueprint
                  </span>
                </div>
              </div>

              {/* Blueprint Image Display Area */}
              <div className="relative w-full max-w-[480px] mx-auto py-6 flex items-center justify-center min-h-[300px] sm:min-h-[380px] lg:min-h-[420px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedUnitId}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    src={floorPlanImages[selectedUnitId] || floorPlanImages["Type-A1"]}
                    alt={`${selectedUnit.name} Layout`}
                    className="w-full max-h-[280px] sm:max-h-[360px] lg:max-h-[400px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </AnimatePresence>

                {/* Hover Zoom Overlay */}
                <div className="absolute inset-0 bg-[#1A1A1A]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3 backdrop-blur-[1px]">
                  <div className="w-10 h-10 rounded-full bg-[#FFFFFF] border border-[#B8860B] flex items-center justify-center text-[#B8860B] shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                  <span className="mono text-[#1A1A1A] bg-[#FFFFFF] px-4 py-1.5 rounded border border-[#E5E2DC] shadow-md font-semibold">
                    Click to Expand Plan
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E5E2DC] text-center flex items-center justify-center gap-2 text-[10px] text-[#666666] font-mono">
                <Maximize2 className="w-3.5 h-3.5 text-[#B8860B]" />
                <span>Tap or click anywhere on the blueprint above to expand full-screen</span>
              </div>
            </div>

            <p className="mono text-[#666666] text-center text-[9px] normal-case font-light">
              * Artist's layout visualization. All details, dimensions, structural layouts, and material representations are conceptual and subject to change without prior notice.
            </p>
          </div>

          {/* Unit Specifications Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card !p-6 md:!p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#B8860B]" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedUnitId}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="mono text-[#B8860B] mb-1">
                    {t("Selected Unit")}
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#1A1A1A] font-medium mb-1">
                    {t(selectedUnit.name)}
                  </h3>
                  <div className="mono text-[#B8860B] mb-4 font-semibold text-[10px]">
                    {t(selectedUnit.subtitle)}
                  </div>
                  
                  <p className="text-[#666666] text-xs sm:text-sm leading-relaxed font-light mb-6">
                    {t(selectedUnit.description)}
                  </p>

                  {/* Key Specifications Grid */}
                  <div className="grid grid-cols-2 gap-4 border-t border-b border-[#E5E2DC] py-5 mb-6">
                    <div>
                      <span className="mono text-[#666666] block mb-0.5">{t("Built-up Size")}</span>
                      <span className="font-serif text-xl text-[#1A1A1A] font-medium flex items-baseline gap-1">
                        {selectedUnit.sizeSqFt} <span className="text-xs font-sans font-light text-[#666666]">{t("sq ft")}</span>
                      </span>
                      <span className="text-[10px] text-[#666666] block">({selectedUnit.sizeSqM} {t("sq m")})</span>
                    </div>
                    
                    <div>
                      <span className="mono text-[#666666] block mb-0.5">{t("Rooms Layout")}</span>
                      <span className="font-serif text-xl text-[#1A1A1A] font-medium flex items-center gap-3 pt-0.5">
                        <span className="flex items-center gap-1.5 text-sm font-sans text-[#1A1A1A]">
                          <Bed className="w-3.5 h-3.5 text-[#B8860B] shrink-0" />
                          {selectedUnit.bedrooms} {selectedUnit.bedrooms === 1 ? t("Bed") : t("Beds")}
                        </span>
                        <span className="flex items-center gap-1.5 text-sm font-sans text-[#1A1A1A]">
                          <Bath className="w-3.5 h-3.5 text-[#B8860B] shrink-0" />
                          {selectedUnit.bathrooms} {selectedUnit.bathrooms === 1 ? t("Bath") : t("Baths")}
                        </span>
                      </span>
                    </div>

                    <div>
                      <span className="mono text-[#666666] block mb-0.5">{t("Orientation & View")}</span>
                      <span className="text-xs text-[#1A1A1A] font-medium flex items-center gap-1.5 pt-1">
                        <Compass className="w-3.5 h-3.5 text-[#B8860B] shrink-0" /> 
                        {selectedUnit.balconyOrientation} • {t(selectedUnit.viewDirection.split(" View")[0])}
                      </span>
                    </div>

                    <div>
                      <span className="mono text-[#666666] block mb-0.5">{t("Starting From")}</span>
                      <span className="text-sm text-[#B8860B] font-mono font-semibold block pt-1">
                        {selectedUnit.startingPrice}
                      </span>
                    </div>
                  </div>

                  {/* Collapsible Finishing Specs */}
                  <div className="mb-6">
                    <button
                      onClick={() => setShowAllSpecs(!showAllSpecs)}
                      className="w-full py-3 px-4 bg-[#F8F7F4] hover:bg-[#F0EEEA] text-[#1A1A1A] rounded border border-[#E5E2DC] transition-all duration-300 flex items-center justify-between mono cursor-pointer"
                    >
                      <span className="flex items-center gap-2 text-[#B8860B] font-semibold">
                        <Sliders className="w-3.5 h-3.5" />
                        {showAllSpecs ? t("Hide Finishing Specs") : t("View Material & Specs")}
                      </span>
                      <span className="text-xs text-[#B8860B] font-bold">{showAllSpecs ? "−" : "+"}</span>
                    </button>

                    <AnimatePresence>
                      {showAllSpecs && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 pb-1 space-y-4 text-xs text-[#666666] leading-relaxed border-t border-[#E5E2DC] mt-2">
                            <div>
                              <p className="mono text-[#B8860B] mb-0.5 font-semibold">Floor Finishes</p>
                              <p className="font-light">{selectedUnit.specs.flooring}</p>
                            </div>
                            <div>
                              <p className="mono text-[#B8860B] mb-0.5 font-semibold">Kitchen Systems</p>
                              <p className="font-light">{selectedUnit.specs.kitchen}</p>
                            </div>
                            <div>
                              <p className="mono text-[#B8860B] mb-0.5 font-semibold">Bath Fittings</p>
                              <p className="font-light">{selectedUnit.specs.fittings}</p>
                            </div>
                            <div>
                              <p className="mono text-[#B8860B] mb-0.5 font-semibold">Ceiling Height & Lighting</p>
                              <p className="font-light">{selectedUnit.specs.ceiling}</p>
                            </div>
                            <div className="bg-[#F8F7F4] p-3 rounded border border-[#E5E2DC] text-[11px]">
                              <span className="mono text-[#B8860B] block mb-0.5 font-semibold">Acoustic Shielding</span>
                              <p className="font-light text-[#666666]">Multi-layer concrete wall cores offering excellent structural soundproofing (60dB rating).</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Direct WhatsApp Action Link */}
                  <div>
                    <a
                      href={`https://wa.me/60108278932?text=${encodeURIComponent(`[ORBK] Hello Yee, I would like to check availability and detailed pricing for the ${selectedUnit.name} (${selectedUnit.sizeSqFt} sqft) floor plan.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn w-full py-3.5 text-center flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {t("Inquire Availability for This Unit")} <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal for Blueprint */}
      <AnimatePresence>
        {floorPlanLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1A1A1A]/95 backdrop-blur-md p-4"
          >
            <button
              onClick={() => setFloorPlanLightboxOpen(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 cursor-pointer"
              title="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative max-w-4xl w-full flex flex-col items-center justify-center">
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ type: "spring", damping: 25, stiffness: 120 }}
                className="bg-[#FFFFFF] border border-[#E5E2DC] p-6 rounded shadow-2xl flex items-center justify-center max-h-[80vh] w-full max-w-[650px] overflow-hidden"
              >
                <img
                  src={floorPlanImages[selectedUnitId] || floorPlanImages["Type-A1"]}
                  alt={`${selectedUnit.name} Layout Diagram`}
                  className="max-h-[70vh] max-w-full object-contain p-2"
                />
              </motion.div>

              <div className="mt-6 text-center text-white max-w-lg">
                <h4 className="font-serif text-2xl font-light text-[#F8F7F4]">{t(selectedUnit.name)}</h4>
                <p className="mono text-[#D4AF37] mt-1 tracking-wider">
                  {selectedUnit.sizeSqFt} SQ FT ({selectedUnit.sizeSqM} SQ M) • {selectedUnit.bedrooms} Bed / {selectedUnit.bathrooms} Bath
                </p>
                <p className="text-[11px] text-gray-300 mt-3 font-light leading-relaxed">
                  Use this schematic to plan furniture placements and interior decorations. Handover units feature premium luxury architectural finishings as listed.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
