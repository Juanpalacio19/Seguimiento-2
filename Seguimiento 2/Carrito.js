class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

class Carrito {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto, cantidad) {
        if (cantidad > producto.stock) {
            console.log(`No hay suficiente stock para ${producto.nombre}.`);
            return;
        }
        const existente = this.productos.find(p => p.producto.nombre === producto.nombre);
        if (existente) existente.cantidad += cantidad;
        else this.productos.push({ producto, cantidad });
        producto.stock -= cantidad;
        console.log(`Agregado ${cantidad} de ${producto.nombre}.`);
    }

    mostrarCarrito() {
        if (this.productos.length === 0) {
            console.log("El carrito está vacío.");
            return;
        }
        this.productos.forEach(({ producto, cantidad }) => {
            console.log(`${producto.nombre}: ${cantidad} x $${producto.precio} = $${(producto.precio * cantidad).toFixed(2)}`);
        });
    }

    calcularTotal() {
        return this.productos.reduce((total, { producto, cantidad }) => total + producto.precio * cantidad, 0);
    }
}

const carrito = new Carrito();
const productos = [
    new Producto("Manzana", 1.00, 100),
    new Producto("Banana", 0.50, 150),
    new Producto("Naranja", 0.75, 120),
];

function gestionarCarrito() {
    while (true) {
        const opcion = prompt(`1. Agregar producto\n2. Mostrar carrito\n3. Calcular total\n4. Salir`).trim();
        if (opcion === '1') {
            const nombre = prompt("Nombre del producto:");
            const cantidad = parseInt(prompt("Cantidad:"));
            const producto = productos.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());
            if (producto) carrito.agregarProducto(producto, cantidad);
            else console.log("Producto no encontrado.");
        } else if (opcion === '2') carrito.mostrarCarrito();
        else if (opcion === '3') console.log(`Total: $${carrito.calcularTotal().toFixed(2)}`);
        else if (opcion === '4') break;
        else console.log("Opción no válida.");
    }
}

gestionarCarrito();
