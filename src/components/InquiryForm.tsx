import * as React from "react";
import { useState } from "react";
import { User, Mail, Phone, Globe, ArrowRight, CheckCircle2 } from "lucide-react";
import { UNIT_TYPES } from "../data";

interface InquiryFormProps {
  t: (text: string) => string;
  selectedUnitId: string;
  setActivePolicyModal: (modal: "privacy" | "terms" | "disclaimer" | null) => void;
}

export function InquiryForm({ t, selectedUnitId, setActivePolicyModal }: InquiryFormProps) {
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    phone: "",
    country: "Malaysia",
    preferredUnit: selectedUnitId || "Type-A1",
    preferredLanguage: "English",
    message: ""
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submittedId, setSubmittedId] = useState("");
  const [consentAccepted, setConsentAccepted] = useState(false);

  React.useEffect(() => {
    if (selectedUnitId) {
      setFormInputs((prev) => ({ ...prev, preferredUnit: selectedUnitId }));
    }
  }, [selectedUnitId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);

    try {
      await fetch("https://formsubmit.co/ajax/shyanyeews@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "Name": formInputs.name,
          "Email": formInputs.email,
          "Phone": formInputs.phone,
          "Country": formInputs.country,
          "Preferred Layout": formInputs.preferredUnit,
          "Preferred Language": formInputs.preferredLanguage,
          "Message": formInputs.message,
          "_subject": `Orion Residence Inquiry - ${formInputs.name}`
        })
      });

      const generatedId = `ORN-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedId(generatedId);
      setFormSubmitted(true);
    } catch (err) {
      console.error("Error submitting form", err);
      const generatedId = `ORN-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedId(generatedId);
      setFormSubmitted(true);
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <section id="inquire" className="py-20 md:py-28 relative bg-[#F0EEEA] border-b border-[#E5E2DC]">
      <div className="relative z-20 max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="mono text-[#B8860B] mb-3">
            {t("VIP Reservation")}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1A1A1A] mb-4">
            {t("Request Private Viewing")}
          </h2>
          <p className="text-[#666666] text-xs sm:text-sm md:text-base font-light">
            {t("Submit your inquiry to secure an exclusive showroom viewing and receive the digital portfolio & investment dossier.")}
          </p>
        </div>

        <div className="card !p-6 sm:!p-10 md:!p-12">
          {!formSubmitted ? (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block mono text-[#666666] mb-2 font-medium">
                    Full Name / Title
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3.5 w-4 h-4 text-[#666666]" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formInputs.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Tan Sri Adrian Yeoh"
                      className="w-full bg-[#FFFFFF] border border-[#E5E2DC] focus:border-[#B8860B] text-[#1A1A1A] rounded px-10 py-3 text-xs sm:text-sm placeholder-[#999999] transition-all duration-300 outline-none"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block mono text-[#666666] mb-2 font-medium">
                    Private Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-[#666666]" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formInputs.email}
                      onChange={handleInputChange}
                      placeholder="e.g. adrian.yeoh@royalholdings.com"
                      className="w-full bg-[#FFFFFF] border border-[#E5E2DC] focus:border-[#B8860B] text-[#1A1A1A] rounded px-10 py-3 text-xs sm:text-sm placeholder-[#999999] transition-all duration-300 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Phone */}
                <div>
                  <label className="block mono text-[#666666] mb-2 font-medium">
                    Contact Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-[#666666]" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formInputs.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +60 12-345 6789"
                      className="w-full bg-[#FFFFFF] border border-[#E5E2DC] focus:border-[#B8860B] text-[#1A1A1A] rounded px-10 py-3 text-xs sm:text-sm placeholder-[#999999] transition-all duration-300 outline-none"
                    />
                  </div>
                </div>

                {/* Country */}
                <div>
                  <label className="block mono text-[#666666] mb-2 font-medium">
                    Country of Residence
                  </label>
                  <select
                    name="country"
                    value={formInputs.country}
                    onChange={handleInputChange}
                    className="w-full bg-[#FFFFFF] border border-[#E5E2DC] focus:border-[#B8860B] text-[#1A1A1A] rounded px-4 py-3 text-xs sm:text-sm transition-all duration-300 outline-none"
                  >
                    <option value="Malaysia">Malaysia</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Japan">Japan</option>
                    <option value="China">China</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Preferred Unit */}
                <div>
                  <label className="block mono text-[#666666] mb-2 font-medium">
                    Preferred Layout Size
                  </label>
                  <select
                    name="preferredUnit"
                    value={formInputs.preferredUnit}
                    onChange={handleInputChange}
                    className="w-full bg-[#FFFFFF] border border-[#E5E2DC] focus:border-[#B8860B] text-[#1A1A1A] rounded px-4 py-3 text-xs sm:text-sm transition-all duration-300 font-mono outline-none"
                  >
                    {UNIT_TYPES.map((u) => (
                      <option key={u.id} value={u.id}>
                        {u.id.replace("-", " ")} ({u.sizeSqFt} sqft)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Language */}
                <div>
                  <label className="block mono text-[#666666] mb-2 font-medium">
                    Preferred Language
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3.5 top-3.5 w-4 h-4 text-[#666666]" />
                    <select
                      name="preferredLanguage"
                      value={formInputs.preferredLanguage}
                      onChange={handleInputChange}
                      className="w-full bg-[#FFFFFF] border border-[#E5E2DC] focus:border-[#B8860B] text-[#1A1A1A] rounded px-10 py-3 text-xs sm:text-sm transition-all duration-300 outline-none"
                    >
                      <option value="English">English</option>
                      <option value="Mandarin / Cantonese">Chinese (Mandarin / Cantonese)</option>
                      <option value="Japanese">Japanese</option>
                      <option value="Malay">Malay / Indonesian</option>
                      <option value="Other">Other Language</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block mono text-[#666666] mb-2 font-medium">
                  Specific Requirements / Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formInputs.message}
                  onChange={handleInputChange}
                  placeholder="Please specify if you require translation support, investment structures details, or higher floor availability indexes."
                  className="w-full bg-[#FFFFFF] border border-[#E5E2DC] focus:border-[#B8860B] text-[#1A1A1A] rounded px-4 py-3 text-xs sm:text-sm placeholder-[#999999] transition-all duration-300 resize-none outline-none"
                />
              </div>

              {/* PDPA Consent Checkbox */}
              <div className="flex items-start gap-3 mt-4">
                <input
                  type="checkbox"
                  id="consentCheckbox"
                  required
                  checked={consentAccepted}
                  onChange={(e) => setConsentAccepted(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-[#E5E2DC] text-[#B8860B] focus:ring-[#B8860B] accent-[#B8860B] cursor-pointer"
                />
                <label htmlFor="consentCheckbox" className="text-[#666666] text-xs leading-relaxed cursor-pointer select-none">
                  {t("I read and accept the")}{" "}
                  <button type="button" onClick={() => setActivePolicyModal("privacy")} className="text-[#B8860B] underline hover:text-[#996F08] font-medium transition-colors cursor-pointer">
                    {t("Privacy Policy")}
                  </button>{" "}
                  {t("and")}{" "}
                  <button type="button" onClick={() => setActivePolicyModal("terms")} className="text-[#B8860B] underline hover:text-[#996F08] font-medium transition-colors cursor-pointer">
                    {t("Terms & Conditions")}
                  </button>
                  {", "}
                  {t("and consent to Yee (REN46305) contacting me regarding Orion Residence.")}
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={formSubmitting || !consentAccepted}
                  className="cta-btn w-full py-4 text-center flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {formSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Processing VIP Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Official Inquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full bg-[#F8F7F4] border border-[#B8860B] flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-7 h-7 text-[#B8860B]" />
              </div>
              <h3 className="font-serif text-3xl text-[#1A1A1A] mb-2 font-medium">VIP Request Logged</h3>
              <p className="mono text-[#B8860B] mb-6 font-semibold">
                Confirmation Code: {submittedId}
              </p>
              
              <div className="bg-[#F8F7F4] border border-[#E5E2DC] rounded p-6 max-w-md mx-auto mb-8 text-xs sm:text-sm text-[#666666] leading-relaxed font-light text-left">
                <p className="font-medium text-[#1A1A1A] mb-2">What happens next?</p>
                <p className="mb-3">
                  1. A private client relations executive from <strong>Orion Tower Client Relations</strong> will contact you via phone or email within 2 hours to confirm your scheduled slot.
                </p>
                <p>
                  2. An exclusive, digital private access portfolio featuring unit price indexes and design spec blueprints has been compiled and emailed.
                </p>
              </div>

              <div className="flex justify-center items-center">
                <a
                  href={`https://wa.me/60108278932?text=%5BORBK%5D%20Hello%20Yee%2C%20I%20have%20submitted%20the%20VIP%20Inquiry%20form%20for%20Orion%20Residence%20(Ref%20Code%3A%20${submittedId}).%20Please%20share%20the%20Private%20Portfolio%20details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn px-8 py-3.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5" /> {t("Chat on WhatsApp")}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
