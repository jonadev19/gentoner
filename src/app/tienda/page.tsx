import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Filter, Search } from "lucide-react";

export const metadata = {
  title: "Tienda | GENTONER",
  description: "Catálogo completo de productos premium GENTONER. Tóners, tintas, impresoras y refacciones.",
};

const mockProducts = [
  { id: 1, name: "Tóner Premium GENTONER Compatible HP 85A", category: "Tóner", price: "$250.00", image: "/images/premium_toner_cartridge_1778371036159.png" },
  { id: 2, name: "Tambor Premium GENTONER Brother DR-1060", category: "Tambor", price: "$320.00", image: "/images/premium_drum_unit_1778371057490.png" },
  { id: 3, name: "Impresora Multifuncional Premium Series", category: "Impresoras", price: "$4,500.00", image: "/images/premium_printer.png" },
  { id: 4, name: "Tinta Premium GENTONER Universal 1L", category: "Tinta", price: "$120.00", image: "/images/premium_ink_bottles_1778371016257.png" },
  { id: 5, name: "Cartucho de Tóner GENTONER Alta Capacidad", category: "Tóner", price: "$280.00", image: "/images/toner_cartridge.png" },
  { id: 6, name: "Kit de Mantenimiento / Refacciones", category: "Refacciones", price: "$850.00", image: "/images/refacciones.png" },
];

export default function TiendaPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <h1 className="text-3xl md:text-5xl font-black text-brand-dark font-montserrat uppercase tracking-tight">Catálogo de Productos</h1>
            <p className="text-gray-600 mt-2 text-lg">Encuentra los mejores suministros y equipos con calidad premium.</p>
          </div>
          
          <div className="flex gap-3 w-full md:w-auto">
            <div className="relative w-full md:w-72">
              <input 
                type="text" 
                placeholder="Buscar productos..." 
                className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
              />
              <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
            </div>
            <button className="bg-white border border-gray-200 p-3 rounded-full hover:bg-gray-50 transition-colors shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center justify-center flex-shrink-0">
              <Filter className="w-5 h-5 text-brand-dark" />
            </button>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="flex overflow-x-auto pb-4 mb-10 gap-3 no-scrollbar">
          {["Todos", "Tóners", "Tintas", "Impresoras", "Tambores", "Refacciones"].map((cat, i) => (
            <button 
              key={i} 
              className={`px-6 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all shadow-sm ${i === 0 ? 'bg-brand-dark text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-dark hover:text-brand-dark'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 group border border-gray-100 flex flex-col">
              <div className="relative w-full h-64 bg-gray-50 flex items-center justify-center p-6 group-hover:bg-gray-100 transition-colors">
                {/* Decorative background circle */}
                <div className="absolute w-44 h-44 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover:scale-105 transition-transform duration-500"></div>
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  className="object-contain p-8 relative z-10 group-hover:scale-110 transition-transform duration-500 drop-shadow-xl"
                />
                <span className="absolute top-4 left-4 bg-brand-red text-white text-[11px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full z-20 shadow-sm">
                  {product.category}
                </span>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-brand-dark mb-2 line-clamp-2 leading-tight">{product.name}</h3>
                
                {/* Mock Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs text-gray-400 ml-1 font-medium">(24)</span>
                </div>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                  <span className="text-2xl font-black text-brand-dark">{product.price}</span>
                  <button className="bg-brand-dark hover:bg-brand-red text-white p-3.5 rounded-full transition-colors shadow-md hover:shadow-lg flex-shrink-0 hover:-translate-y-0.5 transform duration-200">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="mt-16 flex justify-center">
          <button className="border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white px-10 py-3.5 rounded-full font-bold transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5">
            Cargar más productos
          </button>
        </div>
      </div>
    </div>
  );
}
