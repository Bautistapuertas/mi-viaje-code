import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import Feature from '@/components/Feature'; // Tu import (que ahora está gris/subrayado)

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Categories /> 
      
      {/* AGREGÁ ESTA LÍNEA ACÁ ABAJO: */}
      <Feature />  
      
      {/* Footer Provisorio */}
      <div className="py-20 text-center bg-black text-white">
        <p>TIMO DEPORTES © 2026</p>
      </div>
    </main>
  );
}