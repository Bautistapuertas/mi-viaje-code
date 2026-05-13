'use client';

import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';

interface ProductProps {
  name: string;
  price: number;
  category: string;
  image: string;
}

export default function ProductCard({ name, price, category, image }: ProductProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
      
      {/* ZONA DE IMAGEN */}
      <div className="relative h-72 w-full bg-gray-100 overflow-hidden">
        <img 
          src={imgError ? 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop' : image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          onError={() => setImgError(true)}
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