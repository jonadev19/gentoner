"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/images/hero_slide_1.png",
    subtitle: "Especialistas en",
    titleLine1: "Toner",
    titleHighlight: " Original y Compatible",
    titleLine2: "Todas las Marcas",
    bullets: ["Empresas", "Hogar", "Escuelas"],
  },
  {
    id: 2,
    image: "/images/hero_slide_2.png",
    subtitle: "Soluciones para",
    titleLine1: "Equipos de",
    titleHighlight: " Alto Rendimiento",
    titleLine2: "Calidad Industrial",
    bullets: ["Mantenimiento", "Soporte", "Garantía"],
  },
  {
    id: 3,
    image: "/images/hero_slide_3.png",
    subtitle: "La mejor calidad en",
    titleLine1: "Refacciones y",
    titleHighlight: " Componentes",
    titleLine2: "Rendimiento Total",
    bullets: ["Precisión", "Durabilidad", "Certificados"],
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full bg-brand-black overflow-hidden flex items-center">
      
      {/* Carousel Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slides[current].image}
            alt="Hero background"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-gray-300 font-montserrat text-lg tracking-widest uppercase mb-2">
                {slides[current].subtitle}
              </p>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-montserrat tracking-tight text-white leading-tight mb-6">
                {slides[current].titleLine1}
                <span className="text-brand-red">{slides[current].titleHighlight}</span>
                <br />
                {slides[current].titleLine2}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-gray-300 font-medium text-lg mb-10">
                {slides[current].bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <span>{bullet}</span>
                    {idx < slides[current].bullets.length - 1 && (
                      <div className="w-2 h-2 rounded-full bg-brand-red" />
                    )}
                  </div>
                ))}
              </div>

              <button className="bg-[#FF9900] hover:bg-[#E68A00] text-white px-10 py-4 rounded font-bold text-lg transition-all shadow-[0_4px_20px_rgba(255,153,0,0.3)] hover:shadow-[0_6px_25px_rgba(255,153,0,0.5)]">
                Contactenos
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute z-20 left-4 right-4 md:left-8 md:right-8 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
        <button 
          onClick={prevSlide}
          className="pointer-events-auto w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-brand-red hover:border-brand-red transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="pointer-events-auto w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-brand-red hover:border-brand-red transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

    </section>
  );
}
