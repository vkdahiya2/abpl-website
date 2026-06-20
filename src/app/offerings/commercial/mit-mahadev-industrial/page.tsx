import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { CheckCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "MIT Mahadev Industrial Township — Commercial & Industrial Plots | ABPL",
  description: "MIT Mahadev Industrial Township — commercial and industrial plots with prime highway connectivity. Ideal for manufacturing, warehousing, and businesses. ABPL – Aashna Buildwell.",
};

export default function MITPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-[#0A1D3A] to-[#1B3A5C] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #B8972E 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-[#B8972E]/20 border border-[#B8972E]/40 text-[#B8972E] text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">⚙ COMMERCIAL & INDUSTRIAL</span>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">MIT Mahadev<br />Industrial Township</h1>
            <p className="text-gray-300 leading-relaxed mb-6">
              Strategic commercial and industrial plots for businesses seeking prime highway-connected
              locations in Haryana's industrial growth corridor. Clear title, ready infrastructure, tax-efficient structure.
            </p>
            <div className="flex gap-3">
              <a href="#enquire" className="bg-[#B8972E] hover:bg-[#9A7D25] text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors">
                Get Pricing
              </a>
              <a href="tel:+919999999999" className="border border-white/30 text-white font-bold px-6 py-3 rounded-xl text-sm hover:border-[#B8972E] transition-colors flex items-center gap-2">
                <Phone size={15} /> Call Us
              </a>
            </div>
          </div>
          <div className="bg-[#0A1D3A] rounded-2xl h-64 flex items-center justify-center border border-[#1E3A5F] text-7xl">🏭</div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#0A1D3A] mb-2">Why Choose MIT Township</h2>
          <div className="w-12 h-1 bg-[#B8972E] rounded mb-8" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🏗️", title: "Industrial Plots", desc: "Plots zoned for manufacturing, assembly, warehousing, and light industrial operations." },
              { icon: "🏪", title: "Commercial Plots", desc: "Commercial spaces suitable for offices, showrooms, retail, and service businesses." },
              { icon: "🛣️", title: "Highway Connectivity", desc: "Direct access to major highway network ensuring smooth logistics and supply chain operations." },
              { icon: "💼", title: "Tax Benefits", desc: "Industrial township classification offers potential GST and stamp duty advantages for buyers." },
              { icon: "📋", title: "Clear Legal Title", desc: "Full documentation, verified ownership, and registry in buyer's name. No disputes." },
              { icon: "📈", title: "High Appreciation", desc: "Haryana's industrial corridor is seeing rapid infrastructure investment — strong ROI expected." },
            ].map((h) => (
              <div key={h.title} className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
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
          <h2 className="text-3xl font-black text-[#0A1D3A] mb-2">Suitable For</h2>
          <div className="w-12 h-1 bg-[#B8972E] rounded mb-8" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {["Manufacturing Units", "Warehousing & Logistics", "Light Engineering", "MSME Businesses",
              "Retail Showrooms", "Service Industry Offices", "Institutional Buildings", "Agro-based Industries"].map((a) => (
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
            <h2 className="text-3xl font-black text-white mb-2">Enquire About MIT Township</h2>
            <p className="text-gray-400">Get pricing, plot sizes, and investment details for MIT Mahadev Industrial Township.</p>
          </div>
          <LeadForm />
        </div>
      </section>
    </>
  );
}
