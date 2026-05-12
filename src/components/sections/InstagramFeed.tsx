"use client";

import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

export default function InstagramFeed() {
  // We'll reuse the generated images to populate the feed
  const feedImages = [
    "/images/premium_printer.png",
    "/images/tech_support_hands.png",
    "/images/hero_composition.png",
    "/images/toner_cartridge.png",
  ];

  return (
    <section className="bg-white py-16 pb-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center justify-center mb-10 text-center">
          <FaInstagram className="w-8 h-8 text-brand-dark mb-3" />
          <h2 className="text-2xl md:text-3xl font-black font-montserrat text-brand-dark">
            Explora nuestro Instagram <a href="#" className="text-brand-red hover:underline">@gentoner</a>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {feedImages.map((src, idx) => (
            <div key={idx} className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer bg-gray-100">
              <Image 
                src={src}
                alt={`Instagram post ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/40 transition-colors duration-300 flex items-center justify-center">
                <FaInstagram className="text-white opacity-0 group-hover:opacity-100 w-8 h-8 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
