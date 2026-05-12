// ==========================================
// EJERCICIO 4: ESTADÍSTICAS DE CALIFICACIONES
// ==========================================

// Constantes: notas obtenidas por el aprendiz
const NOTA1 = 4.5;
const NOTA2 = 3.8;
const NOTA3 = 2.9;
const NOTA4 = 4.0;


// ------------------------------------------
// Calcular la suma de las 4 notas
// ------------------------------------------

// Sumamos todas las notas
let suma = NOTA1 + NOTA2 + NOTA3 + NOTA4;


// ------------------------------------------
// Calcular el promedio
// ------------------------------------------

// Dividimos la suma entre la cantidad de notas
let promedio = suma / 4;


// ------------------------------------------
// Calcular la operación solicitada
// ------------------------------------------

// Fórmula:
// (nota1 + nota2) * (nota3 + nota4) / 2

let resultado = (NOTA1 + NOTA2) * (NOTA3 + NOTA4) / 2;


// ------------------------------------------
// Mostrar resultados con alert
// ------------------------------------------

alert("SUMA DE LAS NOTAS: " + suma);

alert("PROMEDIO: " + promedio);

alert("RESULTADO DE LA OPERACIÓN: " + resultado);