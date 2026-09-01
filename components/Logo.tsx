import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-3 select-none">
      {/* Logo image replacing SVG icon */}
      <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center">
        <Image
          src="/logo.png"
          alt="Abhay Digital Logo"
          width={56}
          height={56}
          className="w-full h-full object-contain drop-shadow-sm"
          priority
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center leading-none">
        <span className="font-extrabold text-[#002b66] text-xl md:text-[22px] tracking-tight font-sans">
          ABHAY DIGITAL
        </span>
        <span className="font-bold text-[#002b66] text-sm md:text-base tracking-wider mt-0.5 font-sans">
          &amp; IT SOLUTION
        </span>
        {/* <span className="font-bold text-[#ff4500] text-xs md:text-[13px] tracking-tight mt-1 font-sans">
          Reseller Of Websurfer
        </span> */}
      </div>
    </div>
  );
}


