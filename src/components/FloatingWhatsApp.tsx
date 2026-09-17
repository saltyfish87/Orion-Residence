import * as React from "react";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip Label */}
      <div className="mr-3 px-3 py-1.5 bg-[#ffffff] text-[#1a1b1e] text-[10px] font-mono uppercase tracking-wider rounded border border-[#ebeae6] shadow-[0_4px_15px_rgba(0,0,0,0.08)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:block whitespace-nowrap">
        Chat with Yee (REN46305)
      </div>

      {/* Floating Action Button */}
      <a
        href="https://wa.me/60108278932?text=%5BORBK%5D%20Hello%20Yee%2C%20I%20am%20interested%20in%20learning%20more%20about%20Orion%20Residence."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn relative w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-300 hover:scale-105"
        aria-label="Direct WhatsApp Concierge"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#d4af37] border-2 border-white rounded-full" />
      </a>
    </div>
  );
}
