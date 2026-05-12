"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CategoryCards() {
  const categories = [
    {
      title: "Toner",
      desc: "Cartuchos premium para impresoras láser con rendimiento superior.",
      image: "/images/toner.png",
      buttonClass: "bg-brand-red text-white hover:bg-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]",
      glowClass: "bg-brand-red/20"
    },
    {
      title: "Refacciones",
      desc: "Piezas originales y certificadas para todo tipo de equipos.",
      image: "/images/refacciones.png",
      buttonClass: "bg-brand-red text-white hover:bg-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]",
      glowClass: "bg-brand-red/20"
    },
    {
      title: "Mantenimiento",
      desc: "Servicio preventivo para alargar la vida de tus dispositivos.",
      image: "/images/mantenimiento.png",
      buttonClass: "bg-brand-red text-white hover:bg-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]",
      glowClass: "bg-brand-red/20"
    },
    {
      title: "Soporte Técnico",
      desc: "Atención especializada y reparación garantizada.",
      image: "/images/soporte.png",
      buttonClass: "bg-brand-red text-white hover:bg-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]",
      glowClass: "bg-brand-red/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="bg-brand-black py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-red uppercase tracking-widest mb-2">Explora nuestro catálogo</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black font-montserrat text-white">
            Soluciones Integrales
          </h3>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="group bg-brand-dark border border-gray-800 rounded-3xl overflow-hidden relative transition-all duration-300 hover:border-brand-red/50 shadow-2xl flex flex-col h-full"
            >
              {/* Image Section */}
              <div className="relative w-full aspect-square bg-[#111] overflow-hidden border-b border-gray-800">
                {/* Subtle colored glow behind image */}
                <div className={`absolute inset-0 blur-[60px] opacity-30 ${cat.glowClass}`} />
                <Image 
                  src={cat.image} 
                  alt={cat.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col items-center text-center flex-1">
                <h4 className="text-2xl font-bold text-white font-montserrat mb-3">{cat.title}</h4>
                <p className="text-gray-400 text-sm mb-8 flex-1 leading-relaxed">
                  {cat.desc}
                </p>
                
                <button className={`w-full py-3 rounded-full font-bold transition-all duration-300 ${cat.buttonClass}`}>
                  VER MÁS
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
