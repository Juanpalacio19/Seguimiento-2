let dias = prompt("Ingrese cantidad de días que deseas pagar: 15 días, 30 días o 90 días");

let costoMensualidad;

if (dias == 15) {
    costoMensualidad = 18000;
} else if (dias == 30) {
    costoMensualidad = 35000;
} else if (dias == 90) {
    costoMensualidad = 90000; 
} else {
    console.log("Opción no válida. Por favor ingrese 15, 30 o 90 días.");
}

if (costoMensualidad) {
    console.log("El costo de la mensualidad por " + dias + " días es: " + costoMensualidad + " pesos.");
}
