import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';

interface ProductProps {
  name: string;
  price: number;
  category: string;
  image: string;
}

export default function ProductCard({ name, price, category, image }: ProductProps) {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
      
      {/* ZONA DE IMAGEN */}
      <div className="relative h-72 w-full bg-gray-100 overflow-hidden">
        <Image 
          src={image} 
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Etiqueta flotante */}
        <div className="absolute top-2 left-2 bg-black text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
          Nuevo Ingreso
        </div>
      </div>

      {/* ZONA DE INFO */}
      <div className="p-4 flex flex-col gap-2">
        <p className="text-xs text-gray-500 uppercase font-bold tracking-wide">{category}</p>
        <h3 className="text-lg font-bold text-gray-900 leading-none">{name}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-black text-gray-900">${price.toLocaleString()}</span>
          
          <button className="bg-black text-white p-2 rounded-full hover:bg-blue-600 transition-colors">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}