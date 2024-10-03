class Habitacion {
    constructor(tipo, esFumador, capacidad) {
        this.tipo = tipo; 
        this.esFumador = esFumador; 
        this.capacidad = capacidad; 
        this.reservas = [];
    }

    reservar(nombre, pais, numPersonas, periodo, tieneMascota) {
        if (numPersonas > this.capacidad) {
            return `No se puede reservar. La capacidad máxima es ${this.capacidad} personas.`;
        }
        if (this.tipo === 'familiar' && tieneMascota) {
            this.reservas.push({ nombre, pais, numPersonas, periodo, tieneMascota });
            return "Reserva exitosa para habitación familiar con mascota.";
        } else if (this.tipo === 'familiar' && !tieneMascota) {
            this.reservas.push({ nombre, pais, numPersonas, periodo, tieneMascota });
            return "Reserva exitosa para habitación familiar.";
        } else if (this.tipo !== 'familiar' && !tieneMascota) {
            this.reservas.push({ nombre, pais, numPersonas, periodo, tieneMascota });
            return `Reserva exitosa para habitación ${this.tipo}.`;
        } else {
            return "Las mascotas solo están permitidas en habitaciones familiares.";
        }
    }

    contarReservas() {
        return this.reservas.length;
    }
}

class Hotel {
    constructor() {
        this.habitaciones = [
            new Habitacion('individual', false, 2),
            new Habitacion('doble', false, 4),
            new Habitacion('familiar', true, 6),
            new Habitacion('familiar', false, 6),
        ];
    }

    reservarHabitacion(tipo, nombre, pais, numPersonas, periodo, tieneMascota) {
        const habitacion = this.habitaciones.find(h => h.tipo === tipo && h.contarReservas() < 1);
        if (habitacion) {
            return habitacion.reservar(nombre, pais, numPersonas, periodo, tieneMascota);
        }
        return "No hay habitaciones disponibles de este tipo.";
    }

    totalHabitacionesReservadas() {
        return this.habitaciones.reduce((total, habitacion) => total + habitacion.contarReservas(), 0);
    }
}

const hotel = new Hotel();

function realizarReserva() {
    const tipo = prompt("Ingrese el tipo de habitación (individual, doble, familiar):").toLowerCase();
    const nombre = prompt("Ingrese su nombre:");
    const pais = prompt("Ingrese su país de origen:");
    const numPersonas = parseInt(prompt("Ingrese el número de personas:"));
    const periodo = prompt("Ingrese el periodo de estadía:");
    const tieneMascota = confirm("¿Trajo mascotas?");

    const resultado = hotel.reservarHabitacion(tipo, nombre, pais, numPersonas, periodo, tieneMascota);
    console.log(resultado);
    console.log(`Total de habitaciones reservadas: ${hotel.totalHabitacionesReservadas()}`);
}

while (true) {
    realizarReserva();
    if (!confirm("¿Desea realizar otra reserva?")) break;
}
