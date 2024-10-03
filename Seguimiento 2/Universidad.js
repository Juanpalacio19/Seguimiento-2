class Universidad {
    constructor() {
        this.usuariosAtendidos = 0;
        this.atenciones = {
            llamadaTelefonica: 0,
            asesoriaEstudiante: 0,
            asesoriaDirectivo: 0,
        };
    }

    registrarAtencion(cedula, tipoAtencion) {
        this.usuariosAtendidos++;

        switch (tipoAtencion) {
            case 'llamada':
                this.atenciones.llamadaTelefonica++;
                console.log(`Atención registrada: Llamada telefónica para cédula ${cedula}.`);
                break;
            case 'asesoria-estudiante':
                this.atenciones.asesoriaEstudiante++;
                console.log(`Atención registrada: Asesoría a estudiante para cédula ${cedula}.`);
                break;
            case 'asesoria-directivo':
                this.atenciones.asesoriaDirectivo++;
                console.log(`Atención registrada: Asesoría a directivo para cédula ${cedula}.`);
                break;
            case 'transferir':
                console.log(`Transferencia a llamada telefónica para cédula ${cedula}.`);
                this.atenciones.llamadaTelefonica++;
                break;
            default:
                console.log("Tipo de atención no válido.");
        }
    }

    mostrarEstadisticas() {
        console.log(`Total de usuarios atendidos: ${this.usuariosAtendidos}`);
        console.log(`Cantidad de usuarios por tipo de atención:`);
        console.log(`  - Llamadas telefónicas: ${this.atenciones.llamadaTelefonica}`);
        console.log(`  - Asesoría a estudiantes: ${this.atenciones.asesoriaEstudiante}`);
        console.log(`  - Asesoría a directivos: ${this.atenciones.asesoriaDirectivo}`);
    }
}


const universidad = new Universidad();

function registrarAtencion() {
    const cedula = prompt("Ingrese su número de cédula:");
    const tipoAtencion = prompt("Ingrese el tipo de atención (llamada, asesoria-estudiante, asesoria-directivo, transferir):").toLowerCase();

    universidad.registrarAtencion(cedula, tipoAtencion);
}

while (true) {
    registrarAtencion();
    if (!confirm("¿Desea registrar otra atención?")) break;
}

universidad.mostrarEstadisticas();
