"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronRight, Home, PhoneCall, Building2 } from "lucide-react";

const categories = [
  {
    id: "residential",
    label: "Residential Project",
    icon: Home,
    projects: [
      { name: "Swastik Homes", sub: "2 & 3 BHK Independent Floors" },
    ],
  },
  {
    id: "commercial",
    label: "Commercial Project",
    icon: Building2,
    projects: [
      { name: "Prime Square", sub: "at Sector 10A" },
    ],
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);
  const [hoveredCat, setHoveredCat] = useState<string | null>(null);
  const [mobileOfferOpen, setMobileOfferOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [logoErr, setLogoErr] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeCat = hoveredCat ? categories.find((c) => c.id === hoveredCat) ?? null : null;

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
              <p className="text-[#C9A444] text-[10px] leading-tight font-semibold tracking-wide">COMMITMENT WITH INTEGRITY</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">

            <Link href="/"
              className="px-4 py-2 text-[#1C2B4A] hover:text-[#C9A444] text-sm font-medium transition-colors rounded-lg hover:bg-[#F8F5EF]">
              Home
            </Link>

            <Link href="/about"
              className="px-4 py-2 text-[#1C2B4A] hover:text-[#C9A444] text-sm font-medium transition-colors rounded-lg hover:bg-[#F8F5EF]">
              About Us
            </Link>

            {/* Our Projects — two-level flyout */}
            <div
              className="relative"
              onMouseEnter={() => setOfferOpen(true)}
              onMouseLeave={() => { setOfferOpen(false); setHoveredCat(null); }}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-[#F8F5EF] ${
                  offerOpen ? "text-[#C9A444] bg-[#F8F5EF]" : "text-[#1C2B4A]"
                }`}
              >
                Our Projects
                <ChevronDown size={14} className={`transition-transform duration-200 ${offerOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Flyout panel */}
              <div
                className={`absolute top-full left-0 mt-1 flex bg-white rounded-2xl
                  shadow-[0_16px_48px_rgba(28,43,74,0.16)] border border-[#E5DECE] overflow-hidden
                  transition-all duration-200 ${
                    offerOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
              >
                {/* Left — categories */}
                <div className={`py-2 ${activeCat ? "border-r border-[#E5DECE]" : ""}`} style={{ minWidth: 190 }}>
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    const active = hoveredCat === cat.id;
                    return (
                      <div
                        key={cat.id}
                        className={`flex items-center justify-between px-4 py-3 cursor-default transition-colors ${
                          active
                            ? "bg-[#F8F5EF] text-[#C9A444]"
                            : "text-[#1C2B4A] hover:bg-[#F8F5EF]"
                        }`}
                        onMouseEnter={() => setHoveredCat(cat.id)}
                      >
                        <div className="flex items-center gap-2">
                          <Icon size={14} className={active ? "text-[#C9A444]" : "text-[#64748B]"} />
                          <span className="text-sm font-medium">{cat.label}</span>
                        </div>
                        <ChevronRight size={12} className={active ? "text-[#C9A444]" : "text-[#CBD5E1]"} />
                      </div>
                    );
                  })}
                </div>

                {/* Right — projects (only appears when a category is hovered) */}
                {activeCat && (
                  <div className="py-3 px-3" style={{ minWidth: 200 }}>
                    <p className="px-2 pt-0.5 pb-2 text-[10px] font-bold text-[#C9A444] uppercase tracking-widest">
                      {activeCat.label}
                    </p>
                    {activeCat.projects.map((proj) => (
                      <div
                        key={proj.name}
                        className="flex flex-col px-3 py-2.5 rounded-xl bg-[#F8F5EF] border border-[#E5DECE] cursor-default"
                      >
                        <span className="text-[#1C2B4A] font-semibold text-sm">{proj.name}</span>
                        <span className="text-xs text-[#64748B] mt-0.5">{proj.sub}</span>
                        <span className="mt-1.5 inline-flex items-center gap-1 text-[10px] text-[#C9A444] font-bold uppercase tracking-wider">
                          <span className="w-3 h-0.5 bg-[#C9A444] rounded-full inline-block" />
                          Coming Soon
                        </span>
                      </div>
                    ))}
                  </div>
                )}
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
          menuOpen ? "max-h-[600px]" : "max-h-0"
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

          {/* Mobile Our Projects accordion */}
          <button
            className="flex items-center justify-between w-full px-3 py-2.5 text-[#1C2B4A] font-medium rounded-xl hover:bg-[#F8F5EF]"
            onClick={() => { setMobileOfferOpen(!mobileOfferOpen); setMobileExpandedCat(null); }}
          >
            <span>Our Projects</span>
            <ChevronDown size={16} className={`transition-transform ${mobileOfferOpen ? "rotate-180" : ""}`} />
          </button>

          {mobileOfferOpen && (
            <div className="ml-3 pl-3 border-l-2 border-[#C9A444] space-y-1 py-1">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isExpanded = mobileExpandedCat === cat.id;
                return (
                  <div key={cat.id}>
                    <button
                      className={`flex items-center justify-between w-full px-3 py-2.5 rounded-xl transition-colors text-left ${
                        isExpanded ? "bg-[#F8F5EF] text-[#C9A444]" : "text-[#1C2B4A] hover:bg-[#F8F5EF]"
                      }`}
                      onClick={() => setMobileExpandedCat(isExpanded ? null : cat.id)}
                    >
                      <div className="flex items-center gap-2">
                        <Icon size={13} className={isExpanded ? "text-[#C9A444]" : "text-[#64748B]"} />
                        <span className="text-sm font-medium">{cat.label}</span>
                      </div>
                      <ChevronDown size={13} className={`transition-transform ${isExpanded ? "rotate-180 text-[#C9A444]" : "text-[#CBD5E1]"}`} />
                    </button>
                    {isExpanded && (
                      <div className="ml-5 mt-1 space-y-1">
                        {cat.projects.map((proj) => (
                          <div
                            key={proj.name}
                            className="px-3 py-2.5 rounded-lg bg-[#F8F5EF] border border-[#E5DECE] cursor-default"
                          >
                            <p className="text-sm font-semibold text-[#1C2B4A]">{proj.name}</p>
                            <p className="text-xs text-[#64748B] mt-0.5">{proj.sub}</p>
                            <p className="text-[10px] text-[#C9A444] font-bold uppercase tracking-wider mt-1">Coming Soon</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
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
