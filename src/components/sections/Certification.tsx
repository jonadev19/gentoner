"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function Certification() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-black font-montserrat text-brand-dark leading-tight">
              Calidad Premium <br /> <span className="text-brand-red">Certificada</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              En GENTONER nos enorgullecemos de ofrecer productos que cumplen con los más altos estándares internacionales. Nuestros toners y refacciones garantizan un rendimiento óptimo y durabilidad excepcional.
            </p>
            
            <ul className="mt-8 space-y-4">
              {['Rendimiento superior comprobado', 'Componentes de alta durabilidad', 'Soporte técnico especializado', 'Garantía extendida en refacciones'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-brand-dark font-medium">
                  <CheckCircle2 className="w-6 h-6 text-brand-red shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="mt-10 bg-brand-dark hover:bg-black text-white px-8 py-4 rounded-full font-bold transition-all hover:shadow-lg hover:-translate-y-1">
              Conocer más
            </button>
          </motion.div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="/images/premium_printer.png" 
              alt="Impresora Premium"
              fill
              className="object-cover"
            />
            
            {/* Overlay Box */}
            <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-72 bg-brand-dark/95 backdrop-blur-md p-6 rounded-xl border border-gray-700 shadow-2xl text-white">
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-black font-montserrat text-brand-red">ISO 9001</div>
                  <div className="text-sm text-gray-300 font-medium">Calidad Certificada</div>
                </div>
                <div className="h-px bg-gray-700 w-full"></div>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-2xl font-black font-montserrat">+13 años</div>
                    <div className="text-sm text-gray-300 font-medium">Experiencia</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black font-montserrat">100%</div>
                    <div className="text-sm text-gray-300 font-medium">Garantía</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
