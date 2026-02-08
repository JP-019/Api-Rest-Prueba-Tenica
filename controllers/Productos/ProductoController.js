const CrearProducto = require("./operaciones/crear");
const LeerProducto = require("./operaciones/leer");
const ActualizarProducto = require("./operaciones/actualizar");
const EliminarProducto = require("./operaciones/eliminar");

class ProductoController {
  static create(datosNuevos) {
    return CrearProducto.ejecutar(datosNuevos);
  }

  static read() {
    return LeerProducto.ejecutar();
  }

  static readById(id) {
    return LeerProducto.ejecutarPorId(id);
  }

  static update(id, datosActualizados) {
    return ActualizarProducto.ejecutar(id, datosActualizados);
  }

  static delete(id) {
    return EliminarProducto.ejecutar(id);
  }
}

module.exports = ProductoController;
