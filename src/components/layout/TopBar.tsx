"use client";

import { Phone, Mail } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="hidden lg:flex w-full bg-brand-dark overflow-hidden h-12 border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left Section: Contact & Brand Highlight */}
        <div className="flex items-center gap-8 h-full">
          {/* Skewed highlight using brand-red */}
          <div className="bg-brand-red h-full flex items-center px-10 relative skew-x-[-20deg] -ml-12 shadow-[5px_0_15px_rgba(237,50,55,0.3)]">
            <div className="skew-x-[20deg] flex items-center gap-3 text-white font-black text-xs md:text-sm tracking-widest uppercase">
              <Phone className="w-4 h-4 fill-white stroke-none animate-pulse" />
              <span>Atención: 55 5120 5475 | 55 5710 3672</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-gray-400 font-black text-xs md:text-sm tracking-widest uppercase">
            <Mail className="w-4 h-4 text-brand-red" />
            <span><a href="mailto:tonermexico2020@gmail.com" className="text-white hover:text-brand-red transition-colors">tonermexico2020@gmail.com</a></span>
          </div>
        </div>

        {/* Right Section: Socials */}
        <div className="flex items-center gap-8">
          <div className="hidden xl:flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
            <span className="text-gray-400 font-black text-[10px] tracking-[0.2em] uppercase">Ventas Online</span>
          </div>
          
          <div className="h-6 w-[1px] bg-gray-800" />

          <div className="flex items-center gap-5 text-gray-400">
            <a href="#" className="hover:text-brand-red transition-all transform hover:scale-125"><FaFacebook className="w-4.5 h-4.5" /></a>
            <a href="#" className="hover:text-brand-red transition-all transform hover:scale-125"><FaTwitter className="w-4.5 h-4.5" /></a>
            <a href="#" className="hover:text-brand-red transition-all transform hover:scale-125"><FaInstagram className="w-4.5 h-4.5" /></a>
            <a href="#" className="hover:text-brand-red transition-all transform hover:scale-125"><FaLinkedin className="w-4.5 h-4.5" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
