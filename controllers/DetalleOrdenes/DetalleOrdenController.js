const AgregarProducto = require("./operaciones/agregar");
const LeerDetalles = require("./operaciones/leer");
const ActualizarDetalle = require("./operaciones/actualizar");
const EliminarDetalle = require("./operaciones/eliminar");

class DetalleOrdenController {
  static addProductoAOrden(ordenId, productoId, cantidad) {
    return AgregarProducto.ejecutar(ordenId, productoId, cantidad);
  }

  static getDetallesPorOrden(ordenId) {
    return LeerDetalles.ejecutarPorOrden(ordenId);
  }

  static updateCantidad(detalleId, nuevaCantidad) {
    return ActualizarDetalle.ejecutar(detalleId, nuevaCantidad);
  }

  static removeProductoDeOrden(detalleId) {
    return EliminarDetalle.ejecutar(detalleId);
  }

  static getAllDetalles() {
    return LeerDetalles.ejecutarTodos();
  }
}

module.exports = DetalleOrdenController;
