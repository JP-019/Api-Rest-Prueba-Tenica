const ClienteService = require("../servicios/ClienteService");
const ClienteValidator = require("../validadores/ClienteValidator");

class EliminarCliente {
  static ejecutar(id) {
    try {
      // Validar ID
      const validacionId = ClienteValidator.validarIdRequerido(id);
      if (!validacionId.esValido) {
        throw new Error(validacionId.error);
      }

      // Obtener datos
      let datos = ClienteService.leerDatos();

      const datosFiltrados = datos.filter(elemento => elemento.clienteId !== id);

      if (datosFiltrados.length === datos.length) {
        throw new Error("Cliente no encontrado");
      }

      // Guardar datos
      ClienteService.guardarDatos(datosFiltrados);

      console.log("✅ Cliente eliminado correctamente.");
    } catch (error) {
      console.error("❌ Error al eliminar cliente:", error.message);
      throw new Error("No se pudo eliminar el cliente");
    }
  }
}

module.exports = EliminarCliente;
