const CrearOrden = require("./operaciones/crear");
const LeerOrden = require("./operaciones/leer");
const ActualizarOrden = require("./operaciones/actualizar");
const EliminarOrden = require("./operaciones/eliminar");

class OrdenController {
  static create(datosNuevos) {
    return CrearOrden.ejecutar(datosNuevos);
  }

  static read() {
    return LeerOrden.ejecutar();
  }

  static readById(id) {
    return LeerOrden.ejecutarPorId(id);
  }

  static update(id, datosActualizados) {
    return ActualizarOrden.ejecutar(id, datosActualizados);
  }

  static delete(id) {
    return EliminarOrden.ejecutar(id);
  }
}

module.exports = OrdenController;
