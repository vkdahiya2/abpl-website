import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { MapPin, Phone, ArrowRight, CheckCircle, Home, Factory, Award, Users, Building2 } from "lucide-react";

const residentialProjects = [
  {
    name: "NV City I",
    tag: "Residential Plots",
    location: "Kharkhoda, Haryana",
    highlights: ["DTCP Approved", "Gated Society", "Clear Title", "Wide Roads"],
    href: "/offerings/residential/nv-city-i",
  },
  {
    name: "NV City Sector 10A",
    tag: "Residential Plots",
    location: "Kharkhoda, Haryana",
    highlights: ["Premium Layout", "Park & Amenities", "Legal Clear", "KMP Corridor"],
    href: "/offerings/residential/nv-city-sector-10a",
  },
  {
    name: "NV City II",
    tag: "Sector 6 · Kharkhoda",
    location: "Kharkhoda, Haryana",
    highlights: ["130 sq.yd Plots", "179 sq.yd Plots", "Gated Entry", "DTCP Approved"],
    href: "/offerings/residential/nv-city-ii-sector-6",
    featured: true,
  },
  {
    name: "NV City III",
    tag: "Sector 6 · Kharkhoda",
    location: "Kharkhoda, Haryana",
    highlights: ["Premium Plots", "Gated Society", "Paved Roads", "Clear Title"],
    href: "/offerings/residential/nv-city-iii-sector-6",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-[#1C2B4A] min-h-[92vh] flex items-center overflow-hidden">

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(#C9A444 1px, transparent 1px), linear-gradient(90deg, #C9A444 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />

        {/* Gold gradient blob */}
        <div className="absolute top-0 right-0 w-[45%] h-full bg-gradient-to-bl from-[#C9A444]/15 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A444]/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-[#C9A444]/15 border border-[#C9A444]/30 text-[#C9A444] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              DTCP Approved &nbsp;·&nbsp; 20+ Years of Trust
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.12] mb-6">
              Build Your Future<br />
              <span className="text-gradient-gold">in Kharkhoda.</span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-lg">
              Premium residential plots and industrial township in Haryana's fastest-growing corridor —
              with full legal clarity and over two decades of builder trust behind every project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/offerings/residential/nv-city-ii-sector-6"
                className="btn-gold inline-flex items-center justify-center gap-2 px-7 py-4 text-sm">
                Explore Projects <ArrowRight size={16} />
              </Link>
              <a href="tel:+919999999999"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/25 text-white hover:border-[#C9A444] hover:text-[#C9A444] font-bold px-7 py-4 rounded-xl text-sm transition-all duration-200">
                <Phone size={16} /> Call Now
              </a>
            </div>

            {/* Location chips */}
            <div className="flex flex-wrap gap-2 mt-8">
              {["Kharkhoda", "Sonipat", "Delhi NCR", "KMP Corridor"].map((loc) => (
                <span key={loc} className="inline-flex items-center gap-1.5 bg-white/8 border border-white/15 text-white/70 text-xs px-3 py-1.5 rounded-full">
                  <MapPin size={10} /> {loc}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Lead Form */}
          <div className="animate-slide-right delay-200">
            <div className="relative">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#C9A444]/40 via-transparent to-[#C9A444]/20 blur-sm" />
              <div className="relative bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] overflow-hidden">
                <div className="bg-gradient-to-r from-[#1C2B4A] to-[#243352] px-6 py-4">
                  <p className="text-white font-bold text-base">Get Free Site Details</p>
                  <p className="text-[#C9A444] text-xs mt-0.5">We'll call you back within 2 hours.</p>
                </div>
                <div className="p-6">
                  <LeadForm />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[40px]">
            <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="#FFFFFF"/>
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          ABOUT US
      ══════════════════════════════════════════════════ */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — Content */}
            <div className="animate-slide-left">
              <p className="section-tag">About Us</p>
              <h2 className="text-4xl font-black text-[#1C2B4A] mb-3 leading-tight">
                Two Decades of Building<br />
                <span className="text-[#C9A444]">Homes & Trust.</span>
              </h2>
              <div className="gold-line gold-line-wide mb-6" />

              <p className="text-[#64748B] text-base leading-relaxed mb-6">
                Aashna Buildwell Pvt. Ltd. (ABPL) is a real estate developer with <strong className="text-[#1C2B4A]">over 20 years of experience</strong> in creating premium plotted developments across Haryana and the NCR belt.
              </p>
              <p className="text-[#64748B] text-base leading-relaxed mb-8">
                We believe in one thing above all else — <strong className="text-[#1C2B4A]">trust</strong>. Every project we develop comes with full legal clarity, DTCP approval, and a commitment that extends long after you take possession. Our buyers aren't just customers — they're part of the ABPL family.
              </p>

              <p className="text-[#C9A444] font-bold text-lg italic mb-8">
                "Where Commitment Is Priority"
              </p>

              <Link href="/about"
                className="inline-flex items-center gap-2 text-[#1C2B4A] font-semibold text-sm hover:text-[#C9A444] transition-colors group">
                Learn More About Us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right — Values cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-slide-right delay-200">
              {[
                { icon: <Award size={22} className="text-[#C9A444]" />, title: "20+ Years", desc: "Trusted experience in real estate development across Haryana" },
                { icon: <CheckCircle size={22} className="text-[#C9A444]" />, title: "DTCP Approved", desc: "Every project is government-approved with zero legal risk" },
                { icon: <Building2 size={22} className="text-[#C9A444]" />, title: "Clear Title", desc: "100% transparent documentation and registry in your name" },
                { icon: <Users size={22} className="text-[#C9A444]" />, title: "Buyer First", desc: "No hidden charges. No false promises. Just commitment." },
              ].map((v) => (
                <div key={v.title}
                  className="card-hover bg-white border border-[#E5DECE] rounded-2xl p-6 shadow-sm">
                  <div className="w-11 h-11 rounded-xl bg-[#F8F5EF] flex items-center justify-center mb-4">
                    {v.icon}
                  </div>
                  <h3 className="font-bold text-[#1C2B4A] mb-1.5">{v.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          OUR OFFERINGS — RESIDENTIAL
      ══════════════════════════════════════════════════ */}
      <section id="offerings" className="py-24 bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-16">
            <p className="section-tag">Our Offerings</p>
            <h2 className="text-4xl font-black text-[#1C2B4A] mb-3">
              Projects Designed for Your Future
            </h2>
            <div className="gold-line gold-line-wide mx-auto" />
          </div>

          {/* Residential label */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2.5 bg-white border border-[#E5DECE] px-4 py-2 rounded-xl shadow-sm">
              <div className="w-7 h-7 rounded-lg bg-[#F8F5EF] flex items-center justify-center">
                <Home size={14} className="text-[#C9A444]" />
              </div>
              <span className="text-[#1C2B4A] font-bold text-sm">Residential Projects</span>
            </div>
            <div className="flex-1 h-px bg-[#E5DECE]" />
          </div>

          {/* Residential grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {residentialProjects.map((p, i) => (
              <div key={p.name}
                className={`card-hover bg-white rounded-2xl overflow-hidden border shadow-sm ${
                  p.featured ? "border-[#C9A444] ring-1 ring-[#C9A444]/30" : "border-[#E5DECE]"
                } animate-fade-in-up delay-${(i + 1) * 100}`}>

                {/* Image placeholder / gradient */}
                <div className="relative h-44 bg-gradient-to-br from-[#1C2B4A] to-[#243352] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: "linear-gradient(45deg, #C9A444 25%, transparent 25%, transparent 75%, #C9A444 75%), linear-gradient(45deg, #C9A444 25%, transparent 25%, transparent 75%, #C9A444 75%)",
                      backgroundSize: "20px 20px",
                      backgroundPosition: "0 0, 10px 10px",
                    }} />
                  {/* Placeholder — replace with actual project image */}
                  <div className="text-center relative z-10">
                    <div className="text-5xl mb-2">🏘️</div>
                    <p className="text-[#C9A444] text-xs font-bold tracking-widest uppercase">{p.tag}</p>
                  </div>
                  {p.featured && (
                    <span className="absolute top-3 right-3 bg-[#C9A444] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                      Popular
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-black text-[#1C2B4A] mb-0.5">{p.name}</h3>
                  <p className="text-[#C9A444] text-xs font-medium mb-3 flex items-center gap-1">
                    <MapPin size={10} /> {p.location}
                  </p>

                  <ul className="space-y-1.5 mb-4">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-[#64748B]">
                        <CheckCircle size={11} className="text-[#C9A444] shrink-0" /> {h}
                      </li>
                    ))}
                  </ul>

                  <Link href={p.href}
                    className="inline-flex items-center gap-1.5 text-[#1C2B4A] hover:text-[#C9A444] font-semibold text-xs transition-colors group">
                    View Details <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Industrial label */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2.5 bg-white border border-[#E5DECE] px-4 py-2 rounded-xl shadow-sm">
              <div className="w-7 h-7 rounded-lg bg-[#F8F5EF] flex items-center justify-center">
                <Factory size={14} className="text-[#C9A444]" />
              </div>
              <span className="text-[#1C2B4A] font-bold text-sm">Industrial Projects</span>
            </div>
            <div className="flex-1 h-px bg-[#E5DECE]" />
          </div>

          {/* MIT Card */}
          <div className="card-hover bg-gradient-to-r from-[#1C2B4A] to-[#243352] rounded-2xl overflow-hidden shadow-xl border border-[#243352]">
            <div className="grid lg:grid-cols-5 gap-0">

              {/* Visual */}
              <div className="lg:col-span-2 relative flex items-center justify-center p-12 bg-gradient-to-br from-[#1C2B4A] via-[#243352] to-[#1A2540] overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "linear-gradient(#C9A444 1px, transparent 1px), linear-gradient(90deg, #C9A444 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }} />
                <div className="relative text-center">
                  <div className="text-8xl animate-float">🏭</div>
                  <p className="text-[#C9A444] text-xs font-bold tracking-widest uppercase mt-3">Industrial Township</p>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-3 p-8 sm:p-10 flex flex-col justify-center">
                <span className="inline-block bg-[#C9A444]/20 border border-[#C9A444]/40 text-[#C9A444] text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit uppercase tracking-wide">
                  ⚙ Malwa Industrial Township
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                  MIT — Industrial & Commercial Plots
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-lg">
                  Strategically located industrial and commercial plots built for businesses, manufacturing units, and institutional buyers.
                  Prime highway connectivity, infrastructure-ready, with legal clear titles and excellent growth potential.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-7">
                  {[
                    "Industrial Plots",
                    "Commercial Plots",
                    "Highway Access",
                    "Tax Benefits",
                  ].map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle size={12} className="text-[#C9A444] shrink-0" /> {f}
                    </div>
                  ))}
                </div>

                <Link href="/offerings/industrial/mit-malwa-industrial"
                  className="btn-gold inline-flex items-center gap-2 px-6 py-3 text-sm w-fit">
                  Explore MIT Township <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CONTACT
      ══════════════════════════════════════════════════ */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left — CTA */}
            <div className="animate-slide-left">
              <p className="section-tag">Get In Touch</p>
              <h2 className="text-4xl font-black text-[#1C2B4A] mb-3 leading-tight">
                Ready to Take the<br />
                <span className="text-[#C9A444]">Next Step?</span>
              </h2>
              <div className="gold-line gold-line-wide mb-6" />

              <p className="text-[#64748B] leading-relaxed mb-8">
                Talk to our team today. Site visits available Monday to Saturday, 10 AM – 6 PM.
                We'll help you find the right plot for your needs and budget.
              </p>

              <div className="space-y-4 mb-8">
                <a href="tel:+919999999999"
                  className="flex items-center gap-4 p-4 border border-[#E5DECE] rounded-2xl hover:border-[#C9A444] transition-colors group bg-[#F8F5EF]/50">
                  <div className="w-12 h-12 bg-[#1C2B4A] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#C9A444] transition-colors">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-[#64748B] mb-0.5">Call Us</p>
                    <p className="font-bold text-[#1C2B4A] group-hover:text-[#C9A444] transition-colors">+91 99999 99999</p>
                  </div>
                </a>

                <a href="https://wa.me/919999999999?text=Hi+ABPL,+I%27m+interested+in+your+plots."
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-[#E5DECE] rounded-2xl hover:border-[#25D366] transition-colors group bg-[#F8F5EF]/50">
                  <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.893 3.386 11.815 11.815 0 0 0 12.05 0zm0 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[#64748B] mb-0.5">WhatsApp</p>
                    <p className="font-bold text-[#1C2B4A] group-hover:text-[#25D366] transition-colors">Chat with Us</p>
                  </div>
                </a>
              </div>

              <Link href="/contact"
                className="btn-navy inline-flex items-center gap-2 px-7 py-3.5 text-sm">
                Book a Site Visit <ArrowRight size={15} />
              </Link>
            </div>

            {/* Right — Form */}
            <div className="animate-slide-right delay-200">
              <div className="bg-[#F8F5EF] rounded-2xl p-8 border border-[#E5DECE]">
                <h3 className="font-bold text-[#1C2B4A] text-lg mb-1">Send an Enquiry</h3>
                <p className="text-[#64748B] text-sm mb-6">Our team will get back to you within 24 hours.</p>
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
