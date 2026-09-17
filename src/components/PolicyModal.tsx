import * as React from "react";
import { Shield, FileText, Globe, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PolicyModalProps {
  activePolicyModal: "privacy" | "terms" | "disclaimer" | null;
  setActivePolicyModal: (modal: "privacy" | "terms" | "disclaimer" | null) => void;
  t: (text: string) => string;
}

export function PolicyModal({ activePolicyModal, setActivePolicyModal, t }: PolicyModalProps) {
  return (
    <AnimatePresence>
      {activePolicyModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A1A]/80 backdrop-blur-sm"
          onClick={() => setActivePolicyModal(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-2xl bg-[#FFFFFF] border border-[#E5E2DC] rounded shadow-2xl p-6 md:p-8 text-left max-h-[85vh] flex flex-col overflow-hidden text-[#1A1A1A]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePolicyModal(null)}
              className="absolute top-4 right-4 text-[#666666] hover:text-[#1A1A1A] transition-colors p-1 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {activePolicyModal === "privacy" && (
              <>
                <div className="flex items-center gap-2.5 mb-4 border-b border-[#E5E2DC] pb-4">
                  <Shield className="w-5 h-5 text-[#B8860B]" />
                  <h3 className="font-serif text-2xl text-[#1A1A1A] font-medium">{t("Privacy Policy")}</h3>
                </div>
                <div className="overflow-y-auto pr-2 text-[#666666] text-xs sm:text-sm space-y-4 font-light leading-relaxed">
                  <p className="text-[#1A1A1A] font-medium">
                    {t("This Privacy Policy outlines how your personal information is collected, used, and protected in accordance with the Malaysia Personal Data Protection Act (PDPA) 2010.")}
                  </p>
                  <div>
                    <h4 className="text-[#1A1A1A] mono font-semibold mb-1">{t("1. Information We Collect")}</h4>
                    <p>{t("When you submit an inquiry through our contact forms, we collect personal identity details including your full name, email address, contact phone number, country of residence, and unit size preferences.")}</p>
                  </div>
                  <div>
                    <h4 className="text-[#1A1A1A] mono font-semibold mb-1">{t("2. How We Use Your Data")}</h4>
                    <p>{t("Your details are utilized strictly to respond to your registered request, share the digital access portfolio containing price indexes, and arrange scheduled private viewings. Your information is managed directly by Yee (REN46305) under IQI Realty Sdn Bhd.")}</p>
                  </div>
                  <div>
                    <h4 className="text-[#1A1A1A] mono font-semibold mb-1">{t("3. Cookies & Advertising Protection")}</h4>
                    <p>{t("This website uses cookies and similar tracking identifiers (such as Google Ads tracking tags) to analyze site traffic, personalize content, and deliver relevant advertisements. No sensitive personal data is shared with Google or third parties during this operation.")}</p>
                  </div>
                  <div>
                    <h4 className="text-[#1A1A1A] mono font-semibold mb-1">{t("4. Third-Party Policy")}</h4>
                    <p>{t("We maintain a strict non-disclosure policy. We do not sell, rent, or lease customer lists or personal data logs to external marketing agencies or unauthorized third parties.")}</p>
                  </div>
                  <div>
                    <h4 className="text-[#1A1A1A] mono font-semibold mb-1">{t("5. Data Access & Rights")}</h4>
                    <p>{t("You retain full ownership and rights over your personal data. You may request information corrections, updates, or complete removal of your records from our system at any time by emailing shyanyeews@gmail.com.")}</p>
                  </div>
                </div>
              </>
            )}

            {activePolicyModal === "terms" && (
              <>
                <div className="flex items-center gap-2.5 mb-4 border-b border-[#E5E2DC] pb-4">
                  <FileText className="w-5 h-5 text-[#B8860B]" />
                  <h3 className="font-serif text-2xl text-[#1A1A1A] font-medium">{t("Terms & Conditions")}</h3>
                </div>
                <div className="overflow-y-auto pr-2 text-[#666666] text-xs sm:text-sm space-y-4 font-light leading-relaxed">
                  <p className="text-[#1A1A1A] font-medium">
                    {t("By accessing or browsing this website, you agree to comply with and be bound by the following Terms of Service governing this real estate presentation channel.")}
                  </p>
                  <div>
                    <h4 className="text-[#1A1A1A] mono font-semibold mb-1">{t("1. Channel Status")}</h4>
                    <p>{t("This platform acts as an independent marketing channel managed by Shyan Yee (REN46305) under IQI Realty Sdn Bhd. It is built as a portfolio presentation to introduce Orion Residence and is not the official developer website.")}</p>
                  </div>
                  <div>
                    <h4 className="text-[#1A1A1A] mono font-semibold mb-1">{t("2. Information Disclaimer")}</h4>
                    <p>{t("All visual renderings, floor blueprints, dimensions, specs, amenities list, and starting pricing metrics represent conceptual designs and approximate dimensions. They do not constitute a binding legal agreement or standard property offer. The developer reserves rights to alter specs at their absolute discretion.")}</p>
                  </div>
                  <div>
                    <h4 className="text-[#1A1A1A] mono font-semibold mb-1">{t("3. Acceptable Use")}</h4>
                    <p>{t("You agree to provide true, accurate, and current information when submitting inquiry forms. Using automated scripts or harvesting contact channels is strictly prohibited.")}</p>
                  </div>
                  <div>
                    <h4 className="text-[#1A1A1A] mono font-semibold mb-1">{t("4. Limitation of Liability")}</h4>
                    <p>{t("Neither the operating agent (Yee), IQI Realty Sdn Bhd, nor Welton Group shall be liable for any direct or indirect loss, financial decisions, or damages arising from the use or inability to use materials displayed on this website.")}</p>
                  </div>
                  <div>
                    <h4 className="text-[#1A1A1A] mono font-semibold mb-1">{t("5. Governing Jurisdiction")}</h4>
                    <p>{t("These terms and any resulting actions shall be governed by and construed in accordance with the laws of Malaysia, and subject to the exclusive jurisdiction of the Courts of Malaysia.")}</p>
                  </div>
                </div>
              </>
            )}

            {activePolicyModal === "disclaimer" && (
              <>
                <div className="flex items-center gap-2.5 mb-4 border-b border-[#E5E2DC] pb-4">
                  <Globe className="w-5 h-5 text-[#B8860B]" />
                  <h3 className="font-serif text-2xl text-[#1A1A1A] font-medium">{t("Detailed Disclaimer")}</h3>
                </div>
                <div className="overflow-y-auto pr-2 text-[#666666] text-xs sm:text-sm space-y-4 font-light leading-relaxed">
                  <p className="text-[#1A1A1A] font-medium">
                    {t("Important Legal & Professional Disclosures for Orion Residence Digital Representation.")}
                  </p>
                  <div>
                    <h4 className="text-[#1A1A1A] mono font-semibold mb-1">{t("Professional Agent Representation")}</h4>
                    <p>{t("This digital representation is managed by Yee (Shyan Yee, REN46305), a registered Real Estate Negotiator authorized under IQI Realty Sdn Bhd (Company License: E(1)1584). IQI Realty is an appointed agency for marketing real estate developments.")}</p>
                  </div>
                  <div>
                    <h4 className="text-[#1A1A1A] mono font-semibold mb-1">{t("Developer Status")}</h4>
                    <p>{t("The official developer for the Orion Residence project is Orion Tower Sdn. Bhd. (Co. Registration: 1292635-X), an architectural project developed in Bukit Bintang by Welton Group. This platform serves as a marketing presentation and does not represent direct developer ownership of the website.")}</p>
                  </div>
                  <div>
                    <h4 className="text-[#1A1A1A] mono font-semibold mb-1">{t("Artistic and Layout Variations")}</h4>
                    <p>{t("All visual renders, lifestyle images, perspective materials, furniture layouts, and architectural models are artist's impressions for creative reference only. Actual specifications and final details are strictly governed by the formal Sale and Purchase Agreement (SPA) executed during unit booking.")}</p>
                  </div>
                  <div>
                    <h4 className="text-[#1A1A1A] mono font-semibold mb-1">{t("Advertising Policy Compliance")}</h4>
                    <p>{t("This disclaimer is visible and designed to prevent misleading representation, ensuring visitors are fully informed of the agent-mediated marketing relationship prior to engaging or booking tours.")}</p>
                  </div>
                </div>
              </>
            )}

            <div className="mt-6 pt-4 border-t border-[#E5E2DC] flex justify-end">
              <button
                onClick={() => setActivePolicyModal(null)}
                className="cta-btn px-6 py-2.5 text-[10px] cursor-pointer"
              >
                {t("Acknowledge")}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
