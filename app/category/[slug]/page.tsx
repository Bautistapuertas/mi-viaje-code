import { products } from '@/app/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

// Esta función recibe el nombre de la categoría por la URL (ej: Fútbol)
export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  
  // 1. Leemos qué categoría pidió el usuario
  const { slug } = await params;
  
  // 2. Decodificamos el texto (por si tiene tildes o espacios raros, ej: F%C3%BAtbol -> Fútbol)
  const categoryName = decodeURIComponent(slug);

  // 3. FILTRAMOS: "Dame solo los productos donde la categoría coincida"
  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Título de la Categoría */}
        <h1 className="text-4xl font-black italic tracking-tighter uppercase mb-12">
          Categoría: <span className="text-blue-600">{categoryName}</span>
        </h1>

        {/* Mensaje si no hay nada (Validación de Ing. en Sistemas) */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-2xl">
            <p className="text-xl text-gray-500">No encontramos productos en esta categoría todavía.</p>
            <Link href="/" className="text-blue-600 font-bold mt-4 inline-block hover:underline">
              Volver al inicio
            </Link>
          </div>
        ) : (
          /* La misma grilla que en la Home, pero con los productos filtrados */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Link 
                key={product.id} 
                href={`/products/${product.id}`}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                  <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-auto">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                      {product.category}
                    </p>
                    <h3 className="font-bold text-lg leading-tight mb-2 group-hover:text-blue-600 transition">
                      {product.name}
                    </h3>
                    <span className="text-xl font-black text-gray-900">
                      ${product.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
      <Footer />
    </div>
  );
}