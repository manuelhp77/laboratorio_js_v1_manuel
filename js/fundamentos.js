// Laboratorio 1 — EcoHuerta
// Escribe debajo los ejemplos de las prácticas 1.1 a 1.5.
// Guarda este archivo y recarga fundamentos.html para ver la salida en la Consola.


    //PREACTICA 1.1
    
console.log("EcoHuerta: JavaScript conectado correctamente.");
console.log("Manuel Gregorio Hernandez Piñeros");
console.log(8 + 5);
console.log("8" + 5);
console.log("tomates");
console.log(4 * 7);
console.log(2 * 8);
console.log(20 / 4);    //division
console.log(20 % 6);    //residuo
console.log(2 ** 3);    //potencia


console.warn("Este cultivo necesita revisión");
        //la diferencia es que el que yo escribo manual mente es una advertencia que yo mismo mando
        //y en la consola es un error que yo hago dentro de el codigo

console.log("Cultivo registrado");
 
    //PRACTICA 1.2

        //la distancia final da un total de 22 por que sumamos los dias iniciales con los que vamos a durar
        //los litros  que representan 3 semanas es una cantidad de 13.5 por que multiplicamos los litros de agua por las 3 semanas

const cultivoInicial = "Tomate";
let diasIniciales = 15;
const aguaSemanalInicial = 4.5;
const necesitaSolInicial = true;

console.log(cultivoInicial);
console.log(typeof cultivoInicial);
console.log(typeof diasIniciales);
console.log(typeof necesitaSolInicial);

diasIniciales = diasIniciales + 7;
console.log(diasIniciales);
console.log(aguaSemanalInicial * 3);

        //Conversion de datos

const cantidadTexto = "12";
const cantidadNumero = Number(cantidadTexto);

console.log(cantidadTexto + 3);
console.log(cantidadNumero + 3);
console.log(Number("doce"));
console.log(Number.isNaN(Number("doce")));
console.log(12 === "12");

const nombreDePrueba = "Rábano";  // Declara y asigna una cadena
let unidadesDePrueba = 8;        // Declara un número que puede cambiar
unidadesDePrueba = 12;           // Reasigna el valor anterior

console.log(nombreDePrueba);
console.log(unidadesDePrueba);
console.log(typeof unidadesDePrueba);