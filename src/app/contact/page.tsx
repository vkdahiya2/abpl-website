import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { MapPin, Phone, Clock } from "lucide-react";

const InstagramSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const LinkedInSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const FacebookSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export const metadata: Metadata = {
  title: "Contact Us — Book a Site Visit",
  description: "Contact ABPL – Aashna Buildwell Pvt. Ltd. Book a free site visit to NV City Sector 6 or any of our projects. Call us, WhatsApp us, or fill the form.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#0A1D3A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-black text-white mb-3">Contact Us</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Talk to our team. Book a free site visit. We're available Mon–Sat, 10 AM – 6 PM.
          </p>
          <div className="w-14 h-1 bg-[#B8972E] rounded mx-auto mt-4" />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-bold text-[#0A1D3A] mb-6">Get in Touch</h2>
            <div className="space-y-5 mb-8">
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 bg-[#EEF2F7] rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-[#B8972E]" />
                </div>
                <div>
                  <p className="font-bold text-[#0A1D3A] text-sm">Office Address</p>
                  <p className="text-gray-600 text-sm mt-0.5">B-604, Parker White Lily Residency, Sector 27</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 bg-[#EEF2F7] rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-[#B8972E]" />
                </div>
                <div>
                  <p className="font-bold text-[#0A1D3A] text-sm">Call / WhatsApp</p>
                  <a href="tel:+919999999999" className="text-[#B8972E] font-semibold text-sm">+91 99999 99999</a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 bg-[#EEF2F7] rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-[#B8972E]" />
                </div>
                <div>
                  <p className="font-bold text-[#0A1D3A] text-sm">Office Hours</p>
                  <p className="text-gray-600 text-sm mt-0.5">Monday – Saturday: 10:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="space-y-3">
              <a href="https://wa.me/919999999999?text=Hi+ABPL,+I+want+to+book+a+site+visit."
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] text-white font-semibold px-5 py-3.5 rounded-xl text-sm hover:bg-[#20B857] transition-colors w-full justify-center">
                💬 Book via WhatsApp
              </a>
              <a href="tel:+919999999999"
                className="flex items-center gap-3 bg-[#0A1D3A] text-white font-semibold px-5 py-3.5 rounded-xl text-sm hover:bg-[#0D2545] transition-colors w-full justify-center">
                📞 Call Now — +91 99999 99999
              </a>
            </div>

            {/* Social */}
            <div className="mt-8">
              <p className="text-sm font-bold text-[#0A1D3A] mb-3">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { href: "https://instagram.com/aashna_buildwell", icon: <InstagramSVG />, label: "Instagram" },
                  { href: "https://linkedin.com/company/aashna-buildwell", icon: <LinkedInSVG />, label: "LinkedIn" },
                  { href: "https://facebook.com/profile.php?id=61588621825762", icon: <FacebookSVG />, label: "Facebook" },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-gray-200 text-[#0A1D3A] hover:border-[#B8972E] hover:text-[#B8972E] px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    {s.icon} {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Lead form */}
          <LeadForm title="Book a Free Site Visit" subtitle="Choose a project and our team will arrange your visit." />
        </div>
      </section>
    </>
  );
}
