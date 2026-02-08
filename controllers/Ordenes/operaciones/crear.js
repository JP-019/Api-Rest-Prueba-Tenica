const Orden = require("../../../models/Orden");
const OrdenService = require("../servicios/OrdenService");
const OrdenValidator = require("../validadores/OrdenValidator");

class CrearOrden {
  static ejecutar(datosNuevos) {
    try {
      // Validar datos
      const validacion = OrdenValidator.validarDatos(datosNuevos);
      if (!validacion.esValido) {
        throw new Error(validacion.errores.join(", "));
      }

      // Crear instancia del modelo
      const orden = new Orden(datosNuevos);

      // Obtener datos existentes
      let datosExistentes = OrdenService.leerDatos();

      // Agregar nueva orden
      datosExistentes.push(orden);

      // Guardar datos
      OrdenService.guardarDatos(datosExistentes);

      console.log("✅ Orden agregada correctamente.");
      return orden;
    } catch (error) {
      console.error("❌ Error al guardar orden:", error.message);
      throw new Error("No se pudo guardar la orden");
    }
  }
}

module.exports = CrearOrden;
