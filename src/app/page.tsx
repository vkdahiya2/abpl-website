import Link from "next/link";
import { Phone, ArrowRight, CheckCircle, Award, Users, Building2, Mail } from "lucide-react";
import LeadForm from "@/components/LeadForm";

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════
          HERO — Full-width building background, premium
      ══════════════════════════════════════════════════ */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">

        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/swastik-hero.jpg"
            alt="Premium Properties by Aashna Buildwell"
            className="w-full h-full object-cover hero-img-zoom"
          />
          {/* Dark gradient overlay — left heavy for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E1B30]/95 via-[#1C2B4A]/80 to-[#1C2B4A]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C2B4A]/70 via-transparent to-transparent" />
        </div>

        {/* Decorative gold rings */}
        <div className="absolute top-24 right-24 w-80 h-80 border border-[#C9A444]/10 rounded-full hidden xl:block pointer-events-none" />
        <div className="absolute top-36 right-36 w-52 h-52 border border-[#C9A444]/07 rounded-full hidden xl:block pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36 md:py-44">
          <div className="max-w-2xl">

            {/* Company tag */}
            <div className="animate-fade-in inline-flex items-center gap-2 bg-[#C9A444]/20 border border-[#C9A444]/40 text-[#C9A444] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              ✦ Aashna Buildwell Pvt. Ltd.
            </div>

            <h1 className="animate-fade-in-up text-5xl sm:text-6xl lg:text-[4.2rem] font-black text-white leading-[1.05] mb-6">
              Crafting Premium<br />
              <span className="text-gradient-gold">Homes with Purpose.</span>
            </h1>

            <p className="animate-fade-in-up delay-200 text-gray-300 text-lg leading-relaxed mb-10 max-w-lg">
              Discover 2 &amp; 3 BHK Independent Floors at Swastik Homes — where luxury,
              legal clarity, and 20+ years of builder trust come together at NV City Sector 6.
            </p>

            <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4">
              <Link
                href="/offerings/residential/swastik-homes"
                className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-4 text-sm"
              >
                Explore Swastik Homes <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+919630030058"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:border-[#C9A444] hover:text-[#C9A444] font-bold px-8 py-4 rounded-xl text-sm transition-all duration-300"
              >
                <Phone size={16} /> +91 9630030058
              </a>
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
      <section id="about" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — Content */}
            <div className="reveal reveal-left">
              <p className="section-tag">About Us</p>
              <h2 className="text-4xl font-black text-[#1C2B4A] mb-3 leading-tight">
                A Legacy Built on<br />
                <span className="text-[#C9A444]">Trust &amp; Excellence.</span>
              </h2>
              <div className="gold-line gold-line-wide mb-7" />

              <p className="text-[#64748B] text-base leading-relaxed mb-5">
                Aashna Buildwell Pvt. Ltd. (ABPL) is a trusted real estate developer with{" "}
                <strong className="text-[#1C2B4A]">over 20 years of experience</strong> in delivering premium
                residential and industrial developments. We specialize in RERA-approved plotted
                societies, independent floors, and integrated townships — each crafted with
                meticulous legal clarity and a commitment to lasting quality.
              </p>
              <p className="text-[#64748B] text-base leading-relaxed mb-8">
                We believe that trust is the foundation of great real estate. Every project
                we deliver comes with complete documentation, clear titles, and a team
                that walks with you from booking to possession and beyond. Our buyers
                are part of the ABPL family.
              </p>

              <p className="text-[#C9A444] font-bold text-lg italic mb-8">
                &quot;Where Commitment Is Priority&quot;
              </p>

              <Link href="/about"
                className="inline-flex items-center gap-2 text-[#1C2B4A] font-semibold text-sm hover:text-[#C9A444] transition-colors group">
                Learn More About Us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right — Value cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-reveal">
              {[
                {
                  icon: <Award size={22} className="text-[#C9A444]" />,
                  title: "20+ Years Experience",
                  desc: "Two decades of trusted real estate development with a strong track record of quality and delivery.",
                },
                {
                  icon: <CheckCircle size={22} className="text-[#C9A444]" />,
                  title: "RERA Approved",
                  desc: "All projects comply with RERA guidelines — zero legal complications, complete transparency.",
                },
                {
                  icon: <Building2 size={22} className="text-[#C9A444]" />,
                  title: "Clear Title",
                  desc: "100% transparent documentation with direct registry in the buyer's name.",
                },
                {
                  icon: <Users size={22} className="text-[#C9A444]" />,
                  title: "Buyer First",
                  desc: "No hidden charges. No false promises. Every commitment we make, we keep.",
                },
              ].map((v) => (
                <div key={v.title}
                  className="reveal reveal-scale card-hover shimmer-hover bg-white border border-[#E5DECE] rounded-2xl p-6 shadow-sm">
                  <div className="w-11 h-11 rounded-xl bg-[#F8F5EF] flex items-center justify-center mb-4 border border-[#E5DECE]">
                    {v.icon}
                  </div>
                  <h3 className="font-bold text-[#1C2B4A] mb-1.5 text-sm">{v.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CONTACT — Get In Touch
      ══════════════════════════════════════════════════ */}
      <section id="contact" className="py-28 bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left — CTA info */}
            <div className="reveal reveal-left">
              <p className="section-tag">Get In Touch</p>
              <h2 className="text-4xl font-black text-[#1C2B4A] mb-3 leading-tight">
                Ready to Take the<br />
                <span className="text-[#C9A444]">Next Step?</span>
              </h2>
              <div className="gold-line gold-line-wide mb-7" />

              <p className="text-[#64748B] leading-relaxed mb-8">
                Talk to our team today. Site visits available Wednesday to Monday,
                10 AM – 6 PM (Tuesday Closed). We&apos;ll help you find the right property.
              </p>

              {/* Contact tiles */}
              <div className="space-y-4 mb-8">
                <a href="tel:+919630030058"
                  className="flex items-center gap-4 p-4 border border-[#E5DECE] rounded-2xl hover:border-[#C9A444] transition-colors group bg-white shadow-sm">
                  <div className="w-12 h-12 bg-[#1C2B4A] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#C9A444] transition-colors">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-[#64748B] mb-0.5">Call / WhatsApp</p>
                    <p className="font-bold text-[#1C2B4A] group-hover:text-[#C9A444] transition-colors">
                      +91 9630030058
                    </p>
                  </div>
                </a>

                <a href="mailto:mailtoabpl@gmail.com"
                  className="flex items-center gap-4 p-4 border border-[#E5DECE] rounded-2xl hover:border-[#C9A444] transition-colors group bg-white shadow-sm">
                  <div className="w-12 h-12 bg-[#1C2B4A] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#C9A444] transition-colors">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-[#64748B] mb-0.5">Email Us</p>
                    <p className="font-bold text-[#1C2B4A] group-hover:text-[#C9A444] transition-colors text-sm">
                      mailtoabpl@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919630030058?text=Hi+ABPL%2C+I%27m+interested+in+your+properties.+Please+share+details."
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-[#E5DECE] rounded-2xl hover:border-[#25D366] transition-colors group bg-white shadow-sm">
                  <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.893 3.386 11.815 11.815 0 0 0 12.05 0zm0 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[#64748B] mb-0.5">WhatsApp</p>
                    <p className="font-bold text-[#1C2B4A] group-hover:text-[#25D366] transition-colors">
                      Chat with Us
                    </p>
                  </div>
                </a>
              </div>

              <Link href="/contact"
                className="btn-navy inline-flex items-center gap-2 px-7 py-3.5 text-sm">
                Book a Site Visit <ArrowRight size={15} />
              </Link>
            </div>

            {/* Right — Enquiry form */}
            <div className="reveal reveal-right delay-200">
              <div className="bg-white rounded-2xl p-8 border border-[#E5DECE] shadow-sm">
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
