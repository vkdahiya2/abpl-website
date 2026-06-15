import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { MapPin, CheckCircle, ArrowRight, Phone, Shield, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "NV City Sector 10A, Kharkhoda — Residential Plots | ABPL",
  description: "NV City Sector 10A by Aashna Buildwell — Premium DTCP-approved residential plots in Kharkhoda, Haryana. Gated community with full amenities.",
};

const amenities = [
  "Gated Entry with Security",
  "Wide Internal Roads",
  "Landscaped Parks",
  "Underground Utilities",
  "Street Lighting",
  "Water Supply",
  "Electricity Ready",
  "DTCP Approved Layout",
];

const highlights = [
  { label: "Project", value: "NV City Sector 10A" },
  { label: "Location", value: "Sector 10A, Kharkhoda, Haryana" },
  { label: "Approval", value: "DTCP Approved" },
  { label: "Type", value: "Residential Plotted Development" },
];

export default function NVCitySector10APage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-[#1C2B4A] py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "linear-gradient(#C9A444 1px, transparent 1px), linear-gradient(90deg, #C9A444 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#C9A444]/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#offerings" className="inline-flex items-center gap-1.5 text-[#C9A444] text-sm mb-6 hover:underline">
            ← Back to Offerings
          </Link>
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#C9A444] flex items-center justify-center shrink-0 shadow-lg">
              <Home size={24} className="text-white" />
            </div>
            <div>
              <p className="text-[#C9A444] text-xs font-bold uppercase tracking-widest mb-2">Residential Project</p>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-3">
                NV City <span className="text-gradient-gold">Sector 10A</span>
              </h1>
              <p className="text-gray-300 flex items-center gap-2 text-sm">
                <MapPin size={14} className="text-[#C9A444]" /> Sector 10A, Kharkhoda, Haryana
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[35px]">
            <path d="M0 50L1440 50L1440 15C1200 50 960 0 720 15C480 30 240 0 0 15L0 50Z" fill="#FFFFFF"/>
          </svg>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">

            <div className="lg:col-span-2 space-y-10">

              {/* Image placeholder */}
              <div className="bg-gradient-to-br from-[#243352] to-[#1C2B4A] rounded-2xl h-72 flex items-center justify-center border border-[#E5DECE] overflow-hidden relative">
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "linear-gradient(45deg, #C9A444 25%, transparent 25%, transparent 75%, #C9A444 75%), linear-gradient(45deg, #C9A444 25%, transparent 25%, transparent 75%, #C9A444 75%)",
                    backgroundSize: "20px 20px",
                    backgroundPosition: "0 0, 10px 10px",
                  }} />
                <div className="text-center relative z-10">
                  <div className="text-8xl mb-3">🏡</div>
                  <p className="text-[#C9A444] text-xs font-bold tracking-widest uppercase">Project Image Coming Soon</p>
                </div>
              </div>

              {/* Overview */}
              <div>
                <p className="section-tag">Project Overview</p>
                <h2 className="text-2xl font-black text-[#1C2B4A] mb-4">NV City Sector 10A — Planned Living at Its Best</h2>
                <p className="text-[#64748B] leading-relaxed mb-4">
                  NV City Sector 10A is a thoughtfully planned residential plotted development in Kharkhoda's Sector 10A — a location that combines convenience, connectivity, and long-term investment value.
                </p>
                <p className="text-[#64748B] leading-relaxed">
                  With DTCP approval, full infrastructure, and Aashna Buildwell's commitment to transparency, this project is ideal for families and investors looking to own a plot in the growing KMP Expressway corridor.
                </p>
              </div>

              {/* Highlights */}
              <div>
                <p className="section-tag">Key Details</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {highlights.map((h) => (
                    <div key={h.label} className="flex items-start gap-3 bg-[#F8F5EF] rounded-xl px-4 py-3 border border-[#E5DECE]">
                      <Shield size={14} className="text-[#C9A444] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-[#64748B]">{h.label}</p>
                        <p className="font-semibold text-[#1C2B4A] text-sm">{h.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <p className="section-tag">Amenities</p>
                <h3 className="text-xl font-bold text-[#1C2B4A] mb-5">What's Included</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {amenities.map((a) => (
                    <div key={a} className="flex items-center gap-3 text-sm text-[#64748B]">
                      <CheckCircle size={16} className="text-[#C9A444] shrink-0" />
                      {a}
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="bg-[#F8F5EF] rounded-2xl p-6 border border-[#E5DECE]">
                <p className="section-tag">Location</p>
                <h3 className="text-xl font-bold text-[#1C2B4A] mb-4">Sector 10A, Kharkhoda</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { point: "KMP Expressway access", icon: "🛣️" },
                    { point: "Near Kharkhoda town centre", icon: "🏙️" },
                    { point: "Connectivity to Sonipat", icon: "📍" },
                    { point: "~45 min from Delhi", icon: "🚗" },
                    { point: "Growing social infrastructure", icon: "🏫" },
                    { point: "Excellent future value", icon: "📈" },
                  ].map((l) => (
                    <div key={l.point} className="flex items-center gap-2.5 text-sm text-[#64748B]">
                      <span>{l.icon}</span> {l.point}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-[#F8F5EF] rounded-2xl p-6 border border-[#E5DECE] mb-4">
                  <h3 className="font-bold text-[#1C2B4A] mb-1">Enquire About Sector 10A</h3>
                  <p className="text-[#64748B] text-xs mb-5">We'll get back to you within 2 hours.</p>
                  <LeadForm />
                </div>
                <a href="tel:+919999999999"
                  className="flex items-center justify-center gap-2 btn-navy w-full py-3.5 text-sm">
                  <Phone size={15} /> Call for Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1C2B4A] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-white mb-3">Ready to Book Your Plot?</h2>
          <p className="text-gray-300 text-sm mb-6">Visit the site. See the potential. Secure your future.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn-gold inline-flex items-center gap-2 px-6 py-3 text-sm">
              Book Site Visit <ArrowRight size={15} />
            </Link>
            <Link href="/#offerings" className="inline-flex items-center gap-2 border border-white/25 text-white hover:border-[#C9A444] hover:text-[#C9A444] font-semibold px-6 py-3 rounded-xl text-sm transition-all">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
