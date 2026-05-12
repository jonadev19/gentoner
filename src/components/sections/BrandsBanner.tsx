"use client";

import Image from "next/image";

export default function BrandsBanner() {
  const brands = [
    { name: "HP", logo: "/images/hp.png" },
    { name: "Brother", logo: "/images/brother.png" },
    { name: "Samsung", logo: "/images/samsung.png" },
    { name: "Ricoh", logo: "/images/ricoh.png" },
    { name: "Kyocera", logo: "/images/kyocera.png" },
    { name: "Xerox", logo: "/images/xerox.png" },
  ];

  return (
    <section className="bg-gray-200 py-12 border-b-4 border-brand-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-xl md:text-2xl font-bold text-brand-dark mb-10 font-montserrat">
          Más de 200 modelos disponibles...
        </h3>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-20">
          {brands.map((brand, idx) => (
            <div key={idx} className="relative w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-14 lg:w-32 lg:h-16 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300">
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                fill
                sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
