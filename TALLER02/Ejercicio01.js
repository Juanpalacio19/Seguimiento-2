const horabase = 30000;
    const horasextras = 33000;

    let pago = 0;
    Horatrabajadas = prompt("Pon tus horas trabajadas (solo numeros): ) ");

    if (Horatrabajadas <= 10) {
       pago = Horatrabajadas * horabase;
    } else {
            pago = Horatrabajadas * horabase;
        pago =10 * horabase;
        pago += (Horatrabajadas -10) * horasextras;
    }
    nombre = prompt("Poner nombre")

    alert(`Señor(a) ${nombre}, el número de horas es ${Horatrabajadas} y su salario equivale a ${pago}`);
