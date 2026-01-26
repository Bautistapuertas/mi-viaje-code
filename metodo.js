// 1. Tienes una lista de tecnologías
const tecnologias = ["JavaScript", "React", "Git", "CSS"];

// 2. RETO: Usa .map() para crear un nuevo array llamado 'listaHTML'.
// Por cada tecnología, debe devolver un string que diga: "<li>Tecnología</li>"
// Ejemplo esperado: ["<li>JavaScript</li>", "<li>React</li>", ...]

// "Por cada tech, devuélveme un string que tenga <li>, la tech, y </li>"
const listaHTML = tecnologias.map(tech => `<li>${tech}</li>`);
    // Escribe tu código aquí (Usa Template Strings ` `)
    // return ...


// 3. Imprimimos el resultado
console.log(listaHTML);