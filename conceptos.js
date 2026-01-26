// 1. Definimos el objeto con tus datos
const usuario = {
    nombre: "Bautista",
    stack: ["Git", "React", "JS"],
    disponible: true
};

// 2. Destructuring (Sacamos los datos fuera del objeto)
const { nombre, stack, disponible } = usuario;

// 3. Template Strings (La frase final con backticks)
const frase = `Hola, soy ${nombre} y domino ${stack[0]} y ${stack[1]}`;

// 4. Imprimimos el resultado
console.log(frase);