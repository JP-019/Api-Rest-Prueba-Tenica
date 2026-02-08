const DetalleOrden = require("../../../models/DetalleOrden");
const DetalleOrdenService = require("../servicios/DetalleOrdenService");
const DetalleOrdenValidator = require("../validadores/DetalleOrdenValidator");

class ActualizarDetalle {
  static ejecutar(detalleId, nuevaCantidad) {
    try {
      // Validar ID
      const validacionId = DetalleOrdenValidator.validarIdRequerido(detalleId);
      if (!validacionId.esValido) {
        throw new Error(validacionId.error);
      }

      // Validar cantidad
      const validacionCantidad = DetalleOrdenValidator.validarCantidad(nuevaCantidad);
      if (!validacionCantidad.esValido) {
        throw new Error(validacionCantidad.error);
      }

      // Obtener detalle
      const detalles = DetalleOrdenService.leerDetalles();
      const indiceDetalle = DetalleOrdenService.obtenerIndiceDetalle(detalleId);

      if (indiceDetalle === -1) {
        throw new Error("Detalle de orden no encontrado");
      }

      // Validar existencia del producto
      const producto = DetalleOrdenService.obtenerProducto(detalles[indiceDetalle].productoId);
      if (!producto || producto.exitencia < nuevaCantidad) {
        throw new Error("Cantidad insuficiente en existencia");
      }

      // Recalcular totales
      const subtotal = producto.precio * nuevaCantidad;
      const impuesto = subtotal * 0.16;
      const total = subtotal + impuesto;

      detalles[indiceDetalle] = new DetalleOrden({
        ...detalles[indiceDetalle],
        cantidad: nuevaCantidad,
        subtotal,
        impuesto,
        total
      });

      DetalleOrdenService.guardarDetalles(detalles);
      console.log("✅ Cantidad actualizada correctamente.");
      return detalles[indiceDetalle];
    } catch (error) {
      console.error("❌ Error al actualizar cantidad:", error.message);
      throw new Error(error.message);
    }
  }
}

module.exports = ActualizarDetalle;
