// 1. Importa el componente nuevo
import Technology from './Technology'; 
import Header from './Header';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="card">
        <h3>Mis Tecnologías:</h3>
        
        {/* 2. REUTILIZAMOS el componente pasándole "props" distintas */}
        <Technology nombre="Git & GitHub" estado="✅ Dominado" />
        <Technology nombre="JavaScript" estado="⚡ Avanzado" />
        <Technology nombre="React.js" estado="👶 Aprendiendo" />
        <Technology nombre="Inglés Técnico" estado="Reading B2" />
      </div>

      <Footer />
    </div>
  )
}

export default App;