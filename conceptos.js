// 1. CAMBIO DE MENTALIDAD:
// Declara una variable llamada 'nombre' usando CONST con tu nombre:


// Declara una variable llamada 'edad' usando LET con tu edad:
let edad=21

// Intenta cambiar la edad (simula que cumpliste años):
edad=22


// 2. FUNCIÓN FLECHA (ARROW FUNCTION):
// Transforma esta función antigua a una función flecha moderna:
/*
function saludar(nombre) {
    return "Hola " + nombre + ", listo para aprender React!";
}
*/const saludar=nombre=>`Hola ${nombre},listo pata aprender React!`

// Tu versión moderna aquí (usa const y =>):
// ...


// 3. IMPRIMIR RESULTADOS
console.log("Nombre:", nombre);
console.log("Edad:", edad);
// Llama a tu función saludo aquí pasando tu variable 'nombre'
// console.log( ... );
console.log(saludar(nombre));

const usuario={
    nombre:"Bautista",
    stack:["Git","javaScript","React"],
    disponible: true
};
// 2. Destructuring (Extracción)
// OJO: Usamos 'disponible' porque así se llama en el objeto de arriba.
const { nombre, stack, disponible } = usuario;

// Comprobación (opcional)
console.log(nombre); // Imprime: Bautista