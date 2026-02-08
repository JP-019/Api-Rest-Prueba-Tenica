const ProductoService = require("../servicios/ProductoService");

class LeerProducto {
  static ejecutar() {
    try {
      const datos = ProductoService.leerDatos();
      return datos;
    } catch (error) {
      console.error("❌ Error al leer productos:", error.message);
      throw new Error("No se pudo leer el archivo de productos");
    }
  }

  static ejecutarPorId(id) {
    try {
      const producto = ProductoService.encontrarPorId(id);
      
      if (!producto) {
        throw new Error("Producto no encontrado");
      }

      return producto;
    } catch (error) {
      console.error("❌ Error al leer producto:", error.message);
      throw new Error(error.message);
    }
  }
}

module.exports = LeerProducto;
