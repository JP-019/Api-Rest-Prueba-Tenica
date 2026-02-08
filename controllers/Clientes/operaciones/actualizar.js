const Cliente = require("../../../models/Cliente");
const ClienteService = require("../servicios/ClienteService");
const ClienteValidator = require("../validadores/ClienteValidator");

class ActualizarCliente {
  static ejecutar(id, datosActualizados) {
    try {
      // Validar ID
      const validacionId = ClienteValidator.validarIdRequerido(id);
      if (!validacionId.esValido) {
        throw new Error(validacionId.error);
      }

      // Validar datos
      const validacion = ClienteValidator.validarDatos(datosActualizados);
      if (!validacion.esValido) {
        throw new Error(validacion.errores.join(", "));
      }

      // Obtener datos
      let datos = ClienteService.leerDatos();
      const indiceRegistro = ClienteService.obtenerIndice(id);

      if (indiceRegistro === -1) {
        throw new Error("Cliente no encontrado");
      }

      // Crear cliente actualizado
      const clienteActualizado = new Cliente({
        ...datos[indiceRegistro],
        ...datosActualizados
      });

      datos[indiceRegistro] = clienteActualizado;

      // Guardar datos
      ClienteService.guardarDatos(datos);

      console.log("✅ Cliente actualizado correctamente.");
      return clienteActualizado;
    } catch (error) {
      console.error("❌ Error al actualizar cliente:", error.message);
      throw new Error("No se pudo actualizar el cliente");
    }
  }
}

module.exports = ActualizarCliente;
