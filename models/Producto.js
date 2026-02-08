class Producto {
  constructor({ productoId, nombre, precio, exitencia }) {
    this.productoId = productoId;
    this.nombre = nombre;
    this.precio = precio;
    this.exitencia = exitencia;
  }
}

module.exports = Producto;
