"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Home, PhoneCall } from "lucide-react";

const swastikHomes = {
  name: "Swastik Homes",
  sub: "Independent Floors — 2BHK & 3BHK",
  href: "/offerings/residential/swastik-homes",
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);
  const [mobileOfferOpen, setMobileOfferOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoErr, setLogoErr] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-[0_2px_24px_rgba(28,43,74,0.12)]"
          : "bg-white/96 backdrop-blur-md shadow-sm"
      }`}
    >
      {/* Main row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {!logoErr ? (
              <img
                src="/images/abpl-logo.png"
                alt="ABPL — Aashna Buildwell"
                className="w-11 h-11 rounded-full object-cover shadow-md"
                onError={() => setLogoErr(true)}
              />
            ) : (
              <div className="w-11 h-11 rounded-xl bg-[#1C2B4A] flex items-center justify-center shadow-md group-hover:bg-[#C9A444] transition-colors duration-300">
                <span className="text-white font-black text-xs tracking-tight leading-none">ABPL</span>
              </div>
            )}
            <div>
              <p className="text-[#1C2B4A] font-bold text-[15px] leading-tight tracking-tight">Aashna Buildwell</p>
              <p className="text-[#C9A444] text-[10px] leading-tight font-semibold tracking-wide">Where Commitment Is Priority</p>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-0.5">

            <Link href="/"
              className="px-4 py-2 text-[#1C2B4A] hover:text-[#C9A444] text-sm font-medium transition-colors rounded-lg hover:bg-[#F8F5EF]">
              Home
            </Link>

            <Link href="/about"
              className="px-4 py-2 text-[#1C2B4A] hover:text-[#C9A444] text-sm font-medium transition-colors rounded-lg hover:bg-[#F8F5EF]">
              About Us
            </Link>

            {/* Our Offer dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOfferOpen(true)}
              onMouseLeave={() => setOfferOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-4 py-2 text-[#1C2B4A] hover:text-[#C9A444] text-sm font-medium transition-colors rounded-lg hover:bg-[#F8F5EF]"
              >
                Our Offer
                <ChevronDown size={14} className={`transition-transform duration-200 ${offerOpen ? "rotate-180" : ""}`} />
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 w-72 bg-white rounded-2xl
                  shadow-[0_16px_48px_rgba(28,43,74,0.15)] border border-[#E5DECE] py-4
                  transition-all duration-200 ${
                    offerOpen
                      ? "opacity-100 translate-y-1 pointer-events-auto"
                      : "opacity-0 translate-y-3 pointer-events-none"
                  }`}
              >
                <div className="px-4 pb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-md bg-[#F8F5EF] flex items-center justify-center">
                      <Home size={12} className="text-[#C9A444]" />
                    </div>
                    <span className="text-[10px] font-bold text-[#C9A444] uppercase tracking-widest">
                      Residential Projects
                    </span>
                  </div>
                  <Link
                    href={swastikHomes.href}
                    className="flex flex-col px-3 py-3 rounded-xl hover:bg-[#F8F5EF] transition-colors group"
                    onClick={() => setOfferOpen(false)}
                  >
                    <span className="text-[#1C2B4A] font-semibold text-sm group-hover:text-[#C9A444] transition-colors">
                      {swastikHomes.name}
                    </span>
                    <span className="text-xs text-[#64748B] mt-0.5">{swastikHomes.sub}</span>
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/contact"
              className="px-4 py-2 text-[#1C2B4A] hover:text-[#C9A444] text-sm font-medium transition-colors rounded-lg hover:bg-[#F8F5EF]">
              Contact Us
            </Link>

            <Link href="/blog"
              className="px-4 py-2 text-[#1C2B4A] hover:text-[#C9A444] text-sm font-medium transition-colors rounded-lg hover:bg-[#F8F5EF]">
              Blog
            </Link>

            <a
              href="tel:+919630030058"
              className="flex items-center gap-2 btn-gold text-white px-5 py-2.5 text-sm ml-2"
            >
              <PhoneCall size={14} /> Enquire Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-[#F8F5EF] text-[#1C2B4A]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[480px]" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t border-[#E5DECE] px-4 py-4 space-y-1">

          <Link href="/"
            className="flex items-center px-3 py-2.5 text-[#1C2B4A] font-medium rounded-xl hover:bg-[#F8F5EF]"
            onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link href="/about"
            className="flex items-center px-3 py-2.5 text-[#1C2B4A] font-medium rounded-xl hover:bg-[#F8F5EF]"
            onClick={() => setMenuOpen(false)}>
            About Us
          </Link>

          <button
            className="flex items-center justify-between w-full px-3 py-2.5 text-[#1C2B4A] font-medium rounded-xl hover:bg-[#F8F5EF]"
            onClick={() => setMobileOfferOpen(!mobileOfferOpen)}
          >
            <span>Our Offer</span>
            <ChevronDown size={16} className={`transition-transform ${mobileOfferOpen ? "rotate-180" : ""}`} />
          </button>

          {mobileOfferOpen && (
            <div className="ml-3 pl-3 border-l-2 border-[#C9A444] space-y-1">
              <p className="text-[10px] font-bold text-[#C9A444] uppercase tracking-widest pt-1 pb-0.5">
                Residential Projects
              </p>
              <Link
                href={swastikHomes.href}
                className="block px-2 py-2 text-sm text-[#1C2B4A] hover:text-[#C9A444] rounded-lg hover:bg-[#F8F5EF]"
                onClick={() => setMenuOpen(false)}
              >
                {swastikHomes.name}
              </Link>
            </div>
          )}

          <Link href="/contact"
            className="flex items-center px-3 py-2.5 text-[#1C2B4A] font-medium rounded-xl hover:bg-[#F8F5EF]"
            onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>

          <Link href="/blog"
            className="flex items-center px-3 py-2.5 text-[#1C2B4A] font-medium rounded-xl hover:bg-[#F8F5EF]"
            onClick={() => setMenuOpen(false)}>
            Blog
          </Link>

          <a
            href="tel:+919630030058"
            className="flex items-center justify-center gap-2 btn-gold text-white px-4 py-3 mt-2 w-full text-sm"
          >
            <PhoneCall size={16} /> Enquire Now
          </a>
        </div>
      </div>
    </nav>
  );
}
