import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Real Estate Insights | ABPL, Aashna Buildwell",
  description:
    "Expert insights on real estate investment, property buying tips, and market trends from Aashna Buildwell Pvt. Ltd. — 20+ years of real estate expertise.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1C2B4A] py-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "linear-gradient(#C9A444 1px, transparent 1px), linear-gradient(90deg, #C9A444 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#C9A444]/10 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-tag animate-fade-in">Our Blog</p>
          <h1 className="animate-fade-in-up text-4xl md:text-5xl font-black text-white leading-tight mb-5">
            Real Estate Insights<br />
            <span className="text-gradient-gold">from the Experts.</span>
          </h1>
          <div className="gold-line gold-line-wide mx-auto mb-6" />
          <p className="animate-fade-in-up delay-200 text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Investment tips, property buying guides, and market insights from
            Aashna Buildwell&apos;s 20+ years in real estate.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[35px]">
            <path d="M0 50L1440 50L1440 15C1200 50 960 0 720 15C480 30 240 0 0 15L0 50Z" fill="#FFFFFF"/>
          </svg>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="reveal reveal-scale">
            <div className="w-24 h-24 bg-[#F8F5EF] border border-[#E5DECE] rounded-3xl flex items-center justify-center mx-auto mb-8">
              <BookOpen size={40} className="text-[#C9A444]" />
            </div>
            <h2 className="text-3xl font-black text-[#1C2B4A] mb-4">Blog Coming Soon</h2>
            <div className="gold-line gold-line-wide mx-auto mb-6" />
            <p className="text-[#64748B] text-base leading-relaxed mb-4">
              We&apos;re crafting expert articles on real estate investment, property
              market trends, legal documentation guides, and buying tips — drawing
              from over 20 years of first-hand experience in the industry.
            </p>
            <p className="text-[#64748B] text-base leading-relaxed mb-10">
              Check back soon for insights that help you make smarter property decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"
                className="btn-gold inline-flex items-center justify-center gap-2 px-7 py-4 text-sm">
                Talk to Our Experts <ArrowRight size={15} />
              </Link>
              <Link href="/"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#E5DECE] text-[#1C2B4A] hover:border-[#C9A444] hover:text-[#C9A444] font-bold px-7 py-4 rounded-xl text-sm transition-all">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
