// src/Technology.jsx

// 1. Recibimos un paquete de datos llamado "props"
function Technology(props) {
  return (
    <div className="tech-item">
        {/* 2. Usamos los datos dentro del HTML */}
        <h4>{props.nombre}</h4>
        <p>Estado: {props.estado}</p>
    </div>
  );
}

export default Technology;