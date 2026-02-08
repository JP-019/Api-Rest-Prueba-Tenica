const OrdenService = require("../servicios/OrdenService");

class LeerOrden {
  static ejecutar() {
    try {
      const datos = OrdenService.leerDatos();
      return datos;
    } catch (error) {
      console.error("❌ Error al leer órdenes:", error.message);
      throw new Error("No se pudo leer el archivo de órdenes");
    }
  }

  static ejecutarPorId(id) {
    try {
      const orden = OrdenService.encontrarPorId(id);
      
      if (!orden) {
        throw new Error("Orden no encontrada");
      }

      return orden;
    } catch (error) {
      console.error("❌ Error al leer orden:", error.message);
      throw new Error(error.message);
    }
  }
}

module.exports = LeerOrden;
