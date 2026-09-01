"use client";

import React, { useState, useEffect } from "react";
import { X, User, Phone, Mail, MapPin, Package } from "lucide-react";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
}

export const ALL_PACKAGES = [
  "50 Mbps - Rs. 7,500/yr (Only Internet)",
  "100 Mbps - Rs. 8,500/yr (Only Internet)",
  "100 Mbps - Rs. 10,500/yr (Internet + IPTV)",
  "200 Mbps - Rs. 10,500/yr (Only Internet)",
  "200 Mbps - Rs. 18,500/2yr (Internet + IPTV)",
  "Skycom IPTV Service (300+ Live Channels)",
  "Custom Fiber Connection Inquiry",
];

export default function InquiryModal({
  isOpen,
  onClose,
  selectedPlan = "",
}: InquiryModalProps) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [packageChoice, setPackageChoice] = useState(ALL_PACKAGES[0]);

  useEffect(() => {
    if (selectedPlan) {
      const match = ALL_PACKAGES.find((p) =>
        p.toLowerCase().includes(selectedPlan.toLowerCase())
      );
      setPackageChoice(match || selectedPlan);
    }
  }, [selectedPlan]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !mobile) return;

    const message = `Hello Abhay Digital & IT Solution!

I would like to submit an inquiry for a new connection:

👤 *Name:* ${name}
📞 *Mobile:* ${mobile}
📧 *Email:* ${email || "N/A"}
📍 *Address:* ${address || "Birgunj"}
📦 *Selected Plan:* ${packageChoice}

Please contact me to proceed with installation. Thank you!`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/9779804268190?text=${encoded}`;
    window.open(whatsappUrl, "_blank");

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      {/* Overlay Backdrop */}
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog Box */}
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-200 relative z-10 animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-[#03183d] text-white p-5 relative border-b-4 border-[#ff5500]">
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-4 right-4 text-slate-300 hover:text-white p-1 rounded-full hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
          
          <h3 className="text-xl font-black uppercase tracking-tight text-white">
            GET NEW CONNECTION
          </h3>
          <p className="text-slate-300 text-xs font-medium mt-1">
            Fill details below to send instant inquiry via WhatsApp
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          
          {/* Selected Package Badge */}
          {packageChoice && (
            <div className="bg-blue-50 border border-blue-200 text-[#0047bb] px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-2">
              <Package className="w-4 h-4 shrink-0 text-[#ff5500]" />
              <span className="truncate">Plan: <strong>{packageChoice}</strong></span>
            </div>
          )}

          {/* Full Name */}
          <div>
            <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm font-semibold rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0047bb]/20 focus:border-[#0047bb] text-slate-800 placeholder-slate-400"
              />
            </div>
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
              Mobile / Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                required
                placeholder="Enter your mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm font-semibold rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0047bb]/20 focus:border-[#0047bb] text-slate-800 placeholder-slate-400"
              />
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm font-semibold rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0047bb]/20 focus:border-[#0047bb] text-slate-800 placeholder-slate-400"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
              Address / Location <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                placeholder="e.g. Birgunj-4, Parsa"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm font-semibold rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0047bb]/20 focus:border-[#0047bb] text-slate-800 placeholder-slate-400"
              />
            </div>
          </div>

          {/* Package Selection */}
          <div>
            <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
              Select Package / Plan
            </label>
            <div className="relative">
              <Package className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <select
                value={packageChoice}
                onChange={(e) => setPackageChoice(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm font-semibold rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0047bb]/20 focus:border-[#0047bb] text-slate-800 appearance-none cursor-pointer"
              >
                {ALL_PACKAGES.map((pkg, i) => (
                  <option key={i} value={pkg}>
                    {pkg}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 border border-slate-300 hover:bg-slate-100 text-slate-700 font-extrabold text-xs uppercase tracking-wider rounded-xl transition cursor-pointer"
            >
              CANCEL
            </button>
            <button
              type="submit"
              className="flex-[2] py-2.5 bg-[#0047bb] hover:bg-[#003799] text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition active:scale-95 cursor-pointer"
            >
              SUBMIT INQUIRY
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
