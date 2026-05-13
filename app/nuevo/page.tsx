import { guardarProducto } from './actions';

export default function NuevoProducto() {
  return (
    <main className="p-10 min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Agregar Stock</h1>
        
        {/* Le pasamos la función importada al formulario */}
        <form action={guardarProducto} className="flex flex-col gap-4">
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre de la prenda</label>
            <input type="text" name="nombre" required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Precio ($)</label>
            <input type="number" name="precio" required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Talle</label>
              <input type="text" name="talle" required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Cantidad (Stock)</label>
              <input type="number" name="stock" required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
            </div>
          </div>

          <button type="submit" className="mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition">
            Guardar Producto
          </button>
        </form>

      </div>
    </main>
  );
}