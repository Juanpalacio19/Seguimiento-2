let tamañoSandwich = prompt("Ingrese el tamaño del sandwich: pequeño/grande").toLowerCase();
let tocinetas = prompt("¿Desea tocineta? (sí/no)").toLowerCase();
let jalapeños = prompt("¿Desea jalapeños? (sí/no)").toLowerCase();
let pavo = prompt("¿Desea pavo? (sí/no)").toLowerCase();
let queso = prompt("¿Desea queso? (sí/no)").toLowerCase();

const costoTocineta = 3000;
const costoPavo = 3000;
const costoQueso = 2500;
const costoJalapeños = 1000; 
const costoGrande = 12000;
const costoPequeña = 6000;

let costoBase;

if (tamañoSandwich === "pequeño") {
    costoBase = costoPequeña;
} else if (tamañoSandwich === "grande") {
    costoBase = costoGrande;
} else {
    console.log("Tamaño de sandwich no válido. Ingrese 'pequeño' o 'grande'.");
    costoBase = 0;
}

let costoIngredientes = 0;

if (tocinetas === "sí") {
    costoIngredientes += costoTocineta;
}
if (jalapeños === "sí") {
    costoIngredientes += costoJalapeños;
}
if (pavo === "sí") {
    costoIngredientes += costoPavo;
}
if (queso === "sí") {
    costoIngredientes += costoQueso;
}

if (costoBase > 0) {  
    const costoTotal = costoBase + costoIngredientes;
    console.log(`El tamaño del sandwich es ${tamañoSandwich}. Así que el costo base más los ingredientes solicitados es ${costoTotal}.`)
}