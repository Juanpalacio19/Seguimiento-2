class Banco {
    constructor() {
        this.colaEspera = [];
        this.contadorTurnos = 0;
    }

    tomarTurno() {
        this.contadorTurnos++;
        const turno = this.contadorTurnos;
        this.colaEspera.push(turno);
        console.log(`Turno ${turno} tomado. Gracias por esperar.`);
    }

    llamarCliente() {
        if (this.colaEspera.length === 0) {
            console.log("No hay clientes en la cola de espera.");
            return;
        }
        const turnoLlamado = this.colaEspera.shift();
        console.log(`Llamando al cliente con el turno ${turnoLlamado}.`);
    }

    mostrarCola() {
        if (this.colaEspera.length === 0) {
            console.log("La cola de espera está vacía.");
            return;
        }
        console.log("Cola de espera: " + this.colaEspera.join(', '));
    }

    totalTurnos() {
        console.log(`Total de turnos tomados: ${this.contadorTurnos}`);
    }
}

const banco = new Banco();

function gestionarTurnos() {
    while (true) {
        const opcion = prompt(`Seleccione una opción:
        1. Tomar un turno
        2. Llamar a un cliente
        3. Mostrar cola de espera
        4. Ver total de turnos
        5. Salir`).trim();

        switch (opcion) {
            case '1':
                banco.tomarTurno();
                break;
            case '2':
                banco.llamarCliente();
                break;
            case '3':
                banco.mostrarCola();
                break;
            case '4':
                banco.totalTurnos();
                break;
            case '5':
                console.log("Saliendo del sistema.");
                return;
            default:
                console.log("Opción no válida. Intente de nuevo.");
        }
    }
}

gestionarTurnos();
