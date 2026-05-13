import { products } from '@/app/data';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
// 👇 ACÁ IMPORTAMOS TU NUEVO COMPONENTE
import ProductActions from '@/components/ProductAction'; 

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-gray-500 hover:text-black mb-8 transition">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al catálogo
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Foto */}
          <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden relative">
             <img 
               src={product.image} 
               alt={product.name} 
               className="w-full h-full object-cover object-center"
             />
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-blue-600 font-bold tracking-wider uppercase mb-2">
                {product.category}
              </p>
              <h1 className="text-4xl font-black text-gray-900 tracking-tight">
                {product.name}
              </h1>
            </div>

            <p className="text-3xl font-medium text-gray-900">
              ${product.price.toLocaleString()}
            </p>

            <div className="prose text-gray-500 leading-relaxed">
              <p>{product.description}</p>
            </div>

            {/* 👇 ACÁ USAMOS EL COMPONENTE INTERACTIVO (Borramos lo viejo) */}
            <div className="mt-8">
              <ProductActions product={product} />
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}