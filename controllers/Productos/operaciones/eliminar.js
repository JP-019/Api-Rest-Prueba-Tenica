const ProductoService = require("../servicios/ProductoService");
const ProductoValidator = require("../validadores/ProductoValidator");

class EliminarProducto {
  static ejecutar(id) {
    try {
      // Validar ID
      const validacionId = ProductoValidator.validarIdRequerido(id);
      if (!validacionId.esValido) {
        throw new Error(validacionId.error);
      }

      // Obtener datos
      let datos = ProductoService.leerDatos();

      const datosFiltrados = datos.filter(elemento => elemento.productoId !== id);

      if (datosFiltrados.length === datos.length) {
        throw new Error("Producto no encontrado");
      }

      // Guardar datos
      ProductoService.guardarDatos(datosFiltrados);

      console.log("✅ Producto eliminado correctamente.");
    } catch (error) {
      console.error("❌ Error al eliminar producto:", error.message);
      throw new Error("No se pudo eliminar el producto");
    }
  }
}

module.exports = EliminarProducto;
