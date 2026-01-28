// 1. IMPORTAMOS LA PIEZA NUEVA
import Header from './Header'; 
import './App.css';
import Footer from './Footer.jsx';

function App() {
  return (
    <div className="App">
      {/* 2. USAMOS LA PIEZA COMO SI FUERA UNA ETIQUETA HTML */}
      <Header />
      

      <div className="card">
        <h3>Mis Tecnologías:</h3>
        <ul>
          <li>Git & GitHub</li>
          <li>JavaScript Moderno</li>
          <li>React.js (Cargando...)</li>
        </ul>
      </div>
      <Footer />
    </div>
   
  )
}

export default App;