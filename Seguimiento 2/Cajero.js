class CajeroAutomatico {
    constructor() {
        this.clientes = {};
        this.clienteActual = null;
    }

    agregarCliente(id, pin) {
        this.clientes[id] = { pin, saldo: 100000 };
    }

    autenticar(id, pin) {
        const cliente = this.clientes[id];
        if (cliente && cliente.pin === pin) {
            this.clienteActual = cliente;
            return true;
        }
        return false;
    }

    retirar(monto) {
        if (monto % 50000 !== 0) return;
        if (this.clienteActual.saldo >= monto) {
            this.clienteActual.saldo -= monto;
            return `Retiro exitoso: $${monto}.`;
        }
        return "Fondos insuficientes.";
    }

    depositar(monto) {
        this.clienteActual.saldo += monto;
        return `Depósito exitoso: $${monto}.`;
    }

    consultarSaldo() {
        return `Saldo: $${this.clienteActual.saldo}.`;
    }

    menuPrincipal() {
        while (true) {
            const opcion = prompt(`1. Retiro\n2. Depósito\n3. Consultar saldo\n4. Salir`);
            switch (opcion) {
                case '1':
                    const montoRetiro = parseInt(prompt("Ingrese monto a retirar:"));
                    console.log(this.retirar(montoRetiro));
                    break;
                case '2':
                    const montoDeposito = parseInt(prompt("Ingrese monto a depositar:"));
                    console.log(this.depositar(montoDeposito));
                    break;
                case '3':
                    console.log(this.consultarSaldo());
                    break;
                case '4':
                    return;
                default:
                    console.log("Opción no válida.");
            }
        }
    }
}

const cajero = new CajeroAutomatico();
cajero.agregarCliente("12345678", "1234");

for (let i = 0; i < 3; i++) {
    const id = prompt("Ingrese su ID:");
    const pin = prompt("Ingrese su PIN:");
    if (cajero.autenticar(id, pin)) {
        cajero.menuPrincipal();
        break;
    }
    console.log("PIN incorrecto.");
}
