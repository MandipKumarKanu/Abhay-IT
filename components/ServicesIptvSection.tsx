"use client";

import React, { useState } from "react";
import Image from "next/image";
import InquiryModal from "./InquiryModal";
import {
  Globe,
  Tv,
  Wifi,
  UserPlus,
  Headphones,
  User,
  Phone,
  MapPin,
  Mail,
  Package,
  ShieldCheck,
  Check,
  Radio,
} from "lucide-react";

export default function ServicesIptvSection() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    package: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [iptvModalOpen, setIptvModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile) return;

    const message = `Hello Abhay Digital & IT Solution!\nI want to inquire about a new connection:\n\n👤 *Name:* ${formData.name}\n📞 *Mobile:* ${formData.mobile}\n📧 *Email:* ${formData.email || "N/A"}\n📍 *Address:* ${formData.address || "Birgunj"}\n📦 *Selected Plan:* ${formData.package || "General New Connection"}\n\nPlease contact me to proceed. Thank you!`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/9779804268190?text=${encoded}`;
    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", mobile: "", email: "", address: "", package: "" });
    }, 4000);
  };

  return (
    <section id="services" className="bg-[#f8fafc] py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1500px] mx-auto space-y-5">
        
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* LEFT COLUMN: IPTV Promo Banner + Why Choose Us (8 cols) */}
          <div className="lg:col-span-8 flex flex-col justify-between gap-5">
            
            {/* SKYCOM IPTV Card */}
            <div id="iptv" className="bg-[#001233] bg-gradient-to-r from-[#000d26] via-[#001742] to-[#002266] text-white rounded-2xl p-6 sm:p-7 relative overflow-hidden shadow-md border border-blue-900/40 flex flex-col md:flex-row items-center justify-between gap-6 flex-1">
              
              {/* Left Content */}
              <div className="z-10 flex-1 space-y-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
                      SKYCOM <span className="text-[#ffaa00]">IPTV</span>
                    </h3>
                  </div>
                  <p className="text-[11px] sm:text-[12px] font-extrabold uppercase tracking-wider text-slate-300 mt-1">
                    ENTERTAINMENT AT YOUR FINGERTIPS
                  </p>
                </div>

                {/* Features list */}
                <ul className="space-y-2 text-[12px] sm:text-[13px] font-extrabold text-slate-100">
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#ffaa00] text-[#001233] flex items-center justify-center text-[10px] font-black shrink-0">
                      ✓
                    </span>
                    300+ Live TV Channels
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#ffaa00] text-[#001233] flex items-center justify-center text-[10px] font-black shrink-0">
                      ✓
                    </span>
                    Movies &amp; TV Series (VOD)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#ffaa00] text-[#001233] flex items-center justify-center text-[10px] font-black shrink-0">
                      ✓
                    </span>
                    Sports, News, Kids, Music &amp; More
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#ffaa00] text-[#001233] flex items-center justify-center text-[10px] font-black shrink-0">
                      ✓
                    </span>
                    HD &amp; Full HD Quality
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#ffaa00] text-[#001233] flex items-center justify-center text-[10px] font-black shrink-0">
                      ✓
                    </span>
                    Watch on Smart TV, Mobile, TV Box
                  </li>
                </ul>

                <button
                  onClick={() => setIptvModalOpen(true)}
                  className="mt-2 inline-flex items-center gap-2 bg-[#ffaa00] hover:bg-[#e69900] text-[#001233] font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-md transition transform active:scale-95 cursor-pointer"
                >
                  CHOOSE IPTV PLAN
                </button>
              </div>

              {/* Center Yellow Circle Badge */}
              <div className="z-10 shrink-0 self-center md:self-end">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#ffaa00] text-[#001233] flex flex-col items-center justify-center shadow-xl border-4 border-[#ffaa00]/30 transform md:-translate-x-4">
                  <span className="text-2xl sm:text-3xl font-black leading-none tracking-tight">300+</span>
                  <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider mt-0.5">CHANNELS</span>
                </div>
              </div>

              {/* Right Graphic: Smart TV & Set-Top Box */}
              <div className="relative z-10 w-full md:w-72 h-44 sm:h-52 shrink-0 rounded-xl overflow-hidden shadow-2xl border border-blue-500/20 bg-slate-900/60 flex items-center justify-center">
                <Image
                  src="/images/iptv-box.png"
                  alt="Skycom IPTV Box and Smart TV"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* WHY CHOOSE US? Card */}
            <div id="about" className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-base sm:text-lg font-black text-[#0c2461] uppercase tracking-tight">
                  WHY CHOOSE US?
                </h3>
                <span className="h-[2.5px] w-12 bg-[#f95400] rounded-full" />
              </div>

              {/* 4 Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
                
                {/* Feature 1 */}
                <div className="flex items-center gap-3 p-2.5 rounded-xl border border-slate-100 bg-slate-50/60">
                  <div className="w-10 h-10 rounded-full border-2 border-[#0047bb] text-[#0047bb] flex items-center justify-center shrink-0">
                    <Radio className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[12px] sm:text-[13px] text-[#0c2461] leading-snug">
                      100% Fiber Network
                    </h4>
                    <p className="text-[10px] sm:text-[11px] font-medium text-slate-500 leading-tight">
                      Pure fiber connection with high speed.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-center gap-3 p-2.5 rounded-xl border border-slate-100 bg-slate-50/60">
                  <div className="w-10 h-10 rounded-full border-2 border-[#0047bb] text-[#0047bb] flex items-center justify-center shrink-0 font-black text-lg">
                    Rs
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[12px] sm:text-[13px] text-[#0c2461] leading-snug">
                      Affordable Plans
                    </h4>
                    <p className="text-[10px] sm:text-[11px] font-medium text-slate-500 leading-tight">
                      Best plans at the lowest price.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-center gap-3 p-2.5 rounded-xl border border-slate-100 bg-slate-50/60">
                  <div className="w-10 h-10 rounded-full border-2 border-[#0047bb] text-[#0047bb] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[12px] sm:text-[13px] text-[#0c2461] leading-snug">
                      No Hidden Charges
                    </h4>
                    <p className="text-[10px] sm:text-[11px] font-medium text-slate-500 leading-tight">
                      No hidden charges at all.
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex items-center gap-3 p-2.5 rounded-xl border border-slate-100 bg-slate-50/60">
                  <div className="w-10 h-10 rounded-full border-2 border-[#0047bb] text-[#0047bb] flex items-center justify-center shrink-0">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[12px] sm:text-[13px] text-[#0c2461] leading-snug">
                      Trusted Support
                    </h4>
                    <p className="text-[10px] sm:text-[11px] font-medium text-slate-500 leading-tight">
                      24/7 customer support always with you.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Our Services + Get New Connection Form (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-5">
            
            {/* OUR SERVICES Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm">
              {/* Header */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="h-[2px] w-6 bg-[#f95400] rounded-full" />
                <h3 className="text-base sm:text-lg font-black text-[#0c2461] uppercase tracking-tight">
                  OUR SERVICES
                </h3>
                <span className="h-[2px] w-6 bg-[#f95400] rounded-full" />
              </div>

              {/* 5 Icons Row */}
              <div className="grid grid-cols-5 gap-1.5 text-center">
                
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0047bb] flex items-center justify-center mb-1 border border-blue-100 shadow-xs">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-extrabold text-[#0c2461] leading-tight">
                    Fiber Internet
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0047bb] flex items-center justify-center mb-1 border border-blue-100 shadow-xs">
                    <Tv className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-extrabold text-[#0c2461] leading-tight">
                    IPTV Service
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0047bb] flex items-center justify-center mb-1 border border-blue-100 shadow-xs">
                    <Wifi className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-extrabold text-[#0c2461] leading-tight">
                    Wi-Fi Setup
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0047bb] flex items-center justify-center mb-1 border border-blue-100 shadow-xs">
                    <UserPlus className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-extrabold text-[#0c2461] leading-tight">
                    New Connection
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0047bb] flex items-center justify-center mb-1 border border-blue-100 shadow-xs">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-extrabold text-[#0c2461] leading-tight">
                    Technical Support
                  </span>
                </div>

              </div>
            </div>

            {/* GET NEW CONNECTION Form Card */}
            <div id="new-connection" className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between flex-1">
              
              {/* Header Banner */}
              <div className="bg-[#f95400] text-white text-center py-2.5 px-4 font-black text-sm uppercase tracking-wider">
                GET NEW CONNECTION
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                
                {submitted ? (
                  <div className="my-auto py-8 text-center bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-800">
                    <Check className="w-10 h-10 mx-auto text-emerald-600 mb-2" />
                    <p className="font-extrabold text-sm">Inquiry Sent to WhatsApp!</p>
                    <p className="text-xs text-slate-600 mt-1">Our team will call you shortly.</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-2.5">
                      
                      {/* Name */}
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 text-xs font-semibold rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0047bb]/20 focus:border-[#0047bb] text-slate-800 placeholder-slate-400"
                        />
                      </div>

                      {/* Mobile */}
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          placeholder="Mobile Number *"
                          value={formData.mobile}
                          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 text-xs font-semibold rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0047bb]/20 focus:border-[#0047bb] text-slate-800 placeholder-slate-400"
                        />
                      </div>

                      {/* Email */}
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 text-xs font-semibold rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0047bb]/20 focus:border-[#0047bb] text-slate-800 placeholder-slate-400"
                        />
                      </div>

                      {/* Address */}
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="Your Address"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 text-xs font-semibold rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0047bb]/20 focus:border-[#0047bb] text-slate-800 placeholder-slate-400"
                        />
                      </div>

                      {/* Package Select */}
                      <div className="relative">
                        <Package className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <select
                          value={formData.package}
                          onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 text-xs font-semibold rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0047bb]/20 focus:border-[#0047bb] text-slate-800 appearance-none cursor-pointer"
                        >
                          <option value="">Select Package</option>
                          <option value="50 Mbps - Rs. 7,500/yr (Only Internet)">50 Mbps - Rs. 7,500/yr (Only Net)</option>
                          <option value="100 Mbps - Rs. 8,500/yr (Only Internet)">100 Mbps - Rs. 8,500/yr (Only Net)</option>
                          <option value="100 Mbps - Rs. 10,500/yr (Internet + IPTV)">100 Mbps - Rs. 10,500/yr (Net + IPTV)</option>
                          <option value="200 Mbps - Rs. 10,500/yr (Only Internet)">200 Mbps - Rs. 10,500/yr (Only Net)</option>
                          <option value="200 Mbps - Rs. 18,500/2yr (Internet + IPTV)">200 Mbps - Rs. 18,500/2yr (Net + IPTV)</option>
                          <option value="Skycom IPTV Service (300+ Channels)">Skycom IPTV Service</option>
                        </select>
                      </div>

                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 mt-2 bg-[#0047bb] hover:bg-[#003799] text-white font-black text-xs uppercase tracking-wider rounded-xl shadow transition active:scale-95 cursor-pointer"
                    >
                      SUBMIT INQUIRY
                    </button>
                  </>
                )}

              </form>
            </div>

          </div>

        </div>

      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/9779804268190"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 rounded-full shadow-2xl transition transform hover:scale-110 flex items-center justify-center group"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.155 4.22 4.266-1.119zm11.233-6.425c-.296-.149-1.754-.868-2.025-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.754-.719 2.001-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.568-.347z" />
        </svg>
      </a>

      {/* IPTV Modal */}
      <InquiryModal
        isOpen={iptvModalOpen}
        onClose={() => setIptvModalOpen(false)}
        selectedPlan="Skycom IPTV Service (300+ Live Channels)"
      />
    </section>
  );
}

