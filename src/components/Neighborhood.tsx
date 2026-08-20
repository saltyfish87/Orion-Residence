import * as React from "react";
import { Map } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { locationImg } from "../data";

interface NeighborhoodProps {
  t: (text: string) => string;
}

export function Neighborhood({ t }: NeighborhoodProps) {
  return (
    <section id="location" className="py-20 md:py-28 relative bg-[#F0EEEA] border-b border-[#E5E2DC]">
      <div className="max-w-7xl mx-auto px-6">
        
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-16">
          <div className="mono text-[#B8860B] mb-3">
            {t("Prime Location")}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1A1A1A] mb-4">
            {t("The Epicenter of Bukit Bintang")}
          </h2>
          <p className="text-[#666666] text-xs sm:text-sm md:text-base font-light">
            {t("Situated on Jalan Gading, Orion Residence sits quietly in absolute luxury behind Malaysia's primary fashion and lifestyle corridor.")}
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Map Frame (Left) */}
          <ScrollReveal direction="left" delay={100} className="lg:col-span-7 flex flex-col">
            <div className="card h-full flex flex-col justify-between">
              <div className="flex justify-between items-center mb-4">
                <span className="mono text-[#666666]">
                  Location Geography
                </span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B8860B] animate-pulse" />
                  <span className="mono text-[#B8860B] font-semibold">
                    Jalan Gading, Kuala Lumpur
                  </span>
                </div>
              </div>

              <div className="rounded overflow-hidden border border-[#E5E2DC] aspect-[16/10] my-4 relative group">
                <img
                  src={locationImg}
                  alt="Orion Bukit Bintang Location Map"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent flex items-end p-4">
                  <span className="mono text-white">
                    ★ Orion Residence Site Map
                  </span>
                </div>
              </div>

              <div className="bg-[#F8F7F4] p-5 rounded border border-[#E5E2DC] text-xs sm:text-sm mt-4">
                <h5 className="mono text-[#B8860B] mb-1.5 font-semibold">
                  Quiet Luxury in the Heart of the City
                </h5>
                <p className="text-[#666666] leading-relaxed font-light">
                  Orion is tucked on Jalan Gading, directly adjoining Fahrenheit88 and Pavilion KL. It offers a rare sanctuary completely shielded from heavy city avenue noise, yet remains merely 150 meters away from regional luxury flagships (Chanel, Hermès, Louis Vuitton, Cartier).
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Neighborhood Proximities (Right) */}
          <ScrollReveal direction="right" delay={250} className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="card flex flex-col justify-between h-full">
              <div>
                <h4 className="font-serif text-2xl text-[#1A1A1A] mb-6 flex items-center gap-2.5 font-medium">
                  <Map className="w-4 h-4 text-[#B8860B]" />
                  Prestigious Proximities
                </h4>
                
                <div className="space-y-6">
                  {/* Category 1 */}
                  <div>
                    <span className="mono text-[#B8860B] block mb-3 border-b border-[#E5E2DC] pb-1.5 font-semibold">
                      Luxury Retail & Haute Couture
                    </span>
                    <div className="space-y-3.5">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs sm:text-sm">
                        <div>
                          <span className="text-[#1A1A1A] font-medium block">Pavilion Kuala Lumpur</span>
                          <span className="text-[#666666] text-xs font-light">Malaysia's premier luxury shopping mall.</span>
                        </div>
                        <span className="mono text-[#B8860B] whitespace-nowrap bg-[#F8F7F4] border border-[#E5E2DC] px-2 py-1 rounded">
                          150m (1-min walk)
                        </span>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs sm:text-sm pt-1">
                        <div>
                          <span className="text-[#1A1A1A] font-medium block">The Starhill</span>
                          <span className="text-[#666666] text-xs font-light">Watch salons, modern fashion and dining.</span>
                        </div>
                        <span className="mono text-[#B8860B] whitespace-nowrap bg-[#F8F7F4] border border-[#E5E2DC] px-2 py-1 rounded">
                          50m (30-sec walk)
                        </span>
                      </div>

                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs sm:text-sm pt-1">
                        <div>
                          <span className="text-[#1A1A1A] font-medium block">Fahrenheit88 Mall</span>
                          <span className="text-[#666666] text-xs font-light">Vibrant retail and lifestyle hub.</span>
                        </div>
                        <span className="mono text-[#B8860B] whitespace-nowrap bg-[#F8F7F4] border border-[#E5E2DC] px-2 py-1 rounded">
                          80m (1-min walk)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Category 2 */}
                  <div>
                    <span className="mono text-[#B8860B] block mb-3 border-b border-[#E5E2DC] pb-1.5 font-semibold">
                      Global Connections & Transit
                    </span>
                    <div className="space-y-3.5">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs sm:text-sm">
                        <div>
                          <span className="text-[#1A1A1A] font-medium block">MRT Bukit Bintang Station</span>
                          <span className="text-[#666666] text-xs font-light">Direct connection to TRX and KL Sentral.</span>
                        </div>
                        <span className="mono text-[#B8860B] whitespace-nowrap bg-[#F8F7F4] border border-[#E5E2DC] px-2 py-1 rounded">
                          200m (2-min walk)
                        </span>
                      </div>

                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs sm:text-sm pt-1">
                        <div>
                          <span className="text-[#1A1A1A] font-medium block">Tun Razak Exchange (TRX)</span>
                          <span className="text-[#666666] text-xs font-light">Malaysia's leading international financial center.</span>
                        </div>
                        <span className="mono text-[#B8860B] whitespace-nowrap bg-[#F8F7F4] border border-[#E5E2DC] px-2 py-1 rounded">
                          1 MRT Stop
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Category 3 */}
                  <div>
                    <span className="mono text-[#B8860B] block mb-3 border-b border-[#E5E2DC] pb-1.5 font-semibold">
                      Culinary & Heritage
                    </span>
                    <div className="space-y-3.5">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs sm:text-sm">
                        <div>
                          <span className="text-[#1A1A1A] font-medium block">Lot 10 Hutong Heritage</span>
                          <span className="text-[#666666] text-xs font-light">Legendary culinary landmark housing local icons.</span>
                        </div>
                        <span className="mono text-[#B8860B] whitespace-nowrap bg-[#F8F7F4] border border-[#E5E2DC] px-2 py-1 rounded">
                          250m (3-min walk)
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
