import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero'; // <--- Importamos el nuevo componente

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero /> {/* <--- Lo renderizamos acá */}
      
      {/* Espacio vacío para lo que sigue después */}
      <div className="py-20 text-center">
        <p className="text-gray-400">Próximamente: Grilla de productos...</p>
      </div>
    </main>
  );
}