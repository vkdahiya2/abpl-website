import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { CheckCircle, MapPin, Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nextra City — Residential Plotted Gated Society | ABPL",
  description: "Nextra City by ABPL — premium residential plots in a fully equipped gated society. Transparent pricing, legal clear title. Enquire today.",
};

const amenities = [
  "Gated Perimeter & Security", "Wide Internal Roads", "Parks & Green Zones",
  "Electricity Connection", "Water Supply", "Street Lighting", "Legal Clear Title", "Paved Footpaths",
];

export default function NextraCityPage() {
  return (
    <>
      <section className="bg-[#0D2545] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #B8972E 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-[#B8972E]/20 border border-[#B8972E]/40 text-[#B8972E] text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">RESIDENTIAL PLOTS</span>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Nextra City</h1>
            <p className="text-[#B8972E] text-lg font-semibold mb-4">Residential Plotted Gated Society</p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Nextra City offers premium residential plots inside a fully developed gated society — designed for
              families seeking a secure, community-driven lifestyle with 100% legal clear title and transparent pricing.
            </p>
            <div className="flex gap-3">
              <a href="#enquire" className="bg-[#B8972E] hover:bg-[#9A7D25] text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors">
                Enquire Now
              </a>
              <a href="tel:+919999999999" className="border border-white/30 text-white hover:border-[#B8972E] font-bold px-6 py-3 rounded-xl text-sm transition-colors flex items-center gap-2">
                <Phone size={15} /> Call Us
              </a>
            </div>
          </div>
          <div className="bg-[#0A1D3A] rounded-2xl h-64 flex items-center justify-center border border-[#1E3A5F] text-7xl">
            🏡
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#0A1D3A] mb-2">Project Highlights</h2>
          <div className="w-12 h-1 bg-[#B8972E] rounded mb-8" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🏘️", title: "Gated Community", desc: "Fully enclosed society with controlled entry for maximum security and privacy." },
              { icon: "📋", title: "Clear Legal Title", desc: "All plots are legally verified with complete documentation. Registry in buyer's name." },
              { icon: "🌳", title: "Green Environment", desc: "Dedicated parks, tree-lined roads, and open green spaces for a healthy lifestyle." },
              { icon: "🏗️", title: "Ready Infrastructure", desc: "Developed roads, electricity, water supply — fully ready for construction." },
              { icon: "💰", title: "High ROI Potential", desc: "Prime location with strong appreciation potential in the NCR/Haryana growth corridor." },
              { icon: "🤝", title: "Transparent Process", desc: "No hidden charges. Full documentation support from booking to registry." },
            ].map((h) => (
              <div key={h.title} className="bg-[#EEF2F7] rounded-2xl p-6">
                <div className="text-3xl mb-3">{h.icon}</div>
                <h3 className="font-bold text-[#0A1D3A] mb-2">{h.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#EEF2F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#0A1D3A] mb-2">Amenities</h2>
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

      <section id="enquire" className="py-16 bg-[#0A1D3A]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white mb-2">Enquire About Nextra City</h2>
            <p className="text-gray-400">Get pricing, plot details, and brochure delivered to your WhatsApp.</p>
          </div>
          <LeadForm />
        </div>
      </section>
    </>
  );
}
