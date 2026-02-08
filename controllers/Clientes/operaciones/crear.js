const Cliente = require("../../../models/Cliente");
const ClienteService = require("../servicios/ClienteService");
const ClienteValidator = require("../validadores/ClienteValidator");

class CrearCliente {
  static ejecutar(datosNuevos) {
    try {
      // Validar datos
      const validacion = ClienteValidator.validarDatos(datosNuevos);
      if (!validacion.esValido) {
        throw new Error(validacion.errores.join(", "));
      }

      // Crear instancia del modelo
      const cliente = new Cliente(datosNuevos);

      // Obtener datos existentes
      let datosExistentes = ClienteService.leerDatos();

      // Agregar nuevo cliente
      datosExistentes.push(cliente);

      // Guardar datos
      ClienteService.guardarDatos(datosExistentes);

      console.log("✅ Cliente agregado correctamente.");
      return cliente;
    } catch (error) {
      console.error("❌ Error al guardar cliente:", error.message);
      throw new Error("No se pudo guardar el cliente");
    }
  }
}

module.exports = CrearCliente;
