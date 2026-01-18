import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Categories /> {/* <--- Renderizar */}
      
      {/* Footer Provisorio */}
      <div className="py-20 text-center bg-black text-white">
        <p>TIMO DEPORTES © 2026</p>
      </div>
    </main>
  );
}