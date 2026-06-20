import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { MapPin, CheckCircle, ArrowRight, Phone, Shield, Home, Star, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Swastik Homes — 2 & 3 BHK Independent Floors | ABPL, Aashna Buildwell",
  description:
    "Swastik Homes by ABPL — Premium 2BHK and 3BHK independent floors at NV City Sector 6. RERA-approved, clear title, quality construction. Featuring Kharkhoda's finest clubhouse.",
};

const floorTypes = [
  {
    type: "2 BHK Independent Floor",
    features: ["Spacious Living & Dining", "2 Bedrooms with Attached Baths", "Modular Kitchen Space", "Private Parking", "Dedicated Terrace Access"],
  },
  {
    type: "3 BHK Independent Floor",
    features: ["Expansive Living & Dining", "3 Bedrooms — Master with Attached Bath", "Modern Kitchen Layout", "Private Parking", "Premium Finish Options"],
  },
];

const amenities = [
  { label: "Kharkhoda's Luxuriest Clubhouse", premium: true },
  { label: "Swimming Pool", premium: false },
  { label: "Mini Theatre", premium: false },
  { label: "Jogging Track", premium: false },
  { label: "Landscaped Greens", premium: false },
  { label: "Indoor Games Area", premium: false },
  { label: "Kids Play Area", premium: false },
  { label: "In-site Hospital (Coming Soon)", premium: false },
];

const highlights = [
  { label: "Project Name", value: "Swastik Homes" },
  { label: "Project Type", value: "Independent Floors" },
  { label: "Configuration", value: "2 BHK & 3 BHK" },
  { label: "Location", value: "NV City Sector 6" },
  { label: "Approval", value: "RERA Approved" },
  { label: "Developer", value: "ABPL — Aashna Buildwell Pvt. Ltd." },
];

const faqItems = [
  {
    q: "What floor configurations are available at Swastik Homes?",
    a: "Swastik Homes offers premium 2 BHK and 3 BHK independent floors, each with private parking and quality finishes."
  },
  {
    q: "Is Swastik Homes RERA approved?",
    a: "Yes, Swastik Homes is RERA approved with 100% clear title and full legal documentation."
  },
  {
    q: "What world-class amenities does Swastik Homes offer?",
    a: "Swastik Homes features Kharkhoda's finest clubhouse with a Swimming Pool, Mini Theatre, Jogging Track, Landscaped Greens, Indoor Games Area, Kids Play Area, and an In-site Hospital (Coming Soon)."
  },
  {
    q: "Who is the developer?",
    a: "Swastik Homes is developed by Aashna Buildwell Pvt. Ltd. (ABPL) — with over 20 years of trusted real estate development experience."
  },
  {
    q: "How can I book or visit the site?",
    a: "You can book a site visit by calling +91 9630030058, WhatsApping us, or filling the enquiry form on this page. Our team will arrange a visit at your convenience."
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
                2 &amp; 3 BHK Premium<br />
                <span className="text-gradient-gold">Independent Floors</span>
              </h1>
              <p className="text-gray-400 flex items-center gap-2 text-sm mt-1">
                <MapPin size={14} className="text-[#C9A444]" /> NV City Sector 6
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

      {/* ── Main Content ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Left content */}
            <div className="lg:col-span-2 space-y-10">

              {/* Building Image */}
              <div className="rounded-2xl overflow-hidden border border-[#E5DECE] shadow-lg img-reveal">
                <img
                  src="/images/swastik-hero.jpg"
                  alt="Swastik Homes — 2 & 3 BHK Premium Independent Floors at NV City Sector 6"
                  className="w-full h-80 object-cover"
                />
              </div>

              {/* Overview */}
              <div className="reveal reveal-up">
                <p className="section-tag">Project Overview</p>
                <h2 className="text-2xl font-black text-[#1C2B4A] mb-4">
                  Swastik Homes — Where Every Floor Tells a Story
                </h2>
                <p className="text-[#64748B] leading-relaxed mb-4">
                  Swastik Homes is a premium independent floor development by Aashna Buildwell Pvt. Ltd.
                  Offering thoughtfully designed 2 BHK and 3 BHK independent floors, each unit is crafted
                  for families who demand quality, privacy, and lasting value.
                </p>
                <p className="text-[#64748B] leading-relaxed">
                  With RERA approval, clear legal title, and ABPL&apos;s 20+ years of builder trust behind
                  every brick, Swastik Homes represents a truly secure investment in premium residential
                  living at NV City Sector 6.
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

              {/* Amenities */}
              <div className="reveal reveal-up">
                <p className="section-tag">World-Class Amenities</p>
                <h3 className="text-xl font-bold text-[#1C2B4A] mb-5">Premium Lifestyle Features</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {amenities.map((a) => (
                    <div key={a.label} className={`flex items-center gap-3 text-sm p-3 rounded-xl ${
                      a.premium
                        ? "bg-gradient-to-r from-[#1C2B4A] to-[#243352] text-white border border-[#C9A444]/30"
                        : "text-[#64748B] bg-[#F8F5EF] border border-[#E5DECE]"
                    }`}>
                      <CheckCircle size={16} className="text-[#C9A444] shrink-0" />
                      <span className={a.premium ? "font-semibold" : ""}>{a.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Clubhouse Section ── */}
              <div className="reveal reveal-up">
                <div className="bg-gradient-to-br from-[#1C2B4A] to-[#243352] rounded-2xl overflow-hidden border border-[#C9A444]/20">
                  <div className="p-8">
                    <p className="text-[#C9A444] text-xs font-bold uppercase tracking-widest mb-2">Signature Amenity</p>
                    <h3 className="text-2xl font-black text-white mb-3">
                      Kharkhoda&apos;s Finest<br />
                      <span className="text-gradient-gold">Clubhouse Experience</span>
                    </h3>
                    <div className="w-12 h-0.5 bg-[#C9A444] mb-5" />
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      Step into a world of premium leisure at Swastik Homes&apos; exclusive clubhouse —
                      designed for families who value quality, comfort, and community. The finest
                      amenity complex in Kharkhoda, built for a life well-lived.
                    </p>

                    {/* Clubhouse image placeholder */}
                    <div className="bg-white/5 rounded-xl h-52 flex items-center justify-center border border-white/10 mb-6">
                      <div className="text-center">
                        <div className="text-5xl mb-3">🏛️</div>
                        <p className="text-[#C9A444] text-xs font-bold uppercase tracking-widest">Clubhouse Preview Coming Soon</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {["Swimming Pool", "Mini Theatre", "Indoor Games", "Kids Play Area"].map((f) => (
                        <div key={f} className="flex flex-col items-center gap-2 bg-white/8 rounded-xl p-3 text-center border border-white/10">
                          <CheckCircle size={16} className="text-[#C9A444]" />
                          <span className="text-gray-300 text-xs font-medium">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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

              {/* Why ABPL */}
              <div className="reveal reveal-up bg-gradient-to-r from-[#1C2B4A] to-[#243352] rounded-2xl p-7 text-white">
                <p className="text-[#C9A444] text-xs font-bold uppercase tracking-widest mb-3">Why ABPL</p>
                <h3 className="text-xl font-bold mb-5">20+ Years of Builder Trust</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "RERA approved with zero legal risk",
                    "Direct registry in buyer's name",
                    "Quality construction & finishes",
                    "Transparent pricing, no hidden costs",
                    "Post-possession support team",
                    "Trusted by hundreds of families",
                  ].map((a) => (
                    <div key={a} className="flex items-center gap-2.5 text-sm text-gray-200">
                      <CheckCircle size={14} className="text-[#C9A444] shrink-0" />
                      {a}
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
              <div className="sticky top-24 space-y-3">
                <div className="bg-[#F8F5EF] rounded-2xl p-6 border border-[#E5DECE]">
                  <h3 className="font-bold text-[#1C2B4A] mb-1">Enquire About Swastik Homes</h3>
                  <p className="text-[#64748B] text-xs mb-5">Our team will call you back within 2 hours.</p>
                  <LeadForm />
                </div>

                <a href="tel:+919630030058"
                  className="flex items-center justify-center gap-2 btn-navy w-full py-3.5 text-sm">
                  <Phone size={15} /> Call — +91 9630030058
                </a>

                <a
                  href="https://wa.me/919630030058?text=Hi+ABPL%2C+I+am+interested+in+Swastik+Homes+floors.+Please+share+details."
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold py-3.5 rounded-xl text-sm hover:bg-[#20B857] transition-colors"
                >
                  💬 WhatsApp Us
                </a>

                <a
                  href="https://drive.google.com/drive/home"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full border-2 border-[#C9A444] text-[#C9A444] hover:bg-[#C9A444] hover:text-white font-bold py-3.5 rounded-xl text-sm transition-all duration-300"
                >
                  <Download size={15} /> Download Brochure
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
          <p className="text-gray-300 text-sm mb-6">
            Limited units available. Site visits Wed–Mon, 10 AM – 6 PM (Tuesday Closed).
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn-gold inline-flex items-center gap-2 px-6 py-3 text-sm">
              Book Site Visit <ArrowRight size={15} />
            </Link>
            <a
              href="https://drive.google.com/drive/home"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#C9A444] text-[#C9A444] hover:bg-[#C9A444] hover:text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all"
            >
              <Download size={15} /> Download Brochure
            </a>
            <a href="tel:+919630030058"
              className="inline-flex items-center gap-2 border border-white/25 text-white hover:border-[#C9A444] hover:text-[#C9A444] font-semibold px-6 py-3 rounded-xl text-sm transition-all">
              Call +91 9630030058
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
