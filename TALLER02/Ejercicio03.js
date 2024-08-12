const lavadoraGrande = 4000
    const lavadoraPequeña = 3000
    const descuento = 0.03 
let tipoLavadora = prompt("ingrese el tipo de lavadora 1 o 2") 
    
    let horasAquiler = prompt("ingrese horas de aquiler ")  ;

    if (tipoLavadora == 1) {
        horasAquiler * lavadoraGrande
    } else if (tipoLavadora == 2) {
        horasAquiler * lavadoraPequeña ;
    } else {
        console.log("Tipo de lavadora no válido. Usa 1 para lavadora grande o 2 para lavadora pequeña.");
    }
let cantidadLavadoras = prompt("ingrese cantidad de lavadoras a aquilar ")

    let costoTotal = horasAquiler * cantidadLavadoras 
    if (cantidadLavadoras > 3) {
        costoTotal -= costoTotal * descuento;
    }

    console.log("El costo total de alquiler es:" + costoTotal);

