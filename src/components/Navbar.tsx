"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, Home, Factory } from "lucide-react";

const residentialProjects = [
  { name: "NV City I", sub: "Kharkhoda, Haryana", href: "/offerings/residential/nv-city-i" },
  { name: "NV City Sector 10A", sub: "Kharkhoda, Haryana", href: "/offerings/residential/nv-city-sector-10a" },
  { name: "NV City II – Sector 6", sub: "Kharkhoda, Haryana", href: "/offerings/residential/nv-city-ii-sector-6" },
  { name: "NV City III – Sector 6", sub: "Kharkhoda, Haryana", href: "/offerings/residential/nv-city-iii-sector-6" },
];

const industrialProjects = [
  { name: "MIT – Malwa Industrial Township", sub: "Industrial & Commercial Plots", href: "/offerings/industrial/mit-malwa-industrial" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [offeringsOpen, setOfferingsOpen] = useState(false);
  const [mobileOfferingsOpen, setMobileOfferingsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-white shadow-[0_2px_20px_rgba(28,43,74,0.10)]"
        : "bg-white/95 backdrop-blur-md shadow-sm"
    }`}>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-[#1C2B4A] flex items-center justify-center shadow-md group-hover:bg-[#C9A444] transition-colors duration-300">
              <span className="text-white font-black text-xs tracking-tight leading-none">ABPL</span>
            </div>
            <div>
              <p className="text-[#1C2B4A] font-bold text-[15px] leading-tight tracking-tight">Aashna Buildwell</p>
              <p className="text-[#C9A444] text-[10px] leading-tight font-medium tracking-wide">Where Commitment Is Priority</p>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">

            <Link href="/"
              className="px-4 py-2 text-[#1C2B4A] hover:text-[#C9A444] text-sm font-medium transition-colors rounded-lg hover:bg-[#F8F5EF]">
              Home
            </Link>

            {/* Our Offerings dropdown */}
            <div className="relative"
              onMouseEnter={() => setOfferingsOpen(true)}
              onMouseLeave={() => setOfferingsOpen(false)}>
              <button className="flex items-center gap-1 px-4 py-2 text-[#1C2B4A] hover:text-[#C9A444] text-sm font-medium transition-colors rounded-lg hover:bg-[#F8F5EF]">
                Our Offerings <ChevronDown size={14} className={`transition-transform duration-200 ${offeringsOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Mega dropdown */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[480px] bg-white rounded-2xl shadow-[0_12px_40px_rgba(28,43,74,0.14)] border border-[#E5DECE] py-4 transition-all duration-200 ${
                offeringsOpen ? "opacity-100 translate-y-1 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
              }`}>

                {/* Residential */}
                <div className="px-4 pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-md bg-[#F8F5EF] flex items-center justify-center">
                      <Home size={12} className="text-[#C9A444]" />
                    </div>
                    <span className="text-[10px] font-bold text-[#C9A444] uppercase tracking-widest">Residential Projects</span>
                  </div>
                  <div className="space-y-0.5">
                    {residentialProjects.map((p) => (
                      <Link key={p.href} href={p.href}
                        className="flex flex-col px-3 py-2.5 rounded-xl hover:bg-[#F8F5EF] transition-colors group">
                        <span className="text-[#1C2B4A] font-semibold text-sm group-hover:text-[#C9A444] transition-colors">{p.name}</span>
                        <span className="text-xs text-[#64748B]">{p.sub}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mx-4 my-1 h-px bg-[#E5DECE]" />

                {/* Industrial */}
                <div className="px-4 pt-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-md bg-[#F8F5EF] flex items-center justify-center">
                      <Factory size={12} className="text-[#C9A444]" />
                    </div>
                    <span className="text-[10px] font-bold text-[#C9A444] uppercase tracking-widest">Industrial Projects</span>
                  </div>
                  {industrialProjects.map((p) => (
                    <Link key={p.href} href={p.href}
                      className="flex flex-col px-3 py-2.5 rounded-xl hover:bg-[#F8F5EF] transition-colors group">
                      <span className="text-[#1C2B4A] font-semibold text-sm group-hover:text-[#C9A444] transition-colors">{p.name}</span>
                      <span className="text-xs text-[#64748B]">{p.sub}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/about"
              className="px-4 py-2 text-[#1C2B4A] hover:text-[#C9A444] text-sm font-medium transition-colors rounded-lg hover:bg-[#F8F5EF]">
              About Us
            </Link>

            <Link href="/contact"
              className="px-4 py-2 text-[#1C2B4A] hover:text-[#C9A444] text-sm font-medium transition-colors rounded-lg hover:bg-[#F8F5EF]">
              Contact
            </Link>

            <a href="tel:+919999999999"
              className="flex items-center gap-2 btn-gold text-white px-5 py-2.5 text-sm ml-2">
              <Phone size={14} /> Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-[#F8F5EF] text-[#1C2B4A]"
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-[600px]" : "max-h-0"}`}>
        <div className="bg-white border-t border-[#E5DECE] px-4 py-4 space-y-1">

          <Link href="/" className="flex items-center px-3 py-2.5 text-[#1C2B4A] font-medium rounded-xl hover:bg-[#F8F5EF]"
            onClick={() => setMenuOpen(false)}>Home</Link>

          {/* Mobile offerings toggle */}
          <button
            className="flex items-center justify-between w-full px-3 py-2.5 text-[#1C2B4A] font-medium rounded-xl hover:bg-[#F8F5EF]"
            onClick={() => setMobileOfferingsOpen(!mobileOfferingsOpen)}>
            <span>Our Offerings</span>
            <ChevronDown size={16} className={`transition-transform ${mobileOfferingsOpen ? "rotate-180" : ""}`} />
          </button>

          {mobileOfferingsOpen && (
            <div className="ml-3 pl-3 border-l-2 border-[#C9A444] space-y-1">
              <p className="text-[10px] font-bold text-[#C9A444] uppercase tracking-widest pt-1 pb-0.5">Residential</p>
              {residentialProjects.map((p) => (
                <Link key={p.href} href={p.href}
                  className="block px-2 py-2 text-sm text-[#1C2B4A] hover:text-[#C9A444] rounded-lg hover:bg-[#F8F5EF]"
                  onClick={() => setMenuOpen(false)}>
                  {p.name}
                </Link>
              ))}
              <p className="text-[10px] font-bold text-[#C9A444] uppercase tracking-widest pt-2 pb-0.5">Industrial</p>
              {industrialProjects.map((p) => (
                <Link key={p.href} href={p.href}
                  className="block px-2 py-2 text-sm text-[#1C2B4A] hover:text-[#C9A444] rounded-lg hover:bg-[#F8F5EF]"
                  onClick={() => setMenuOpen(false)}>
                  {p.name}
                </Link>
              ))}
            </div>
          )}

          <Link href="/about" className="flex items-center px-3 py-2.5 text-[#1C2B4A] font-medium rounded-xl hover:bg-[#F8F5EF]"
            onClick={() => setMenuOpen(false)}>About Us</Link>

          <Link href="/contact" className="flex items-center px-3 py-2.5 text-[#1C2B4A] font-medium rounded-xl hover:bg-[#F8F5EF]"
            onClick={() => setMenuOpen(false)}>Contact</Link>

          <a href="tel:+919999999999"
            className="flex items-center justify-center gap-2 btn-gold text-white px-4 py-3 mt-2 w-full text-sm">
            <Phone size={16} /> Call Now
          </a>
        </div>
      </div>
    </nav>
  );
}
