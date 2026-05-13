import { Instagram, Facebook, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        
        {/* Columna 1: Marca */}
        <div className="space-y-4">
          <h3 className="text-2xl font-black italic tracking-tighter">TIMO<span className="text-blue-600">.</span>DEPORTES</h3>
          <p className="text-gray-400 text-sm">
            Ropa deportiva de alta calidad para atletas que buscan romper sus límites.
          </p>
          <div className="flex space-x-4">
            <Instagram className="h-6 w-6 hover:text-blue-500 cursor-pointer" />
            <Facebook className="h-6 w-6 hover:text-blue-500 cursor-pointer" />
          </div>
        </div>

        {/* Columna 2: Navegación */}
        <div>
          <h4 className="font-bold uppercase tracking-wider mb-4">Navegación</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition">Inicio</a></li>
            <li><a href="#" className="hover:text-white transition">Catálogo</a></li>
            <li><a href="#" className="hover:text-white transition">Ofertas</a></li>
            <li><a href="#" className="hover:text-white transition">Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3: Legales */}
        <div>
          <h4 className="font-bold uppercase tracking-wider mb-4">Ayuda</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition">Envíos y Devoluciones</a></li>
            <li><a href="#" className="hover:text-white transition">Guía de Talles</a></li>
            <li><a href="#" className="hover:text-white transition">Preguntas Frecuentes</a></li>
          </ul>
        </div>

        {/* Columna 4: Contacto */}
        <div>
          <h4 className="font-bold uppercase tracking-wider mb-4">Contacto</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-600" />
              <span>Av. Siempreviva 123, Buenos Aires</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-blue-600" />
              <span>+54 11 1234-5678</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-600" />
              <span>hola@timodeportes.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Barra final */}
      <div className="border-t border-neutral-800 pt-8 text-center text-neutral-500 text-xs">
        <p>&copy; 2026 Timo Deportes. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}