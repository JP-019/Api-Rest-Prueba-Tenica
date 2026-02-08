const Producto = require("../../../models/Producto");
const ProductoService = require("../servicios/ProductoService");
const ProductoValidator = require("../validadores/ProductoValidator");

class CrearProducto {
  static ejecutar(datosNuevos) {
    try {
      // Validar datos
      const validacion = ProductoValidator.validarDatos(datosNuevos);
      if (!validacion.esValido) {
        throw new Error(validacion.errores.join(", "));
      }

      // Crear instancia del modelo
      const producto = new Producto(datosNuevos);

      // Obtener datos existentes
      let datosExistentes = ProductoService.leerDatos();

      // Agregar nuevo producto
      datosExistentes.push(producto);

      // Guardar datos
      ProductoService.guardarDatos(datosExistentes);

      console.log("✅ Producto agregado correctamente.");
      return producto;
    } catch (error) {
      console.error("❌ Error al guardar producto:", error.message);
      throw new Error("No se pudo guardar el producto");
    }
  }
}

module.exports = CrearProducto;
