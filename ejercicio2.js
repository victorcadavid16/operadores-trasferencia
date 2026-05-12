// ==========================================
// EJERCICIO 2: CONVERSOR DE TIEMPO
// ==========================================

// Constante: cantidad de segundos registrados
const SEGUNDOS = 7200;


// ------------------------------------------
// Conversión de segundos a minutos
// ------------------------------------------

// Un minuto tiene 60 segundos
let minutos = SEGUNDOS / 60;


// ------------------------------------------
// Conversión de segundos a horas
// ------------------------------------------

// Una hora tiene 3600 segundos
let horas = SEGUNDOS / 3600;


// ------------------------------------------
// Conversión de segundos a días
// ------------------------------------------

// Un día tiene 86400 segundos
let dias = SEGUNDOS / 86400;


// ------------------------------------------
// Mostrar resultados con alert
// ------------------------------------------

alert("SEGUNDOS REGISTRADOS: " + SEGUNDOS);

alert("MINUTOS: " + minutos);

alert("HORAS: " + horas);

alert("DÍAS: " + dias);