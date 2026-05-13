import { Mail, Phone, MapPin, Send } from "lucide-react";

export const metadata = {
  title: "Contacto | GENTONER",
  description: "Ponte en contacto con GENTONER. Envíanos un mensaje o encuéntranos en nuestras oficinas.",
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-brand-dark font-montserrat uppercase tracking-tight mb-4">
            Ponte en <span className="text-brand-red">Contacto</span>
          </h1>
          <p className="text-lg text-gray-600">
            ¿Tienes alguna duda, requieres una cotización o necesitas soporte técnico especializado? Escríbenos y nuestro equipo te atenderá de inmediato.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex items-start gap-4 group hover:shadow-lg transition-shadow">
              <div className="bg-red-50 p-4 rounded-full text-brand-red group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-brand-dark text-lg mb-1">Correo Electrónico</h3>
                <a href="mailto:contacto@gentoner.com" className="text-gray-600 hover:text-brand-red transition-colors">
                  contacto@gentoner.com
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex items-start gap-4 group hover:shadow-lg transition-shadow">
              <div className="bg-red-50 p-4 rounded-full text-brand-red group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-brand-dark text-lg mb-1">Teléfono</h3>
                <a href="tel:+525555555555" className="text-gray-600 hover:text-brand-red transition-colors block">
                  +52 (55) 5555 5555
                </a>
                <span className="text-sm text-gray-400">Lunes a Viernes: 9am - 6pm</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex items-start gap-4 group hover:shadow-lg transition-shadow">
              <div className="bg-red-50 p-4 rounded-full text-brand-red group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-brand-dark text-lg mb-1">Nuestras Oficinas</h3>
                <p className="text-gray-600">
                  Av. Principal #123, Col. Centro<br />
                  Ciudad de México, CP 00000
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 h-full">
              <h2 className="text-2xl font-bold text-brand-dark mb-6 font-montserrat">Envíanos un mensaje</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700">Nombre completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="Ej. Juan Pérez"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all bg-gray-50 focus:bg-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700">Correo electrónico</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="juan@empresa.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-gray-700">Asunto</label>
                  <input 
                    type="text" 
                    id="subject" 
                    placeholder="Cotización de tóners, Soporte técnico..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all bg-gray-50 focus:bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-700">Mensaje</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    placeholder="Escribe los detalles de lo que necesitas..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all bg-gray-50 focus:bg-white resize-none"
                  ></textarea>
                </div>

                <button 
                  type="button"
                  className="w-full md:w-auto bg-brand-red hover:bg-red-700 text-white px-10 py-4 rounded-full font-black text-lg transition-all shadow-[0_4px_14px_0_rgba(237,50,55,0.39)] hover:shadow-[0_6px_20px_rgba(237,50,55,0.23)] hover:-translate-y-0.5 uppercase tracking-wide flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
