import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

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
  title: "Contact Us — ABPL, Aashna Buildwell Pvt. Ltd.",
  description: "Contact ABPL – Aashna Buildwell Pvt. Ltd. Book a free site visit, call us, WhatsApp us, or fill the enquiry form. Our team responds within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1C2B4A] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "linear-gradient(#C9A444 1px, transparent 1px), linear-gradient(90deg, #C9A444 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="section-tag animate-fade-in">Get In Touch</p>
          <h1 className="animate-fade-in-up text-4xl md:text-5xl font-black text-white mb-4">
            Contact Us
          </h1>
          <p className="animate-fade-in-up delay-200 text-gray-300 text-lg max-w-xl mx-auto">
            Talk to our team. Book a free site visit. We&apos;re available Wed–Mon, 10 AM – 6 PM.
          </p>
          <div className="w-16 h-1 bg-[#C9A444] rounded mx-auto mt-5" />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[35px]">
            <path d="M0 50L1440 50L1440 15C1200 50 960 0 720 15C480 30 240 0 0 15L0 50Z" fill="#FFFFFF"/>
          </svg>
        </div>
      </section>

      {/* Main contact section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14">

          {/* Left — contact info */}
          <div className="reveal reveal-left">
            <h2 className="text-2xl font-bold text-[#1C2B4A] mb-7">Get in Touch</h2>

            <div className="space-y-5 mb-8">
              {/* Address */}
              <div className="flex gap-4 items-start p-4 bg-[#F8F5EF] rounded-2xl border border-[#E5DECE]">
                <div className="w-11 h-11 bg-[#1C2B4A] rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-[#C9A444]" />
                </div>
                <div>
                  <p className="font-bold text-[#1C2B4A] text-sm mb-0.5">Office Address</p>
                  <p className="text-[#64748B] text-sm">B-604, Parker White Lily Residency, Sector 27, Sonipat</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start p-4 bg-[#F8F5EF] rounded-2xl border border-[#E5DECE]">
                <div className="w-11 h-11 bg-[#1C2B4A] rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-[#C9A444]" />
                </div>
                <div>
                  <p className="font-bold text-[#1C2B4A] text-sm mb-0.5">Call / WhatsApp</p>
                  <a href="tel:+919630030058" className="text-[#C9A444] font-semibold text-sm hover:underline">
                    +91 9630030058
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start p-4 bg-[#F8F5EF] rounded-2xl border border-[#E5DECE]">
                <div className="w-11 h-11 bg-[#1C2B4A] rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-[#C9A444]" />
                </div>
                <div>
                  <p className="font-bold text-[#1C2B4A] text-sm mb-0.5">Email Us</p>
                  <a href="mailto:mailtoabpl@gmail.com" className="text-[#C9A444] font-semibold text-sm hover:underline">
                    mailtoabpl@gmail.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 items-start p-4 bg-[#F8F5EF] rounded-2xl border border-[#E5DECE]">
                <div className="w-11 h-11 bg-[#1C2B4A] rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-[#C9A444]" />
                </div>
                <div>
                  <p className="font-bold text-[#1C2B4A] text-sm mb-0.5">Office Hours</p>
                  <p className="text-[#64748B] text-sm">Wed – Mon: 10:00 AM – 6:00 PM</p>
                  <p className="text-[#64748B] text-sm">Tuesday: Closed</p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-3">
              <a
                href="https://wa.me/919630030058?text=Hi+ABPL%2C+I+want+to+book+a+site+visit."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-semibold px-5 py-3.5 rounded-xl text-sm hover:bg-[#20B857] transition-colors w-full"
              >
                💬 Book via WhatsApp — +91 9630030058
              </a>
              <a
                href="tel:+919630030058"
                className="flex items-center justify-center gap-3 bg-[#1C2B4A] text-white font-semibold px-5 py-3.5 rounded-xl text-sm hover:bg-[#243352] transition-colors w-full"
              >
                📞 Call Now — +91 9630030058
              </a>
            </div>

            {/* Social links */}
            <div className="mt-8">
              <p className="text-sm font-bold text-[#1C2B4A] mb-3">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { href: "https://www.instagram.com/aashna__buildwell/", icon: <InstagramSVG />, label: "Instagram" },
                  { href: "https://www.linkedin.com/in/aashna-buildwell-2b1612408/", icon: <LinkedInSVG />, label: "LinkedIn" },
                  { href: "https://www.facebook.com/profile.php?id=61590200281882", icon: <FacebookSVG />, label: "Facebook" },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-[#E5DECE] text-[#1C2B4A] hover:border-[#C9A444] hover:text-[#C9A444] px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    {s.icon} {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Enquiry form */}
          <div className="reveal reveal-right delay-200">
            <div className="bg-[#F8F5EF] rounded-2xl p-8 border border-[#E5DECE]">
              <h3 className="font-bold text-[#1C2B4A] text-lg mb-1">Book a Free Site Visit</h3>
              <p className="text-[#64748B] text-sm mb-6">Fill in your details and our team will reach out within 24 hours.</p>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
