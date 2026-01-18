import ProductCard from './ProductCard';

export default function Feature() {
  const products = [
    {
      id: 1,
      name: 'Camiseta Titular 2026',
      price: 45000,
      category: 'Fútbol',
      image: 'https://images.unsplash.com/photo-1580087433295-ab2600c1030e?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 2,
      name: 'Buzo Training Pro',
      price: 68000,
      category: 'Training',
      image:  'https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Short de Juego',
      price: 22500,
      category: 'Fútbol',
      image: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 4,
      name: 'Botines X Speed',
      price: 120000,
      category: 'Calzado',
      image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 bg-white">
      <div className="flex justify-between items-end mb-10">
        <h2 className="text-4xl font-black uppercase italic tracking-tighter">
          Recién <span className="text-blue-600">Llegados</span>
        </h2>
        <a href="/catalogo" className="text-sm font-bold border-b-2 border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">
          VER TODO EL CATÁLOGO
        </a>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
}