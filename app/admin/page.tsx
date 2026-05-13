'use client';

import { useState, useRef } from 'react';
import { crearProducto, borrarProducto } from '../actions';
import Link from 'next/link';
import { AlertCircle, CheckCircle2, Trash2 } from 'lucide-react';

export default function AdminPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Validar acceso al admin (contraseña simple)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      const formData = new FormData(e.currentTarget);
      const result = await crearProducto(formData);
      
      // Limpiar el formulario usando la referencia
      if (formRef.current) {
        formRef.current.reset();
      }
      
      setMessage({
        type: 'success',
        text: '✅ Stock agregado exitosamente. ¡Se verá en el catálogo en segundos!'
      });

      // Auto-limpiar el mensaje después de 3 segundos
      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      setMessage({
        type: 'error',
        text: `❌ Error: ${error instanceof Error ? error.message : 'Error desconocido'}`
      });
    } finally {
      setIsLoading(false);
    }
  }

  // Si no está autenticado, mostrar pantalla de login
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-black text-slate-900 mb-2">
            TIMO<span className="text-blue-500">DEPORTES</span>
          </h1>
          <p className="text-gray-600 mb-8">Panel de Administración</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              // Contraseña simple (puedes cambiarla)
              if (password === 'admin123') {
                setIsAuthenticated(true);
              } else {
                setMessage({
                  type: 'error',
                  text: '❌ Contraseña incorrecta'
                });
              }
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresa la contraseña"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            {message && (
              <div className={`p-3 rounded-lg text-sm ${
                message.type === 'success'
                  ? 'bg-green-50 text-green-700'
                  : 'bg-red-50 text-red-700'
              }`}>
                {message.text}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              Acceder
            </button>
          </form>

          <p className="text-center text-gray-600 text-xs mt-6">
            Contraseña por defecto: <code className="bg-gray-100 px-1 rounded">admin123</code>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-4xl font-black text-slate-900">
              Panel de Admin
            </h1>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="text-red-600 hover:text-red-700 font-medium text-sm"
            >
              Cerrar Sesión
            </button>
          </div>
          <p className="text-gray-600">Agregar nuevas prendas y stock a la tienda</p>
        </div>

        {/* Botones rápidos */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Link
            href="/admin/productos"
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-6 rounded-lg transition-colors text-center"
          >
            📋 Ver Productos ({/* Placeholder */})
          </Link>
          <div className="bg-blue-50 border-2 border-blue-200 text-blue-900 font-bold py-4 px-6 rounded-lg text-center">
            ✅ Nuevo Producto Abajo
          </div>
        </div>

        {/* Mensaje de éxito/error */}
        {message && (
          <div
            className={`mb-6 p-4 rounded-lg flex gap-3 ${
              message.type === 'success'
                ? 'bg-green-50 border border-green-200'
                : 'bg-red-50 border border-red-200'
            }`}
          >
            {message.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            )}
            <p
              className={
                message.type === 'success'
                  ? 'text-green-700'
                  : 'text-red-700'
              }
            >
              {message.text}
            </p>
          </div>
        )}

        {/* Formulario */}
        <form ref={formRef} onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-6">
            {/* Nombre del Producto */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Nombre de la Prenda *
              </label>
              <input
                type="text"
                name="nombre"
                required
                placeholder="Ej: Camiseta Titular 2025"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Precio */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Precio (en pesos) *
              </label>
              <input
                type="number"
                name="precio"
                required
                min="0"
                step="100"
                placeholder="Ej: 75000"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Talle y Stock */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Talle *
                </label>
                <input
                  type="text"
                  name="talle"
                  required
                  placeholder="Ej: M, L, XL"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Cantidad (Stock) *
                </label>
                <input
                  type="number"
                  name="stock"
                  required
                  min="0"
                  step="1"
                  placeholder="Ej: 10"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            {/* URL de Imagen */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                URL de la Imagen (Opcional)
              </label>
              <input
                type="url"
                name="imagen"
                placeholder="Ej: https://images.unsplash.com/photo-..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
              <p className="text-xs text-gray-500 mt-2">
                Puedes copiar la URL de Unsplash, Pexels, o de cualquier sitio deportivo. Si dejas vacío, usará imagen genérica.
              </p>
            </div>
          </div>

          {/* Botones */}
          <div className="mt-8 flex gap-4">
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-sm"
            >
              {isLoading ? 'Guardando...' : '+ Agregar Stock'}
            </button>
            <Link
              href="/"
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors text-center"
            >
              Volver al Catálogo
            </Link>
          </div>
        </form>

        {/* Footer informativo */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800">
            💡 <strong>Tip:</strong> El stock agregado aparecerá inmediatamente en el catálogo.
          </p>
        </div>
      </div>
    </div>
  );
}
