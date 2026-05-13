import { Client } from 'pg';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import ProductCard from '@/components/ProductCard';

export default async function Home() {
  
  const connectionString = process.env.NODE_ENV === 'production' 
    ? `${process.env.DATABASE_URL}?sslmode=verify-full`
    : process.env.DATABASE_URL;
  
  const cliente = new Client({
    connectionString,
  });

  await cliente.connect();
  const respuesta = await cliente.query("SELECT * FROM Productos ORDER BY id ASC;");
  const productos = respuesta.rows;
  await cliente.end();

  return (
    <main className="w-full">
      {/* Hero Section */}
      <Hero />
      
      {/* Categories Section */}
      <Categories />
      
      {/* Catálogo de Productos */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-black text-gray-900 uppercase italic tracking-tighter">
            Nuevos Ingresos
          </h2>
          <div className="h-1 w-20 bg-blue-600 mt-3"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productos.map((prod) => (
            <div key={prod.id} className="group relative">
              {/* Usar ProductCard para mostrar cada producto */}
              <ProductCard 
                name={prod.nombre}
                price={prod.precio}
                category={prod.talle}
                image={prod.imagen || "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop"}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}