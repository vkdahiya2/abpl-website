import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { MapPin, CheckCircle, ArrowRight, Phone, Shield, Home, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Swastik Homes — Independent Floors | ABPL, Aashna Buildwell",
  description:
    "Swastik Homes by ABPL — Premium 2BHK and 3BHK independent floors at NV City Sector 6. RERA-approved, clear title, quality construction by Aashna Buildwell Pvt. Ltd.",
};

const floorTypes = [
  {
    type: "2BHK Independent Floor",
    features: ["Spacious Living & Dining", "2 Bedrooms with Attached Baths", "Modular Kitchen Space", "Private Parking", "Dedicated Terrace Access"],
  },
  {
    type: "3BHK Independent Floor",
    features: ["Expansive Living & Dining", "3 Bedrooms — Master with Attached Bath", "Modern Kitchen Layout", "Private Parking", "Premium Finish Options"],
  },
];

const amenities = [
  "RERA Approved Project",
  "Clear Legal Title",
  "Quality Construction",
  "Wide Internal Roads",
  "Gated Community Entry",
  "24-Hour Security",
  "Underground Utilities",
  "Street Lighting",
  "Landscaped Common Areas",
  "Direct Registry",
];

const highlights = [
  { label: "Project Name", value: "Swastik Homes" },
  { label: "Project Type", value: "Independent Floors" },
  { label: "Configuration", value: "2BHK & 3BHK" },
  { label: "Approval", value: "RERA Approved" },
  { label: "Legal Status", value: "100% Clear Title" },
  { label: "Developer", value: "ABPL — Aashna Buildwell Pvt. Ltd." },
];

const faqItems = [
  {
    q: "What floor configurations are available at Swastik Homes?",
    a: "Swastik Homes offers premium 2BHK and 3BHK independent floors, each with private parking and quality finishes."
  },
  {
    q: "Is Swastik Homes RERA approved?",
    a: "Yes, Swastik Homes is RERA approved with 100% clear title and full legal documentation."
  },
  {
    q: "Who is the developer?",
    a: "Swastik Homes is developed by Aashna Buildwell Pvt. Ltd. (ABPL) — with over 20 years of trusted real estate development experience."
  },
  {
    q: "How can I book or visit the site?",
    a: "You can book a site visit by calling 96300 03058, WhatsApping us, or filling the enquiry form on this page. Our team will arrange a visit at your convenience."
  },
];

export default function SwastikHomesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-[#1C2B4A] py-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "linear-gradient(#C9A444 1px, transparent 1px), linear-gradient(90deg, #C9A444 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#C9A444]/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-1.5 text-[#C9A444] text-sm mb-6 hover:underline">
            ← Back to Home
          </Link>

          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#C9A444] flex items-center justify-center shrink-0 shadow-lg">
              <Home size={24} className="text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <p className="text-[#C9A444] text-xs font-bold uppercase tracking-widest">Residential Project</p>
                <span className="bg-[#C9A444] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">RERA APPROVED</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-3">
                Swastik <span className="text-gradient-gold">Homes</span>
              </h1>
              <p className="text-gray-300 text-base">
                Premium Independent Floors — 2BHK & 3BHK
              </p>
              <p className="text-gray-400 flex items-center gap-2 text-sm mt-1">
                <MapPin size={14} className="text-[#C9A444]" /> NV City Sector 6, Kharkhoda
              </p>
            </div>
          </div>

          {/* Quick facts bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10">
            {[
              { v: "2BHK", l: "Floor Type" },
              { v: "3BHK", l: "Floor Type" },
              { v: "RERA", l: "Approved" },
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

      {/* ── Main Content ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Left content */}
            <div className="lg:col-span-2 space-y-10">

              {/* Image placeholder */}
              <div className="bg-gradient-to-br from-[#1C2B4A] to-[#243352] rounded-2xl h-80 flex items-center justify-center border border-[#E5DECE] overflow-hidden relative">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "linear-gradient(45deg, #C9A444 25%, transparent 25%, transparent 75%, #C9A444 75%), linear-gradient(45deg, #C9A444 25%, transparent 25%, transparent 75%, #C9A444 75%)",
                    backgroundSize: "20px 20px",
                    backgroundPosition: "0 0, 10px 10px",
                  }}
                />
                <div className="text-center relative z-10">
                  <div className="text-8xl mb-3">🏠</div>
                  <p className="text-[#C9A444] text-xs font-bold tracking-widest uppercase">Project Image Coming Soon</p>
                </div>
              </div>

              {/* Overview */}
              <div className="reveal reveal-up">
                <p className="section-tag">Project Overview</p>
                <h2 className="text-2xl font-black text-[#1C2B4A] mb-4">
                  Swastik Homes — Where Every Floor Tells a Story
                </h2>
                <p className="text-[#64748B] leading-relaxed mb-4">
                  Swastik Homes is a premium independent floor development by Aashna Buildwell Pvt. Ltd.
                  Offering thoughtfully designed 2BHK and 3BHK independent floors, each unit is crafted
                  for families who demand quality, privacy, and lasting value.
                </p>
                <p className="text-[#64748B] leading-relaxed">
                  With RERA approval, clear legal title, and ABPL&apos;s 20+ years of builder trust behind
                  every brick, Swastik Homes represents a truly secure investment in premium residential
                  living. Each floor offers private parking, quality finishes, and the tranquility of
                  independent living within a well-planned community.
                </p>
              </div>

              {/* Floor types */}
              <div className="reveal reveal-up">
                <p className="section-tag">Floor Configurations</p>
                <h3 className="text-xl font-bold text-[#1C2B4A] mb-5">Available Floor Types</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {floorTypes.map((ft) => (
                    <div key={ft.type} className="card-hover bg-[#F8F5EF] rounded-2xl p-6 border border-[#E5DECE]">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-[#C9A444] rounded-lg flex items-center justify-center">
                          <Home size={16} className="text-white" />
                        </div>
                        <h4 className="font-bold text-[#1C2B4A] text-sm">{ft.type}</h4>
                      </div>
                      <ul className="space-y-2">
                        {ft.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-xs text-[#64748B]">
                            <CheckCircle size={13} className="text-[#C9A444] shrink-0 mt-0.5" /> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="reveal reveal-up">
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
              <div className="reveal reveal-up">
                <p className="section-tag">Amenities & Features</p>
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

              {/* Why ABPL */}
              <div className="reveal reveal-up bg-gradient-to-r from-[#1C2B4A] to-[#243352] rounded-2xl p-7 text-white">
                <p className="text-[#C9A444] text-xs font-bold uppercase tracking-widest mb-3">Why ABPL</p>
                <h3 className="text-xl font-bold mb-5">20+ Years of Builder Trust</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "RERA approved with zero legal risk",
                    "Direct registry in buyer&apos;s name",
                    "Quality construction & finishes",
                    "Transparent pricing, no hidden costs",
                    "Post-possession support team",
                    "Trusted by hundreds of families",
                  ].map((a) => (
                    <div key={a} className="flex items-center gap-2.5 text-sm text-gray-200">
                      <CheckCircle size={14} className="text-[#C9A444] shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: a }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="reveal reveal-up">
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

            {/* Right — Sticky form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-[#F8F5EF] rounded-2xl p-6 border border-[#E5DECE] mb-4">
                  <h3 className="font-bold text-[#1C2B4A] mb-1">Enquire About Swastik Homes</h3>
                  <p className="text-[#64748B] text-xs mb-5">Our team will call you back within 2 hours.</p>
                  <LeadForm />
                </div>
                <a href="tel:+919630003058"
                  className="flex items-center justify-center gap-2 btn-navy w-full py-3.5 text-sm">
                  <Phone size={15} /> Call — 96300 03058
                </a>
                <a
                  href="https://wa.me/919630003058?text=Hi+ABPL%2C+I+am+interested+in+Swastik+Homes+floors.+Please+share+details."
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold py-3.5 rounded-xl text-sm mt-3 hover:bg-[#20B857] transition-colors">
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1C2B4A] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-white mb-3">Secure Your Floor at Swastik Homes</h2>
          <p className="text-gray-300 text-sm mb-6">Limited units available. Site visits Mon–Sat, 10 AM – 6 PM.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn-gold inline-flex items-center gap-2 px-6 py-3 text-sm">
              Book Site Visit <ArrowRight size={15} />
            </Link>
            <a href="tel:+919630003058"
              className="inline-flex items-center gap-2 border border-white/25 text-white hover:border-[#C9A444] hover:text-[#C9A444] font-semibold px-6 py-3 rounded-xl text-sm transition-all">
              Call 96300 03058
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
