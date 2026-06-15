import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { CheckCircle, MapPin, ArrowRight, Phone, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "NV City Sector 6 — Residential Plots on KMP Expressway, Kharkhoda",
  description: "Buy DTCP-approved 130 & 179 sq. yd residential plots in NV City Sector 6 — gated society on KMP Expressway, Kharkhoda, Haryana. Just 45 min from Delhi. ABPL – Aashna Buildwell.",
  keywords: ["NV City Sector 6", "plots in Kharkhoda", "KMP Expressway plots", "DTCP approved plots Haryana", "gated society Kharkhoda", "residential plots near Delhi"],
};

const amenities = [
  "Gated Society with 24/7 Security", "CCTV Surveillance", "Wide Paved Internal Roads",
  "Parks & Green Spaces", "Electricity & Street Lighting", "Water Supply Connection",
  "Community Clubhouse", "Playground & Sports Area",
];

const plotSizes = [
  { size: "130 sq. yd", dims: "~32.5 ft × 48 ft", desc: "Ideal for a comfortable 2–3 BHK home. Most popular choice among first-time buyers." },
  { size: "179 sq. yd", dims: "~44.5 ft × 48 ft", desc: "Spacious plot for a premium 3–4 BHK villa with garden. Perfect for families and investors." },
];

const faqs = [
  { q: "Is NV City Sector 6 DTCP approved?", a: "Yes. NV City Sector 6 is fully approved by the Department of Town and Country Planning (DTCP), Haryana. All documentation is legally clear and ready for registry." },
  { q: "How far is NV City Sector 6 from Delhi?", a: "The project is located on KMP Expressway near Kharkhoda, approximately 45 minutes from Delhi and 20 minutes from Sonipat." },
  { q: "What plot sizes are available?", a: "We offer two sizes: 130 sq. yards and 179 sq. yards. Both are ready for immediate booking with registry in the buyer's name." },
  { q: "What is the payment plan?", a: "We offer flexible installment-based payment plans. Contact our team for the latest pricing and payment schedule." },
];

export default function NVCityPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A1D3A] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #B8972E 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-[#B8972E] text-white text-xs font-bold px-3 py-1 rounded-full">★ FLAGSHIP PROJECT</span>
              <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">✓ DTCP APPROVED</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">NV City Sector 6</h1>
            <p className="text-[#B8972E] text-lg font-semibold mb-2 flex items-center gap-2">
              <MapPin size={18} /> KMP Expressway, Kharkhoda, Haryana
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Premium DTCP-approved residential plots in a fully developed gated society, strategically located
              on the KMP Expressway — just 45 minutes from Delhi with seamless NCR connectivity.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[["130 & 179", "Sq. Yd Plots"], ["45 Min", "From Delhi"], ["DTCP", "Approved"]].map(([v, l]) => (
                <div key={l} className="bg-[#0D2545] rounded-xl p-4 text-center border border-[#1E3A5F]">
                  <p className="text-[#B8972E] font-black text-xl">{v}</p>
                  <p className="text-gray-400 text-xs mt-1">{l}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <a href="#enquire" className="bg-[#B8972E] hover:bg-[#9A7D25] text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors">
                Enquire Now
              </a>
              <a href="tel:+919999999999" className="border border-white/30 text-white hover:border-[#B8972E] hover:text-[#B8972E] font-bold px-6 py-3 rounded-xl text-sm transition-colors flex items-center gap-2">
                <Phone size={15} /> Call Us
              </a>
            </div>
          </div>
          <div className="bg-[#0D2545] rounded-2xl h-72 flex items-center justify-center border border-[#1E3A5F] text-8xl">
            🏘️
          </div>
        </div>
      </section>

      {/* Plot Sizes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#0A1D3A] mb-2">Available Plot Sizes</h2>
          <div className="w-12 h-1 bg-[#B8972E] rounded mb-8" />
          <div className="grid md:grid-cols-2 gap-6">
            {plotSizes.map((p) => (
              <div key={p.size} className="border-2 border-[#B8972E] rounded-2xl p-7 hover:bg-[#EEF2F7] transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-black text-[#0A1D3A]">{p.size}</h3>
                  <span className="bg-[#B8972E]/10 text-[#B8972E] font-semibold text-sm px-3 py-1 rounded-full">{p.dims}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                <a href="#enquire" className="inline-flex items-center gap-1.5 text-[#B8972E] font-semibold text-sm mt-4 hover:gap-3 transition-all">
                  Get Price <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-[#EEF2F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#0A1D3A] mb-2">Township Amenities</h2>
          <div className="w-12 h-1 bg-[#B8972E] rounded mb-8" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {amenities.map((a) => (
              <div key={a} className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm">
                <CheckCircle size={18} className="text-[#B8972E] shrink-0" />
                <span className="text-sm text-[#0A1D3A] font-medium">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#0A1D3A] mb-2">Location Advantages</h2>
          <div className="w-12 h-1 bg-[#B8972E] rounded mb-8" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              { place: "Delhi", time: "~45 min", via: "KMP Expressway" },
              { place: "Sonipat", time: "~20 min", via: "NH-44" },
              { place: "Gurugram", time: "~60 min", via: "KMP Expressway" },
              { place: "Kundli Industrial Area", time: "~15 min", via: "KMP" },
              { place: "IGI Airport", time: "~75 min", via: "NH-48" },
              { place: "Noida", time: "~70 min", via: "Via Delhi" },
            ].map((l) => (
              <div key={l.place} className="bg-[#EEF2F7] rounded-xl p-4 flex items-center gap-3">
                <MapPin size={20} className="text-[#B8972E] shrink-0" />
                <div>
                  <p className="font-bold text-[#0A1D3A] text-sm">{l.place}</p>
                  <p className="text-[#B8972E] text-xs font-semibold">{l.time}</p>
                  <p className="text-gray-500 text-xs">via {l.via}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#0A1D3A] rounded-2xl h-56 flex items-center justify-center text-white text-center p-8">
            <div>
              <p className="text-[#B8972E] font-bold mb-2">📍 NV City Sector 6</p>
              <p className="text-gray-400 text-sm">KMP Expressway, Kharkhoda, Haryana</p>
              <a href="https://maps.google.com/?q=Kharkhoda+Haryana" target="_blank" rel="noopener noreferrer"
                className="inline-block mt-4 text-[#B8972E] border border-[#B8972E] px-4 py-2 rounded-lg text-sm hover:bg-[#B8972E] hover:text-white transition-colors">
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#EEF2F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#0A1D3A] mb-2">Frequently Asked Questions</h2>
          <div className="w-12 h-1 bg-[#B8972E] rounded mb-8" />
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-[#0A1D3A] mb-2 flex items-start gap-2">
                  <Shield size={16} className="text-[#B8972E] shrink-0 mt-0.5" /> {f.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-6">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="enquire" className="py-16 bg-[#0A1D3A]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white mb-2">Enquire About NV City Sector 6</h2>
            <p className="text-gray-400">Submit your details and our team will call you within 2 hours.</p>
          </div>
          <LeadForm projectContext="NV City Sector 6" />
        </div>
      </section>
    </>
  );
}
