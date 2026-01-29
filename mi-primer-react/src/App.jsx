// 1. Importa el componente nuevo
import Technology from './Technology'; 
import Header from './Header';
import Footer from './Footer';
import './App.css';
// 1. LA BASE DE DATOS (Array de Objetos)
  const listaTecnologias = [
    { id: 1, nombre: "Git & GitHub", estado: "✅ Dominado" },
    { id: 2, nombre: "JavaScript", estado: "⚡ Avanzado" },
    { id: 3, nombre: "React.js", estado: "👶 Aprendiendo" },
    { id: 4, nombre: "Inglés Técnico", estado: "📚 Reading B2" },
    { id: 5, nombre: "Vite", estado: "🚀 Nuevo" }, // ¡Agregamos una extra gratis!
  ];

function App() {
  return (
    <div className="App">
      <Header />

      <div className="card">
        <h3>Mis Tecnologías:</h3>
        
       <div className="card">
        <h3>Mis Tecnologías:</h3>

        {/* 2. LA FÁBRICA AUTOMÁTICA */}
        {listaTecnologias.map((tech) => (
          <Technology 
            key={tech.id}       // ⚠️ EL DNI (Muy importante)
            nombre={tech.nombre} 
            estado={tech.estado} 
          />
        ))}

      </div>
      </div>

      <Footer />
    </div>
  )
}

export default App;