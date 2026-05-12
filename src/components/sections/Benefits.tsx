"use client";

import { motion } from "framer-motion";
import { PiggyBank, Award, Smile } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      title: "AHORRA",
      icon: PiggyBank,
      desc: "Optimiza tus costos de impresión hasta un 40% con nuestros consumibles premium sin sacrificar calidad.",
    },
    {
      title: "GANA",
      icon: Award,
      desc: "Gana tranquilidad con nuestras garantías extendidas y soporte técnico prioritario 24/7 para tu empresa.",
    },
    {
      title: "DISFRUTA",
      icon: Smile,
      desc: "Disfruta de impresiones nítidas, colores vibrantes y equipos siempre listos para el trabajo duro.",
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-sm font-bold text-brand-red uppercase tracking-widest mb-2">Por qué elegirnos</h2>
        <h3 className="text-3xl md:text-4xl font-black font-montserrat text-brand-dark mb-16">
          BENEFICIOS GENTONER
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col items-center group"
              >
                <div className="w-20 h-20 bg-brand-light rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors duration-300 shadow-sm">
                  <Icon className="w-10 h-10 text-brand-dark group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-2xl font-black font-montserrat text-brand-dark mb-4">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed max-w-sm">
                  {benefit.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <button className="bg-brand-red hover:bg-red-700 text-white px-16 py-5 rounded-full font-bold text-xl tracking-wide transition-all shadow-[0_4px_20px_rgba(237,50,55,0.3)] hover:shadow-[0_6px_25px_rgba(237,50,55,0.4)] hover:-translate-y-1">
            COTIZAR AQUÍ
          </button>
        </motion.div>

      </div>
    </section>
  );
}
