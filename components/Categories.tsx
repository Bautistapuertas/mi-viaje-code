import Link from 'next/link';


export default function Categories() {
  const categories = [
    {
      name: 'HOMBRES',
      image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1000&auto=format&fit=crop', // Hombre entrenando
      link: '/catalogo/hombres'
    },
    {
      name: 'MUJERES',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop', // (La que ya funcionaba)
      link: '/catalogo/mujeres'
    },
    {
      name: 'ACCESORIOS',
      image: 'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?q=80&w=1000&auto=format&fit=crop', // Pelota de fútbol
      link: '/catalogo/accesorios'
    }
  ];
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-black text-center mb-12 uppercase italic tracking-tighter">
        Elegí tu estilo
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <Link 
            key={cat.name} 
            href={cat.link}
            className="group relative h-[500px] w-full overflow-hidden rounded-lg cursor-pointer"
          >
            {/* Imagen de Fondo con Zoom al pasar el mouse */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url('${cat.image}')` }}
            />
            
            {/* Capa oscura para que se lea el texto */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
            
            {/* Texto Centrado */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-4xl font-black text-white uppercase italic tracking-widest border-b-2 border-transparent group-hover:border-white transition-all duration-300">
                {cat.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}