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

export default function Footer() {
  return (
    <footer className="bg-[#1C2B4A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* ── Brand column ─────────────────────── */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-[#C9A444] flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-sm tracking-tight">ABPL</span>
              </div>
              <div>
                <p className="font-bold text-lg leading-tight">Aashna Buildwell</p>
                <p className="text-[#C9A444] text-xs font-medium">Pvt. Ltd.</p>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-3 max-w-md">
              Aashna Buildwell Pvt. Ltd. is a trusted real estate developer with over
              20 years of excellence in delivering premium residential and industrial
              developments. Every project is built on legal clarity, quality infrastructure,
              and an unwavering commitment to our buyers.
            </p>

            <p className="text-[#C9A444] font-semibold text-sm italic mb-5">
              &quot;COMMITMENT WITH INTEGRITY&quot;
            </p>

            {/* Social — Instagram, LinkedIn, Facebook */}
            <div className="flex gap-2.5">
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
                  className="w-9 h-9 bg-white/10 hover:bg-[#C9A444] rounded-xl flex items-center justify-center
                             transition-all duration-200 hover:scale-105 text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Contact column ───────────────────── */}
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
                <span className="leading-relaxed">Wed – Mon: 10:00 AM – 6:00 PM<br />Tuesday: Closed</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone size={15} className="text-[#C9A444] shrink-0 mt-0.5" />
                <a href="tel:+919630030058" className="text-gray-300 hover:text-[#C9A444] transition-colors">
                  +91 9630030058
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail size={15} className="text-[#C9A444] shrink-0 mt-0.5" />
                <a href="mailto:mailtoabpl@gmail.com" className="text-gray-300 hover:text-[#C9A444] transition-colors">
                  mailtoabpl@gmail.com
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
          <p className="text-gray-500">RERA Approved | Premium Real Estate Developer</p>
        </div>
      </div>
    </footer>
  );
}
