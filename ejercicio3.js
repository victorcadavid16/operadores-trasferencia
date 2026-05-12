// ==========================================
// EJERCICIO 3: PRODUCCIÓN DE UNA FÁBRICA
// ==========================================

// Constante: piezas que produce la máquina por hora
const PRODUCCION_POR_HORA = 250;

// Constante: horas trabajadas
const HORAS_TRABAJADAS = 8;

// Constante: capacidad de cada caja
const CAPACIDAD_CAJA = 12;


// ------------------------------------------
// Calcular total de piezas fabricadas
// ------------------------------------------

// Multiplicamos la producción por las horas trabajadas
let totalPiezas = PRODUCCION_POR_HORA * HORAS_TRABAJADAS;


// ------------------------------------------
// Calcular cajas llenas
// ------------------------------------------

// Math.floor() sirve para obtener solo números enteros
let cajasLlenas = Math.floor(totalPiezas / CAPACIDAD_CAJA);


// ------------------------------------------
// Calcular piezas sobrantes
// ------------------------------------------

// El operador % obtiene el residuo de la división
let piezasSobrantes = totalPiezas % CAPACIDAD_CAJA;


// ------------------------------------------
// Mostrar resultados con alert
// ------------------------------------------

alert("TOTAL DE PIEZAS FABRICADAS: " + totalPiezas);

alert("CAJAS LLENAS: " + cajasLlenas);

alert("PIEZAS SOBRANTES: " + piezasSobrantes);