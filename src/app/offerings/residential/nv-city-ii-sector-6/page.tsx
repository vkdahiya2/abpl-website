import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { MapPin, CheckCircle, ArrowRight, Phone, Shield, Home, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "NV City II, Sector 6 Kharkhoda — Plots | ABPL, Aashna Buildwell",
  description: "NV City II Sector 6, Kharkhoda — DTCP-approved 130 & 179 sq.yd residential plots on the KMP Expressway. Premium gated society by Aashna Buildwell.",
};

const amenities = [
  "Gated Society with Guard Room",
  "24-Hour Security",
  "Wide Black-Top Internal Roads",
  "Community Park & Children's Area",
  "Underground Drainage System",
  "Overhead Water Tank",
  "Street & Boundary Lighting",
  "Electricity Connection Ready",
  "Well-Demarcated Plot Boundaries",
  "DTCP Approved Layout",
];

const highlights = [
  { label: "Project", value: "NV City II – Sector 6" },
  { label: "Location", value: "Sector 6, Kharkhoda, Haryana" },
  { label: "Plot Sizes", value: "130 sq.yd & 179 sq.yd" },
  { label: "Approval", value: "DTCP Approved" },
  { label: "Society Type", value: "Gated Community" },
  { label: "Expressway", value: "KMP Expressway, Pipli" },
];

const faqItems = [
  { q: "Is NV City II DTCP approved?", a: "Yes, NV City II Sector 6 is fully DTCP-approved by the Haryana government with no legal complications." },
  { q: "What plot sizes are available?", a: "Plots are available in 130 sq.yd and 179 sq.yd configurations to suit different budgets and requirements." },
  { q: "How far is it from Delhi?", a: "The project is approximately 45 minutes from Delhi via the KMP Expressway, passing through Pipli." },
  { q: "Is the title clear?", a: "Yes, all plots have 100% clear legal title with registry done directly in the buyer's name." },
];

export default function NVCityIISector6Page() {
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
              <div className="flex items-center gap-2 mb-2">
                <p className="text-[#C9A444] text-xs font-bold uppercase tracking-widest">Flagship Residential Project</p>
                <span className="bg-[#C9A444] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">★ POPULAR</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-3">
                NV City <span className="text-gradient-gold">II</span><br />
                <span className="text-2xl md:text-3xl font-bold text-gray-200">Sector 6, Kharkhoda</span>
              </h1>
              <p className="text-gray-300 flex items-center gap-2 text-sm">
                <MapPin size={14} className="text-[#C9A444]" /> Pipli Road, Sector 6, Kharkhoda, Haryana
              </p>
            </div>
          </div>

          {/* Quick facts bar */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mt-10">
            {[
              { v: "130 sq.yd", l: "Plot Size" },
              { v: "179 sq.yd", l: "Plot Size" },
              { v: "DTCP", l: "Approved" },
              { v: "Gated", l: "Society" },
              { v: "~45 Min", l: "From Delhi" },
              { v: "Clear", l: "Legal Title" },
            ].map((f) => (
              <div key={f.l} className="bg-white/8 border border-white/12 rounded-xl px-3 py-2.5 text-center">
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
                  <div className="text-8xl mb-3">🏘️</div>
                  <p className="text-[#C9A444] text-xs font-bold tracking-widest uppercase">Project Image Coming Soon</p>
                </div>
              </div>

              {/* Overview */}
              <div>
                <p className="section-tag">Project Overview</p>
                <h2 className="text-2xl font-black text-[#1C2B4A] mb-4">NV City II — Premium Plots on the KMP Expressway</h2>
                <p className="text-[#64748B] leading-relaxed mb-4">
                  NV City II Sector 6 is one of ABPL's flagship residential projects, located right on the KMP Expressway near Pipli, Kharkhoda. Offering 130 sq.yd and 179 sq.yd DTCP-approved plots, this gated society is designed for families and investors who want a premium, legally secure investment in Haryana's fastest-growing corridor.
                </p>
                <p className="text-[#64748B] leading-relaxed">
                  With wide paved roads, a fully functional gated layout, and all essential infrastructure in place, NV City II offers the complete package — prime location, legal clarity, and builder trust built over 20+ years.
                </p>
              </div>

              {/* Highlights grid */}
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
                <h3 className="text-xl font-bold text-[#1C2B4A] mb-5">What You Get</h3>
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
                <p className="section-tag">Location Advantage</p>
                <h3 className="text-xl font-bold text-[#1C2B4A] mb-4">KMP Expressway, Pipli — Kharkhoda</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { point: "On KMP Expressway", icon: "🛣️" },
                    { point: "~45 min from Delhi", icon: "🚗" },
                    { point: "Near Pipli town", icon: "📍" },
                    { point: "Sonipat 20 km away", icon: "🏙️" },
                    { point: "Excellent resale value", icon: "📈" },
                    { point: "Haryana Govt. growth zone", icon: "🏛️" },
                  ].map((l) => (
                    <div key={l.point} className="flex items-center gap-2.5 text-sm text-[#64748B]">
                      <span>{l.icon}</span> {l.point}
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <p className="section-tag">FAQs</p>
                <h3 className="text-xl font-bold text-[#1C2B4A] mb-5">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqItems.map((faq) => (
                    <div key={faq.q} className="border border-[#E5DECE] rounded-xl p-5 bg-[#F8F5EF]">
                      <div className="flex items-start gap-3">
                        <Star size={14} className="text-[#C9A444] shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-[#1C2B4A] text-sm mb-1.5">{faq.q}</p>
                          <p className="text-[#64748B] text-sm leading-relaxed">{faq.a}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-[#F8F5EF] rounded-2xl p-6 border border-[#E5DECE] mb-4">
                  <h3 className="font-bold text-[#1C2B4A] mb-1">Enquire About NV City II</h3>
                  <p className="text-[#64748B] text-xs mb-5">Our team will call you back within 2 hours.</p>
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
          <h2 className="text-2xl font-black text-white mb-3">Book Your Plot at NV City II</h2>
          <p className="text-gray-300 text-sm mb-6">Limited plots available. Site visits Mon–Sat, 10 AM – 6 PM.</p>
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
