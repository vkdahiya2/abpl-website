import Link from "next/link";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const InstagramSVG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const LinkedInSVG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const FacebookSVG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const YoutubeSVG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#1C2B4A] text-white">

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-[#C9A444] flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-sm tracking-tight">ABPL</span>
              </div>
              <div>
                <p className="font-bold text-lg leading-tight">Aashna Buildwell</p>
                <p className="text-[#C9A444] text-xs font-medium">Pvt. Ltd.</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Over 20 years of trust in real estate. DTCP-approved plotted developments
              across the NCR/Haryana belt.
            </p>
            <p className="text-[#C9A444] font-medium text-sm italic mb-5">
              "Where Commitment Is Priority"
            </p>

            {/* Social Icons */}
            <div className="flex gap-2.5">
              {[
                { href: "https://instagram.com/aashna_buildwell", icon: <InstagramSVG />, label: "Instagram" },
                { href: "https://linkedin.com/company/aashna-buildwell", icon: <LinkedInSVG />, label: "LinkedIn" },
                { href: "https://facebook.com/profile.php?id=61588621825762", icon: <FacebookSVG />, label: "Facebook" },
                { href: "https://youtube.com/@aashnabuildwell", icon: <YoutubeSVG />, label: "YouTube" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-9 h-9 bg-white/10 hover:bg-[#C9A444] rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 text-white">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Our Offerings */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[#C9A444] inline-block" />
              Our Offerings
            </h4>
            <p className="text-[#C9A444] text-[10px] font-bold uppercase tracking-widest mb-2">Residential</p>
            <ul className="space-y-2 mb-5">
              {[
                { label: "NV City I", href: "/offerings/residential/nv-city-i" },
                { label: "NV City Sector 10A", href: "/offerings/residential/nv-city-sector-10a" },
                { label: "NV City II – Sector 6", href: "/offerings/residential/nv-city-ii-sector-6" },
                { label: "NV City III – Sector 6", href: "/offerings/residential/nv-city-iii-sector-6" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="text-gray-300 hover:text-[#C9A444] text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A444]/40 group-hover:bg-[#C9A444] transition-colors" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-[#C9A444] text-[10px] font-bold uppercase tracking-widest mb-2">Industrial</p>
            <ul className="space-y-2">
              <li>
                <Link href="/offerings/industrial/mit-malwa-industrial"
                  className="text-gray-300 hover:text-[#C9A444] text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A444]/40 group-hover:bg-[#C9A444] transition-colors" />
                  MIT – Malwa Industrial Township
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[#C9A444] inline-block" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Contact Us", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="text-gray-300 hover:text-[#C9A444] text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A444]/40 group-hover:bg-[#C9A444] transition-colors" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[#C9A444] inline-block" />
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-gray-300">
                <MapPin size={15} className="text-[#C9A444] shrink-0 mt-0.5" />
                <span className="leading-relaxed">B-604, Parker White Lily Residency, Sector 27, Sonipat</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-300">
                <Clock size={15} className="text-[#C9A444] shrink-0 mt-0.5" />
                <span>Mon – Sat: 10:00 AM – 6:00 PM</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone size={15} className="text-[#C9A444] shrink-0 mt-0.5" />
                <a href="tel:+919999999999" className="text-gray-300 hover:text-[#C9A444] transition-colors">
                  +91 99999 99999
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail size={15} className="text-[#C9A444] shrink-0 mt-0.5" />
                <a href="mailto:info@aashnabuildwell.com" className="text-gray-300 hover:text-[#C9A444] transition-colors">
                  info@aashnabuildwell.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} ABPL – Aashna Buildwell Pvt. Ltd. All rights reserved.</p>
          <p className="text-gray-500">DTCP Approved | Haryana | NCR Belt</p>
        </div>
      </div>
    </footer>
  );
}
