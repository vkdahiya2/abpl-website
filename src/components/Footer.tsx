import { Phone, Mail } from "lucide-react";

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

export default function Footer() {
  return (
    <footer className="bg-[#1C2B4A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">

          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#C9A444] flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-xs tracking-tight">ABPL</span>
              </div>
              <div>
                <p className="font-bold text-base leading-tight">Aashna Buildwell Pvt. Ltd.</p>
                <p className="text-[#C9A444] text-xs font-medium italic">&quot;Where Commitment Is Priority&quot;</p>
              </div>
            </div>
          </div>

          {/* Contact + Social */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <a
              href="tel:+919630030058"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#C9A444] transition-colors"
            >
              <Phone size={14} className="text-[#C9A444]" /> +91 9630030058
            </a>
            <a
              href="mailto:mailtoabpl@gmail.com"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#C9A444] transition-colors"
            >
              <Mail size={14} className="text-[#C9A444]" /> mailtoabpl@gmail.com
            </a>
            <div className="flex gap-2 mt-1">
              {[
                { href: "https://www.instagram.com/aashna__buildwell/", icon: <InstagramSVG />, label: "Instagram" },
                { href: "https://www.linkedin.com/in/aashna-buildwell-2b1612408/", icon: <LinkedInSVG />, label: "LinkedIn" },
                { href: "https://www.facebook.com/profile.php?id=61590200281882", icon: <FacebookSVG />, label: "Facebook" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 bg-white/10 hover:bg-[#C9A444] rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105 text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} ABPL – Aashna Buildwell Pvt. Ltd. All rights reserved.</p>
          <p className="text-gray-500">RERA Approved | Premium Real Estate Developer</p>
        </div>
      </div>
    </footer>
  );
}
