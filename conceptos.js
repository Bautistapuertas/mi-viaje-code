// 1. CAMBIO DE MENTALIDAD:
// Declara una variable llamada 'nombre' usando CONST con tu nombre:
const nombre="Bautista Puertas"

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
*/const saludar=nombre=> "Hola" + nombre + ",listo para aprender react!"

// Tu versión moderna aquí (usa const y =>):
// ...


// 3. IMPRIMIR RESULTADOS
console.log("Nombre:", nombre);
console.log("Edad:", edad);
// Llama a tu función saludo aquí pasando tu variable 'nombre'
// console.log( ... );
console.log((saludar)(nombre));