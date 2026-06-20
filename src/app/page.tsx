import Link from "next/link";
import { Phone, ArrowRight, CheckCircle, Award, Users, Building2, Mail, PhoneCall } from "lucide-react";
import LeadForm from "@/components/LeadForm";

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════
          HERO — Full width, no lead form, premium visual
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-[#1C2B4A] min-h-[90vh] flex items-center overflow-hidden">

        {/* Subtle gold grid */}
        <div className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage: "linear-gradient(#C9A444 1px, transparent 1px), linear-gradient(90deg, #C9A444 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }} />

        {/* Right ambient glow */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#C9A444]/12 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C9A444]/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — Text */}
            <div>
              {/* Badge */}
              <div className="animate-fade-in inline-flex items-center gap-2 bg-[#C9A444]/15 border border-[#C9A444]/30 text-[#C9A444] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-7">
                20+ Years of Trust
              </div>

              <h1 className="animate-fade-in-up text-4xl sm:text-5xl lg:text-[3.6rem] font-black text-white leading-[1.08] mb-6">
                Premium Properties,<br />
                <span className="text-gradient-gold">Built on Trust.</span>
              </h1>

              <p className="animate-fade-in-up delay-200 text-gray-300 text-lg leading-relaxed mb-10 max-w-xl">
                Experience real estate backed by two decades of expertise —
                delivering legally sound, quality-built residential and
                industrial developments you can trust completely.
              </p>

              <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/offerings/residential/swastik-homes"
                  className="btn-gold inline-flex items-center justify-center gap-2 px-7 py-4 text-sm"
                >
                  Explore Projects <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/25 text-white
                             hover:border-[#C9A444] hover:text-[#C9A444] font-bold px-7 py-4 rounded-xl text-sm
                             transition-all duration-300"
                >
                  <PhoneCall size={16} /> Enquire Now
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="animate-fade-in-up delay-400 flex flex-wrap gap-5 mt-10">
                {[
                  { icon: "✦", label: "RERA Approved" },
                  { icon: "✦", label: "Clear Legal Title" },
                  { icon: "✦", label: "20+ Years Experience" },
                ].map((t) => (
                  <div key={t.label} className="flex items-center gap-2 text-white/65 text-sm">
                    <span className="text-[#C9A444] text-xs">{t.icon}</span>
                    {t.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Premium image placeholder */}
            <div className="animate-slide-right delay-200">
              <div className="relative">
                {/* Glow ring */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#C9A444]/30 via-transparent to-[#C9A444]/15 blur-md" />

                {/* Image slot — swap src when image is ready */}
                <div className="relative rounded-3xl overflow-hidden shadow-[0_32px_96px_rgba(0,0,0,0.40)] border border-white/10">
                  {/*
                    TODO: Replace this placeholder div with:
                    <img src="/images/swastik-homes-hero.jpg" alt="Swastik Homes by ABPL"
                         className="w-full h-full object-cover" />
                  */}
                  <div className="bg-gradient-to-br from-[#243352] via-[#1C2B4A] to-[#1A2440] h-[480px] sm:h-[520px] flex flex-col items-center justify-center relative overflow-hidden">
                    {/* Pattern overlay */}
                    <div className="absolute inset-0"
                      style={{
                        backgroundImage: "radial-gradient(circle at 2px 2px, rgba(201,164,68,0.08) 1px, transparent 0)",
                        backgroundSize: "32px 32px",
                      }} />

                    {/* Central content */}
                    <div className="relative z-10 text-center px-8">
                      <div className="w-24 h-24 bg-[#C9A444]/15 border border-[#C9A444]/30 rounded-2xl flex items-center justify-center mx-auto mb-5">
                        <Building2 size={40} className="text-[#C9A444]" />
                      </div>
                      <p className="text-[#C9A444] font-bold text-sm uppercase tracking-widest mb-2">
                        Swastik Homes
                      </p>
                      <p className="text-white/50 text-xs leading-relaxed">
                        Project imagery coming soon
                      </p>
                    </div>

                    {/* Floating accent card */}
                    <div className="absolute bottom-6 left-6 right-6 bg-white/8 backdrop-blur-md border border-white/12 rounded-2xl px-5 py-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-bold text-sm">Swastik Homes</p>
                          <p className="text-[#C9A444] text-xs mt-0.5">Independent Floors — 2BHK & 3BHK</p>
                        </div>
                        <Link href="/offerings/residential/swastik-homes"
                          className="btn-gold px-4 py-2 text-xs flex items-center gap-1.5 whitespace-nowrap">
                          View <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </div>
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
      <section id="about" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — Content */}
            <div className="reveal reveal-left">
              <p className="section-tag">About Us</p>
              <h2 className="text-4xl font-black text-[#1C2B4A] mb-3 leading-tight">
                A Legacy Built on<br />
                <span className="text-[#C9A444]">Trust & Excellence.</span>
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
                that walks with you from booking to possession and beyond. Our buyers aren't
                just customers — they're part of the ABPL family.
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
                Talk to our team today. Site visits available Monday to Saturday,
                10 AM – 6 PM. We'll help you find the right property for your
                needs and budget.
              </p>

              {/* Contact tiles */}
              <div className="space-y-4 mb-8">
                <a href="tel:+919630003058"
                  className="flex items-center gap-4 p-4 border border-[#E5DECE] rounded-2xl hover:border-[#C9A444] transition-colors group bg-white shadow-sm">
                  <div className="w-12 h-12 bg-[#1C2B4A] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#C9A444] transition-colors">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-[#64748B] mb-0.5">Call / WhatsApp</p>
                    <p className="font-bold text-[#1C2B4A] group-hover:text-[#C9A444] transition-colors">
                      96300 03058
                    </p>
                  </div>
                </a>

                <a href="mailto:mail2abpl@gmail.com"
                  className="flex items-center gap-4 p-4 border border-[#E5DECE] rounded-2xl hover:border-[#C9A444] transition-colors group bg-white shadow-sm">
                  <div className="w-12 h-12 bg-[#1C2B4A] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#C9A444] transition-colors">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-[#64748B] mb-0.5">Email Us</p>
                    <p className="font-bold text-[#1C2B4A] group-hover:text-[#C9A444] transition-colors text-sm">
                      mail2abpl@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919630003058?text=Hi+ABPL%2C+I%27m+interested+in+your+properties.+Please+share+details."
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
