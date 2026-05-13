import { products } from '@/app/data'; // <--- Importamos los datos compartidos
import Link from 'next/link';          // <--- Importamos el conector mágico

export default function Feature() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-4xl font-black italic tracking-tighter">
          RECIEN <span className="text-blue-600">LLEGADOS</span>
        </h2>
        <a href="#" className="text-sm font-bold underline decoration-2 underline-offset-4 hover:text-blue-600 transition">
          VER TODO EL CATÁLOGO
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          // ENVOLVEMOS TODO EN UN LINK
          // La ruta es dinámica: /products/1, /products/2, etc.
          <Link 
            key={product.id} 
            href={`/products/${product.id}`}
            className="group cursor-pointer"
          >
            <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
              
              {/* Contenedor de la imagen */}
              <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-gray-100">
                <span className="absolute top-3 left-3 bg-black text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider z-10">
                  Nuevo Ingreso
                </span>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Info del producto */}
              <div className="mt-auto">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                  {product.category}
                </p>
                <h3 className="font-bold text-lg leading-tight mb-2 group-hover:text-blue-600 transition">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-black text-gray-900">
                    ${product.price.toLocaleString()}
                  </span>
                  <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center group-hover:bg-blue-600 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                  </div>
                </div>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}