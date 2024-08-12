const modelosDefectuosos = "119,179,189,190,191,192,193,194,195,221,780";

let numeroModelo = prompt("Ingrese el número de modelo de su carro:");

if (modelosDefectuosos.includes(numeroModelo)) {
    console.log("El automóvil está defectuoso, llevar a garantía.");
} else {
    console.log("Su automóvil no está defectuoso.");
}