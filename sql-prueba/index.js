// Importamos la herramienta que acabas de instalar
const { Client } = require('pg');

// Acá va tu llave maestra de Neon
const urlDeNeon = "postgresql://neondb_owner:npg_y5hAfXegZPU8@ep-raspy-cell-am2p3d75-pooler.c-5.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";

const cliente = new Client({
  connectionString: urlDeNeon,
});

async function probarConexion() {
  try {
    console.log("⏳ Viajando a la base de datos en Neon...");
    await cliente.connect(); // Abrimos la puerta
    console.log("✅ ¡Conectado con éxito!");

    console.log("⏳ Pidiéndole el catálogo a SQL...");
    // Acá le disparamos el comando SQL puro que probaste hoy
    const respuesta = await cliente.query("SELECT * FROM Productos;");

    console.log("🎯 ¡Datos recibidos de Timo Deportes!");
    
    // Usamos console.table para que te lo dibuje hermoso en la terminal
    console.table(respuesta.rows);

  } catch (error) {
    console.error("❌ Falló la conexión:", error);
  } finally {
    // Como buenos ingenieros, siempre cerramos la conexión al terminar
    await cliente.end();
    console.log("🚪 Conexión cerrada.");
  }
}

// Ejecutamos la función
probarConexion();