"use client";

import React from "react";
import Image from "next/image";
import { openInquiry } from "@/lib/inquiry";
import { Gauge, ShieldCheck, Headset, Settings, UserPlus, Gift, Router } from "lucide-react";

/* ── WhatsApp icon ── */
function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.06c-.24.68-1.42 1.3-1.96 1.35-.55.05-1.06.25-3.57-.74-3.03-1.19-4.94-4.32-5.09-4.52-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.59-.37.79-.37.2 0 .4.002.57.01.19.008.44-.07.69.52.25.6.85 2.06.92 2.21.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.3.15.47.13.65-.08.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.72.81 2.02.96.3.15.5.22.57.35.07.12.07.72-.17 1.4Z" />
    </svg>
  );
}

/* ── Drop Wire icon ── */
function DropWireIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className={className} aria-hidden="true">
      <circle cx="11" cy="13" r="7.5" />
      <circle cx="11" cy="13" r="4" />
      <path d="M18 8.4C18.8 6 19.9 4.2 21.5 3.2" />
    </svg>
  );
}

/* ── Starburst badge ── */
function StarBurst({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path fill="#facc15" d="M50 2 58 26 78 10 71 34 96 30 78 46 100 58 74 60 86 82 62 74 62 98 50 78 38 98 38 74 14 82 26 60 0 58 22 46 4 30 29 34 22 10 42 26Z" />
    </svg>
  );
}

const FEATURES = [
  { Icon: Gauge,     label1: "High Speed",  label2: "Internet" },
  { Icon: ShieldCheck, label1: "Reliable",  label2: "Connection" },
  { Icon: Headset,   label1: "24/7",        label2: "Support" },
  { Icon: Settings,  label1: "Easy",        label2: "Installation" },
];

const PERKS = [
  { Icon: Gift,         label1: "FREE", label2: "INSTALLATION" },
  { Icon: Router,       label1: "FREE", label2: "ROUTER" },
  { Icon: DropWireIcon, label1: "FREE", label2: "DROP WIRE" },
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
          className="absolute inset-0 h-full w-full opacity-70"
          viewBox="0 0 1200 520"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          {/* fan origin roughly at center-right */}
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
            /* upward fans */
            ["M760 260 1140 0",   "#3b82f6", "1.5", "0.45"],
            ["M760 260 1100 0",   "#60a5fa", "1",   "0.38"],
            ["M760 260 1060 0",   "#1d4ed8", "1",   "0.32"],
            ["M760 260 1020 0",   "#93c5fd", "0.8", "0.28"],
          ].map(([d, stroke, sw, op], i) => (
            <path key={i} d={d as string} stroke={stroke as string} strokeWidth={sw as string} opacity={op as string} strokeLinecap="round" />
          ))}
          {/* soft glow bloom at fan origin */}
          <circle cx="760" cy="260" r="30" fill="#3b82f6" opacity="0.18" />
          <circle cx="760" cy="260" r="12" fill="#60a5fa" opacity="0.40" />
        </svg>
      </div>

      {/* ─── MAIN CONTENT ────────────────────────────────────────────── */}
      <div className="mx-auto max-w-[1500px] px-4 pt-8 pb-5 sm:px-6 lg:px-8">
        <div className="grid items-center lg:grid-cols-[1fr_1fr] gap-4 lg:gap-6">

          {/* ═══ LEFT COLUMN ═══════════════════════════════════════════ */}
          <div className="flex flex-col gap-3 text-center lg:text-left">

            {/* Eyebrow badge */}
            <div className="flex justify-center lg:justify-start">
              <span className="inline-block bg-[#1a55d4] px-4 py-[6px] text-[11px] sm:text-[13px] font-extrabold tracking-widest text-white uppercase rounded-sm shadow">
               A Reseller Of Websurfer Nepal Communication
              </span>
            </div>

            {/* FAST • STABLE • RELIABLE */}
            <h2 className="text-[22px] sm:text-[30px] md:text-[36px] font-extrabold tracking-[0.05em] text-white uppercase leading-none">
              Fast{" "}
              <span className="mx-1 text-[0.75em] align-middle">•</span>
              {" "}Stable{" "}
              <span className="mx-1 text-[0.75em] align-middle">•</span>
              {" "}Reliable
            </h2>

            {/* INTERNET - keyword-rich H1 for SEO, visually styled */}
            <h1
              className="leading-[0.88] font-black uppercase tracking-[-0.02em] text-transparent"
              style={{
                fontSize: "clamp(44px, 9vw, 88px)",
                background: "linear-gradient(180deg, #ffd04b 0%, #f97316 45%, #d9400a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 4px 14px rgba(0,0,0,0.5))",
              }}
            >
              Fiber Internet
            </h1>
            <p className="sr-only">High-Speed Fiber Internet & IPTV in Birgunj, Parsa, Nepal</p>

            {/* For Home & Office pill */}
            <div className="flex justify-center lg:justify-start">
              <span className="bg-[#1a55d4] px-8 py-[8px] text-[14px] sm:text-[16px] font-bold text-white rounded-sm shadow">
                For Home &amp; Office
              </span>
            </div>

            {/* 4 Feature icons */}
            <div className="grid grid-cols-4 gap-2 mt-1 mx-auto lg:mx-0 w-full max-w-[460px]">
              {FEATURES.map(({ Icon, label1, label2 }) => (
                <div key={label2} className="flex flex-col items-center gap-1 text-center">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={1.5} />
                  <span className="text-[10px] sm:text-[11px] font-semibold leading-[1.3] text-white">
                    {label1}<br />{label2}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2 mx-auto lg:mx-0 w-full max-w-[460px]">
              <button
                onClick={() => openInquiry("New Connection Inquiry")}
                className="flex flex-1 items-center justify-center gap-2 rounded-md px-5 py-3.5 text-[13px] sm:text-[15px] font-extrabold uppercase tracking-wide text-white shadow-lg transition hover:brightness-110 cursor-pointer"
                style={{ background: "linear-gradient(180deg, #f78d1e 0%, #e05b0a 100%)" }}
              >
                <UserPlus className="w-5 h-5" strokeWidth={2.2} />
                New Connection
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

          {/* ═══ RIGHT COLUMN: artwork ═════════════════════════════════ */}
          <div className="relative flex items-center justify-center">
            {/* 100% Fiber Network badge */}
            <div className="absolute top-2 right-2 z-20 flex h-[84px] w-[84px] sm:h-[104px] sm:w-[104px] flex-col items-center justify-center rounded-full border-[3px] border-[#22d3ee] bg-[#031331]/70 text-center shadow-[0_0_30px_rgba(34,211,238,0.7),inset_0_0_16px_rgba(34,211,238,0.25)] backdrop-blur-sm">
              <span className="text-[22px] sm:text-[28px] leading-none font-black text-white">100%</span>
              <span className="mt-0.5 text-[7px] sm:text-[8.5px] leading-none font-extrabold tracking-[0.12em] text-slate-200 uppercase">Fiber Network</span>
            </div>

            {/* Hero artwork */}
            <div className="relative w-full aspect-[4/3] max-w-[600px] drop-shadow-[0_20px_50px_rgba(0,100,255,0.3)]">
              <Image
                src="/images/hero-artwork.webp"
                alt="Websurfer Fiber Network router and house - High-Speed Fiber Internet in Birgunj, Parsa, Nepal"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 90vw, 600px"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* ─── BOTTOM OFFER STRIP ─────────────────────────────────────── */}
        <div className="mt-5 rounded-xl bg-white text-slate-800 shadow-[0_12px_40px_rgba(0,0,0,0.45)] overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-[1.2fr_1fr_1fr_1fr_1.4fr] divide-x divide-slate-200 items-center">

            {/* LIMITED TIME OFFER */}
            <div className="col-span-2 md:col-span-1 flex items-center justify-center px-4 py-4">
              <div className="relative inline-flex flex-col items-center -rotate-[3deg]">
                <StarBurst className="absolute -top-4 -right-5 w-20 h-20 -z-10" />
                <div className="bg-[#e0201b] text-white text-[10px] font-black uppercase tracking-[0.12em] px-3 py-[3px] rounded-[3px] shadow">
                  Limited Time
                </div>
                <div className="mt-[3px] bg-[#0c3b92] border-2 border-white text-white text-[26px] sm:text-[30px] font-black uppercase px-5 py-1 rounded-[6px] shadow-md leading-none">
                  Offer!
                </div>
              </div>
            </div>

            {/* Free perks */}
            {PERKS.map(({ Icon, label1, label2 }) => (
              <div key={label2} className="flex flex-col items-center justify-center gap-1.5 px-2 py-4 text-center text-[#0c3b92]">
                <Icon className="w-9 h-9" strokeWidth={1.6} />
                <span className="text-[10px] sm:text-[12px] font-extrabold uppercase leading-[1.3] tracking-wide">
                  {label1}<br />{label2}
                </span>
              </div>
            ))}

            {/* Price callout */}
            <div className="col-span-2 md:col-span-1 flex items-center justify-center gap-3 px-3 py-4">
              <div className="text-center">
                <div className="text-[11px] sm:text-[13px] font-extrabold uppercase tracking-wide text-[#0c3b92] leading-tight">
                  High Speed Internet
                </div>
                <div className="text-[10px] sm:text-[12px] font-extrabold uppercase tracking-wide text-[#0c3b92] leading-tight">
                  Starting From
                </div>
                <div className="text-[26px] sm:text-[32px] font-black text-[#e0201b] leading-none my-0.5">
                  Rs. 850/-
                </div>
                <div className="text-[10px] sm:text-[12px] font-extrabold uppercase tracking-wide text-[#0c3b92] leading-tight">
                  Per Month
                </div>
              </div>
              <Gauge className="w-10 h-10 sm:w-12 sm:h-12 text-[#0c3b92] shrink-0" strokeWidth={1.6} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
