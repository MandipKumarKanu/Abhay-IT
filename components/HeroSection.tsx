"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { openInquiry } from "@/lib/inquiry";
import {
  Camera,
  Tv,
  Zap,
  Headset,
  ShieldCheck,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Wrench,
  MonitorPlay,
} from "lucide-react";

/* ── WhatsApp icon ── */
function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.06c-.24.68-1.42 1.3-1.96 1.35-.55.05-1.06.25-3.57-.74-3.03-1.19-4.94-4.32-5.09-4.52-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.59-.37.79-.37.2 0 .4.002.57.01.19.008.44-.07.69.52.25.6.85 2.06.92 2.21.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.3.15.47.13.65-.08.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.72.81 2.02.96.3.15.5.22.57.35.07.12.07.72-.17 1.4Z" />
    </svg>
  );
}

const FEATURES = [
  { Icon: Camera,    label1: "HD CCTV",     label2: "Security" },
  { Icon: Tv,        label1: "TV Wall",     label2: "Mounting" },
  { Icon: Zap,       label1: "Electrical",  label2: "Wiring" },
  { Icon: Headset,   label1: "24/7 Expert", label2: "Support" },
];

const SERVICE_HIGHLIGHTS = [
  {
    Icon: Camera,
    title: "CCTV Solutions",
    tagline: "HD & Night Vision Setup",
    href: "/services#cctv",
  },
  {
    Icon: Tv,
    title: "TV Wall Fitting",
    tagline: "Clean Cable Concealment",
    href: "/services#tv-fitting",
  },
  {
    Icon: Zap,
    title: "Electrical Wiring",
    tagline: "Safe Home & Building Setup",
    href: "/services#electrical",
  },
  {
    Icon: MonitorPlay,
    title: "Skycom IPTV",
    tagline: "300+ Live Channels & HD VOD",
    href: "/#iptv",
  },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-[#04143c] text-white">
      {/* ─── BACKGROUND ──────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* deep navy radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_65%_50%,#0a3d96_0%,#052565_40%,#04143c_70%,#020c28_100%)]" />

        {/* glowing blue aura behind right artwork */}
        <div className="absolute right-[8%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#1a6fff] opacity-20 blur-[120px]" />

        {/* electric blue diagonal speed-lines — bottom-right fan */}
        <svg
          className="absolute inset-0 h-full w-full opacity-60"
          viewBox="0 0 1200 520"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          {[
            ["M760 260 1200 520", "#60a5fa", "3",   "0.85"],
            ["M760 260 1200 490", "#3b82f6", "2",   "0.75"],
            ["M760 260 1200 460", "#93c5fd", "2",   "0.70"],
            ["M760 260 1200 430", "#60a5fa", "2.5", "0.80"],
            ["M760 260 1200 400", "#3b82f6", "1.5", "0.65"],
            ["M760 260 1200 370", "#93c5fd", "1.5", "0.60"],
            ["M760 260 1200 340", "#60a5fa", "1",   "0.50"],
            ["M760 260 1200 310", "#3b82f6", "2",   "0.65"],
            ["M760 260 1200 280", "#1d4ed8", "1.5", "0.55"],
            ["M760 260 1180 240", "#60a5fa", "1",   "0.45"],
            ["M760 260 1160 210", "#93c5fd", "1",   "0.40"],
            ["M760 260 1140 0",   "#3b82f6", "1.5", "0.45"],
            ["M760 260 1100 0",   "#60a5fa", "1",   "0.38"],
            ["M760 260 1060 0",   "#1d4ed8", "1",   "0.32"],
            ["M760 260 1020 0",   "#93c5fd", "0.8", "0.28"],
          ].map(([d, stroke, sw, op], i) => (
            <path key={i} d={d as string} stroke={stroke as string} strokeWidth={sw as string} opacity={op as string} strokeLinecap="round" />
          ))}
          <circle cx="760" cy="260" r="30" fill="#3b82f6" opacity="0.18" />
          <circle cx="760" cy="260" r="12" fill="#60a5fa" opacity="0.40" />
        </svg>
      </div>

      {/* ─── MAIN CONTENT ────────────────────────────────────────────── */}
      <div className="mx-auto max-w-[1500px] px-4 pt-8 pb-5 sm:px-6 lg:px-8">
        <div className="grid items-center lg:grid-cols-[1fr_1fr] gap-6 lg:gap-8">

          {/* ═══ LEFT COLUMN ═══════════════════════════════════════════ */}
          <div className="flex flex-col gap-3 text-center lg:text-left">

            {/* Eyebrow badge */}
            <div className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-1.5 bg-[#1a55d4] px-4 py-[6px] text-[11px] sm:text-[13px] font-extrabold tracking-widest text-white uppercase rounded-sm shadow">
                <Sparkles className="w-3.5 h-3.5 text-[#facc15]" />
                Abhay Digital &amp; IT Solution • Birgunj-4, Parsa
              </span>
            </div>

            {/* SMART • SECURE • PROFESSIONAL */}
            <h2 className="text-[20px] sm:text-[28px] md:text-[34px] font-extrabold tracking-[0.05em] text-white uppercase leading-none">
              Smart{" "}
              <span className="mx-1 text-[0.75em] align-middle">•</span>
              {" "}Secure{" "}
              <span className="mx-1 text-[0.75em] align-middle">•</span>
              {" "}Professional
            </h2>

            {/* CCTV & IT Solutions - keyword-rich H1 for SEO, visually styled */}
            <h1
              className="leading-[0.88] font-black uppercase tracking-[-0.02em] text-transparent"
              style={{
                fontSize: "clamp(40px, 8vw, 82px)",
                background: "linear-gradient(180deg, #ffd04b 0%, #f97316 45%, #d9400a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 4px 14px rgba(0,0,0,0.5))",
              }}
            >
              CCTV &amp; IT Solutions
            </h1>
            <p className="sr-only">
              Complete CCTV Camera Installation, Professional TV Wall Mounting, Electrical Wiring & Skycom IPTV Services in Birgunj-4, Parsa, Nepal.
            </p>

            {/* For Home & Office pill */}
            <div className="flex justify-center lg:justify-start">
              <span className="bg-[#1a55d4] px-6 py-[7px] text-[13px] sm:text-[15px] font-bold text-white rounded-sm shadow">
                For Home, Office &amp; Commercial Buildings
              </span>
            </div>

            {/* Short Tagline */}
            <p className="text-slate-200 text-xs sm:text-sm font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
              From HD security camera installation to flush TV wall mounting, building electrical wiring, and Skycom IPTV — get reliable, certified technicians at affordable rates.
            </p>

            {/* 4 Feature icons */}
            <div className="grid grid-cols-4 gap-2 mt-1 mx-auto lg:mx-0 w-full max-w-[480px]">
              {FEATURES.map(({ Icon, label1, label2 }) => (
                <div key={label2} className="flex flex-col items-center gap-1 text-center bg-white/5 border border-white/10 rounded-lg py-2 px-1">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#ffaa00]" strokeWidth={1.8} />
                  <span className="text-[10px] sm:text-[11px] font-semibold leading-[1.25] text-white">
                    {label1}<br />{label2}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2 mx-auto lg:mx-0 w-full max-w-[480px]">
              <button
                onClick={() => openInquiry("General Service Inquiry")}
                className="flex flex-1 items-center justify-center gap-2 rounded-md px-5 py-3.5 text-[13px] sm:text-[15px] font-extrabold uppercase tracking-wide text-white shadow-lg transition hover:brightness-110 cursor-pointer"
                style={{ background: "linear-gradient(180deg, #f78d1e 0%, #e05b0a 100%)" }}
              >
                <Wrench className="w-5 h-5" strokeWidth={2.2} />
                Book a Service
              </button>
              <a
                href="https://wa.me/9779804268190"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Us"
                className="flex flex-1 items-center justify-center gap-2 rounded-md px-5 py-3.5 text-[13px] sm:text-[15px] font-extrabold uppercase tracking-wide text-white shadow-lg transition hover:brightness-110"
                style={{ background: "linear-gradient(180deg, #2ecc62 0%, #17a94c 100%)" }}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                  <WhatsAppIcon className="w-4 h-4 text-[#17a94c]" />
                </span>
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* ═══ RIGHT COLUMN: Artwork & Service Cards Showcase ═══════════ */}
          <div className="relative flex flex-col items-center justify-center">
            {/* 100% Quality badge */}
            <div className="absolute -top-3 right-2 sm:right-6 z-20 flex h-[80px] w-[80px] sm:h-[96px] sm:w-[96px] flex-col items-center justify-center rounded-full border-[3px] border-[#22d3ee] bg-[#031331]/80 text-center shadow-[0_0_30px_rgba(34,211,238,0.7),inset_0_0_16px_rgba(34,211,238,0.25)] backdrop-blur-sm">
              <span className="text-[20px] sm:text-[24px] leading-none font-black text-white">100%</span>
              <span className="mt-0.5 text-[7px] sm:text-[8px] leading-none font-extrabold tracking-[0.1em] text-slate-200 uppercase">Quality Service</span>
            </div>

            {/* Featured Visual Card */}
            <div className="relative w-full aspect-[4/3] max-w-[580px] rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-[0_20px_50px_rgba(0,100,255,0.25)] group">
              <Image
                src="/images/cctv-solutions.jpg"
                alt="Complete CCTV Solutions & Professional Installation in Birgunj"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 90vw, 580px"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#031331] via-[#031331]/40 to-transparent" />

              {/* Service Badges on top of image */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 bg-[#03183d]/90 backdrop-blur-md border border-cyan-400/40 text-cyan-300 px-3 py-1.5 rounded-lg text-xs font-bold shadow">
                  <Camera className="w-3.5 h-3.5 text-[#ffaa00]" />
                  HD CCTV Solutions
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#03183d]/90 backdrop-blur-md border border-blue-400/40 text-blue-200 px-3 py-1.5 rounded-lg text-xs font-bold shadow">
                  <Tv className="w-3.5 h-3.5 text-[#ffaa00]" />
                  TV Wall Fitting
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#03183d]/90 backdrop-blur-md border border-amber-400/40 text-amber-200 px-3 py-1.5 rounded-lg text-xs font-bold shadow">
                  <Zap className="w-3.5 h-3.5 text-[#ffaa00]" />
                  Electrical Wiring
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#03183d]/90 backdrop-blur-md border border-emerald-400/40 text-emerald-200 px-3 py-1.5 rounded-lg text-xs font-bold shadow">
                  <MonitorPlay className="w-3.5 h-3.5 text-[#ffaa00]" />
                  Skycom IPTV
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── BOTTOM SERVICE PILLARS STRIP ───────────────────────────── */}
        <div className="mt-6 rounded-xl bg-white text-slate-800 shadow-[0_12px_40px_rgba(0,0,0,0.45)] overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 items-stretch">
            {SERVICE_HIGHLIGHTS.map(({ Icon, title, tagline, href }) => (
              <Link
                key={title}
                href={href}
                className="flex items-center gap-3.5 p-4 hover:bg-blue-50/60 transition group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0047ba] text-white flex items-center justify-center shrink-0 group-hover:bg-[#ff5500] transition-colors shadow-sm">
                  <Icon className="w-6 h-6" strokeWidth={1.8} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-extrabold uppercase text-[#03183d] group-hover:text-[#0047ba] transition-colors flex items-center gap-1">
                    {title}
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#ff5500]" />
                  </div>
                  <div className="text-xs font-semibold text-slate-500 truncate mt-0.5">
                    {tagline}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
