import Link from 'next/link';
import { ShoppingCart, Search, Menu, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      {/* 1. ANUNCIO SUPERIOR */}
      <div className="bg-black text-white text-[10px] md:text-xs text-center py-2 font-medium tracking-widest uppercase">
        Envíos a todo el país | 3 y 6 cuotas sin interés
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* BOTÓN MENÚ MÓVIL */}
          <div className="flex items-center md:hidden">
            <button className="text-gray-900">
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* 2. LOGO */}
          <div className="flex-shrink-0 flex items-center justify-center flex-1 md:flex-none md:justify-start">
            <Link href="/" className="text-2xl font-black tracking-tighter uppercase italic">
              TIMO<span className="text-blue-600">.</span>DEPORTES
            </Link>
          </div>

          {/* 3. CATEGORÍAS (Centro) */}
          <div className="hidden md:flex space-x-8">
            <Link href="/category/Fútbol" className="text-gray-700 hover:text-black font-bold text-sm uppercase tracking-wide transition-colors">
              Fútbol
            </Link>
            <Link href="/category/Training" className="text-gray-700 hover:text-black font-bold text-sm uppercase tracking-wide transition-colors">
              Training
            </Link>
            <Link href="/category/Calzado" className="text-gray-700 hover:text-black font-bold text-sm uppercase tracking-wide transition-colors">
              Calzado
            </Link>
            <Link href="/category/Ofertas" className="text-red-600 hover:text-red-800 font-bold text-sm uppercase tracking-wide transition-colors">
              Sale
            </Link>
          </div>

          {/* 4. BUSCADOR Y CARRITO (Derecha) */}
          <div className="flex items-center gap-4 text-gray-900">
            
            {/* Formulario de Búsqueda */}
            <form action="/search" className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-1.5 border border-transparent focus-within:border-black transition-colors">
              <Search className="h-4 w-4 text-gray-500" />
              <input 
                name="q"
                type="text" 
                placeholder="Buscar..." 
                className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-24 lg:w-32 outline-none placeholder:text-gray-400"
                autoComplete="off"
              />
            </form>

            <button className="md:hidden"><Search className="h-5 w-5" /></button>
            <button className="hidden md:block"><User className="h-5 w-5 hover:scale-110 transition-transform" /></button>
            
            <button className="relative">
              <ShoppingCart className="h-5 w-5 hover:scale-110 transition-transform" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">0</span>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}