import { Client } from 'pg';
import { borrarProducto } from '@/app/actions';
import Link from 'next/link';
import { Trash2, ArrowLeft } from 'lucide-react';

export default async function AdminProductosPage() {
  const connectionString = process.env.NODE_ENV === 'production' 
    ? `${process.env.DATABASE_URL}?sslmode=verify-full`
    : process.env.DATABASE_URL;
  
  const cliente = new Client({
    connectionString,
  });

  await cliente.connect();
  const respuesta = await cliente.query("SELECT * FROM Productos ORDER BY id DESC;");
  const productos = respuesta.rows;
  await cliente.end();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/admin" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4 font-medium">
            <ArrowLeft className="h-4 w-4" />
            Volver al admin
          </Link>
          <h1 className="text-4xl font-black text-slate-900">
            Gestionar Productos
          </h1>
          <p className="text-gray-600 mt-2">Total: {productos.length} productos</p>
        </div>

        {/* Tabla de productos */}
        {productos.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-gray-500">No hay productos. <Link href="/admin" className="text-blue-600 hover:underline">Agrega uno</Link></p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold">ID</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">Nombre</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">Talle</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">Precio</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">Stock</th>
                    <th className="px-6 py-4 text-center text-sm font-bold">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {productos.map((prod) => (
                    <tr key={prod.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-900 font-mono">{prod.id}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">{prod.nombre}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{prod.talle}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-bold">${prod.precio.toLocaleString('es-AR')}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          prod.stock > 5 ? 'bg-green-100 text-green-800' : prod.stock > 0 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {prod.stock} unidades
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-center">
                        <form action={borrarProducto} className="inline">
                          <input type="hidden" name="id" value={prod.id} />
                          <button
                            type="submit"
                            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs font-bold transition-colors"
                            onClick={(e) => {
                              if (!confirm(`¿Seguro que quieres borrar "${prod.nombre}"?`)) {
                                e.preventDefault();
                              }
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                            Borrar
                          </button>
                        </form>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 flex gap-4">
          <Link
            href="/admin"
            className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center"
          >
            + Agregar Nuevo Producto
          </Link>
          <Link
            href="/"
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors text-center"
          >
            Ver Catálogo
          </Link>
        </div>
      </div>
    </div>
  );
}
