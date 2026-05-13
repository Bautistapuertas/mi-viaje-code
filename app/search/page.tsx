import { products } from '@/app/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Search } from 'lucide-react';

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  // 1. Desempaquetamos lo que el usuario escribió (Promesa)
  const { q } = await searchParams;
  const query = q?.toLowerCase() || '';

  // 2. Filtramos los productos
  const filteredProducts = products.filter((product) => 
    product.name.toLowerCase().includes(query) || 
    product.description.toLowerCase().includes(query) ||
    product.category.toLowerCase().includes(query)
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* --- ESTE DIV ES EL CONTENEDOR QUE FALTABA --- */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <Search className="text-gray-400" />
          Resultados para: <span className="text-blue-600 italic">"{q}"</span>
        </h1>

        {filteredProducts.length === 0 ? (
          // CASO A: NO HAY RESULTADOS
          <div className="text-center py-20 bg-gray-50 rounded-2xl">
            <p className="text-xl text-gray-500">No encontramos nada que coincida.</p>
            <p className="text-sm text-gray-400 mt-2">Probá con "camiseta", "fútbol" o "buzo".</p>
          </div>
        ) : (
          // CASO B: SI HAY RESULTADOS (Mostramos la grilla)
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="group cursor-pointer">
                <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all border border-gray-100 h-full flex flex-col">
                  
                  <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="mt-auto">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{product.category}</p>
                    <h3 className="font-bold text-lg leading-tight mb-2 group-hover:text-blue-600 transition">{product.name}</h3>
                    <span className="text-xl font-black text-gray-900">${product.price.toLocaleString()}</span>
                  </div>

                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
      {/* ----------------------------------------------- */}

      <Footer />
    </div>
  );
}