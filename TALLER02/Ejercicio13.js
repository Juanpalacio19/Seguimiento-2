const operador = prompt("Ingrese el operador que pertenece: tigo, claro o movistar").toLowerCase();
let minutosInternacionalesStr = prompt("Ingrese la cantidad de minutos consumidos");

const minutosInternacionales = parseFloat(minutosInternacionalesStr);

let cargoFijo, valorMinutoInternacional, valorPaqueteDatos;

if (operador === "tigo") {
    cargoFijo = 45000;
    valorMinutoInternacional = 200;
    valorPaqueteDatos = 12000;
} else if (operador === "claro") {
    cargoFijo = 30000;
    valorMinutoInternacional = 100;
    valorPaqueteDatos = 18000;
} else if (operador === "movistar") {
    cargoFijo = 40000;
    valorMinutoInternacional = 250;
    valorPaqueteDatos = 18000;
} else {
    console.log("Datos erróneos. Ingrese de nuevo.");
}

if ((minutosInternacionales) || minutosInternacionales < 0) {
    console.log("Por favor, ingrese una cantidad válida de minutos.");
}

const costoMinutosInternacionales = valorMinutoInternacional * minutosInternacionales;
const costoTotal = cargoFijo + costoMinutosInternacionales;

console.log(`Operador: ${operador}, Costo fijo: ${cargoFijo}, Costo por minutos internacionales: ${costoMinutosInternacionales}, Costo total: ${costoTotal}`);