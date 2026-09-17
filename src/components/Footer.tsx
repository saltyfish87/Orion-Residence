import * as React from "react";
import { Phone, Mail } from "lucide-react";

interface FooterProps {
  t: (text: string) => string;
  setActivePolicyModal: (modal: "privacy" | "terms" | "disclaimer" | null) => void;
}

export function Footer({ t, setActivePolicyModal }: FooterProps) {
  return (
    <footer className="bg-[#F8F7F4] text-[#666666] py-16 md:py-20 border-t border-[#E5E2DC] font-light text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center rounded border border-[#B8860B] bg-[#FFFFFF]">
              <span className="text-[#B8860B] font-serif text-sm font-semibold">O</span>
            </div>
            <span className="text-[#1A1A1A] font-serif tracking-[0.2em] text-base font-semibold uppercase">Orion Residence</span>
          </div>
          <p className="leading-relaxed font-light text-xs sm:text-sm">
            An architectural celestial jewel crafted above the vibrant center of Kuala Lumpur. Experience a lifestyle tailored purely to the uncompromised.
          </p>
        </div>

        {/* Developer Info */}
        <div>
          <h4 className="text-[#1A1A1A] font-serif uppercase tracking-[0.16em] text-xs font-semibold mb-4">Official Developer</h4>
          <p className="leading-relaxed mb-1 font-medium text-[#1A1A1A]">Orion Tower Sdn. Bhd.</p>
          <p className="mono text-[#666666] mb-2 font-normal">Registration No: 1292635-X</p>
          <p className="mono text-[#B8860B] mb-2 font-semibold">A Project by Welton Group</p>
          <p className="leading-relaxed text-xs">
            Jalan Gading, Bukit Bintang, <br />
            55100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia
          </p>
        </div>

        {/* Contact Relations */}
        <div>
          <h4 className="text-[#1A1A1A] font-serif uppercase tracking-[0.16em] text-xs font-semibold mb-4">Contact Relations</h4>
          <p className="flex items-center gap-2 mb-2.5">
            <Phone className="w-3.5 h-3.5 text-[#B8860B]" />
            <a href="tel:+60108278932" className="hover:text-[#B8860B] transition-colors text-[#1A1A1A] font-medium">
              +6010 827 8932
            </a>
          </p>
          <p className="flex items-center gap-2 mb-2.5">
            <span className="text-[#B8860B] font-semibold font-mono text-[9px] border border-[#B8860B] px-1 rounded">WA</span>
            <a href="https://wa.me/60108278932?text=%5BORBK%5D%20Hello%20Yee%2C%20I%20would%20like%20to%20enquire%20about%20Orion%20Residence." target="_blank" rel="noopener noreferrer" className="hover:text-[#B8860B] underline transition-colors">
              Chat on WhatsApp
            </a>
          </p>
          <p className="flex items-center gap-2 mb-2.5">
            <Mail className="w-3.5 h-3.5 text-[#B8860B]" />
            <a href="mailto:shyanyeews@gmail.com" className="hover:text-[#B8860B] transition-colors">
              shyanyeews@gmail.com
            </a>
          </p>
        </div>

        {/* Legal Disclaimers */}
        <div>
          <h4 className="text-[#1A1A1A] font-serif uppercase tracking-[0.16em] text-xs font-semibold mb-4">{t("Disclaimers")}</h4>
          <p className="leading-relaxed text-xs text-[#B8860B] font-medium mb-3">
            {t("This is an independent marketing website managed by Yee (REN46305) under IQI Realty Sdn Bhd. It is not the official developer website of Orion Tower Sdn. Bhd.")}
          </p>
          <p className="leading-relaxed text-[11px] text-[#666666]">
            {t("All illustrative renderings, conceptual drawings, room dimensions, specifications, and layout designs on this website are approximate and intended as a general guide only. The developer reserves the right to modify any aspect at their absolute discretion.")}
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-[#E5E2DC] text-center flex flex-col sm:flex-row justify-between items-center gap-4 text-[#666666] text-xs font-mono">
        <p>© 2026 Orion Tower Sdn. Bhd. (1292635-X) & Welton Group. All Rights Reserved.</p>
        <div className="flex gap-4">
          <button onClick={() => setActivePolicyModal("privacy")} className="hover:text-[#B8860B] transition-colors cursor-pointer">{t("Privacy Policy")}</button>
          <button onClick={() => setActivePolicyModal("terms")} className="hover:text-[#B8860B] transition-colors cursor-pointer">{t("Terms & Conditions")}</button>
          <button onClick={() => setActivePolicyModal("disclaimer")} className="hover:text-[#B8860B] transition-colors cursor-pointer">{t("Detailed Disclaimer")}</button>
        </div>
      </div>
    </footer>
  );
}
