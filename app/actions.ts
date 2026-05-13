'use server'

import { Client } from 'pg';
import { revalidatePath } from 'next/cache';

export async function borrarProducto(formData: FormData) {
  // 1. Agarramos el ID secreto que nos va a mandar el botón
  const id = formData.get('id');

  // 2. Nos conectamos a Neon
  const connectionString = process.env.NODE_ENV === 'production' 
    ? `${process.env.DATABASE_URL}?sslmode=verify-full`
    : process.env.DATABASE_URL;
  
  const cliente = new Client({
    connectionString,
  });
  await cliente.connect();

  // 3. ¡LA ORDEN SQL DESTRUCTORA!
  // Siempre usamos el WHERE. Si te olvidás el WHERE, borrás toda la tienda entera.
  await cliente.query('DELETE FROM Productos WHERE id = $1', [id]);
  await cliente.end();

  // 4. Magia pura de Next.js: Le decimos que "limpie el caché" y vuelva a cargar la página principal
  revalidatePath('/');
}

export async function crearProducto(formData: FormData) {
  // 1. Extraemos los datos del formulario
  const nombre = formData.get('nombre');
  const precio = formData.get('precio');
  const talle = formData.get('talle');
  const stock = formData.get('stock');
  const imagen = formData.get('imagen') || 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop';

  // 2. Validamos que no estén vacíos
  if (!nombre || !precio || !talle || !stock) {
    throw new Error('Todos los campos son obligatorios');
  }

  // 3. Nos conectamos a la BD
  const connectionString = process.env.NODE_ENV === 'production' 
    ? `${process.env.DATABASE_URL}?sslmode=verify-full`
    : process.env.DATABASE_URL;
  
  const cliente = new Client({
    connectionString,
  });
  await cliente.connect();

  // 4. Insertamos el producto
  try {
    // Primero intenta insertar con imagen (si la tabla tiene la columna)
    // Si no existe, inserta sin ella
    try {
      await cliente.query(
        'INSERT INTO Productos (nombre, precio, talle, stock, imagen) VALUES ($1, $2, $3, $4, $5)',
        [nombre, parseFloat(precio as string), talle, parseInt(stock as string), imagen]
      );
    } catch (innerError: any) {
      // Si la columna no existe, inserta sin imagen
      if (innerError.message.includes('imagen')) {
        await cliente.query(
          'INSERT INTO Productos (nombre, precio, talle, stock) VALUES ($1, $2, $3, $4)',
          [nombre, parseFloat(precio as string), talle, parseInt(stock as string)]
        );
      } else {
        throw innerError;
      }
    }
    
    // 5. Limpiamos el caché
    revalidatePath('/');
    revalidatePath('/admin');
    
    return { success: true, message: 'Producto agregado exitosamente' };
  } catch (error) {
    throw new Error(`Error al guardar: ${error instanceof Error ? error.message : 'Error desconocido'}`);
  } finally {
    await cliente.end();
  }
}