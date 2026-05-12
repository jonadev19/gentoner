import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-gray-300 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-1 group inline-flex">
              <Image 
                src="/images/logo.png" 
                alt="GENTONER Logo" 
                width={400} 
                height={160} 
                className="h-36 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-gray-400 mt-4 max-w-xs">
              Expertos en suministros de impresión, refacciones y soporte técnico especializado para empresas y profesionales.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-montserrat font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-brand-red transition-colors">Inicio</Link></li>
              <li><Link href="/tienda" className="hover:text-brand-red transition-colors">Catálogo de Productos</Link></li>
              <li><Link href="/soporte" className="hover:text-brand-red transition-colors">Soporte Técnico</Link></li>
              <li><Link href="/nosotros" className="hover:text-brand-red transition-colors">Acerca de GENTONER</Link></li>
              <li><Link href="/contacto" className="hover:text-brand-red transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-montserrat font-bold mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-red shrink-0" />
                <span>Av. Tecnológico 123, Ciudad de México, CDMX 01020</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-red shrink-0" />
                <span>+52 (55) 1234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-red shrink-0" />
                <span>ventas@gentoner.mx</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-montserrat font-bold mb-6">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-brand-red hover:text-white transition-all">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-brand-red hover:text-white transition-all">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-brand-red hover:text-white transition-all">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-8">
              <p className="text-xs text-gray-500">
                &copy; 2026 GENTONER. Todos los derechos reservados.
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
