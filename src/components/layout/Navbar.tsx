"use client";

import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Tienda", href: "/tienda" },
    { name: "Soporte", href: "/soporte" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-1 group">
              <Image 
                src="/images/logo.png" 
                alt="GENTONER Logo" 
                width={360} 
                height={120} 
                className="h-24 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className={`font-bold text-lg transition-colors relative py-2 ${isActive ? 'text-brand-red' : 'text-brand-dark hover:text-brand-red'}`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-red rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-8">
            <button className="text-gray-500 hover:text-brand-red transition-colors relative">
              <ShoppingCart className="w-8 h-8" />
              <span className="absolute -top-1 -right-1 bg-brand-red text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center">0</span>
            </button>
            <button className="bg-brand-red hover:bg-red-700 text-white px-10 py-4 rounded-full font-black text-lg transition-all shadow-[0_4px_14px_0_rgba(237,50,55,0.39)] hover:shadow-[0_6px_20px_rgba(237,50,55,0.23)] hover:-translate-y-0.5 uppercase tracking-wide">
              Cotizar
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-dark">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={link.name}
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${isActive ? 'text-brand-red bg-red-50 font-bold' : 'text-brand-dark hover:text-brand-red hover:bg-gray-50'}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 mt-2 border-t border-gray-100 flex flex-col gap-3">
                <button className="w-full bg-brand-red text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors text-center">
                  Cotizar
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
