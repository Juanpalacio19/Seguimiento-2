class Cita {
    constructor(nombre, fecha, hora, medico) {
        this.nombre = nombre;
        this.fecha = new Date(`${fecha}T${hora}`);
        this.medico = medico;
    }
}

class GestionCitas {
    constructor() {
        this.citas = [];
    }

    programarCita(nombre, fecha, hora, medico) {
        this.citas.push(new Cita(nombre, fecha, hora, medico));
        console.log(`Cita programada: ${nombre} el ${fecha} a las ${hora} con ${medico}.`);
    }

    verCitas() {
        if (this.citas.length === 0) {
            console.log("No hay citas programadas.");
            return;
        }
        this.citas.sort((a, b) => a.fecha - b.fecha);
        this.citas.forEach(cita => {
            console.log(`${cita.nombre} - ${cita.fecha.toLocaleString()} - Médico: ${cita.medico}`);
        });
    }

    cancelarCita(nombre, fecha, hora) {
        const index = this.citas.findIndex(cita => 
            cita.nombre === nombre && 
            cita.fecha.toLocaleDateString() === new Date(fecha).toLocaleDateString() && 
            cita.fecha.toLocaleTimeString() === `0:00:00 AM`
        );
        if (index !== -1) {
            this.citas.splice(index, 1);
            console.log(`Cita cancelada: ${nombre} el ${fecha} a las ${hora}.`);
        } else {
            console.log("Cita no encontrada.");
        }
    }
}

function gestionarCitas() {
    const gestionCitas = new GestionCitas();
    while (true) {
        const opcion = prompt(`Seleccione una opción:
        1. Programar cita
        2. Ver citas
        3. Cancelar cita
        4. Salir`).trim();

        if (opcion === '1') {
            const nombre = prompt("Nombre del paciente:");
            const fecha = prompt("Fecha (YYYY-MM-DD):");
            const hora = prompt("Hora (HH:MM):");
            const medico = prompt("Médico:");
            gestionCitas.programarCita(nombre, fecha, hora, medico);
        } else if (opcion === '2') {
            gestionCitas.verCitas();
        } else if (opcion === '3') {
            const nombre = prompt("Nombre del paciente:");
            const fecha = prompt("Fecha (YYYY-MM-DD):");
            const hora = prompt("Hora (HH:MM):");
            gestionCitas.cancelarCita(nombre, fecha, hora);
        } else if (opcion === '4') {
            break;
        } else {
            console.log("Opción no válida.");
        }
    }
}

gestionarCitas();
