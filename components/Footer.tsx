import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#001438] bg-gradient-to-r from-[#000d26] via-[#001438] to-[#001a47] text-white pt-10 pb-4 px-4 sm:px-6 lg:px-8 border-t border-blue-900/60 font-sans">
      <div className="max-w-[1360px] mx-auto">
        
        {/* Top Section: 5 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 pb-8 border-b border-blue-900/60">
          
          {/* Column 1: ABOUT US */}
          <div className="lg:pr-6 lg:border-r lg:border-blue-900/50 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-black uppercase text-white tracking-wider mb-4">
                ABOUT US
              </h3>
              <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed font-medium">
                Abhay Digital &amp; IT Solution is an authorized reseller of Websurfer Nepal Communication. We are committed to providing high speed, reliable &amp; affordable internet service in Birgunj and nearby areas.
              </p>
            </div>

            {/* AD Logo Icon */}
            <div className="mt-5 w-14 h-14 shrink-0">
              <Image
                src="/logo.webp"
                alt="Abhay Digital Logo"
                width={48}
                height={48}
                loading="lazy"
                sizes="48px"
                className="w-full h-full object-contain drop-shadow-md filter grayscale invert"
              />
            </div>
          </div>

          {/* Column 2: QUICK LINKS */}
          <div className="lg:px-4 lg:border-r lg:border-blue-900/50">
            <h3 className="text-sm font-black uppercase text-white tracking-wider mb-4">
              QUICK LINKS
            </h3>
            <ul className="space-y-2 text-xs sm:text-[13px] font-semibold text-slate-300">
              <li>
                <Link href="#" className="hover:text-white transition flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="#packages" className="hover:text-white transition flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  Packages
                </Link>
              </li>
              <li>
                <Link href="#packages" className="hover:text-white transition flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  IPTV
                </Link>
              </li>
              <li>
                <Link href="#packages" className="hover:text-white transition flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="tel:051592490" className="hover:text-white transition flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: OUR PACKAGES */}
          <div className="lg:px-4 lg:border-r lg:border-blue-900/50">
            <h3 className="text-sm font-black uppercase text-white tracking-wider mb-4">
              OUR PACKAGES
            </h3>
            <ul className="space-y-2 text-xs sm:text-[13px] font-semibold text-slate-300">
              <li>
                <Link href="#packages" className="hover:text-white transition flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  50 Mbps Only Internet
                </Link>
              </li>
              <li>
                <Link href="#packages" className="hover:text-white transition flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  100 Mbps Only Internet
                </Link>
              </li>
              <li>
                <Link href="#packages" className="hover:text-white transition flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  100 Mbps Internet + IPTV
                </Link>
              </li>
              <li>
                <Link href="#packages" className="hover:text-white transition flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  200 Mbps Only Internet
                </Link>
              </li>
              <li>
                <Link href="#packages" className="hover:text-white transition flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  200 Mbps Internet + IPTV
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: CONTACT US */}
          <div className="lg:px-4 lg:border-r lg:border-blue-900/50">
            <h3 className="text-sm font-black uppercase text-white tracking-wider mb-4">
              CONTACT US
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px] font-semibold text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>Birgunj-4, Parsa, Nepal</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <span>Office: 051-592490</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <span>Mobile: 9804268190</span>
              </li>
              <li className="flex items-start gap-2 break-all">
                <Mail className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>abhaydigitalanditsolution@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>Sun - Fri (9:00 AM - 6:00 PM)</span>
              </li>
            </ul>
          </div>

          {/* Column 5: FOLLOW US */}
          <div className="lg:pl-4">
            <h3 className="text-sm font-black uppercase text-white tracking-wider mb-4">
              FOLLOW US
            </h3>
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#1877F2] hover:brightness-110 flex items-center justify-center text-white transition shadow cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:brightness-110 flex items-center justify-center text-white transition shadow cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/9779804268190"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-[#25D366] hover:brightness-110 flex items-center justify-center text-white transition shadow cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.155 4.22 4.266-1.119zm11.233-6.425c-.296-.149-1.754-.868-2.025-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.754-.719 2.001-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.568-.347z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-[#FF0000] hover:brightness-110 flex items-center justify-center text-white transition shadow cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-semibold text-slate-300">
          <div>
            &copy; {new Date().getFullYear()} Abhay Digital &amp; IT Solution. All Rights Reserved.
          </div>
          <div>
            Reseller Of Websurfer
          </div>
        </div>

      </div>
    </footer>
  );
}
