import * as React from "react";
import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Overview } from "./components/Overview";
import { KeyFeatures } from "./components/KeyFeatures";
import { VRTour } from "./components/VRTour";
import { Gallery } from "./components/Gallery";
import { FloorPlans } from "./components/FloorPlans";
import { Amenities } from "./components/Amenities";
import { Neighborhood } from "./components/Neighborhood";
import { FAQ } from "./components/FAQ";
import { InquiryForm } from "./components/InquiryForm";
import { Footer } from "./components/Footer";
import { PolicyModal } from "./components/PolicyModal";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Lang, dictionary } from "./translations";

export function App() {
  const [lang, setLang] = useState<Lang>("ENG");
  const [selectedUnitId, setSelectedUnitId] = useState<string>("Type-A1");
  const [activePolicyModal, setActivePolicyModal] = useState<"privacy" | "terms" | "disclaimer" | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Translation helper function
  const t = (text: string): string => {
    if (lang === "ENG") return text;
    const mapping = dictionary[text];
    return (mapping && mapping[lang as Exclude<Lang, "ENG">]) || text;
  };

  // Scroll listener for hero parallax & navbar backdrop
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#fdfdfc] text-[#1a1b1e] font-sans antialiased selection:bg-[#927345] selection:text-white">
      {/* Top Fixed Header */}
      <Navbar
        lang={lang}
        setLang={setLang}
        t={t}
        isScrolled={isScrolled}
      />

      {/* Main Content Sections */}
      <main>
        <Hero t={t} scrollY={scrollY} />
        <Overview t={t} />
        <KeyFeatures t={t} />
        <VRTour t={t} />
        <Gallery t={t} />
        <FloorPlans
          selectedUnitId={selectedUnitId}
          setSelectedUnitId={setSelectedUnitId}
          t={t}
        />
        <Amenities t={t} />
        <Neighborhood t={t} />
        <FAQ t={t} />
        <InquiryForm
          t={t}
          selectedUnitId={selectedUnitId}
          setActivePolicyModal={setActivePolicyModal}
        />
      </main>

      {/* Footer Section */}
      <Footer
        t={t}
        setActivePolicyModal={setActivePolicyModal}
      />

      {/* PDPA, Terms & Disclaimers Modal */}
      <PolicyModal
        activePolicyModal={activePolicyModal}
        setActivePolicyModal={setActivePolicyModal}
        t={t}
      />

      {/* Floating Direct Contact Tool */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
