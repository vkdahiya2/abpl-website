import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Plots in Kharkhoda, Sonipat, Gurugram, Noida & Delhi NCR",
  description: "ABPL offers DTCP-approved residential plots in Kharkhoda, Sonipat, Gurugram, Noida & Delhi NCR. Explore location-specific offerings and book your plot today.",
};

const locations = [
  { id: "kharkhoda", city: "Kharkhoda", state: "Haryana", tag: "Core Location", icon: "🏘️", highlight: "Home to NV City Sector 6 — flagship project on KMP Expressway", projects: ["NV City Sector 6"], km: "0 km — On KMP Expressway" },
  { id: "sonipat", city: "Sonipat", state: "Haryana", tag: "High Demand", icon: "🌆", highlight: "Just 20 min from NV City. Established NCR city with strong demand.", projects: ["NV City Sector 6", "Nextra City"], km: "~20 km from project site" },
  { id: "delhi-ncr", city: "Delhi NCR", state: "Delhi / NCR", tag: "Largest Audience", icon: "🏙️", highlight: "Our projects are just 45 minutes from Delhi — ideal for city buyers.", projects: ["NV City Sector 6", "Nextra City", "MIT Township"], km: "~45 min from project site" },
  { id: "gurugram", city: "Gurugram", state: "Haryana", tag: "HNI Investors", icon: "🏢", highlight: "HNI and NRI investors from Gurugram choose ABPL for KMP corridor investment.", projects: ["NV City Sector 6"], km: "~60 min via KMP Expressway" },
  { id: "noida", city: "Noida", state: "Uttar Pradesh", tag: "IT Professionals", icon: "💻", highlight: "Growing investor base from Noida's IT sector seeking land near Delhi.", projects: ["NV City Sector 6", "MIT Township"], km: "~70 min via Delhi" },
];

export default function LocationsPage() {
  return (
    <>
      <section className="bg-[#0A1D3A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#B8972E] font-semibold text-sm uppercase tracking-widest mb-2">Where We Serve</p>
          <h1 className="text-4xl font-black text-white mb-3">Plots Near You</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            From Kharkhoda to Delhi NCR — ABPL offers investment-grade plots across the region's fastest-growing corridors.
          </p>
          <div className="w-14 h-1 bg-[#B8972E] rounded mx-auto mt-4" />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {locations.map((loc) => (
              <div key={loc.id} id={loc.id}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden grid md:grid-cols-[auto_1fr_auto] gap-0 items-stretch">
                {/* Icon panel */}
                <div className="bg-[#EEF2F7] flex items-center justify-center p-8 text-5xl min-w-[100px]">
                  {loc.icon}
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-xl font-black text-[#0A1D3A]">{loc.city}</h2>
                    <span className="bg-[#B8972E]/10 text-[#B8972E] text-xs font-bold px-2 py-0.5 rounded-full">{loc.tag}</span>
                  </div>
                  <p className="text-[#B8972E] text-sm flex items-center gap-1 mb-2">
                    <MapPin size={13} /> {loc.km}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{loc.highlight}</p>
                  <div className="flex flex-wrap gap-2">
                    {loc.projects.map((p) => (
                      <span key={p} className="bg-[#EEF2F7] text-[#0A1D3A] text-xs font-medium px-3 py-1 rounded-full">
                        📦 {p}
                      </span>
                    ))}
                  </div>
                </div>
                {/* CTA */}
                <div className="flex items-center px-6 border-l border-gray-100">
                  <Link href="/contact"
                    className="flex items-center gap-2 bg-[#B8972E] hover:bg-[#9A7D25] text-white font-semibold px-5 py-3 rounded-xl text-sm whitespace-nowrap transition-colors">
                    Enquire <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
