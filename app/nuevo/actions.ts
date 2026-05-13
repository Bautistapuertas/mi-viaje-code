'use server' // ¡La directiva clave! Le asegura a Next.js que esto NUNCA viajará al navegador.

import { Client } from 'pg';
import { redirect } from 'next/navigation';

// Exportamos la función para que la pantalla la pueda usar
export async function guardarProducto(formData: FormData) {
  
  const nombre = formData.get('nombre');
  const precio = formData.get('precio');
  const talle = formData.get('talle');
  const stock = formData.get('stock');

  const cliente = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  await cliente.connect();

  const query = `
    INSERT INTO Productos (nombre, precio, talle, stock) 
    VALUES ($1, $2, $3, $4)
  `;
  const valores = [nombre, precio, talle, stock];

  await cliente.query(query, valores);
  await cliente.end();

  redirect('/');
}