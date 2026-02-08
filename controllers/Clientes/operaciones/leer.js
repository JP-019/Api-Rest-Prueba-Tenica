const ClienteService = require("../servicios/ClienteService");

class LeerCliente {
  static ejecutar() {
    try {
      const datos = ClienteService.leerDatos();
      return datos;
    } catch (error) {
      console.error("❌ Error al leer clientes:", error.message);
      throw new Error("No se pudo leer el archivo de clientes");
    }
  }

  static ejecutarPorId(id) {
    try {
      const cliente = ClienteService.encontrarPorId(id);
      
      if (!cliente) {
        throw new Error("Cliente no encontrado");
      }

      return cliente;
    } catch (error) {
      console.error("❌ Error al leer cliente:", error.message);
      throw new Error(error.message);
    }
  }
}

module.exports = LeerCliente;
