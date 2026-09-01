import React from "react";
import { MapPin, Mail, Phone, Smartphone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full bg-[#03183d] text-white text-xs md:text-[13px] border-b border-[#082457] py-2 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-y-2 gap-x-4 md:gap-x-8">
        
        {/* Location */}
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#f5ad18] shrink-0 stroke-[2.5]" />
          <span className="font-semibold tracking-wide">Birgunj-4, Parsa, Nepal</span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-[#f5ad18] shrink-0 stroke-[2.5]" />
          <a
            href="mailto:abhaydigitalanditsolution@gmail.com"
            className="font-medium hover:text-[#f5ad18] transition-colors"
          >
            abhaydigitalanditsolution@gmail.com
          </a>
        </div>

        {/* Office Phone */}
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-[#f5ad18] shrink-0 stroke-[2.5]" />
          <span>
            Office: <strong className="font-bold text-white">051-592490</strong>
          </span>
        </div>

        {/* Mobile Phone */}
        <div className="flex items-center gap-2">
          <Smartphone className="w-4 h-4 text-[#f5ad18] shrink-0 stroke-[2.5]" />
          <span>
            Mobile: <strong className="font-bold text-white">9804268190</strong>
          </span>
        </div>

      </div>
    </div>
  );
}
