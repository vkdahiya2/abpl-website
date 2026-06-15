import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Star, CheckCircle, ArrowRight, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — ABPL, Aashna Buildwell Pvt. Ltd.",
  description: "Aashna Buildwell Pvt. Ltd. — 20+ years of experience in real estate development. DTCP-approved plotted projects in Haryana and Delhi NCR belt.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative bg-[#1C2B4A] py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "linear-gradient(#C9A444 1px, transparent 1px), linear-gradient(90deg, #C9A444 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#C9A444]/10 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-tag">About Us</p>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5">
            Two Decades of Trust.<br />
            <span className="text-gradient-gold">One Promise.</span>
          </h1>
          <div className="gold-line gold-line-wide mx-auto mb-6" />
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Aashna Buildwell Pvt. Ltd. has been building homes, plots, and lasting trust
            for over <strong className="text-white">20 years</strong> across Haryana and the Delhi NCR belt.
          </p>
        </div>

        {/* wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[35px]">
            <path d="M0 50L1440 50L1440 15C1200 50 960 0 720 15C480 30 240 0 0 15L0 50Z" fill="#FFFFFF"/>
          </svg>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="animate-slide-left">
              <p className="section-tag">Who We Are</p>
              <h2 className="text-3xl font-black text-[#1C2B4A] mb-5 leading-tight">
                A Name Built on<br />Commitment & Clarity
              </h2>
              <div className="gold-line mb-6" />
              <p className="text-[#64748B] leading-relaxed mb-5">
                Aashna Buildwell Pvt. Ltd. (ABPL) is a real estate developer with <strong className="text-[#1C2B4A]">over 20 years of experience</strong> in creating premium plotted developments. We specialize in DTCP-approved gated societies and industrial townships across Haryana's most promising growth corridors.
              </p>
              <p className="text-[#64748B] leading-relaxed mb-5">
                Our approach is simple — <strong className="text-[#1C2B4A]">transparency first</strong>. Every project we develop comes with full legal documentation, clear titles, and a team that walks with you from booking to possession.
              </p>
              <p className="text-[#64748B] leading-relaxed">
                We don't just sell land. We help families and investors make one of the most important decisions of their lives — and we take that responsibility seriously.
              </p>
            </div>

            <div className="animate-slide-right delay-200">
              <div className="relative bg-[#F8F5EF] rounded-3xl p-10 border border-[#E5DECE]">
                {/* Experience highlight */}
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-[#1C2B4A] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Award size={36} className="text-[#C9A444]" />
                  </div>
                  <p className="text-5xl font-black text-[#1C2B4A]">20<span className="text-[#C9A444]">+</span></p>
                  <p className="text-[#64748B] font-medium mt-1">Years of Experience</p>
                </div>
                <div className="gold-line gold-line-wide mx-auto mb-8" />
                <p className="text-center text-[#64748B] text-sm leading-relaxed italic">
                  "Where Commitment Is Priority" is not just our tagline — it's the standard every ABPL team member holds themselves to, every single day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className="py-20 bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-tag">What We Stand For</p>
            <h2 className="text-3xl font-black text-[#1C2B4A] mb-3">Our Core Values</h2>
            <div className="gold-line gold-line-wide mx-auto" />
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: <Shield size={28} className="text-[#C9A444]" />,
                title: "Trust First",
                desc: "Every decision we make is guided by our buyer's interest. Transparent pricing, no hidden charges, no false promises.",
              },
              {
                icon: <CheckCircle size={28} className="text-[#C9A444]" />,
                title: "Legal Clarity",
                desc: "DTCP-approved projects with full documentation and clear titles. We handle complexity so you don't have to.",
              },
              {
                icon: <Star size={28} className="text-[#C9A444]" />,
                title: "Long-Term Commitment",
                desc: "From booking to possession and beyond — we stand by every commitment we make to our buyers.",
              },
            ].map((v) => (
              <div key={v.title} className="card-hover bg-white rounded-2xl p-8 border border-[#E5DECE] shadow-sm text-center">
                <div className="w-14 h-14 bg-[#F8F5EF] rounded-2xl flex items-center justify-center mx-auto mb-5 border border-[#E5DECE]">
                  {v.icon}
                </div>
                <h3 className="font-bold text-[#1C2B4A] text-lg mb-3">{v.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-[#1C2B4A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, #C9A444 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }} />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-3">Ready to Invest With Us?</h2>
          <p className="text-gray-300 mb-8">Explore our residential and industrial offerings across Kharkhoda and the NCR belt.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#offerings"
              className="btn-gold inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm">
              View Our Projects <ArrowRight size={16} />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/25 text-white hover:border-[#C9A444] hover:text-[#C9A444] font-bold px-7 py-3.5 rounded-xl text-sm transition-all">
              Book a Site Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
