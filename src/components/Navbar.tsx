"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function Navbar() {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {!logoErr ? (
              <img
                src="/images/abpl-logo.png"
                alt="ABPL — Aashna Buildwell"
                className="w-11 h-11 rounded-full object-cover"
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

          {/* Right — Phone only */}
          <a
            href="tel:+919630030058"
            className="flex items-center gap-2 btn-gold text-white px-5 py-2.5 text-sm"
          >
            <Phone size={14} /> +91 9630030058
          </a>
        </div>
      </div>
    </nav>
  );
}
