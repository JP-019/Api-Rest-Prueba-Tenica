const CrearCliente = require("./operaciones/crear");
const LeerCliente = require("./operaciones/leer");
const ActualizarCliente = require("./operaciones/actualizar");
const EliminarCliente = require("./operaciones/eliminar");

class ClienteController {
  static create(datosNuevos) {
    return CrearCliente.ejecutar(datosNuevos);
  }

  static read() {
    return LeerCliente.ejecutar();
  }

  static readById(id) {
    return LeerCliente.ejecutarPorId(id);
  }

  static update(id, datosActualizados) {
    return ActualizarCliente.ejecutar(id, datosActualizados);
  }

  static delete(id) {
    return EliminarCliente.ejecutar(id);
  }
}

module.exports = ClienteController;
