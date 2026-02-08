const DetalleOrdenService = require("../servicios/DetalleOrdenService");
const DetalleOrdenValidator = require("../validadores/DetalleOrdenValidator");

class EliminarDetalle {
  static ejecutar(detalleId) {
    try {
      // Validar ID
      const validacionId = DetalleOrdenValidator.validarIdRequerido(detalleId);
      if (!validacionId.esValido) {
        throw new Error(validacionId.error);
      }

      // Obtener detalles
      const detalles = DetalleOrdenService.leerDetalles();
      const detallesFiltrados = detalles.filter(d => d.detalleOrdenId !== detalleId);

      if (detallesFiltrados.length === detalles.length) {
        throw new Error("Detalle de orden no encontrado");
      }

      DetalleOrdenService.guardarDetalles(detallesFiltrados);
      console.log("✅ Producto removido de la orden correctamente.");
    } catch (error) {
      console.error("❌ Error al remover producto de orden:", error.message);
      throw new Error(error.message);
    }
  }
}

module.exports = EliminarDetalle;
