"use client";
import { useState } from "react";
import { Phone, User, MapPin, Send, CheckCircle } from "lucide-react";

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", city: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-4">
        <div className="w-14 h-14 bg-green-50 border border-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="text-green-500" size={28} />
        </div>
        <h3 className="text-lg font-bold text-[#1C2B4A] mb-2">Thank You!</h3>
        <p className="text-[#64748B] text-sm mb-5">
          Our team will call you within 2 business hours.
        </p>
        <a
          href={`https://wa.me/919630030058?text=${encodeURIComponent(
            `Hi ABPL, I just submitted an enquiry. My name is ${form.name}.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-[#20B857] transition-colors"
        >
          Chat on WhatsApp Now
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5">
      {/* Name */}
      <div className="relative">
        <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748B]" />
        <input
          required
          type="text"
          placeholder="Full Name *"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full pl-9 pr-4 py-3 border border-[#E5DECE] rounded-xl text-sm focus:outline-none focus:border-[#C9A444] focus:ring-2 focus:ring-[#C9A444]/20 bg-white text-[#1C2B4A] placeholder:text-gray-400"
        />
      </div>

      {/* Phone */}
      <div className="relative">
        <Phone size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748B]" />
        <input
          required
          type="tel"
          placeholder="Mobile Number *"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          pattern="[6-9][0-9]{9}"
          className="w-full pl-9 pr-4 py-3 border border-[#E5DECE] rounded-xl text-sm focus:outline-none focus:border-[#C9A444] focus:ring-2 focus:ring-[#C9A444]/20 bg-white text-[#1C2B4A] placeholder:text-gray-400"
        />
      </div>

      {/* City */}
      <div className="relative">
        <MapPin size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748B]" />
        <select
          value={form.city}
          onChange={(e) => setForm({ ...form, city: e.target.value })}
          className="w-full pl-9 pr-4 py-3 border border-[#E5DECE] rounded-xl text-sm focus:outline-none focus:border-[#C9A444] focus:ring-2 focus:ring-[#C9A444]/20 bg-white text-[#64748B]"
        >
          <option value="">Your City</option>
          <option>Delhi</option>
          <option>Gurugram</option>
          <option>Noida</option>
          <option>Sonipat</option>
          <option>Kharkhoda</option>
          <option>Rohtak</option>
          <option>Faridabad</option>
          <option>Other</option>
        </select>
      </div>

      {/* Message */}
      <textarea
        placeholder="Any questions? (Optional)"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        rows={3}
        className="w-full px-4 py-3 border border-[#E5DECE] rounded-xl text-sm focus:outline-none focus:border-[#C9A444] focus:ring-2 focus:ring-[#C9A444]/20 bg-white text-[#1C2B4A] placeholder:text-gray-400 resize-none"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 btn-gold disabled:opacity-60 py-3.5 text-sm"
      >
        {loading ? (
          <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4" />
        ) : (
          <><Send size={15} /> Send Enquiry</>
        )}
      </button>

      <p className="text-center text-xs text-gray-400">
        🔒 Your details are safe. We don&apos;t spam.
      </p>
    </form>
  );
}
