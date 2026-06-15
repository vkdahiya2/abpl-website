import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { MapPin, CheckCircle, ArrowRight, Phone, Shield, Factory, Zap, Truck, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "MIT — Malwa Industrial Township | ABPL, Aashna Buildwell",
  description: "MIT Malwa Industrial Township by Aashna Buildwell — Industrial and commercial plots with prime highway connectivity. Ideal for manufacturing, warehousing, and business operations.",
};

const amenities = [
  "Wide Industrial Roads",
  "Heavy Vehicle Access",
  "Electricity Sub-Station",
  "Underground Water Supply",
  "Drainage & Sewage System",
  "Security & Boundary Wall",
  "Street Lighting",
  "Fire Safety Infrastructure",
  "Loading/Unloading Zones",
  "Legal Clear Title",
];

const highlights = [
  { label: "Project", value: "MIT – Malwa Industrial Township" },
  { label: "Type", value: "Industrial & Commercial Plots" },
  { label: "Connectivity", value: "Highway Access" },
  { label: "Legal Status", value: "Clear Title" },
  { label: "Ideal For", value: "Manufacturing, Warehousing, Business" },
  { label: "Infrastructure", value: "Fully Serviced" },
];

const useCases = [
  { icon: <Factory size={20} className="text-[#C9A444]" />, title: "Manufacturing Units", desc: "Ideal for light and medium manufacturing setups with heavy vehicle access." },
  { icon: <Truck size={20} className="text-[#C9A444]" />, title: "Warehousing & Logistics", desc: "Strategic highway location perfect for logistics and storage operations." },
  { icon: <Building2 size={20} className="text-[#C9A444]" />, title: "Commercial Establishments", desc: "Offices, showrooms, and commercial ventures near industrial zones." },
  { icon: <Zap size={20} className="text-[#C9A444]" />, title: "Industrial Facilities", desc: "Power-ready plots for medium to large-scale industrial operations." },
];

export default function MITMalwaIndustrialPage() {
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
              <Factory size={24} className="text-white" />
            </div>
            <div>
              <p className="text-[#C9A444] text-xs font-bold uppercase tracking-widest mb-2">Industrial Project</p>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-3">
                MIT — Malwa<br />
                <span className="text-gradient-gold">Industrial Township</span>
              </h1>
              <p className="text-gray-300 flex items-center gap-2 text-sm">
                <MapPin size={14} className="text-[#C9A444]" /> Haryana — Highway Connected
              </p>
            </div>
          </div>

          {/* Quick fact bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10">
            {[
              { v: "Industrial", l: "Plots" },
              { v: "Commercial", l: "Plots" },
              { v: "Highway", l: "Access" },
              { v: "Clear", l: "Legal Title" },
            ].map((f) => (
              <div key={f.l} className="bg-white/8 border border-white/12 rounded-xl px-4 py-3 text-center">
                <p className="text-[#C9A444] font-bold text-sm">{f.v}</p>
                <p className="text-gray-400 text-[10px] mt-0.5">{f.l}</p>
              </div>
            ))}
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
              <div className="bg-gradient-to-br from-[#1C2B4A] to-[#243352] rounded-2xl h-72 flex items-center justify-center border border-[#E5DECE] overflow-hidden relative">
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "linear-gradient(45deg, #C9A444 25%, transparent 25%, transparent 75%, #C9A444 75%), linear-gradient(45deg, #C9A444 25%, transparent 25%, transparent 75%, #C9A444 75%)",
                    backgroundSize: "20px 20px",
                    backgroundPosition: "0 0, 10px 10px",
                  }} />
                <div className="text-center relative z-10">
                  <div className="text-8xl mb-3">🏭</div>
                  <p className="text-[#C9A444] text-xs font-bold tracking-widest uppercase">Project Image Coming Soon</p>
                </div>
              </div>

              {/* Overview */}
              <div>
                <p className="section-tag">Project Overview</p>
                <h2 className="text-2xl font-black text-[#1C2B4A] mb-4">MIT — Where Business Meets Opportunity</h2>
                <p className="text-[#64748B] leading-relaxed mb-4">
                  Malwa Industrial Township (MIT) is a strategically planned industrial and commercial development by Aashna Buildwell Pvt. Ltd. Designed for businesses, manufacturers, and institutional buyers, MIT offers fully serviced plots with prime highway connectivity and all essential industrial infrastructure.
                </p>
                <p className="text-[#64748B] leading-relaxed">
                  Whether you're establishing a manufacturing unit, logistics hub, or commercial establishment, MIT provides the legal clarity, infrastructure readiness, and connectivity that growing businesses demand. With ABPL's 20+ years of trust behind every transaction, your investment is secure.
                </p>
              </div>

              {/* Use cases */}
              <div>
                <p className="section-tag">Ideal For</p>
                <h3 className="text-xl font-bold text-[#1C2B4A] mb-5">Who Should Invest in MIT?</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {useCases.map((u) => (
                    <div key={u.title} className="card-hover bg-[#F8F5EF] rounded-2xl p-5 border border-[#E5DECE]">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-3 border border-[#E5DECE] shadow-sm">
                        {u.icon}
                      </div>
                      <h4 className="font-bold text-[#1C2B4A] mb-1.5 text-sm">{u.title}</h4>
                      <p className="text-[#64748B] text-xs leading-relaxed">{u.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <p className="section-tag">Project Details</p>
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
                <p className="section-tag">Infrastructure & Amenities</p>
                <h3 className="text-xl font-bold text-[#1C2B4A] mb-5">Industrial Infrastructure</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {amenities.map((a) => (
                    <div key={a} className="flex items-center gap-3 text-sm text-[#64748B]">
                      <CheckCircle size={16} className="text-[#C9A444] shrink-0" />
                      {a}
                    </div>
                  ))}
                </div>
              </div>

              {/* Industrial Advantages */}
              <div className="bg-gradient-to-r from-[#1C2B4A] to-[#243352] rounded-2xl p-7 text-white">
                <p className="text-[#C9A444] text-xs font-bold uppercase tracking-widest mb-3">Industrial Advantages</p>
                <h3 className="text-xl font-bold mb-5">Why Choose MIT for Your Business?</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Highway connectivity for logistics",
                    "Tax benefits in industrial zones",
                    "Power availability & sub-stations",
                    "Proximity to labour markets",
                    "Strong resale & lease potential",
                    "Haryana industrial policy benefits",
                  ].map((a) => (
                    <div key={a} className="flex items-center gap-2.5 text-sm text-gray-200">
                      <CheckCircle size={14} className="text-[#C9A444] shrink-0" /> {a}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-[#F8F5EF] rounded-2xl p-6 border border-[#E5DECE] mb-4">
                  <h3 className="font-bold text-[#1C2B4A] mb-1">Enquire About MIT Township</h3>
                  <p className="text-[#64748B] text-xs mb-5">Our business team will contact you within 24 hours.</p>
                  <LeadForm />
                </div>
                <a href="tel:+919999999999"
                  className="flex items-center justify-center gap-2 btn-navy w-full py-3.5 text-sm">
                  <Phone size={15} /> Call Our Business Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1C2B4A] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-white mb-3">Grow Your Business at MIT</h2>
          <p className="text-gray-300 text-sm mb-6">Industrial and commercial plots available. Connect with our team today.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn-gold inline-flex items-center gap-2 px-6 py-3 text-sm">
              Get in Touch <ArrowRight size={15} />
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
