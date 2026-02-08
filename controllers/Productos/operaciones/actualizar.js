const Producto = require("../../../models/Producto");
const ProductoService = require("../servicios/ProductoService");
const ProductoValidator = require("../validadores/ProductoValidator");

class ActualizarProducto {
  static ejecutar(id, datosActualizados) {
    try {
      // Validar ID
      const validacionId = ProductoValidator.validarIdRequerido(id);
      if (!validacionId.esValido) {
        throw new Error(validacionId.error);
      }

      // Validar datos
      const validacion = ProductoValidator.validarDatos(datosActualizados);
      if (!validacion.esValido) {
        throw new Error(validacion.errores.join(", "));
      }

      // Obtener datos
      let datos = ProductoService.leerDatos();
      const indiceRegistro = ProductoService.obtenerIndice(id);

      if (indiceRegistro === -1) {
        throw new Error("Producto no encontrado");
      }

      // Crear producto actualizado
      const productoActualizado = new Producto({
        ...datos[indiceRegistro],
        ...datosActualizados
      });

      datos[indiceRegistro] = productoActualizado;

      // Guardar datos
      ProductoService.guardarDatos(datos);

      console.log("✅ Producto actualizado correctamente.");
      return productoActualizado;
    } catch (error) {
      console.error("❌ Error al actualizar producto:", error.message);
      throw new Error("No se pudo actualizar el producto");
    }
  }
}

module.exports = ActualizarProducto;
