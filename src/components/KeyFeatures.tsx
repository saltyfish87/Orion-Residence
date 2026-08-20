import * as React from "react";
import { Maximize2, Shield, Lock, Sliders, Sparkles, Compass } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface KeyFeaturesProps {
  t: (text: string) => string;
}

export function KeyFeatures({ t }: KeyFeaturesProps) {
  const features = [
    {
      icon: Maximize2,
      title: "Sovereign Ceiling Height",
      desc: "Generous 3.4-meter clear ceiling heights with customized pre-engineered ducted cooling channels and linear diffusers.",
      delay: 0
    },
    {
      icon: Shield,
      title: "Acoustic Sanctuary Walls",
      desc: "Multi-layered drywall structures and double-glazed solar-acoustic glass shielding up to 45dB of urban frequencies.",
      delay: 100
    },
    {
      icon: Lock,
      title: "Smart Biometric Entry",
      desc: "Advanced German-engineered Häfele smart lock systems with fingerprint, mobile app, and physical key overrides.",
      delay: 200
    },
    {
      icon: Sliders,
      title: "Precision Climate Control",
      desc: "Custom Daikin VRF multi-split climate systems with embedded anti-microbial PM2.5 air filtration.",
      delay: 150
    },
    {
      icon: Sparkles,
      title: "Greek Volakas Marble",
      desc: "Living salons featuring book-matched Greek Volakas natural marble floors, hand-polished and sealed for eternity.",
      delay: 250
    },
    {
      icon: Compass,
      title: "Panoramic Corner Orientations",
      desc: "Optimized glass facades maximizing unblocked viewpoints toward the TRX Financial Tower and Petronas Twin Towers.",
      delay: 350
    }
  ];

  return (
    <section id="features" className="py-20 md:py-28 relative bg-[#F8F7F4] border-b border-[#E5E2DC]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-16">
          <div className="mono text-[#B8860B] mb-3">
            {t("Bespoke Living")}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1A1A1A] mb-4">
            {t("Key Residence Features")}
          </h2>
          <p className="text-[#666666] text-xs sm:text-sm md:text-base font-light">
            {t("Crafted with meticulous attention to detail, Orion Residence embodies uncompromised engineering and premium materials.")}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="h-full">
                <ScrollReveal
                  direction="up"
                  delay={item.delay}
                  className="card group h-full flex flex-col hover:border-[#B8860B] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded border border-[#E5E2DC] group-hover:border-[#B8860B] bg-[#F8F7F4] flex items-center justify-center mb-6 transition-colors duration-300 shrink-0">
                    <Icon className="w-4 h-4 text-[#B8860B]" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1A1A1A] mb-3 font-medium">
                    {t(item.title)}
                  </h3>
                  <p className="text-[#666666] text-xs sm:text-sm leading-relaxed font-light flex-1">
                    {t(item.desc)}
                  </p>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
