const OrdenService = require("../servicios/OrdenService");
const OrdenValidator = require("../validadores/OrdenValidator");

class EliminarOrden {
  static ejecutar(id) {
    try {
      // Validar ID
      const validacionId = OrdenValidator.validarIdRequerido(id);
      if (!validacionId.esValido) {
        throw new Error(validacionId.error);
      }

      // Obtener datos
      let datos = OrdenService.leerDatos();

      const datosFiltrados = datos.filter(elemento => elemento.ordenId !== id);

      if (datosFiltrados.length === datos.length) {
        throw new Error("Orden no encontrada");
      }

      // Guardar datos
      OrdenService.guardarDatos(datosFiltrados);

      console.log("✅ Orden eliminada correctamente.");
    } catch (error) {
      console.error("❌ Error al eliminar orden:", error.message);
      throw new Error("No se pudo eliminar la orden");
    }
  }
}

module.exports = EliminarOrden;
