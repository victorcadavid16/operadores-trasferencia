// ==========================================
// EJERCICIO 1: CALCULADORA DE GASTOS DE VIAJE
// ==========================================

// Constantes: costos fijos del viaje
const TRANSPORTE = 120000;
const ALOJAMIENTO = 200000;
const ALIMENTACION = 150000;

// Constante: cantidad de personas
const PERSONAS = 4;

// Constante: dinero que entrega cada persona
const ENTREGA_PERSONA = 130000;


// ------------------------------------------
// Calcular el total de gastos del viaje
// ------------------------------------------

// Sumamos todos los costos
let totalGastos = TRANSPORTE + ALOJAMIENTO + ALIMENTACION;


// ------------------------------------------
// Calcular el aporte individual
// ------------------------------------------

// Dividimos el total entre las personas
let aporteIndividual = totalGastos / PERSONAS;


// ------------------------------------------
// Calcular el sobrante
// ------------------------------------------

// Restamos lo que debía pagar cada persona
// al dinero que entrega
let sobrante = ENTREGA_PERSONA - aporteIndividual;


// ------------------------------------------
// Mostrar resultados con alert
// ------------------------------------------

alert("TOTAL DE GASTOS: $" + totalGastos);

alert("APORTE POR PERSONA: $" + aporteIndividual);

alert("SOBRANTE POR PERSONA: $" + sobrante);