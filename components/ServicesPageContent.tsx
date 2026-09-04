"use client";

import React from "react";
import Image from "next/image";
import { openInquiry } from "@/lib/inquiry";
import {
  ShieldCheck,
  Award,
  UserCheck,
  Clock,
  Camera,
  Moon,
  Smartphone,
  ShieldAlert,
  Wrench,
  HardDrive,
  MonitorCheck,
  RefreshCw,
  Tv,
  Cable,
  Sparkles,
  Zap,
  Home,
  Building2,
  Building,
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowRight,
  ThumbsUp,
  Tag,
  Headphones,
} from "lucide-react";

export default function ServicesPageContent() {
  return (
    <div className="bg-slate-50 text-slate-800 py-10 px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* PAGE HERO HEADER */}
      <section className="max-w-7xl mx-auto text-center space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-[#0047ba] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-[#ff5500]" />
          Abhay Digital &amp; IT Solutions
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#03183d] tracking-tight uppercase">
          Our Professional <span className="text-[#ff5500]">Services</span>
        </h1>
        <p className="max-w-3xl mx-auto text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
          From high-definition CCTV security installation to expert TV wall mounting and safe electrical wiring — 
          we bring certified technicians, high-quality materials, and 100% satisfaction to your home and business in Birgunj &amp; Parsa.
        </p>

        {/* TOP BRAND ADVANTAGES RIBBON */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto pt-4">
          <div className="flex items-center justify-center gap-2 bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
            <ShieldCheck className="w-5 h-5 text-[#0047ba]" />
            <span className="text-xs font-black text-[#03183d] uppercase">Safe &amp; Secure</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
            <Award className="w-5 h-5 text-[#ff5500]" />
            <span className="text-xs font-black text-[#03183d] uppercase">Quality Service</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
            <UserCheck className="w-5 h-5 text-[#0047ba]" />
            <span className="text-xs font-black text-[#03183d] uppercase">Expert Technicians</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
            <Clock className="w-5 h-5 text-[#ff5500]" />
            <span className="text-xs font-black text-[#03183d] uppercase">On Time Service</span>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 1: COMPLETE CCTV SOLUTIONS FLYER
         ========================================== */}
      <section id="cctv" className="max-w-7xl mx-auto bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl">
        
        {/* Banner Top Header */}
        <div className="bg-gradient-to-r from-[#03183d] via-[#052b66] to-[#0047ba] text-white p-6 sm:p-10 relative overflow-hidden">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left CCTV Details */}
            <div className="lg:col-span-7 space-y-5 order-2 lg:order-1">
              <div className="inline-block border-l-4 border-[#ff5500] pl-3">
                <span className="text-[#ffaa00] text-xs font-black uppercase tracking-widest">
                  YOUR SAFETY, OUR PRIORITY
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase mt-1">
                  COMPLETE <span className="text-[#ffaa00]">CCTV</span> SOLUTIONS
                </h2>
              </div>
              <p className="text-slate-200 text-sm sm:text-base font-medium">
                Advanced CCTV systems for your home, office, shop &amp; any property. 
                Keep your premises safe 24/7 with crystal clear recording and remote mobile viewing.
              </p>

              {/* 4 Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
                  <Camera className="w-6 h-6 text-[#ffaa00] shrink-0" />
                  <div>
                    <h3 className="text-xs font-black text-white uppercase">HIGH DEFINITION</h3>
                    <p className="text-[11px] text-slate-300">Video Quality</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
                  <Moon className="w-6 h-6 text-[#ffaa00] shrink-0" />
                  <div>
                    <h3 className="text-xs font-black text-white uppercase">NIGHT VISION</h3>
                    <p className="text-[11px] text-slate-300">Infrared &amp; Color Support</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
                  <Smartphone className="w-6 h-6 text-[#ffaa00] shrink-0" />
                  <div>
                    <h3 className="text-xs font-black text-white uppercase">REMOTE VIEW</h3>
                    <p className="text-[11px] text-slate-300">Anywhere &amp; Anytime</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
                  <ShieldAlert className="w-6 h-6 text-[#ffaa00] shrink-0" />
                  <div>
                    <h3 className="text-xs font-black text-white uppercase">24/7 SECURITY</h3>
                    <p className="text-[11px] text-slate-300">Always Protected</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => openInquiry("Complete CCTV Camera Setup & Installation")}
                  className="bg-[#ff5500] hover:bg-[#e04b00] text-white font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg transition transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
                >
                  GET FREE CCTV QUOTE
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/15 text-xs font-extrabold text-[#ffaa00] tracking-wide uppercase">
                  🛡️ SECURE TODAY, SAFE TOMORROW
                </div>
              </div>
            </div>

            {/* Right Banner Preview Badge */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-md bg-slate-900/90 rounded-2xl border border-white/20 shadow-2xl overflow-hidden group">
                <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                  <Image
                    src="/images/cctv-solutions.jpg"
                    alt="CCTV Security Installation Solutions"
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover group-hover:scale-105 transition duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-center space-y-1">
                    <h3 className="text-sm sm:text-base font-black text-white uppercase tracking-tight drop-shadow">
                      HD Dome &amp; Bullet Cameras
                    </h3>
                    <div className="bg-[#ffaa00] text-[#03183d] font-black text-[11px] py-1.5 px-3 rounded-lg uppercase tracking-wider shadow">
                      WE SECURE WHAT MATTERS TO YOU
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Our CCTV Services Grid (5 Cards) */}
        <div className="p-6 sm:p-10 space-y-6">
          <div className="text-center space-y-1">
            <h3 className="text-xl sm:text-2xl font-black text-[#03183d] uppercase tracking-tight">
              OUR CCTV SERVICES
            </h3>
            <div className="w-16 h-1 bg-[#ff5500] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            {/* Card 1 */}
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl hover:border-[#0047ba] hover:shadow-md transition text-center space-y-3 flex flex-col justify-between">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-[#0047ba] flex items-center justify-center mx-auto">
                <Camera className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-black text-[#03183d] uppercase">CCTV INSTALLATION</h4>
                <p className="text-xs text-slate-600 mt-1">Professional installation for all types of CCTV systems.</p>
              </div>
              <button
                onClick={() => openInquiry("CCTV Installation Service")}
                className="w-full text-[11px] font-black text-[#0047ba] hover:text-[#ff5500] uppercase tracking-wide py-1.5 border border-blue-200 rounded-lg hover:border-[#ff5500] transition cursor-pointer"
              >
                Inquire Now
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl hover:border-[#0047ba] hover:shadow-md transition text-center space-y-3 flex flex-col justify-between">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-[#0047ba] flex items-center justify-center mx-auto">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-black text-[#03183d] uppercase">REPAIR &amp; MAINTENANCE</h4>
                <p className="text-xs text-slate-600 mt-1">Quick repair and regular maintenance for smooth performance.</p>
              </div>
              <button
                onClick={() => openInquiry("CCTV Repair & Maintenance")}
                className="w-full text-[11px] font-black text-[#0047ba] hover:text-[#ff5500] uppercase tracking-wide py-1.5 border border-blue-200 rounded-lg hover:border-[#ff5500] transition cursor-pointer"
              >
                Inquire Now
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl hover:border-[#0047ba] hover:shadow-md transition text-center space-y-3 flex flex-col justify-between">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-[#0047ba] flex items-center justify-center mx-auto">
                <HardDrive className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-black text-[#03183d] uppercase">HARD DISK SETUP</h4>
                <p className="text-xs text-slate-600 mt-1">DVR/NVR setup with proper storage configuration.</p>
              </div>
              <button
                onClick={() => openInquiry("Hard Disk & DVR/NVR Storage Setup")}
                className="w-full text-[11px] font-black text-[#0047ba] hover:text-[#ff5500] uppercase tracking-wide py-1.5 border border-blue-200 rounded-lg hover:border-[#ff5500] transition cursor-pointer"
              >
                Inquire Now
              </button>
            </div>

            {/* Card 4 */}
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl hover:border-[#0047ba] hover:shadow-md transition text-center space-y-3 flex flex-col justify-between">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-[#0047ba] flex items-center justify-center mx-auto">
                <MonitorCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-black text-[#03183d] uppercase">REMOTE ACCESS SETUP</h4>
                <p className="text-xs text-slate-600 mt-1">View your cameras anytime, anywhere on mobile or desktop.</p>
              </div>
              <button
                onClick={() => openInquiry("CCTV Remote Access Mobile Setup")}
                className="w-full text-[11px] font-black text-[#0047ba] hover:text-[#ff5500] uppercase tracking-wide py-1.5 border border-blue-200 rounded-lg hover:border-[#ff5500] transition cursor-pointer"
              >
                Inquire Now
              </button>
            </div>

            {/* Card 5 */}
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl hover:border-[#0047ba] hover:shadow-md transition text-center space-y-3 flex flex-col justify-between">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-[#0047ba] flex items-center justify-center mx-auto">
                <RefreshCw className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-black text-[#03183d] uppercase">SYSTEM UPGRADE</h4>
                <p className="text-xs text-slate-600 mt-1">Upgrade your old system with latest technology and features.</p>
              </div>
              <button
                onClick={() => openInquiry("CCTV System Upgrade")}
                className="w-full text-[11px] font-black text-[#0047ba] hover:text-[#ff5500] uppercase tracking-wide py-1.5 border border-blue-200 rounded-lg hover:border-[#ff5500] transition cursor-pointer"
              >
                Inquire Now
              </button>
            </div>

          </div>

          {/* Why Choose Us Ribbon */}
          <div className="bg-[#03183d] text-white p-4 rounded-2xl flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-black uppercase text-[#ffaa00] tracking-wider shrink-0">
              WHY CHOOSE US?
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#ffaa00]" /> TRUSTED SERVICE</span>
              <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-[#ffaa00]" /> BEST QUALITY PRODUCTS</span>
              <span className="flex items-center gap-1.5"><Tag className="w-4 h-4 text-[#ffaa00]" /> AFFORDABLE PRICING</span>
              <span className="flex items-center gap-1.5"><Headphones className="w-4 h-4 text-[#ffaa00]" /> AFTER SALES SUPPORT</span>
            </div>
          </div>
        </div>

      </section>

      {/* ========================================================
          SECTION 2: PROFESSIONAL TV WALL FITTING & SETUP FLYER
         ======================================================== */}
      <section id="tv-fitting" className="max-w-7xl mx-auto bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl">
        
        {/* Banner Top Header */}
        <div className="bg-gradient-to-r from-[#003899] via-[#0047ba] to-[#0c2461] text-white p-6 sm:p-10 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 order-2 lg:order-1">
              <div className="inline-block border-l-4 border-[#ffaa00] pl-3">
                <span className="text-[#ffaa00] text-xs font-black uppercase tracking-widest">
                  PROFESSIONAL SERVICE • QUALITY WORK • ON TIME SERVICE
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase mt-1">
                  Professional <span className="text-[#ffaa00]">TV WALL FITTING</span> &amp; SETUP SERVICE
                </h2>
              </div>
              <p className="text-slate-100 text-sm sm:text-base font-medium">
                Perfect Installation. Perfect Experience. We fit it right, you enjoy every night! 
                Expert mounting for OLED, QLED, Smart TVs, curved screens, and home theater setups with zero exposed wires.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => openInquiry("Professional TV Wall Fitting & Cable Setup")}
                  className="bg-[#ffaa00] hover:bg-[#e69900] text-[#03183d] font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg transition transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
                >
                  BOOK TV INSTALLATION
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 text-xs font-black text-white tracking-wide uppercase">
                  📺 WE FIT IT RIGHT, YOU ENJOY IT BEST
                </div>
              </div>
            </div>

            {/* Right Graphic Preview */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-md bg-slate-900/90 rounded-2xl border border-white/20 shadow-2xl overflow-hidden group">
                <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                  <Image
                    src="/images/tv-wall-fitting.jpg"
                    alt="Professional TV Wall Fitting & Cable Setup Service"
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-center space-y-1">
                    <h3 className="text-sm sm:text-base font-black text-white uppercase tracking-tight drop-shadow">
                      Universal Wall Mounts &amp; Concealed Wiring
                    </h3>
                    <div className="bg-[#0047ba] text-white font-black text-[11px] py-1.5 px-3 rounded-lg uppercase tracking-wider shadow">
                      100% CUSTOMER SATISFACTION
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Our TV Fitting Services (4 Cards) */}
        <div className="p-6 sm:p-10 space-y-6">
          <div className="text-center space-y-1">
            <h3 className="text-xl sm:text-2xl font-black text-[#03183d] uppercase tracking-tight">
              OUR TV FITTING SERVICES
            </h3>
            <div className="w-16 h-1 bg-[#0047ba] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Card 1 */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl hover:border-[#0047ba] hover:shadow-md transition text-center space-y-3 flex flex-col justify-between">
              <div className="w-14 h-14 rounded-full bg-blue-100 text-[#0047ba] flex items-center justify-center mx-auto">
                <Tv className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-sm font-black text-[#03183d] uppercase">TV WALL FITTING</h4>
                <p className="text-xs text-slate-600 mt-1">Secure and safe TV wall mounting for all sizes.</p>
              </div>
              <button
                onClick={() => openInquiry("TV Wall Mounting Service")}
                className="w-full text-xs font-black text-[#0047ba] hover:text-[#ff5500] uppercase tracking-wide py-2 border border-blue-200 rounded-xl hover:border-[#ff5500] transition cursor-pointer"
              >
                BOOK FITTING
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl hover:border-[#0047ba] hover:shadow-md transition text-center space-y-3 flex flex-col justify-between">
              <div className="w-14 h-14 rounded-full bg-blue-100 text-[#0047ba] flex items-center justify-center mx-auto">
                <Sparkles className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-sm font-black text-[#03183d] uppercase">SETUP FITTING</h4>
                <p className="text-xs text-slate-600 mt-1">Complete setup of Smart TV, sound system &amp; accessories.</p>
              </div>
              <button
                onClick={() => openInquiry("Smart TV & Sound System Setup")}
                className="w-full text-xs font-black text-[#0047ba] hover:text-[#ff5500] uppercase tracking-wide py-2 border border-blue-200 rounded-xl hover:border-[#ff5500] transition cursor-pointer"
              >
                BOOK SETUP
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl hover:border-[#0047ba] hover:shadow-md transition text-center space-y-3 flex flex-col justify-between">
              <div className="w-14 h-14 rounded-full bg-blue-100 text-[#0047ba] flex items-center justify-center mx-auto">
                <Cable className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-sm font-black text-[#03183d] uppercase">CABLE MANAGEMENT</h4>
                <p className="text-xs text-slate-600 mt-1">Neat and clean wiring for a perfect, concealed look.</p>
              </div>
              <button
                onClick={() => openInquiry("TV Cable Management Service")}
                className="w-full text-xs font-black text-[#0047ba] hover:text-[#ff5500] uppercase tracking-wide py-2 border border-blue-200 rounded-xl hover:border-[#ff5500] transition cursor-pointer"
              >
                BOOK MANAGEMENT
              </button>
            </div>

            {/* Card 4 */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl hover:border-[#0047ba] hover:shadow-md transition text-center space-y-3 flex flex-col justify-between">
              <div className="w-14 h-14 rounded-full bg-blue-100 text-[#0047ba] flex items-center justify-center mx-auto">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-sm font-black text-[#03183d] uppercase">SAFETY GUARANTEED</h4>
                <p className="text-xs text-slate-600 mt-1">Strong, secure and long-lasting installation guarantee.</p>
              </div>
              <button
                onClick={() => openInquiry("TV Fitting Safety Inspection")}
                className="w-full text-xs font-black text-[#0047ba] hover:text-[#ff5500] uppercase tracking-wide py-2 border border-blue-200 rounded-xl hover:border-[#ff5500] transition cursor-pointer"
              >
                BOOK INSPECTION
              </button>
            </div>

          </div>

          {/* Highlights Footer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
            <div className="flex items-center gap-2 p-3 bg-blue-50/80 rounded-xl border border-blue-100">
              <UserCheck className="w-5 h-5 text-[#0047ba]" />
              <span className="text-xs font-black text-[#03183d]">EXPERT TECHNICIANS</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-blue-50/80 rounded-xl border border-blue-100">
              <Award className="w-5 h-5 text-[#0047ba]" />
              <span className="text-xs font-black text-[#03183d]">QUALITY MATERIALS</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-blue-50/80 rounded-xl border border-blue-100">
              <Clock className="w-5 h-5 text-[#0047ba]" />
              <span className="text-xs font-black text-[#03183d]">ON TIME COMPLETION</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-blue-50/80 rounded-xl border border-blue-100">
              <ThumbsUp className="w-5 h-5 text-[#0047ba]" />
              <span className="text-xs font-black text-[#03183d]">100% SATISFACTION</span>
            </div>
          </div>
        </div>

      </section>

      {/* ========================================================
          SECTION 3: ELECTRICITY WIRING SERVICES FLYER
         ======================================================== */}
      <section id="electrical-wiring" className="max-w-7xl mx-auto bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl">
        
        {/* Banner Top Header */}
        <div className="bg-gradient-to-r from-[#03183d] via-[#052352] to-[#ff5500] text-white p-6 sm:p-10 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 order-2 lg:order-1">
              <div className="inline-block border-l-4 border-[#ffaa00] pl-3">
                <span className="text-[#ffaa00] text-xs font-black uppercase tracking-widest">
                  SAFE • RELIABLE • PROFESSIONAL
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase mt-1">
                  ELECTRICITY <span className="text-[#ffaa00]">WIRING</span> SERVICES
                </h2>
              </div>
              <p className="text-slate-100 text-sm sm:text-base font-medium">
                Safe wiring for a brighter and better tomorrow. 
                Complete electrical distribution, circuit breaker setup, lighting, and safety grounding for homes, offices, and commercial buildings.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => openInquiry("Electricity Wiring Service (Home/Office/Building)")}
                  className="bg-[#ffaa00] hover:bg-[#e69900] text-[#03183d] font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg transition transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
                >
                  REQUEST ELECTRICIAN
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 text-xs font-black text-[#ffaa00] tracking-wide uppercase">
                  ⚡ POWERING YOUR LIFE SAFELY
                </div>
              </div>
            </div>

            {/* Right Graphic Preview */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-md bg-slate-900/90 rounded-2xl border border-white/20 shadow-2xl overflow-hidden group">
                <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                  <Image
                    src="/images/electrical-wiring.jpg"
                    alt="Professional Electricity Wiring Services"
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-center space-y-1">
                    <h3 className="text-sm sm:text-base font-black text-white uppercase tracking-tight drop-shadow">
                      Certified Electrical Panel &amp; Conduit Setup
                    </h3>
                    <div className="bg-[#ff5500] text-white font-black text-[11px] py-1.5 px-3 rounded-lg uppercase tracking-wider shadow">
                      100% SAFETY GUARANTEE
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Our Electrical Wiring Services (3 Cards: Home, Office, Building) */}
        <div className="p-6 sm:p-10 space-y-6">
          <div className="text-center space-y-1">
            <h3 className="text-xl sm:text-2xl font-black text-[#03183d] uppercase tracking-tight">
              OUR ELECTRICAL WIRING SERVICES
            </h3>
            <div className="w-16 h-1 bg-[#ff5500] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Sector 1: HOME */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-[#ff5500] hover:shadow-lg transition space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-orange-100 text-[#ff5500] flex items-center justify-center shadow-sm">
                  <Home className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-black text-[#03183d] uppercase">HOME WIRING</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Safe and neat wiring for your home with reliable and long-lasting solutions. 
                  Includes room wiring, inverter/UPS connections, switchboard fitting &amp; decorative lighting.
                </p>
              </div>
              <button
                onClick={() => openInquiry("Home Electrical Wiring Service")}
                className="w-full py-2.5 bg-[#03183d] hover:bg-[#0047ba] text-white font-black text-xs uppercase tracking-wider rounded-xl transition cursor-pointer"
              >
                BOOK HOME WIRING
              </button>
            </div>

            {/* Sector 2: OFFICE */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-[#ff5500] hover:shadow-lg transition space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 text-[#0047ba] flex items-center justify-center shadow-sm">
                  <Building2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-black text-[#03183d] uppercase">OFFICE WIRING</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Efficient electrical wiring for offices ensuring productivity and safety. 
                  Includes server room power, workstation sockets, surge protection &amp; emergency lighting.
                </p>
              </div>
              <button
                onClick={() => openInquiry("Office Electrical Wiring Service")}
                className="w-full py-2.5 bg-[#03183d] hover:bg-[#0047ba] text-white font-black text-xs uppercase tracking-wider rounded-xl transition cursor-pointer"
              >
                BOOK OFFICE WIRING
              </button>
            </div>

            {/* Sector 3: BUILDING */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-[#ff5500] hover:shadow-lg transition space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-orange-100 text-[#ff5500] flex items-center justify-center shadow-sm">
                  <Building className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-black text-[#03183d] uppercase">BUILDING WIRING</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Complete wiring solutions for all types of multi-story buildings with high safety standards. 
                  Includes main distribution board, 3-phase load calculation &amp; earthing protection.
                </p>
              </div>
              <button
                onClick={() => openInquiry("Building Electrical Wiring Service")}
                className="w-full py-2.5 bg-[#03183d] hover:bg-[#0047ba] text-white font-black text-xs uppercase tracking-wider rounded-xl transition cursor-pointer"
              >
                BOOK BUILDING WIRING
              </button>
            </div>

          </div>

          {/* 6 Key Highlights Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 pt-2">
            <div className="flex flex-col items-center justify-center text-center p-3 bg-orange-50 rounded-xl border border-orange-100">
              <CheckCircle2 className="w-5 h-5 text-[#ff5500] mb-1" />
              <span className="text-[11px] font-black text-[#03183d]">100% SAFETY GUARANTEE</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-3 bg-orange-50 rounded-xl border border-orange-100">
              <Award className="w-5 h-5 text-[#ff5500] mb-1" />
              <span className="text-[11px] font-black text-[#03183d]">QUALITY MATERIALS</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-3 bg-orange-50 rounded-xl border border-orange-100">
              <UserCheck className="w-5 h-5 text-[#ff5500] mb-1" />
              <span className="text-[11px] font-black text-[#03183d]">EXPERT TECHNICIANS</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-3 bg-orange-50 rounded-xl border border-orange-100">
              <Clock className="w-5 h-5 text-[#ff5500] mb-1" />
              <span className="text-[11px] font-black text-[#03183d]">ON TIME COMPLETION</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-3 bg-orange-50 rounded-xl border border-orange-100">
              <Tag className="w-5 h-5 text-[#ff5500] mb-1" />
              <span className="text-[11px] font-black text-[#03183d]">AFFORDABLE PRICING</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-3 bg-orange-50 rounded-xl border border-orange-100">
              <Headphones className="w-5 h-5 text-[#ff5500] mb-1" />
              <span className="text-[11px] font-black text-[#03183d]">AFTER SALES SUPPORT</span>
            </div>
          </div>
        </div>

      </section>

      {/* ========================================================
          SECTION 4: CONTACT & LOCATION FOOTER BAR
         ======================================================== */}
      <section className="max-w-7xl mx-auto bg-[#03183d] text-white p-8 rounded-3xl border border-blue-900 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-2xl font-black uppercase text-white tracking-tight">
            Need Custom Technical Support or Quick Installation?
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm">
            Contact Abhay Digital &amp; IT Solution office directly in Birgunj-4, Parsa, Nepal.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
          <a
            href="tel:051592490"
            className="inline-flex items-center gap-2 bg-[#0047ba] hover:bg-[#003899] text-white font-black text-xs sm:text-sm px-5 py-3 rounded-xl transition shadow"
          >
            <Phone className="w-4 h-4 text-[#ffaa00]" />
            051-592490
          </a>
          <a
            href="https://wa.me/9779804268190"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs sm:text-sm px-5 py-3 rounded-xl transition shadow"
          >
            <MessageCircle className="w-4 h-4" />
            9804268190
          </a>
        </div>
      </section>

    </div>
  );
}
