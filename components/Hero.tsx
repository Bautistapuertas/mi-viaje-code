import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden bg-black">
      
      {/* 1. IMAGEN DE FONDO (Con un filtro oscuro para que se lea el texto) */}
      <div 
        className="absolute inset-0 z-0 opacity-60"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2500&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* 2. CONTENIDO (Texto y Botones) */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
        
        <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-tight">
          Entrená sin <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white">
            Límites
          </span>
        </h1>
        
        <p className="text-gray-200 text-lg md:text-xl font-light tracking-wide max-w-lg mx-auto">
          Nueva colección de indumentaria deportiva. Calidad profesional para tu día a día.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
          <Link href="/catalogo" className="bg-white text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
            Ver Colección
          </Link>
          <Link href="/ofertas" className="border-2 border-white text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
            Ofertas
          </Link>
        </div>

      </div>
    </section>
  );
}