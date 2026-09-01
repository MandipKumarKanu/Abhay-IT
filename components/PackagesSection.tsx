"use client";

import React, { useState } from "react";
import InquiryModal from "./InquiryModal";

/* ── Types ─────────────────────────────────────────────── */
interface Plan {
  speed: string;
  unit: string;
  type: string;
  price: string;
  duration: string;
  features: string[];
  color: string; // Header background, card border, button background, price text color
}

/* ── Plan data matching reference image exactly ────────── */
const PLANS: Plan[] = [
  {
    speed: "50",
    unit: "Mbps",
    type: "ONLY INTERNET",
    price: "Rs. 7,500/-",
    duration: "Yearly Only Net",
    color: "#0047bb", // Deep Blue
    features: [
      "High Speed Internet",
      "Unlimited Data",
      "24/7 Support",
      "Free Installation",
      "Free Router",
      "Free Drop Wire",
    ],
  },
  {
    speed: "100",
    unit: "Mbps",
    type: "ONLY INTERNET",
    price: "Rs. 8,500/-",
    duration: "Yearly Only Net",
    color: "#f95400", // Vibrant Orange
    features: [
      "High Speed Internet",
      "Unlimited Data",
      "24/7 Support",
      "Free Installation",
      "Free Router",
      "Free Drop Wire",
    ],
  },
  {
    speed: "100",
    unit: "Mbps",
    type: "INTERNET + IPTV",
    price: "Rs. 10,500/-",
    duration: "Yearly",
    color: "#009e35", // Green
    features: [
      "High Speed Internet",
      "Unlimited Data",
      "Skycom IPTV",
      "300+ Live Channels",
      "VOD Movies & Series",
      "24/7 Support",
      "Free Installation",
      "Free Router",
      "Free Drop Wire",
    ],
  },
  {
    speed: "200",
    unit: "Mbps",
    type: "ONLY INTERNET",
    price: "Rs. 10,500/-",
    duration: "Yearly Only Net",
    color: "#0047bb", // Deep Blue
    features: [
      "High Speed Internet",
      "Unlimited Data",
      "24/7 Support",
      "Free Installation",
      "Free Router",
      "Free Drop Wire",
    ],
  },
  {
    speed: "200",
    unit: "Mbps",
    type: "INTERNET + IPTV",
    price: "Rs. 18,500/-",
    duration: "2 Yearly",
    color: "#e60000", // Red
    features: [
      "High Speed Internet",
      "Unlimited Data",
      "Skycom IPTV",
      "300+ Live Channels",
      "VOD Movies & Series",
      "24/7 Support",
      "Free Installation",
      "Free Router",
      "Free Drop Wire",
    ],
  },
];

export default function PackagesSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleChoosePlan = (plan: Plan) => {
    setSelectedPlan(`${plan.speed} ${plan.unit} - ${plan.price} (${plan.type})`);
    setModalOpen(true);
  };

  return (
    <section id="packages" className="bg-[#f8fafc] py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1500px] mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-10">
          <span className="h-[2px] sm:h-[3px] w-10 sm:w-20 bg-[#f95400] rounded-full shrink-0" />
          <h2 className="text-lg sm:text-2xl md:text-[28px] font-black text-[#0c2461] uppercase tracking-tight text-center">
            OUR INTERNET PACKAGES (YEARLY PLAN)
          </h2>
          <span className="h-[2px] sm:h-[3px] w-10 sm:w-20 bg-[#f95400] rounded-full shrink-0" />
        </div>

        {/* 5-Column Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3.5">
          {PLANS.map((plan, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border-2 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              style={{ borderColor: plan.color }}
            >
              {/* Top Banner Header */}
              <div
                className="py-4 px-3 text-center text-white flex flex-col items-center justify-center"
                style={{ backgroundColor: plan.color }}
              >
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-[40px] sm:text-[44px] font-extrabold leading-none tracking-tight">
                    {plan.speed}
                  </span>
                  <span className="text-[20px] sm:text-[22px] font-bold leading-none">
                    {plan.unit}
                  </span>
                </div>
                <div className="text-[11px] sm:text-[12px] font-extrabold uppercase tracking-wider mt-1 opacity-95">
                  {plan.type}
                </div>
              </div>

              {/* Price Block */}
              <div className="px-3 pt-3.5 pb-2 text-center border-b border-slate-100">
                <div
                  className="text-[22px] sm:text-[25px] font-black leading-tight tracking-tight"
                  style={{ color: plan.color }}
                >
                  {plan.price}
                </div>
                <div className="text-[13px] sm:text-[14px] font-extrabold text-[#0c2461] mt-0.5">
                  {plan.duration}
                </div>
              </div>

              {/* Features List */}
              <div className="flex-1 px-4 py-4">
                <ul className="space-y-2.5">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-[12px] sm:text-[13px] font-bold text-slate-700">
                      {/* Green filled circle checkmark icon matching exact image */}
                      <svg
                        className="w-4 h-4 shrink-0 text-[#009e35]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="px-3.5 pb-4 pt-1">
                <button
                  onClick={() => handleChoosePlan(plan)}
                  className="w-full py-2.5 px-4 rounded-full text-white text-[13px] font-black uppercase tracking-wider transition-all duration-200 hover:brightness-110 hover:shadow-md active:scale-95 cursor-pointer"
                  style={{ backgroundColor: plan.color }}
                >
                  CHOOSE PLAN
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inquiry Dialog Modal */}
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </section>
  );
}


