import * as React from "react";
import { ScrollReveal } from "./ScrollReveal";

interface VRTourProps {
  t: (text: string) => string;
}

export function VRTour({ t }: VRTourProps) {
  return (
    <section id="vrtour" className="py-20 md:py-28 relative bg-[#F0EEEA] border-b border-[#E5E2DC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-12">
          <div className="mono text-[#B8860B] mb-3">
            {t("Virtual Reality")}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1A1A1A] mb-4">
            {t("Interactive 360° VR Tour")}
          </h2>
          <p className="text-[#666666] text-xs sm:text-sm md:text-base font-light">
            {t("Step inside our spectacular spaces in full high-definition 360° virtual reality. Experience the scale, luxury materials, and stunning architectural volume.")}
          </p>
        </ScrollReveal>

        {/* VR Tour Frame Container */}
        <ScrollReveal direction="up" delay={200} className="w-full max-w-5xl mx-auto">
          <div className="relative border border-[#E5E2DC] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.06)] bg-[#1A1A1A]">
            {/* Top Toolbar Accent */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#1A1A1A] border-b border-white/10 text-white">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B8860B] animate-pulse" />
                <span className="mono text-white/90">
                  Sales Gallery Virtual Exploration
                </span>
              </div>
              <span className="mono text-[#D4AF37] hidden sm:inline-block">
                HD 360° Immersive
              </span>
            </div>

            {/* Virtual Tour IFrame */}
            <div className="relative w-full aspect-[16/10] md:h-[540px] h-[280px] xs:h-[340px] sm:h-[400px]">
              <iframe
                src="https://goprop360.com/360vr/orion/sales-gallery/"
                title="Orion Residence 360° Virtual Tour"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                allow="xr-spatial-tracking; gyroscope; accelerometer; fullscreen"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
