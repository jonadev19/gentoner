"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const phoneNumber = "525551205475"; // Defaulting to one of their contact numbers
  const message = "Hola, me gustaría obtener más información sobre sus productos.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] hover:scale-110 hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] transition-all duration-300 group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Pulse effect behind the button */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:animate-none"></span>
      
      {/* Icon */}
      <FaWhatsapp className="w-9 h-9 relative z-10" />
      
      {/* Tooltip on hover (optional, visible on larger screens) */}
      <span className="absolute right-full mr-4 bg-brand-dark text-white text-sm font-bold px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
        ¡Escríbenos!
      </span>
    </a>
  );
}
