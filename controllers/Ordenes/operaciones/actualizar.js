const Orden = require("../../../models/Orden");
const OrdenService = require("../servicios/OrdenService");
const OrdenValidator = require("../validadores/OrdenValidator");

class ActualizarOrden {
  static ejecutar(id, datosActualizados) {
    try {
      // Validar ID
      const validacionId = OrdenValidator.validarIdRequerido(id);
      if (!validacionId.esValido) {
        throw new Error(validacionId.error);
      }

      // Validar datos
      const validacion = OrdenValidator.validarDatos(datosActualizados);
      if (!validacion.esValido) {
        throw new Error(validacion.errores.join(", "));
      }

      // Obtener datos
      let datos = OrdenService.leerDatos();
      const indiceRegistro = OrdenService.obtenerIndice(id);

      if (indiceRegistro === -1) {
        throw new Error("Orden no encontrada");
      }

      // Crear orden actualizada
      const ordenActualizada = new Orden({
        ...datos[indiceRegistro],
        ...datosActualizados
      });

      datos[indiceRegistro] = ordenActualizada;

      // Guardar datos
      OrdenService.guardarDatos(datos);

      console.log("✅ Orden actualizada correctamente.");
      return ordenActualizada;
    } catch (error) {
      console.error("❌ Error al actualizar orden:", error.message);
      throw new Error("No se pudo actualizar la orden");
    }
  }
}

module.exports = ActualizarOrden;
