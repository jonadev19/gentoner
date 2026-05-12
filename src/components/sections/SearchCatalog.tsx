"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SearchCatalog() {
  const images = [
    { src: "/images/toner_cartridge.png", alt: "Toners Originales" },
    { src: "/images/premium_printer.png", alt: "Equipos Premium" },
    { src: "/images/tech_support_hands.png", alt: "Refacciones y Mantenimiento" },
  ];

  return (
    <section className="bg-brand-light py-24 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl md:text-4xl font-black font-montserrat text-brand-dark mb-8">
          ¿Estás buscando un modelo o refacción en especial?
        </h2>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-16 relative">
          <div className="relative flex items-center">
            <Search className="absolute left-6 w-6 h-6 text-gray-400" />
            <input 
              type="text" 
              placeholder="Ej. Toner HP 85A, Fusor Brother..."
              className="w-full bg-white border-2 border-gray-100 pl-16 pr-6 py-5 rounded-full text-lg shadow-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
            />
            <button className="absolute right-3 bg-brand-dark hover:bg-black text-white px-8 py-3 rounded-full font-bold transition-colors">
              Buscar
            </button>
          </div>
        </div>

        {/* Images grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-white shadow-md group"
            >
              <Image 
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-white font-bold text-xl text-left">{img.alt}</h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <button className="bg-brand-red hover:bg-red-700 text-white px-12 py-5 rounded-full font-black text-xl tracking-wide transition-all shadow-[0_4px_20px_rgba(237,50,55,0.3)] hover:shadow-[0_6px_25px_rgba(237,50,55,0.4)] hover:-translate-y-1 w-full max-w-xl">
          VER CATÁLOGO COMPLETO
        </button>

      </div>
    </section>
  );
}
