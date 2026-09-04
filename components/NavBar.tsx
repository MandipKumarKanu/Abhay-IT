"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { openInquiry } from "@/lib/inquiry";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "HOME", href: "/" },
  { name: "PACKAGES", href: "/#packages" },
  { name: "IPTV", href: "/#iptv" },
  { name: "SERVICES", href: "/services" },
  { name: "ABOUT US", href: "/#about" },
  { name: "CONTACT US", href: "/#contact" },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md border-b border-gray-100 relative z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[#06204d] hover:text-[#ff5500] font-bold text-xs xl:text-sm tracking-wide transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={() => openInquiry("New Connection Inquiry")}
            className="bg-[#0047ba] hover:bg-[#003899] text-white font-bold text-xs xl:text-sm tracking-wide px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
          >
            NEW CONNECTION
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-[#06204d] hover:text-[#ff5500] rounded-md focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7 stroke-[2.5]" />
            ) : (
              <Menu className="w-7 h-7 stroke-[2.5]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md text-sm font-bold tracking-wide text-[#06204d] hover:bg-gray-50 hover:text-[#ff5500] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-gray-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openInquiry("New Connection Inquiry");
              }}
              className="block w-full text-center bg-[#0047ba] hover:bg-[#003899] text-white font-bold text-sm tracking-wide py-3 rounded-lg shadow transition-colors cursor-pointer"
            >
              NEW CONNECTION
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}


