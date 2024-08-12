function obtenerCarta() {
    return Math.floor(Math.random() * 10) + 1;
}

function calcularTotal(cartas) {
    let total = cartas.reduce((total, carta) => total + carta, 0);
    let cantidadAses = cartas.filter(carta => carta === 1).length;

    while (total <= 11 && cantidadAses > 0) {
        total += 10;
        cantidadAses--;
    }

    return total;
}

function mostrarCartas(nombre, cartas, ocultarPrimeraCarta=false) {
    if (ocultarPrimeraCarta) {
        alert(nombre + " tiene cartas: " + cartas.slice(1).join(", ") + " y su total es: " + calcularTotal(cartas.slice(1)));
    } else {
        alert(nombre + " tiene cartas: " + cartas.join(", ") + " y su total es: " + calcularTotal(cartas));
    }
}

function gameOf21() {
    var cartasUsuario = [obtenerCarta(), obtenerCarta()];
    var cartasComputadora = [obtenerCarta(), obtenerCarta()];

    mostrarCartas("Usuario", cartasUsuario);

    var continuar = true;
    while (continuar) {
        var opcion = parseInt(prompt("¿Desea recibir otra carta?\n1. Sí\n2. No"));
        if (opcion === 1) {
            cartasUsuario.push(obtenerCarta());
            mostrarCartas("Usuario", cartasUsuario);
            if (calcularTotal(cartasUsuario) > 21) {
                alert("¡Has superado 21! Fin del juego.");
                continuar = false;
            }
        } else if (opcion === 2) {
            continuar = false;
        } else {
            alert("Opción no válida. Por favor, ingrese 1 para Sí o 2 para No.");
        }
    }

    mostrarCartas("Computadora", cartasComputadora, true);

    while (calcularTotal(cartasComputadora) < 17) {
        cartasComputadora.push(obtenerCarta());
    }

    mostrarCartas("Computadora", cartasComputadora);

    var totalUsuario = calcularTotal(cartasUsuario);
    var totalComputadora = calcularTotal(cartasComputadora);

    if (totalUsuario > 21) {
        alert("Has superado 21. La computadora gana.");
    } else if (totalComputadora > 21) {
        alert("La computadora ha superado 21. ¡Felicidades! Has ganado con un total de " + totalUsuario);
    } else if (totalUsuario > totalComputadora) {
        alert("¡Felicidades! Has ganado con un total de " + totalUsuario);
    } else if (totalComputadora > totalUsuario) {
        alert("La computadora gana con un total de " + totalComputadora);
    } else {
        alert("Empate con un total de " + totalUsuario);
    }
}

gameOf21();