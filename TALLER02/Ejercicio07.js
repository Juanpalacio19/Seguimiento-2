let genero = prompt("Ingrese género");
let edad = prompt("Ingrese edad");

const ayudaFemeninoMayor50 = 120000;
const ayudaFemenino30a50 = 100000;
const ayudaMasculino = 40000;
let ayudaMensual = 0 

if (genero === 'femenino') {
    if (edad > 50) {
        ayudaMensual = ayudaFemeninoMayor50;
    } else if (edad >= 30 && edad <= 50) {
        ayudaMensual = ayudaFemenino30a50;
    } else {
        ayudaMensual = 0; 
    }
} else if (genero === 'masculino') {
    ayudaMensual = ayudaMasculino;
} else {
    console.log("Género no válido. Usa 'femenino' o 'masculino'.");
}
if (ayudaMensual > 0) {
    console.log(`Tu ayuda mensual es: ${ayudaMensual}`);
}