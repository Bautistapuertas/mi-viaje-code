'use client'; // <--- ESTA LÍNEA ES MÁGICA. Le dice a Next.js: "Esto corre en el navegador"

import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

// Definimos qué datos necesita este componente para funcionar
interface ProductActionsProps {
  product: {
    name: string;
    price: number;
  };
}

export default function ProductActions({ product }: ProductActionsProps) {
  // 1. ESTADO (Memoria RAM del componente)
  // Guardamos el talle seleccionado. Arranca en 'M' por defecto.
  const [selectedSize, setSelectedSize] = useState('M');

  // 2. LÓGICA (La función que se ejecuta al clickear)
  const handleBuy = () => {
    const phoneNumber = '5492215584650'; // <--- Poner el celular de tu hermano acá (sin +)
    
    // Armamos el mensaje automático
    const message = `Hola Timo Deportes!  Quiero comprar la *${product.name}* en talle *${selectedSize}*. Precio: $${product.price}`;
    
    // Creamos el link de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Abrimos una pestaña nueva
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="space-y-6">
      {/* Selector de Talles */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Elegí tu talle: <span className="font-bold text-blue-600">{selectedSize}</span>
        </label>
        <div className="flex space-x-3">
          {['S', 'M', 'L', 'XL'].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)} // Al clickear, actualizamos la memoria
              className={`w-12 h-12 border rounded-lg flex items-center justify-center transition
                ${selectedSize === size 
                  ? 'bg-black text-white border-black' // Estilo si está seleccionado
                  : 'bg-white text-gray-700 border-gray-300 hover:border-black' // Estilo normal
                }
              `}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Botón de Comprar */}
      <button 
        onClick={handleBuy} // <--- Conectamos el evento
        className="w-full bg-green-600 text-white py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-2 hover:bg-green-700 transition transform active:scale-95 shadow-lg shadow-green-600/20"
      >
        <ShoppingCart className="w-5 h-5" />
        <span>Pedir por WhatsApp</span>
      </button>

      <p className="text-xs text-center text-gray-500 mt-4">
        Te responderemos al instante para coordinar el pago y envío.
      </p>
    </div>
  );
}